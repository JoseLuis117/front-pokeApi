import { Regiones, User } from "@/lib/types"
import Image from "next/image"
const ProfileCard = ({ userData }: { userData: User }) => {
    return (
        <>
            <div className="w-full h-48">
                <div className="relative">
                    <div className="absolute">
                        <Image width={500} height={100} src={'/img/profile/baner.svg'} alt="baner" />
                    </div>
                    <div className="absolute rounded-full overflow-hidden left-[calc(50%-60px)] top-16">
                        <Image width={120} height={120} src={'/img/profile/profile.svg'} alt="profile" />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-xl font-bold">{userData.name}</p>
            </div>
            <div className="grid grid-cols-3 justify-items-center mt-6">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-xl font-bold">{userData.regionId ? userData.regionId : 'Ninguna'}</p>
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
            <div className="flex justify-center gap-4 mt-6">
                <Image width={50} height={50} src={'/img/profile/facebook.svg'} alt="Facebook" className="mt-2 cursor-pointer"/>
                <Image width={42} height={42} src={'/img/profile/twitter.svg'} alt="Twitter" className="cursor-pointer"/>
                <Image width={48} height={48} src={'/img/profile/instagram.svg'} alt="Instagram"  className="cursor-pointer"/>
            </div>
        </>
    )
}
export default ProfileCard