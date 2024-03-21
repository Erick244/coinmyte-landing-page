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
                "flex justify-between items-center border-b-2 border-white px-2 sm:px-10 md:px-20 lg:px-52 xl:px-64 py-2",
                props.className
            )}
        >
            {children}
        </header>
    );
}
