"use client";

import { cn } from "@/lib/utils";
import {
    Children,
    ComponentType,
    HTMLAttributes,
    ReactElement,
    cloneElement,
    useState,
} from "react";
import { AccordionItem, AccordionItemRootProps } from "./AccordionItem";

interface AccordionRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function AccordionRoot({ children, ...props }: AccordionRootProps) {
    const [activeAccordion, setActiveAccordion] = useState<number | null>();

    return (
        <div {...props} className={cn("flex flex-col gap-5", props.className)}>
            {Children.map(children, (child, index) => {
                const isActive = activeAccordion === index;

                const setActiveItem = () => {
                    setActiveAccordion(
                        activeAccordion === index ? null : index
                    );
                };

                return cloneElement(
                    child as ReactElement<
                        AccordionItemRootProps,
                        ComponentType<typeof AccordionItem>
                    >,
                    {
                        isActive,
                        onClick: setActiveItem,
                    }
                );
            })}
        </div>
    );
}
