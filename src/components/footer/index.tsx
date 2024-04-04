import { FooterContent } from "./FooterContent";
import { FooterCopyright } from "./FooterCopyright";
import { FooterRoot } from "./FooterRoot";
import { FooterGroupRoot } from "./footer-group";
import { FooterGroupItem } from "./footer-group/FooterGroupItem";

export const Footer = {
    Root: FooterRoot,
    Content: FooterContent,
    Group: {
        Root: FooterGroupRoot,
        Item: FooterGroupItem,
    },
    Copyright: FooterCopyright,
};
