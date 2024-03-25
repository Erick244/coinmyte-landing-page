import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeaderRootProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function HeaderRoot({ children, ...props }: HeaderRootProps) {
    return (
        <header
            {...props}
            className={cn(
                "flex justify-between items-center py-2 px-10 xl:px-0 max-w-7xl w-full m-auto",
                props.className
            )}
        >
            {children}
        </header>
    );
}
