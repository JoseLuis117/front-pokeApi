'use client'
import Link from "next/link";
import TextGradient from "./textGradient";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Pagination = ({page}:{page:number}) => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(page);
    const prevPage = ()=>{
        router.push(`/inicio/${Number(currentPage)-1}`)
        setTimeout(()=>[],2000)
        setCurrentPage(Number(currentPage)-1)
    }
    const changeNextPage = ()=>{
        router.push(`/inicio/${Number(currentPage)+1}`)
        setTimeout(()=>[],2000)
        setCurrentPage(Number(currentPage)+1)
    }
    return (
        <>
            <nav className="w-full flex justify-center py-5" aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button disabled={Number(currentPage)===1?true:false} onClick={prevPage} className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-gray-800 border border-e-0 border-gray-700 rounded-s-lg hover:${Number(currentPage)===1?'bg-gray-800':'bg-gray-700'} hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={`${Number(currentPage)===1?'#7B7772':'#FFF'}`} viewBox="0 0 6 10">
                                <path stroke={`${Number(currentPage)===1?'#7B7772':'#FFF'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <Link href={`/inicio/${currentPage}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-gray-700 hover:bg-gray-700 ">
                            <TextGradient text={`${currentPage}`} fontSize={'sm'} position={'center'} typeText="span"></TextGradient>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/inicio/${Number(currentPage)+1}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-gray-700 hover:bg-gray-700 ">
                            <TextGradient text={`${Number(currentPage)+1}`} fontSize={'sm'} position={'center'} typeText="span"></TextGradient>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/inicio/${Number(currentPage)+2}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-gray-700 hover:bg-gray-700 ">
                            <TextGradient text={`${Number(currentPage)+2}`} fontSize={'sm'} position={'center'} typeText="span"></TextGradient>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/inicio/${Number(currentPage)+3}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-gray-700 hover:bg-gray-700 ">
                            <TextGradient text={`${Number(currentPage)+3}`} fontSize={'sm'} position={'center'} typeText="span"></TextGradient>
                        </Link>
                    </li>
                    <li>
                        <a href={`/inicio/${Number(currentPage)+4}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-gray-700 hover:bg-gray-700 ">
                            <TextGradient text={`${Number(currentPage)+4}`} fontSize={'sm'} position={'center'} typeText="span"></TextGradient>
                        </a>
                    </li>
                    <li>
                        <button disabled={Number(currentPage)===65?true:false} onClick={changeNextPage} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-800 border border-e-0 border-gray-700 rounded-e-lg  hover:bg-gray-700 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 6 10">
                                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </>

    )
}
export default Pagination;