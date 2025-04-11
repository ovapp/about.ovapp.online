import Navbar from "@/components/navbar";
import { interSemi, interSemiTwo } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header>
        <Navbar />

        <div
          className={cn(
            "flex justify-center items-center text-center text-[26.5px] pt-[5rem] pb-[1rem] block sm:hidden",
            interSemi.className
          )}
        >
          <p className="font-normal leading-8">
            Calling those who are
            <span className="block">
              searching for a{" "}
              <b className="text-green-500 underline decoration-dotted">
                better
              </b>
            </span>
            <span className="block ">social media</span>
          </p>
        </div>

        <div
          className={cn(
            "flex justify-center items-center text-center text-[26.5px] pt-[5rem] pb-[1rem] hidden sm:block",
            interSemi.className
          )}
        >
          <p className="font-normal leading-8">
            Calling those who are searching
            <span className="block">
              for a{" "}
              <b className="text-green-500 underline decoration-dotted">
                better
              </b>{" "}
              social media
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center mt-[1rem] pb-[1rem]">
          <Image
            src="/ovapp-maskedlogo.svg"
            width={0}
            height={0}
            className="w-[85%] max-w-[400px] h-auto"
            sizes="(max-width: 768px) 100vw, 400px"
            alt="Logo of OpenVoice"
          />
        </div>

        <div
          className={cn(
            "flex justify-center items-center text-[26.5px] text-center pt-[1rem] block sm:hidden",
            interSemi.className
          )}
        >
          <p className="font-normal leading-8">
            OpenVoice is a social media
            <span className="block">
              platform whose priority is{" "}
              <b className="text-blue-500 underline decoration-dotted">
                data security
              </b>
            </span>
            <span className="block ">
              and{" "}
              <b className="text-purple-800 underline decoration-dotted">
                user&apos;s privacy
              </b>
            </span>
          </p>
        </div>

        <div
          className={cn(
            "flex justify-center items-center text-[26.5px] text-center pt-[1rem] hidden sm:block",
            interSemi.className
          )}
        >
          <p className="font-normal leading-8">
            OpenVoice is a social media platform whose
            <span className="block">
              priority is{" "}
              <b className="text-blue-500 underline decoration-dotted">
                data security
              </b>{" "}
              and{" "}
              <b className="text-purple-800 underline decoration-dotted">
                user&apos;s privacy
              </b>
            </span>
          </p>
        </div>
      </header>

      <main className="flex flex-col items-start px-[1rem] mt-[2rem] lg:justify-center lg:items-center">
        <section id="theme" aria-labelledby="theme-heading">
          <h3 className={cn("font-bold text-[26px]", interSemi.className)}>
            Theme of this project
          </h3>

          {/*w-[342px] border-t-[2px] border-dotted border-black  */}
          <hr className="w-[342px] lg:w-[62rem] border-t-[2px] border-dotted border-black " />
          <p
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] max-w-[60rem]",
              interSemiTwo.className
            )}
          >
            The core theme of OpenVoice is to promote a social media environment
            build on data security, user privacy and freedom of expression.
          </p>
        </section>

        <section id="justification" aria-labelledby="justification-heading">
          <h3
            className={cn(
              "font-bold text-[26px] mt-[1rem]",
              interSemi.className
            )}
          >
            Justification
          </h3>

          <hr className="w-[342px] lg:w-[62rem] border-t-[2px] border-dotted border-black " />
          <p
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] max-w-[60rem]",
              interSemiTwo.className
            )}
          >
            As social media platforms evolved, they&apos;ve turned into spaces
            where people can stay informed and express themselves. However, the
            growing use of algorithms often limits freedom of expression,
            polarizes the content displayed and compromises user privacy by
            collecting personal information for targeted ads and marketing
            stategies.
          </p>
          <p
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[1rem] max-w-[60rem]",
              interSemiTwo.className
            )}
          >
            OpenVoice aims to address these issues by adopting a more ethical
            and transparent approach. While it still needs to generate revenue,
            OpenVoice does so responsibly, without relying on invasive data
            collection. Instead, the platform prioritizes freedom of expression,
            fosters and environment free from algorithmic interference that
            could restrict or manipulate the user experience.
          </p>
        </section>

        <section id="objectives" aria-labelledby="objectives-heading">
          <h3
            className={cn(
              "font-bold text-[26px] mt-[1rem]",
              interSemi.className
            )}
          >
            Objectives
          </h3>
          <hr className="w-[342px] lg:w-[62rem] border-t-[2px] border-dotted border-black " />

          <ul
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] pl-[2rem] list-[square]",
              interSemiTwo.className
            )}
          >
            <li className="max-w-[60rem]">
              Develop a social media platform focused on user privacy and data
              security
            </li>
            <li className="mt-[1rem] max-w-[60rem]">
              Minimize the collection of personal data while ensuring essential
              functionality
            </li>
            <li className="mt-[1rem] max-w-[60rem]">
              Encourage open communication and protect users from algorithmic
              bias and surveillance
            </li>
            <li className="mt-[1rem] max-w-[60rem]">
              Avoid the use of content manipulation algorithms that limit
              freedom of expression
            </li>
            <li className="mt-[1rem] max-w-[60rem]">
              Create a transparent and ethical environment for user interaction
            </li>
          </ul>
        </section>

        <section
          id="product-description"
          aria-labelledby="product-description-heading"
        >
          <h3
            className={cn(
              "font-bold text-[26px] mt-[1rem]",
              interSemi.className
            )}
          >
            Product Description
          </h3>
          <hr className="w-[342px] lg:w-[62rem] border-t-[2px] border-dotted border-black " />
          <p
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] max-w-[60rem]",
              interSemiTwo.className
            )}
          >
            OpenVoice is a social media platform designed to respect user
            privacy, protect personal data and promote freedom of expression.
            Unlike traditional social networks, OpenVoice does not rely on
            content-sorting algorithms, intrusive data collection or targeted
            advertisements.
          </p>
        </section>

        <section id="stakeholders" aria-labelledby="stakeholders-heading">
          <h3
            className={cn(
              "font-bold text-[26px] mt-[1rem]",
              interSemi.className
            )}
          >
            Stakeholders
          </h3>
          <hr className="w-[342px] lg:w-[62rem] border-t-[2px] border-dotted border-black " />

          <ul
            className={cn(
              "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] pl-[2rem] list-[square]",
              interSemiTwo.className
            )}
          >
            <li className="">End Users</li>
            <p
              className={cn(
                "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] ml-[-2rem] max-w-[60rem]",
                interSemiTwo.className
              )}
            >
              Individuals who seek a social media experience that respects their
              privacy and freedom of expression
            </p>

            <li className="mt-[1rem]">Developers and Contributors</li>
            <p
              className={cn(
                "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] ml-[-2rem] max-w-[60rem]",
                interSemiTwo.className
              )}
            >
              Open-source collborators who contribute to the development,
              maintenance and improvement of the platform
            </p>

            <li className="mt-[1rem]">Open-Source Community</li>
            <p
              className={cn(
                "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] ml-[-2rem] max-w-[60rem]",
                interSemiTwo.className
              )}
            >
              Members of the broader tech community who support transparent,
              ethical and privacy-respecting software
            </p>

            <li className="mt-[1rem] ">Digital Rights Advocates</li>
            <p
              className={cn(
                "font-normal text-[16px] leading-5 tracking-wide mt-[.5rem] ml-[-2rem] max-w-[60rem]",
                interSemiTwo.className
              )}
            >
              Organizations and individuals concerned with online freedom, data
              protection and ethical technology
            </p>
          </ul>
        </section>
      </main>

      <footer
        className={cn("text-center text-[18px] mt-[2rem]", interSemi.className)}
      >
        <h3 className="mb-[.5rem]">
          Interested? Contribute on the{" "}
          <Link
            href="https://github.com/ovapp/OpenVoice"
            className="text-green-500 underline decoration-dotted transition-colors duration-200 ease-in-out hover:text-cyan-400 hover:decoration-solid"
          >
            repo
          </Link>
        </h3>
        <h5 className="text-[14px] mb-[1rem]">© 2025 OpenVoice</h5>
      </footer>
    </>
  );
}
