import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {token} = await req.json()
    const request = await fetch(process.env.API_URL+'/user/get-pokemons',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        }
    })
    const res = await request.json();
    return NextResponse.json(res);
}