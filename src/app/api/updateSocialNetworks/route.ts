import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { socialData, token, userId } = await req.json();
    const request = await fetch(process.env.API_URL+'/user/update-social-networks',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify({socialData, userId})
    })
    const res = await request.json();
    return NextResponse.json(res);
}