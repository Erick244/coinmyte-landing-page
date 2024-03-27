import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function P({ children, ...props }: PProps) {
    return (
        <p {...props} className={cn("text-xs text-pretty", props.className)}>
            {children}
        </p>
    );
}
