import { getServerSession } from "next-auth";
import BuyCoins from "./form";
import { authOptions } from "@/utils/authOptions";

export default async function Buy(){
    const session = await getServerSession(authOptions);
    return(
        <BuyCoins token={session?.backend_tokens.access_token??""}/>
    )
}