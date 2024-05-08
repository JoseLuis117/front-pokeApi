import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {token} = await req.json();
    const request = await fetch(process.env.API_URL+'/cart/get-cart-data',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
    })
    console.log("Request desde route");
    console.log(request)
    console.log("Response desde route");
    const res = await request.json()
    console.log(res)
    return NextResponse.json(res);
}