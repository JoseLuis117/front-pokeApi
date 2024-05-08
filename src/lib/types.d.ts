export interface PokemonDataType {
    name: string;
    url: string;
}

export type PokemonsDataType = PokemonDataType[];

export interface AllPokemones {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonsDataType;
}
export interface type {
    slot: number,
    type: {
        name: string,
        url: string
    }
}
export type types = type[]

export interface Stats {
    base_stat: number,
    stat: {
        name: string,
        url: string
    }
}
export type AllStats = Stats[]

export interface getUserData {
    id: number,
    token: string
}
export interface PokemonTypes {
    nombre: string,
}
export interface Pokemons {
    id?:number,
    nombre: string,
    types: PokemonTypes[],
    xp: int,
    hp: int,
    attack: int,
    defense: int,
    specialAttack: int,
    specialDefense: int,
    speed: int,
    isOwnedByUser: bool,
    imageUrl
}

export interface socialNetworks {
    id: number,
    name: string,
    url: string
    userId: string
}
export interface User {
    id: string,
    email: string,
    name: string,
    regionId: int,
    favouritePokemon: string
    pokemons: Pokemons[]
    profilePicture: string
    bannerPicture: string
    socialNetworks: socialNetworks[]
}
export interface Regiones {
    id: number,
    nombre: string
}
export interface UpdateUserData {
    id: string,
    token: string | undefined,
    name: string,
    favouritePokemon: string,
    regionId: int,
    profilePicture: string,
    bannerPicture: string
}
export interface Cart {
    pokemons: Pokemon[]
    userId: string
}

export interface PokemonData {
    attack: number;
    cartId: string;
    defense: number;
    hp: number;
    id: number;
    imageUrl: string;
    isOwnedByUser: boolean;
    nombre: string;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    types: {
        id: number;
        nombre: string;
    }[];
    xp: number;
}
