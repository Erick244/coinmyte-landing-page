import MenuContextProvider from "@/contexts/ui/MenuContext";
import { MenuContainer } from "./MenuContainer";
import { MenuContent } from "./MenuContent";
import { MenuTitle } from "./MenuTitle";
import { MenuTrigger } from "./MenuTrigger";

export const Menu = {
    Context: MenuContextProvider,
    Container: MenuContainer,
    Content: MenuContent,
    Title: MenuTitle,
    Trigger: MenuTrigger,
};
