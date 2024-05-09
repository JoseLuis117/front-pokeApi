import { NextResponse } from "next/server";

export async function POST(req:Request){
    const data = await req.json();
    const {quantity, token} = data;
    const request = await fetch(`${process.env.API_URL}/`+'payment/intent',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body:JSON.stringify({quantity})
    })
    const res = await request.json();
    return NextResponse.json(res)
}