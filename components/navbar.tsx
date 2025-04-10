"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button" 

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
        <div className="fixed top-0 left-0 right-0 mx-[20px] mt-[0.25rem] bg-white transition-all duration-300 border-2 border-solid rounded-lg" id="navbar">
            <a className="float-left block text-black text-center mx-[10px] my-[12px] no-underline font-bold">[ovapp]</a>
            <Button className="float-right block text-center no-underline text-white bg-black mr-[12px] mt-[6px] w-[10rem]">go to repo</Button>
        </div>
    )
}