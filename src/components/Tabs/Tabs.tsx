"use client"
import React from "react"
import { Card, Tab, Tabs, user } from "@nextui-org/react"
import { useState } from "react"
import ProfileCard from "../card/Profile"
import { Regiones, User } from "@/lib/types"
import EditProfile from "../forms/EditProfile"
const TabsProfile = ({ userData, regiones, token }: { userData: User, regiones: Regiones[], token:string|undefined }) => {
    const [selectedTab, setSelectedTab] = useState<string | number>('profile')
    return (
        <Card className="bg-gray-800 p-4 max-w-lg w-full">
            <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
                classNames={{
                    tabList: 'bg-gray-700 p-2',
                    cursor: 'bg-gray-500 text-white',
                    tabContent: 'group-data-[selected=true]:text-white',
                    panel: 'text-white',
                }}
            >
                <Tab key="profile" title="Perfil" className="">
                    <ProfileCard userData={userData} regions={regiones} />
                </Tab>
                <Tab key="editProfile" title="Editar Perfil">
                    <EditProfile regiones={regiones} userData={userData} token={token}/>
                </Tab>
            </Tabs>
        </Card>
    )
}
export default TabsProfile