import CardContainer from "@/components/cardContainer/CardContainer";
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
    return Promise.all(requests);
}
export default async function Index({params}:{params:{index:number}}) {
    const twenyPokemons:PokemonsDataType = await getPokemonData(params.index*20);
    const individualInfo = await getBatchIndividualData(twenyPokemons)
    return (
        <>
            <Suspense fallback={<p style={{fontSize:'50px'}}>Loading...</p>}>
                <CardContainer data={individualInfo} />
                <Pagination page={params.index}/>
            </Suspense>
            
        </>
    );
}