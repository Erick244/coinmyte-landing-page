import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FooterCopyrightProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

export function FooterCopyright({ children, ...props }: FooterCopyrightProps) {
    return (
        <div {...props} className={cn("mt-20 mb-2 text-sm", props.className)}>
            {children}
        </div>
    );
}
