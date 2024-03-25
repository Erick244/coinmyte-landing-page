import Image from "next/image";
import { Button } from "../ui/Button";

export function Introduction() {
    return (
        <div className="flex justify-between xl:flex-row xl:items-stretch gap-10 xl:gap-0 items-center flex-col h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto ">
            <TextsContainer />
            <ImagesContainer />
        </div>
    );
}

function TextsContainer() {
    return (
        <div className="flex flex-col justify-between gap-10 xl:gap-0">
            <h2 className="font-semibold">WE MADE IT EASY.</h2>
            <div className="space-y-5">
                <h1 className="text-7xl sm:text-8xl flex flex-col sm:flex-row xl:flex-col xl:gap-0 gap-5">
                    <span>Trade</span> <span>Crypto.</span>
                </h1>

                <div className="flex gap-5 xl:gap-0 xl:justify-between">
                    <Button className="bg-white text-background sm:px-5 sm:py-3 px-2 py-2 text-sm">
                        GET STARTED
                    </Button>
                    <Button className="bg-transparent border-2 border-white text-white m:px-5 sm:py-3 px-2 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-background">
                        LEARN MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}

function ImagesContainer() {
    return (
        <div className="flex lg:flex-row flex-col sm:items-stretch">
            <Image
                src="/images/introduction/intro-1.png"
                width={416}
                height={541}
                alt="Bitcoin machine image"
            />
            <div className="flex flex-col justify-end items-center lg:items-stretch">
                <Image
                    src="/images/introduction/intro-2.png"
                    width={314}
                    height={199}
                    alt="Bitcoin machine plug image"
                />

                <div className="ml-6">
                    <h3 className="font-semibold text-xl mb-2 ">
                        Decentralized - 01
                    </h3>
                    <p className="text-xs max-w-[350px] w-full text-pretty">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco labo- ris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                </div>
            </div>
        </div>
    );
}
