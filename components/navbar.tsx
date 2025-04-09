"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button";

export default function Navbar(){
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            const navbar = document.getElementById("navbar")

            if(navbar){
                navbar.style.top = prevScrollPos > currentScrollPos ? "0" : "-50px"
            }

            prevScrollPos = currentScrollPos;

        }

        window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        

        
        

    }, [])

    return(
        <div className="fixed top-0 left-0 right-0 mx-[20px] transition-all duration-300 border-2 border-solid rounded-lg" id="navbar">
            <a className="float-left block text-black text-center px-4 py-3 no-underline hover:bg-gray-200 hover:text-white tracking-[2rem]">[ovapp]</a>
            <button className="float-right block text-black text-center px-4 py-3 no-underline hover:bg-gray-200 hover:text-white">Home</button>
        </div>
    )
}