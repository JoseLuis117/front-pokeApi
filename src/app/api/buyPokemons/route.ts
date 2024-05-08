import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { ids, token, pokeCoins } = await req.json();
    console.log(ids)
    const request = await fetch(process.env.API_URL + '/cart/buy-pokemons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ ids, pokeCoins })
    })
    console.log("Request desde route")
    console.log(request)
    const res = await request.json();
    console.log("Response")
    console.log(res);
    return NextResponse.json(res);
}