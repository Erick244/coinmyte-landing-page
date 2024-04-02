import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Introduction } from "@/components/sections/Introduction";
import { Trading } from "@/components/sections/Trading";
import { Trusted } from "@/components/sections/Trusted";

export default function Home() {
    return (
        <div>
            <Introduction />
            <Trusted />
            <Features />
            <Trading />
            <About />
        </div>
    );
}
