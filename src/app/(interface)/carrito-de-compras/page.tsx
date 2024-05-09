import PokemonsCart from "@/components/pokemonsCart/PokemonsCart"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

const CartData = async ({ token, pokeCoins }: { token: string, pokeCoins: number }) => {
    const pokemons = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getCartData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
    const res = await pokemons.json();
    return (
        <PokemonsCart data={res} token={token} pokeCoins={pokeCoins}></PokemonsCart>
    )
}
export default async function Cart() {
    const session = await getServerSession(authOptions);
    return (
        <Suspense fallback={<div className="h-screen"><p>Loading...</p></div>}>
            <CartData token={session?.backend_tokens.access_token ?? ""} pokeCoins={session?.user.pokeCoins??0}></CartData>
        </Suspense>
    )
}