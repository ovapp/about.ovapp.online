import Navbar from "@/components/navbar";
import { interSemi } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image"

export default function Page() {
  return (

    <>
      <Navbar />

      <div className={cn(
    "flex justify-center items-center text-center text-[26.5px] pt-[5rem]",
    interSemi.className,
      )}>
        <p className="font-normal leading-8">
          Calling those who are
          <span className="block">
        searching for a <b className="text-green-500 underline decoration-dotted">better</b>
          </span>
          <span className="block ">
            social media
          </span>
        </p>
      </div>

        <div className="flex justify-center items-center mt-[1rem]">
      <Image
        src="/ovapp-maskedlogo.png"
        width={0} // 400
        height={0} // 235
        className="w-[85%] max-w-[400px] h-auto"
        sizes="(max-width: 768px) 100vw, 400px"
        alt="Logo of OpenVoice"
      />
      </div>

      <div className={cn(
    "flex justify-center items-center text-[26.5px] text-center pt-[1rem]",
    interSemi.className,
      )}>
        <p className="font-normal leading-8">
          OpenVoice is a social media
          <span className="block">
        platform whose priority is <b className="text-blue-500 underline decoration-dotted">data security</b>
          </span>
          <span className="block ">
          and <b className="text-purple-800 underline decoration-dotted">user's privacy</b> 
          </span>
        </p>
      </div>

      <div className="flex justify-center item-center">
        <h3 className={cn(
          "font-normal px-[1rem] mt-[2rem]",
          interSemi.className
        )}>
          Theme of this project</h3>

        <div className="px-[1rem]">
        <hr className="w-[200px] border-t-[2px] border-dotted border-black "/>
        </div>
      </div>

    </>
  );
}
