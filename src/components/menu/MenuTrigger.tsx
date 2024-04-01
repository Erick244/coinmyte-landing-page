"use client";
import { useMenuContext } from "@/contexts/ui/MenuContext";
import { cn } from "@/lib/utils";
import { Children, HTMLAttributes, cloneElement } from "react";
import { Button } from "../ui/Button";

interface MenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MenuTrigger({ children, ...props }: MenuTriggerProps) {
    const { toggleMenuVisibility } = useMenuContext();

    return (
        <Button
            {...props}
            className={cn("bg-transparent text-white", props.className)}
            id="menu-trigger"
            onClick={toggleMenuVisibility}
        >
            {Children.map(children, (child) =>
                cloneElement(child as any, { id: "menu-trigger" })
            )}
        </Button>
    );
}
