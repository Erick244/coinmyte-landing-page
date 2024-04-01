import Image from "next/image";
import { H1 } from "../typography/H1";
import { H2 } from "../typography/H2";
import { P } from "../typography/P";

export function Trusted() {
    return (
        <section className="h-full w-full py-14 px-10 flex flex-col items-center gap-5 border-b-2 border-white">
            <div className="w-full flex justify-center sm:justify-end">
                <Image
                    src="/images/trusted/trusted-1.png"
                    alt="Crypto phone trusted transfer right side image"
                    width={315}
                    height={199}
                />
            </div>
            <div className="flex flex-col gap-5 sm:gap-10 items-center">
                <H2 className="text-lg sm:text-xl">WHAT WE STAND FOR</H2>
                <H1 className="flex flex-col items-center text-5xl">
                    <span>Trusted and</span>
                    <span>Transparent.</span>
                </H1>
                <P className="max-w-[560px] w-full text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore. eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                </P>
            </div>
            <div className="w-full flex justify-center sm:justify-start">
                <Image
                    src="/images/trusted/trusted-2.png"
                    alt="Crypto phone trusted transfer left side image"
                    width={315}
                    height={199}
                />
            </div>
        </section>
    );
}
