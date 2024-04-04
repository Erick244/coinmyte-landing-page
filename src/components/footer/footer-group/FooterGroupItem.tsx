import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface FooterGroupItemProps extends ComponentProps<typeof Link> {
    children: React.ReactNode;
}

export function FooterGroupItem({ children, ...props }: FooterGroupItemProps) {
    return (
        <Link
            {...props}
            className={cn(
                "transition-all hover:text-primary hover:translate-x-2",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
