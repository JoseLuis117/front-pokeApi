import CardContainer from "@/components/cardContainer/CardContainer";
import { getServerSession } from "next-auth";
import { PokemonsDataType } from "@/lib/types";
import Pagination from "@/components/Pagination";
import { Suspense } from "react";
async function getPokemonData(limit:number){
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${limit-20}&limit=${20}`)
    const res = await req.json();
    return res.results;
}
async function getBatchIndividualData(names: PokemonsDataType) {
    const requests = names.map(name =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.name}`).then(res => res.json())
    );
    setTimeout(() => {

      },3000)
    return Promise.all(requests);
}
export default async function Index({params}:{params:{index:number}}) {
    const session = await getServerSession();
    const twenyPokemons:PokemonsDataType = await getPokemonData(params.index*20);
    const individualInfo = await getBatchIndividualData(twenyPokemons)
    return (
        <>
            <Suspense fallback={<p style={{fontSize:'50px'}}>Loading...</p>}>
                <CardContainer data={individualInfo} />
            </Suspense>
            <Pagination page={params.index}/>
        </>
    );
}