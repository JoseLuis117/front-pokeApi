import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import TabsProfile from "@/components/Tabs/Tabs"
import { User } from "@/lib/types"
import { getServerSession } from "next-auth"
async function getUserData(id:string | undefined, token:string | undefined){
    const req = await fetch('http://localhost:3000/api/getUserData',{
        method:'POST',
        body:JSON.stringify({id,token}),
    })
    const res = await req.json()
    return res
}
async function getRegions(token:string | undefined){
    const req = await fetch('http://localhost:3000/api/getRegions',{
        method:'POST',
        body:JSON.stringify({token}),
    })
    const res = await req.json();
    return res
}
export default async function Profile() {
    const session = await getServerSession(authOptions)
    const userData:User = await getUserData(session?.user?.id,session?.backend_tokens.access_token);
    const regions = await getRegions(session?.backend_tokens.access_token)
    console.log(regions)
    return (
        <main className="min-h-screen">
            <div className="flex justify-center w-full">
                <TabsProfile userData={userData} regiones={regions} token={session?.backend_tokens.access_token}/>
            </div>
        </main>
    )
}