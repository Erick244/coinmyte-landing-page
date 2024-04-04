import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FooterRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function FooterRoot({ children, ...props }: FooterRootProps) {
    return (
        <footer
            {...props}
            className={cn(
                "pt-20 max-w-7xl m-auto w-full px-10 xl:px-0",
                props.className
            )}
        >
            {children}
        </footer>
    );
}
