"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button" 
import { interSemiTwo } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        <div className="fixed top-0 left-0 right-0 mx-[20px] mt-[0.25rem] bg-white transition-all duration-300 border-2 lg:border-0 lg:bg-transparent border-solid rounded-lg" id="navbar">
            <Link  href="/about" className={cn(
"float-left block text-black text-center mx-[10px] my-[12px] no-underline font-bold lg:bg-white transition-colors duration-200 ease-in-out hover:text-orange-400 hover:decoration-solid",
interSemiTwo.className
            )}>[ovapp]</Link>

            <Link href="https://github.com/ovapp/OpenVoice" passHref>
            <Button className={cn(
"float-right block text-center no-underline text-white bg-black mr-[12px] mt-[6px] w-[10rem] font-normal",
"transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer",
interSemiTwo.className
            )}>Go to repo</Button>
            </Link>
        </div>
    )
}