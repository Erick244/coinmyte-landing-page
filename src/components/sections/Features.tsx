import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Accordion } from "../accordion";
import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";

const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor.`;

export function Features() {
    return (
        <section className="relative lg:my-5">
            <Line />
            <div className="flex flex-col items-center max-w-7xl w-full m-auto py-14 px-10 xl:px-0">
                <div className="p-10 col-span-3 text-center">
                    <H1>Features</H1>
                </div>

                <div className="lg:hidden block space-y-10">
                    <div className="flex justify-center">
                        <Image
                            className="border-2 border-white shadow-[0px_0px_50px] shadow-primary rounded-bl-3xl rounded-tr-3xl"
                            src="/images/features/features-mobile.jpg"
                            alt="Temp"
                            width={500}
                            height={445}
                        />
                    </div>
                    <Accordion.Root className="gap-6">
                        <Accordion.Item title="01 - Versatile">
                            {loremDescription}
                        </Accordion.Item>
                        <Accordion.Item title="02 - Easy to Use">
                            {loremDescription}
                        </Accordion.Item>
                        <Accordion.Item title="03 - Transparent">
                            {loremDescription}
                        </Accordion.Item>
                        <Accordion.Item title="04 - Real Time">
                            {loremDescription}
                        </Accordion.Item>
                    </Accordion.Root>
                </div>

                <div className="lg:grid grid-cols-3 grid-rows-5 hidden">
                    <TextBox
                        className="justify-end pb-20"
                        title="01 - Versatile"
                    >
                        {loremDescription}
                    </TextBox>

                    <div className="row-span-6 flex justify-center">
                        <Image
                            src="/images/features/design-phone.png"
                            alt="Temp"
                            width={390}
                            height={763}
                        />
                    </div>
                    <TextBox
                        className="justify-end items-end pb-20"
                        title="02 - Easy to Use"
                    >
                        {loremDescription}
                    </TextBox>

                    <TextBox className="pt-20" title="03 - Transparent">
                        {loremDescription}
                    </TextBox>

                    <TextBox className="items-end pt-20" title="04 - Real Time">
                        {loremDescription}
                    </TextBox>
                </div>
            </div>
        </section>
    );
}

function Line() {
    return (
        <div className="-z-10 absolute top-[55%] w-full h-0.5 bg-white lg:block hidden" />
    );
}

interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    children: React.ReactNode;
}

function TextBox({ children, title, ...props }: TextBoxProps) {
    return (
        <div className={cn("row-span-2 flex flex-col", props.className)}>
            <div>
                <H3>{title}</H3>
                <P className="max-w-[300px] w-full">{children}</P>
            </div>
        </div>
    );
}
