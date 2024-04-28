import { NextResponse } from "next/server";

export async function POST(req:Request){
    const data = await req.json();
    console.log(data)
    const {quantity, token} = data;
    console.log(quantity)
    console.log("TOKEN")
    console.log(token)
    const request = await fetch(process.env.API_URL+'payment/intent',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body:JSON.stringify({quantity})
    })
    console.log("Request");
    console.log(request)
    const res = await request.json();
    console.log("res")
    console.log(res)
    return NextResponse.json(res)
}