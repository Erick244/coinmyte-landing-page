import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H2({ children, ...props }: H2Props) {
    return (
        <h2 {...props} className={cn("font-semibold text-xl", props.className)}>
            {children}
        </h2>
    );
}
