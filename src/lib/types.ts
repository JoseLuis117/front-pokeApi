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
export interface type{
    slot:number,
    type:{
        name:string,
        url:string
    }
}
export type types = type[]

export interface Stats{
    base_stat:number,
    effort:number,
    stat:{
        name:string,
        url:string
    }
}
export type AllStats = Stats[]