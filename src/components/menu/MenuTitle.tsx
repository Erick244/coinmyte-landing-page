"use client";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { HTMLAttributes } from "react";
import { MenuTrigger } from "./MenuTrigger";

interface MenuTitleProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MenuTitle({ children, ...props }: MenuTitleProps) {
    return (
        <div className="flex justify-between" {...props}>
            <MenuTrigger>
                <XIcon />
            </MenuTrigger>
            <h1 className={cn("text-2xl font-bold", props.className)}>
                {children}
            </h1>
        </div>
    );
}
