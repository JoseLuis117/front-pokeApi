import { NextResponse } from "next/server"

export async function POST(req:Request){
    const data = await req.json()
    console.log(data)
    const request = await fetch('http://localhost:8000/pokemones/regiones',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+data.token
        }
    })
    const response = await request.json()
    return NextResponse.json(response)
}