import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {userId, token} = await req.json();
    const request = await fetch(process.env.API_URL+'/user/create-social-networks',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify({userId})
    })
    const res = await req.json();
    return NextResponse.json({res});
}