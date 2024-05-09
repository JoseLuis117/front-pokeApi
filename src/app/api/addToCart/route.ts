import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { pokemons, userId, token } = await req.json();
    console.log(pokemons, userId, token)
    const request = await fetch(process.env.API_URL + '/cart/add_new_pokemon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ pokemonData: pokemons, userId })
    })
    const res = await request.json()
    return NextResponse.json(res)
}