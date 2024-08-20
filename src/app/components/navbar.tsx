"use client"
import Searchbar from "./searchbar"
import Logo from "./ui/logo"
export default function Navbar(){
    return (
        <>
        <div className="bg-[#0f46d4] text-gray-200 p-1 flex">
            <Logo  />
            <Searchbar  />
            <div className="pesquisar  justify-center align-middle py-10 flex-auto">
            </div>
        </div>
        </>
    )
}