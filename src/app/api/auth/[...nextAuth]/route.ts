import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider(
            {
                name: "credentials",
                credentials: {
                    name: { label: "Username", type: "text" },
                    password: { label: "Password", type: "password" },
                    email: { label: "Email", type: "email" }
                },
                async authorize(credentials, req) {
                    if(!credentials?.name || !credentials?.password || !credentials?.email) return null
                    const { name, password, email } = credentials
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name,
                            password,
                            email
                        })
                    })
                    if(res.status === 401 || res.status === 400) return null
                    const user = await res.json()
                }
            }
        )
    ]
}
const handler = NextAuth(authOptions)
export { handler as get, handler as post}