"use client";
import { useMenuContext } from "@/contexts/ui/MenuContext";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MenuContentProps extends HTMLAttributes<HTMLMenuElement> {
    children: React.ReactNode;
}

export function MenuContent({ children, ...props }: MenuContentProps) {
    const { menuRef, menuIsVisible } = useMenuContext();

    return (
        <menu
            {...props}
            ref={menuRef}
            className={cn(
                "w-10/12 h-screen px-5 py-8 flex flex-col gap-10 max-w-sm bg-gradient-to-br to-primary to-100% from-background from-40% absolute top-0 right-0 transition-all duration-500 ease-custom overflow-hidden shadow-lg shadow-black/30 border-l-4 border-primary",
                menuIsVisible
                    ? "visible opacity-100 translate-x-0"
                    : "invisible opacity-0 translate-x-full",
                props.className
            )}
        >
            {children}
        </menu>
    );
}
