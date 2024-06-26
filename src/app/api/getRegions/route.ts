import { NextResponse } from "next/server"

export async function POST(req:Request){
    const data = await req.json()
    const request = await fetch(`${process.env.API_URL}/pokemones/regiones`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+data.token
        }
    })
    const response = await request.json()
    return NextResponse.json(response)
}