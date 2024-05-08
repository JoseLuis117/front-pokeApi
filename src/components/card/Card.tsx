'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button, NextUIProvider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { AllStats, PokemonTypes, Pokemons } from "@/lib/types";
import Stats from "../stats/Stats";
import TextGradient from "../textGradient";
import { types } from "@/lib/types";
import TypeDiv from "../type/Type";
import Graphic from "../xpGraphic/Graphic";

import "./style.css"
import Swal from "sweetalert2";

const Card = ({ data, id, token }: { data: any, id: string, token:string }) => {
    const router = useRouter();
    const type: types = data.types;
    const stats: AllStats = data.stats;
    async function addToCart() {
        const newTypes: PokemonTypes[] = type.map((value, index) => {
            return { nombre: value.type.name.toUpperCase() }
        })
        const newStats = stats.map((value, index) => {
            return { [value.stat.name]: value.base_stat }
        })
        const pokemon: Pokemons = {
            nombre: data.name.toUpperCase(),
            types: newTypes,
            hp: newStats[0].hp,
            attack: newStats[1].attack,
            defense: newStats[2].defense,
            specialAttack: newStats[3]['special-attack'],
            specialDefense: newStats[4]['special-defense'],
            speed: newStats[5].speed,
            xp: data.base_experience,
            isOwnedByUser: false,
            imageUrl: data.sprites.other.dream_world.front_default
        }
        const request = await fetch(process.env.NEXT_PUBLIC_URL + '/api/addToCart', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                pokemons:pokemon, userId:id, token
            })
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
            title: 'Pokemon agregado al carrito',
            padding: '10px 20px',
        });
        router.refresh();
    }
    return (
        <NextUIProvider style={{ width: '100%' }}>
            <div className="card">
                <div className="content">
                    <div className="back flex flex-col gap-4 py-4">
                        <TextGradient text={'STATS'} fontSize={'md'} position={'center'} typeText="p" />
                        <div className="flex items-center flex-col mt-3">
                            <TextGradient text={'Experiencia base'} fontSize={'sm'} position={'start'} typeText="span" />
                            <Graphic xp={data.base_experience} />
                            {stats.map((stat, index) => (
                                <div key={index} className="w-full">
                                    <TextGradient text={`${stat.stat.name}  ${stat.base_stat}`} fontSize={'sm'} position={'start'} typeText="span" />
                                    <Stats key={index} value={stat.base_stat} />
                                </div>
                            ))}
                        </div>
                        <Button className="pointer-events-auto" onClick={() => {
                            addToCart()
                        }} color="success" variant="ghost">
                            <FontAwesomeIcon icon={faCartPlus} />  Agregar al carrito
                        </Button>
                    </div>
                    <div className="front p-2 flex flex-col items-center justify-between gap-2">
                        <TextGradient fontSize="md" position="center" text={data.name.toUpperCase()} typeText="p" />
                        <div className="img">
                            <Image width={0} height={0} style={{ maxHeight: '250px', width: '100%', height: '100%' }} src={data.sprites.other.dream_world.front_default} alt={data.name}></Image>
                        </div>

                        <div className="front-content">

                            <div className="flex justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-3 gap-4 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small">
                                {type.map((typee, index) => (
                                    <TypeDiv key={index} type={typee.type.name.toUpperCase()}></TypeDiv>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NextUIProvider>
    );
}
export default Card