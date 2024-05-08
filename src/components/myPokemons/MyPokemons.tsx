"use client"
import { PokemonData } from "@/lib/types";
import { NextUIProvider } from "@nextui-org/react";
import TextGradient from "../textGradient";
import Graphic from "../xpGraphic/Graphic";
import Stats from "../stats/Stats";
import Image from "next/image";
import TypeDiv from "../type/Type";

import "./style.css"
const MyPokemons = ({ data }: { data: PokemonData[] }) => {
    return (
        <NextUIProvider style={{ width: '100%' }}>
            {data.length <= 0 ?
                <div className="h-screen">
                    <div className="bg-gray-800 flex justify-center h-[800px] items-center rounded-lg">
                        <TextGradient fontSize="xl" position="center" text="Aún no tienes pokemones" typeText="h1"/>
                    </div>
                </div>
                :
                <div className={`${data.length < 7? 'h-screen ':'h-full '} grid justify-items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                    {data.map((pokemon, index) => (
                        <div className="card">
                            <div className="content">
                                <div className="back flex flex-col gap-4 py-4">
                                    <TextGradient text={'STATS'} fontSize={'md'} position={'center'} typeText="p" />
                                    <div className="flex items-center flex-col mt-3">
                                        <TextGradient text={'Experiencia base'} fontSize={'sm'} position={'start'} typeText="span" />
                                        <Graphic xp={pokemon.xp.toString()} />
                                        <div className="w-full">
                                            <TextGradient text={`${'HP'}  ${pokemon.hp}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.hp} />
                                        </div>
                                        <div className="w-full">
                                            <TextGradient text={`${'Attack'}  ${pokemon.attack}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.attack} />
                                        </div>
                                        <div className="w-full">
                                            <TextGradient text={`${'Defense'}  ${pokemon.defense}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.defense} />
                                        </div>
                                        <div className="w-full">
                                            <TextGradient text={`${'Special-Attack'}  ${pokemon.specialAttack}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.specialAttack} />
                                        </div>
                                        <div className="w-full">
                                            <TextGradient text={`${'Special-Defense'}  ${pokemon.specialDefense}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.specialDefense} />
                                        </div>
                                        <div className="w-full">
                                            <TextGradient text={`${'Speed'}  ${pokemon.speed}`} fontSize={'sm'} position={'start'} typeText="span" />
                                            <Stats value={pokemon.speed} />
                                        </div>
                                    </div>
                                </div>
                                <div className="front p-2 flex flex-col items-center justify-between gap-2">
                                    <TextGradient fontSize="md" position="center" text={pokemon.nombre} typeText="p" />
                                    <div className="img">
                                        <Image width={0} height={0} style={{ maxHeight: '250px', width: '100%', height: '100%' }} src={pokemon.imageUrl} alt={pokemon.nombre}></Image>
                                    </div>

                                    <div className="front-content">

                                        <div className="flex justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-3 gap-4 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small">
                                            {pokemon.types.map((typee, index) => (
                                                <TypeDiv key={typee.id} type={typee.nombre}></TypeDiv>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </NextUIProvider>
    )
}
export default MyPokemons;