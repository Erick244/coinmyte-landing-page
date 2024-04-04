import { H3 } from "@/components/typography/H3";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FooterGroupRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    title: string;
}

export function FooterGroupRoot({
    children,
    title,
    ...props
}: FooterGroupRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "border-l-2 border-b-4 rounded border-white pl-3 pb-3",
                props.className
            )}
        >
            <H3>{title}</H3>
            <div className="flex flex-col text-sm gap-2">{children}</div>
        </div>
    );
}
