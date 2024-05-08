import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import BuyCoins from "./form";

export default async function Buy(){
    const session = await getServerSession(authOptions);
    return(
        <BuyCoins token={session?.backend_tokens.access_token??""}/>
    )
}