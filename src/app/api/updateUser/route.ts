import { UpdateUserData } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data:UpdateUserData = await req.json();
    console.log(data)
    const {token, ...rest} = data;
    const request = await fetch(`http://localhost:8000/user/update`, {
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