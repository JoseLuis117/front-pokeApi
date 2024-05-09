import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.API_URL}/auth/refresh-token`, {
        method: "POST",
        headers: {
            authorization: `Refresh ${token.backend_tokens.refresh_token}`,
        },
    });
    const resJSON = await res.json();

    return {
        ...token,
        backend_tokens: resJSON,
    };
}
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" },
            },
            authorize: async (credentials, req) => {
                if((!credentials?.name || !credentials?.email) && !credentials?.password) return null
                const {name, email, password} = credentials;
                const request = await fetch(`${process.env.API_URL}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    }),
                });
                
                if(request.status === 401) {
                    return null
                }
                const res = await request.json();
                return res;
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }: { token: JWT; user: any, trigger?:"signIn" | "signUp" | "update" | undefined, session?:any }) {
            if(trigger === "update"){
                console.log("Update")
                const req = await fetch(process.env.API_URL+'/user/get-pokecoins',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Bearer '+token.backend_tokens.access_token
                    }
                })
                const res = await req.json();
                const {pokeCoins} = res;
                console.log("Poke Coins")
                console.log(pokeCoins)
                token.user.pokeCoins = pokeCoins;
            }
            if (user) return { ...token, ...user };
            if (new Date().getTime() < token.backend_tokens.expiresAt)
                return token;
            
            return await refreshToken(token);
        },
        async session({ session, token, trigger }: { session: any; token: JWT, trigger?:"signIn" | "signUp" | "update" | undefined }) {
            session.user = token.user;
            session.backend_tokens = token.backend_tokens;
            session.expiresAt = token.expiresAt;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
}
