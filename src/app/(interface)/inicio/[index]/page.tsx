import CardContainer from "@/components/cardContainer/CardContainer";
import { PokemonsDataType } from "@/lib/types";
import Pagination from "@/components/Pagination";
import { Suspense } from "react";
import Loading from "./loading";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
async function getPokemonData(limit:number){
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${limit-20}&limit=${20}`)

    const res = await req.json();
    return res.results;
}
async function GetBatchIndividualData({names}:{names: PokemonsDataType}) {
    const session = await getServerSession(authOptions);
    const id = session?.user.id;
    const requests = names.map(name =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.name}`).then(res => res.json())
    );
    const data =  await Promise.all(requests);
    return(
        <CardContainer data={data} id={id??""} token={session?.backend_tokens.access_token??""}/>
    )
}
export default async function Index({params}:{params:{index:number}}) {
    const twenyPokemons:PokemonsDataType = await getPokemonData(params.index*20);
    
    return (
        <>
            <Suspense fallback={<Loading />}>
                <GetBatchIndividualData names={twenyPokemons}/>
                <Pagination page={params.index}/>
            </Suspense>
        </>
    );
}