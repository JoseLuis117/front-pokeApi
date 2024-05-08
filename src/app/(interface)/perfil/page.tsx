import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import TabsProfile from "@/components/Tabs/Tabs"
import { User } from "@/lib/types"
import { getServerSession } from "next-auth"
import { Suspense } from "react"
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
const ProfileCard = async()=>{
    const session = await getServerSession(authOptions)
    const userData:User = await getUserData(session?.user?.id,session?.backend_tokens.access_token);
    const regions = await getRegions(session?.backend_tokens.access_token)
    return(
        <TabsProfile userData={userData} regiones={regions} token={session?.backend_tokens.access_token}/>
    )
}
export default async function Profile() {
    
    return (
        <main className="min-h-screen">
            <div className="flex justify-center w-full">
                <Suspense fallback={<p>Loading...</p>}>
                    <ProfileCard/>
                </Suspense>
            </div>
        </main>
    )
}