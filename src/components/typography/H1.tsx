import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H1({ children, ...props }: H1Props) {
    return (
        <h2
            {...props}
            className={cn(
                "text-7xl sm:text-8xl [text-shadow:_0px_1px_20px_hsl(var(--primary))]",
                props.className
            )}
        >
            {children}
        </h2>
    );
}
