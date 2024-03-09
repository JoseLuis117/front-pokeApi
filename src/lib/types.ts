export interface PokemonDataType {
    name: string;
    url: string;
}

export type PokemonsDataType = PokemonDataType[];

export interface AllPokemones {
    count:number;
    next:string;
    previous:string | null;
    results:PokemonsDataType;
}
export interface PokemonIndividualInfo{
    
}