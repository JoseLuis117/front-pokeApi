import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {id, token} = await req.json();
    console.log("Desde route")
    console.log(id,token)
    const request = await fetch(process.env.API_URL+'/cart/delete-pokemon',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify({id})
    })
    console.log("Request desde route")
    console.log(request);
    const res = await request.json();
    console.log("REsponse")
    console.log(res)
    return NextResponse.json(res);
}