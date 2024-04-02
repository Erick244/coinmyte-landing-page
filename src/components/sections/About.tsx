import Image from "next/image";
import { H1 } from "../typography/H1";
import { P } from "../typography/P";
import { Button } from "../ui/Button";

export function About() {
    return (
        <section className="w-full h-full bg-[url('/images/about/about-design.png')] bg-no-repeat border-t-2 border-white sm:bg-contain sm:bg-right flex justify-between items-center">
            <div className="w-1/2 hidden sm:block">
                <Image
                    src="/images/about/about.png"
                    width={624}
                    height={885}
                    alt="Tem"
                />
            </div>
            <div className="flex flex-col items-center gap-7 h-full px-10 py-14 xl:px-0 max-w-7xl w-full m-auto">
                <H1 className="flex flex-col items-center">
                    <span>All About</span>
                    <span>Market Caps</span>
                </H1>
                <P className="max-w-[480px] w-full text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incidi- dunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercita- tion
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                </P>
                <Button className="bg-transparent border-2 border-white text-white px-5 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-background">
                    LEARN MORE
                </Button>
            </div>
        </section>
    );
}
