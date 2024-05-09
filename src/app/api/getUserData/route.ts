import { getUserData } from "@/lib/types"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data:getUserData = await req.json()
    const request:Response = await fetch(`${process.env.API_URL}/user/${data.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token
        },
        cache: 'no-cache'
    })
    const response = await request.json();
    return NextResponse.json(response)
}