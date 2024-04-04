import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";

export function Why() {
    return (
        <section className="w-full h-full bg-[url('/images/why/why-design.png')] bg-no-repeat border-t-2 border-white sm:bg-contain sm:bg-left 2xl:bg-cover bg-white py-20">
            <div className="h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto text-background flex justify-center mb-10">
                <div>
                    <H3>WE MADE IT EASIER</H3>
                    <H1>Why Crypto?</H1>
                </div>
            </div>
            <div className="h-0.5 bg-background w-full" />
            <div className="h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto text-background mt-10">
                <div className="flex justify-between gap-10 md:flex-row flex-col items-center">
                    <div>
                        <H3>BENEFIT 01</H3>
                        <P className="w-full max-w-[330px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </P>
                    </div>
                    <div>
                        <H3>BENEFIT 02</H3>
                        <P className="w-full max-w-[330px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </P>
                    </div>
                    <div>
                        <H3>BENEFIT 03</H3>
                        <P className="w-full max-w-[330px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </P>
                    </div>
                </div>
            </div>
        </section>
    );
}
