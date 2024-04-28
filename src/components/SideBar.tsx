'use client'
import React from "react";
import TextGradient from "./textGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faCartPlus, faCoins, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons/faBoxOpen";
import { signOut } from "next-auth/react";
import Link from "next/link";
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full h-full">
                <div className="px-7 pt-4 bg-gray-800 shadow-lg block sm:hidden">
                    <div className="flex justify-between items-end px-4">
                        <div className="group h-full items-end w-10">
                            <Link href="/inicio/1" className="flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-end py-4">
                                    <FontAwesomeIcon height={50} width={20} icon={faHouse} />
                                </span>
                            </Link>
                        </div>
                        <div className="group h-full items-end w-10">
                            <Link href="/perfil" className="flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-center py-4">
                                    <FontAwesomeIcon height={50} icon={faUser} />
                                </span>
                            </Link>
                        </div>
                        <div className="group h-full items-end w-10">
                            <Link href="/pokemones" className="flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-center py-4">
                                    <FontAwesomeIcon height={50} icon={faBoxOpen} />
                                </span>
                            </Link>
                        </div>
                        <div className="group h-full items-end w-10">
                            <Link href="/carrito" className="flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-center py-4">
                                    <FontAwesomeIcon height={50} icon={faCartPlus} />
                                </span>
                            </Link>
                        </div>
                        <div className="group h-full items-end w-10">
                            <Link href="/comprar-pokecoins" className="flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-center py-4">
                                    <FontAwesomeIcon height={50} icon={faCoins} />
                                </span>
                            </Link>
                        </div>
                        <div className="group h-full items-end w-12">
                            <button onClick={()=>signOut()} className="w-full flex items-end justify-center text-center mx-auto text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                <span className="flex flex-col gap-2 items-center py-4">
                                    <FontAwesomeIcon height={50} icon={faArrowRightToBracket} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-no-wrap h-auto sm:h-full">
                    {/* Barra para moviles */}

                    {/* Barra para moviles FIN */}
                    <div className="min-w-64 relative hidden sm:block bg-gray-800 shadow flex-col justify-between">
                        <div className="px-8 py-4 flex flex-col justify-between h-full fixed">
                            <div className="h-16 w-full flex items-center justify-center">
                                <TextGradient text="Poke API++" fontSize="3xl" position="center" typeText="h2" />
                            </div>
                            <ul className="mt-12">
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <Link href="/inicio/1" className=" ">
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faHouse} />
                                            <span className="block text-md">Inicio</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <Link href="/perfil" className=" ">
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faUser} />
                                            <span className="block text-md">Perfil</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <Link href="/pokemones" className=" ">
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faBoxOpen} />
                                            <span className="block text-md">Tus Pokemones</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <Link href="/carrito" className=" ">
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faCartPlus} />
                                            <span className="block text-md">Carrito</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <Link href="/comprar-pokecoins" className=" ">
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faCoins} />
                                            <span className="block text-md">Comprar monedas</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="flex w-full justify-between cursor-pointer items-center mb-6 text-gray-400 group-hover:text-cyan-200 border-b-2 border-transparent group-hover:border-cyan-200">
                                    <button onClick={()=>signOut()}>
                                        <span className="flex flex-row gap-2 hover:text-cyan-200 border-b-2 border-transparent hover:border-cyan-200 hover:pb-4 transition-all">
                                            <FontAwesomeIcon size="xs" width={20} icon={faCoins} />
                                            <span className="block text-md">Cerra Session</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div className="border-t border-gray-700">
                                <ul className="w-full flex items-center justify-between bg-gray-800">
                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                        <button aria-label="show notifications" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                        <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                        <button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="cursor-pointer text-white pt-5 pb-3">
                                        <button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                                                <line x1="10" y1="12" x2="14" y2="12"></line>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* onClick="sidebarHandler(true)" */}
                    <div className="container mx-auto py-10 block md:w-4/5 w-11/12 px-6 h-full pagos">
                        <div className="w-full rounded">
                            {children}
                        </div>
                    </div>
                </div>
                {/* <script>
                        var sideBar = document.getElementById("mobile-nav");
                        var openSidebar = document.getElementById("openSideBar");
                        var closeSidebar = document.getElementById("closeSideBar");
                        sideBar.style.transform = "translateX(-260px)";

                        function sidebarHandler(flag) {
                        if (flag) {
                            sideBar.style.transform = "translateX(0px)";
                        openSidebar.classNameList.add("hidden");
                        closeSidebar.classNameList.remove("hidden");
                        } else {
                            sideBar.style.transform = "translateX(-260px)";
                        closeSidebar.classNameList.add("hidden");
                        openSidebar.classNameList.remove("hidden");
                        }
                    }
                    </script> */}
            </div>

        </>
    );
}
export default Sidebar;