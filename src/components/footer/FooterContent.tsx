import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FooterContentProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function FooterContent({ children, ...props }: FooterContentProps) {
    return (
        <div
            {...props}
            className={cn(
                "flex justify-between flex-wrap gap-10",
                props.className
            )}
        >
            {children}
        </div>
    );
}
