import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

export function Logo(props: HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            {...props}
            href="#"
            className={cn("flex items-center gap-1", props.className)}
        >
            <Image
                className="select-none"
                src="/images/utils/logo.png"
                width={167}
                height={67}
                alt="Coinmyte Image Logo"
            />
        </Link>
    );
}
