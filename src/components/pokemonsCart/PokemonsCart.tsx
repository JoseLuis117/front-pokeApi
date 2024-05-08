"use client"

import { PokemonData } from "@/lib/types";
import TextGradient from "../textGradient";
import Graphic from "../xpGraphic/Graphic";
import TypeDiv from "../type/Type";
import './style.css';
import Stats from "../stats/Stats";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
const PokemonsCart = ({ data, token, pokeCoins }: { data: PokemonData[], token: string, pokeCoins: number }) => {
    const router = useRouter();
    const [price, setPrice] = useState<number>(data.length);
    const [pokemons, setPokemons] = useState([]);
    const [hidden, setHidden] = useState<boolean>(false)
    const { data: session, update } = useSession();
    async function deletePokemon(id: number) {
        const request = await fetch(process.env.NEXT_PUBLIC_URL + '/api/deletePokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, token })
        })
        const res = await request.json();
        router.refresh();
    }
    async function buyPokemons() {
        if (data) {
            const ids = data.map((pokemon) => pokemon.id)
            const request = await fetch(process.env.NEXT_PUBLIC_URL + '/api/buyPokemons', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ ids, token, pokeCoins })
            })
            const toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                background: 'rgb(31 41 55)',
                color: '#fff',
            });
            toast.fire({
                icon: 'success',
                title: 'Compra realizada',
                padding: '10px 20px',
            });
            update()
            router.refresh()
        }
    }
    function insufficientBalance() {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            background: 'rgb(31 41 55)',
            color: '#fff',
        });
        toast.fire({
            icon: 'error',
            title: 'PokeCoins insuficientes',
            padding: '10px 20px',
        });
        update()
        router.refresh()
    }
    return (
        <div className="h-full md:h-screen flex flex-col gap-4">

            <div className="flex justify-center">
                <div className="max-w-max bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl max-w-52 w-full text-center font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Carrito de compras</h2>
                </div>
            </div>

            <div className="bg-transparent grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="grid grid-cols-1 gap-12 md:max-h-[700px] md:overflow-y-scroll scroll-smooth col-span-3 xl:col-span-4 contenedor">
                    {data.length <= 0 ?
                        <div className="flex justify-center">
                            <div className=" bg-gray-800 rounded-xl p-4 w-full">
                                <TextGradient fontSize="xl" position="center" text="Carrito de compras vacio" typeText="h2" />
                            </div>
                        </div>
                        :
                        <></>
                    }
                    {Array.isArray(data) && data?.map((pokemon, index) => (
                        <div className="grid bg-gray-800 grid-cols-1 xl:grid-cols-4 p-8 rounded-xl gap-2" key={pokemon.id}>
                            <div className="xl:max-w-[150px] max-h-[150px] w-full">
                                <img src={pokemon.imageUrl} alt={pokemon.nombre} className="w-full h-full" />
                            </div>
                            <div className="flex flex-col text-white gap-2 items-center xl:items-start">
                                <TextGradient fontSize="lg" position="start" text={pokemon.nombre} typeText="p" />
                                <TextGradient text={'Experiencia base'} fontSize={'sm'} position={'start'} typeText="span" />
                                <div className="ml-8">
                                    <Graphic xp={pokemon.xp.toString()} />
                                </div>
                                <div className="flex justify-center xl:justify-start before:bg-white/10 py-3 gap-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small">
                                    {pokemon.types.map((value, index) => (
                                        <TypeDiv key={index} type={value.nombre.toUpperCase()}></TypeDiv>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 h-40 overflow-y-scroll contenedor contenedorScrollSize scroll-smooth">
                                <TextGradient text={`Stats`} fontSize={'lg'} position={'center'} typeText="span" />
                                <div className="w-full">
                                    <TextGradient text={`HP  ${pokemon.hp}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.hp} />
                                </div>
                                <div className="w-full">
                                    <TextGradient text={`Attack  ${pokemon.attack}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.attack} />
                                </div>
                                <div className="w-full">
                                    <TextGradient text={`Defense  ${pokemon.defense}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.defense} />
                                </div>
                                <div className="w-full">
                                    <TextGradient text={`Special-Attack  ${pokemon.specialAttack}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.specialAttack} />
                                </div>
                                <div className="w-full">
                                    <TextGradient text={`Special-Defense  ${pokemon.specialDefense}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.specialDefense} />
                                </div>
                                <div className="w-full">
                                    <TextGradient text={`Speed  ${pokemon.speed}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats value={pokemon.speed} />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button color="danger" variant="shadow" onClick={() => {
                                    deletePokemon(pokemon.id)
                                    setPrice((prevValue) => prevValue - 1);
                                }}>
                                    Eliminar
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                {data ?
                    <div className="col-span-3 xl:col-span-2 bg-gray-800 rounded-xl p-12 flex flex-col gap-4 max-h-max">
                        <div>
                            <TextGradient fontSize="lg" position="start" text={`PokeCoins disponibles: ${session?.user.pokeCoins}`} typeText="p" />
                        </div>
                        {Array.isArray(data) && data?.map((value) => (
                            <div className="flex justify-between" key={value.id}>
                                <TextGradient fontSize="lg" position="start" text={`${value.nombre}`} typeText="p" />
                                <TextGradient fontSize="lg" position="start" text={`1 PC`} typeText="p" />
                            </div>
                        ))}
                        <hr />
                        <div className="flex justify-end">
                            <TextGradient fontSize="lg" position="start" text={`${price} PC`} typeText="p" />
                        </div>
                        {hidden || data.length <= 0 ? <></> : <Button color="success" variant="ghost" onClick={() => {
                            if (pokeCoins >= data.length) {
                                setHidden(true);
                                buyPokemons();
                                setPrice(0);
                            } else {
                                insufficientBalance()
                            }
                        }}>
                            Comprar
                        </Button>}

                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default PokemonsCart;