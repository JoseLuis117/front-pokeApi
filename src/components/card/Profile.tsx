import { Regiones, User } from "@/lib/types"
import Image from "next/image"
import Social from "./Social"
const ProfileCard = ({ userData, regions }: { userData: User, regions: Regiones[] }) => {
    return (
        <>
            <div className="w-full h-48">
                <div className="relative">
                    <div className="absolute overflow-hidden max-w-[470px] w-full h-30">
                        <img style={{ width: '500px', height: '130px', overflow: 'hidden' }} src={userData.bannerPicture ? `https://bucket-poke-api.s3.amazonaws.com/${userData.bannerPicture}` : '/img/profile/baner.svg'} alt="baner" />
                    </div>
                    <div className="absolute rounded-full overflow-hidden left-[calc(50%-55px)] w-28 h-28 top-16">
                        <img className="w-[120px] h-full" src={userData.profilePicture ? `https://bucket-poke-api.s3.amazonaws.com/${userData.profilePicture}` : '/img/profile/profile.svg'} alt="profile" />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-xl font-bold">{userData.name}</p>
            </div>
            <div className="grid grid-cols-3 justify-items-center mt-6">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-xl font-bold">{userData.regionId ? regions[userData.regionId - 1].nombre : 'Ninguna'}</p>
                    <p className="text-gray-400">Región</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-2">
                        <Image width={20} height={20} src={'/img/profile/star.svg'} alt="Star" />
                        <p className="text-xl font-bold">{userData.favouritePokemon ? userData.favouritePokemon : 'Ninguno'}</p>
                    </div>
                    <p className="text-gray-400">Pokemon Favorito</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-xl font-bold">{userData.pokemons.length}</p>
                    <p className="text-gray-400">Pokemones</p>
                </div>
            </div>
            <Social socialNetworks={userData.socialNetworks}/>
        </>
    )
}
export default ProfileCard