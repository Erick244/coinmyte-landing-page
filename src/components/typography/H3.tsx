import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H3({ children, ...props }: H3Props) {
    return (
        <h3
            {...props}
            className={cn("font-semibold text-xl mb-2", props.className)}
        >
            {children}
        </h3>
    );
}
