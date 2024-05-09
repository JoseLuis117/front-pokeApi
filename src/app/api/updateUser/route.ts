import { UpdateUserData } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data:UpdateUserData = await req.json();
    const {token, ...rest} = data;
    const request = await fetch(`${process.env.API_URL}/user/update`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(rest)
    });
    const response = await request.json();
    return NextResponse.json(response);
}