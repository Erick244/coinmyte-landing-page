import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Introduction } from "@/components/sections/Introduction";
import { Learn } from "@/components/sections/Learn";
import { Trading } from "@/components/sections/Trading";
import { Trusted } from "@/components/sections/Trusted";
import { Why } from "@/components/sections/Why";

export default function Home() {
    return (
        <div>
            <Introduction />
            <Trusted />
            <Features />
            <Trading />
            <About />
            <Learn />
            <Why />
        </div>
    );
}
