"use client";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { HTMLAttributes } from "react";
import { H1 } from "../typography/H1";

export interface AccordionItemRootProps
    extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    title: string;
    isActive?: boolean;
}

export function AccordionItem({
    children,
    title,
    isActive,
    ...props
}: AccordionItemRootProps) {
    return (
        <div className={cn("overflow-hidden", props.className)}>
            <button
                {...props}
                className={cn(
                    "transition-all duration-300 border-2 bg-gradient-to-r to-transparent to-100% from-transparent from-40% border-white w-full flex justify-between items-center p-3 rounded",
                    isActive ? "to-primary" : "rounded-b"
                )}
            >
                <H1 className="text-base sm:text-base">{title}</H1>
                <ChevronUp
                    className={cn(
                        "transition-all duration-300",
                        isActive ? "rotate-0" : "rotate-180"
                    )}
                />
            </button>
            <p
                className={cn(
                    " text-sm overflow-y-scroll transition-all duration-300 border border-white border-t-0 rounded-b p-5",
                    isActive ? "py-5 h-36" : "py-0 h-0 border-0 rounded-none"
                )}
            >
                {children}
            </p>
        </div>
    );
}
