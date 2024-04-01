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

export interface getUserData{
    id:number,
    token:string
}
export interface PokemonTypes{
    id:number,
    nombre:string,
    pokemonId:number,
}
export interface Pokemons{
    id:internal,
  nombre:string,
  userId:string,
  types:PokemonTypes[],
    xp:int,
    hp:int,
    attack:int,
    defense:int,
    specialAttack:int,
    specialDefense:int,
    speed:int,
    baseExperience:int
}
export interface User{
    id:string,
    email:string,
    name:string,
    regionId:int,
    favouritePokemon:string
    pokemons:Pokemons[]
}
export interface Regiones{
    id:number,
    nombre:string
}