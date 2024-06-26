import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            regionId: number | null;
            favouritePokemon:string | null;
            pokeCoins:number
        };
        backend_tokens: {
            access_token: string;
            refresh_token: string;
            expiresAt: number;
        }
    }
}
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: number;
            name: string;
            email: string;
            regionId: number | null;
            favouritePokemon:string | null;
            pokeCoins:number;
        };
        backend_tokens: {
            access_token: string;
            refresh_token: string;
            expiresAt: number;
        }
    }
}