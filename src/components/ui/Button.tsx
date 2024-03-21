import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "px-2 py-1 rounded-full bg-background hover:opacity-95 flex justify-center items-center",
                props.className
            )}
        >
            {children}
        </button>
    );
}
