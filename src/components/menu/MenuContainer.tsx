"use client";
import { useMenuContext } from "@/contexts/ui/MenuContext";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MenuContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MenuContainer({ children, ...props }: MenuContainerProps) {
    const { menuIsVisible } = useMenuContext();

    return (
        <>
            <div
                {...props}
                className={cn(
                    "absolute top-0 right-0 w-screen h-screen bg-primary/30 transition-all duration-500 backdrop-blur-sm",
                    menuIsVisible
                        ? "visible opacity-100"
                        : "invisible opacity-0",
                    props.className
                )}
            />
            {children}
        </>
    );
}
