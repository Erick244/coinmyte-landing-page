import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

export function Logo(props: HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            {...props}
            href="#"
            className={cn(
                "flex items-center gap-1 select-none",
                props.className
            )}
        >
            <Image
                src="/images/logo-image.png"
                width={67}
                height={67}
                alt="Coinmyte Image Logo"
            />
            <span className="text-sm font-bold">Coinmyte.</span>
        </Link>
    );
}
