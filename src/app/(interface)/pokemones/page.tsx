import { Suspense } from "react";
import Loading from "../inicio/[index]/loading";
import { getServerSession } from "next-auth";
import MyPokemons from "@/components/myPokemons/MyPokemons";
import { PokemonData } from "@/lib/types";
import { authOptions } from "@/utils/authOptions";

const GetPokemons = async () => {
    const session = await getServerSession(authOptions);
    const req = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getPokemons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token:session?.backend_tokens.access_token })
    })
    console.log("Request en front");
    console.log(req)
    const data = await req.json();
    return (
        <MyPokemons data={data}/>
    )
}
export default async function Pokemons() {
    return (
        <Suspense fallback={<Loading />}>
            <GetPokemons/>
        </Suspense>
    )
}