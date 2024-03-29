import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
async function refreshToken(token: JWT): Promise<JWT> {
    console.log("Token viejo")
    console.log(token)
    const res = await fetch(`http://localhost:8000/auth/refresh-token`, {
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
                const request = await fetch("http://localhost:8000/auth/login", {
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
                console.log("request")
                console.log(request)
                
                if(request.status === 401) {
                    return null
                }
                console.log("Res")
                const res = await request.json();
                console.log(res)
                return res;
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: any }) {
            if (user) return { ...token, ...user };
            console.log(token)
            console.log(new Date().getTime() < token.backend_tokens.expiresAt)
            if (new Date().getTime() < token.backend_tokens.expiresAt)
                return token;

            return await refreshToken(token);
        },
        async session({ session, token }: { session: any; token: JWT }) {
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
const handler = NextAuth(authOptions);
export { handler as POST, handler as GET};