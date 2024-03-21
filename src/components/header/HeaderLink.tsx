import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface HeaderLinkProps extends ComponentProps<typeof Link> {
    children: React.ReactNode;
    href: string;
}

export function HeaderLink({ children, ...props }: HeaderLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                "transition-all duration-300 hover:bg-white/30 p-2 rounded-lg",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
