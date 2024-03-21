import Image from "next/image";
import { Button } from "../ui/Button";

export function Introduction() {
    return (
        <div className="flex">
            <div className="flex flex-col justify-between">
                <h2>WE MADE IT EASY.</h2>
                <div>
                    <h1>
                        Trade
                        <br />
                        Crypto.
                    </h1>
                    <div>
                        <Button>GET STARTED</Button>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src="/images/introduction-1.png"
                    width={366}
                    height={491}
                    alt="Bitcoin machine image"
                />
            </div>
            <div></div>
        </div>
    );
}
