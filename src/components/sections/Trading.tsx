import Image from "next/image";
import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";
import { Button } from "../ui/Button";

export function Trading() {
    return (
        <section className="w-full h-full bg-[url('/images/trading/trading-design.png')] bg-no-repeat border-t-2 border-white sm:bg-contain sm:bg-left xl:bg-cover bg-white">
            <div className="flex justify-between xl:flex-row gap-10 xl:gap-0 items-center flex-col h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto">
                <div className="text-background space-y-7">
                    <H3>Decentralized - 01</H3>
                    <H1 className="flex flex-col">
                        <span>Trading</span>
                        <span>Made Easy.</span>
                    </H1>
                    <P className="max-w-[470px] w-full">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor inci- didunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ex- ercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore.
                    </P>
                    <Button className="text-white px-5 py-3">
                        GET STARTED
                    </Button>
                </div>
                <div className="border-2 rounded">
                    <Image
                        src="/images/trading/trading.png"
                        alt="Bitcoin factory machine"
                        width={527}
                        height={724}
                    />
                </div>
            </div>
        </section>
    );
}
