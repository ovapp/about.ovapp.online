import Navbar from "@/components/navbar";
import { interSemi } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image"

export default function Page() {
  return (

    <div>
      <Navbar />

      <div className={cn(
    "flex justify-center mt-[5rem] items-center text-center text-[26.5px]",
    interSemi.className,
      )}>
        <p className="font-normal">
          Calling those who are
          <span className="block">
        searching for a <b className="text-green-500 underline decoration-dotted">better</b>
          </span>
          <span className="block ">
            social media
          </span>
        </p>
        <Image
        src="/ovapp-maskedlogo.png"
        width={0} // 400
        height={0} // 235
        className="w-[85%] max-w-[400px] h-auto"
        sizes="(max-width: 768px) 100vw, 400px"
        alt="Logo of OpenVoice"
      />
      
      </div>

      

    </div>
  );
}
