import Image from "next/image";
import { H1 } from "../typography/H1";

export function Learn() {
    return (
        <section className="py-24">
            <H1 className="text-center mx-10">Learn from the best.</H1>
            <div className="flex justify-between xl:flex-row xl:items-stretch gap-10 xl:gap-0 items-center flex-col h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto">
                <div>
                    <Image
                        src="/images/learn/learn1.png"
                        alt="All About Market Caps image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">
                        All About Market Caps
                    </legend>
                </div>
                <div>
                    <Image
                        src="/images/learn/learn2.png"
                        alt="Using the Platform image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">Using the Platform</legend>
                </div>
            </div>
            <div className="h-0.5 bg-white w-full" />
            <div className="flex justify-between xl:flex-row xl:items-stretch gap-10 xl:gap-0 items-center flex-col h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto">
                <div>
                    <Image
                        src="/images/learn/learn3.png"
                        alt="Digital Currencies image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">Digital Currencies</legend>
                </div>
                <div>
                    <Image
                        src="/images/learn/learn4.png"
                        alt="Terminologies image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">Terminologies</legend>
                </div>
            </div>
            <div className="h-0.5 bg-white w-full" />
            <div className="flex justify-between xl:flex-row xl:items-stretch gap-10 xl:gap-0 items-center flex-col h-full py-14 px-10 xl:px-0 max-w-7xl w-full m-auto">
                <div>
                    <Image
                        src="/images/learn/learn5.png"
                        alt="Trading Techniques image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">Trading Techniques</legend>
                </div>
                <div>
                    <Image
                        src="/images/learn/learn6.png"
                        alt="Emerging Tokens image reference"
                        width={493}
                        height={300}
                    />
                    <legend className="text-center">Emerging Tokens</legend>
                </div>
            </div>
        </section>
    );
}
