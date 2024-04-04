import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";

export function What() {
    return (
        <section className="w-full h-full bg-[url('/images/what/what-design.png')] bg-no-repeat border-b-2 border-white sm:bg-contain sm:bg-left 2xl:bg-cover sm:py-20">
            <div className="flex md:justify-between md:flex-row flex-col md:gap-0 gap-10 items-center h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto">
                <div className="space-y-7">
                    <H1 className="flex flex-col">
                        <span>What</span> <span>they say?</span>
                    </H1>
                    <H3>TESTIMONIALS FROM OUR USERS</H3>
                </div>
                <div className="space-y-20 ">
                    <div className="space-y-5">
                        <P className="w-full max-w-[350px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco labo- ris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore.
                        </P>
                        <H3>- Marie Wu, CEO of ByteWite</H3>
                    </div>
                    <div className="space-y-5">
                        <P className="w-full max-w-[350px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco labo- ris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore.
                        </P>
                        <H3>- Marie Wu, CEO of ByteWite</H3>
                    </div>
                    <div className="space-y-5">
                        <P className="w-full max-w-[350px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco labo- ris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore.
                        </P>
                        <H3>- Marie Wu, CEO of ByteWite</H3>
                    </div>
                </div>
            </div>
        </section>
    );
}
