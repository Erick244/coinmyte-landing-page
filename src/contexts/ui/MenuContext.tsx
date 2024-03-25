"use client";

import {
    MutableRefObject,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface MenuContextProps {
    toggleMenuVisibility: () => void;
    menuIsVisible: boolean;
    menuRef: MutableRefObject<null>;
}

const MenuContext = createContext({} as MenuContextProps);

export default function MenuContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const menuRef = useRef(null);
    const [menuIsVisible, setMenuVisibility] = useState<boolean>(false);

    function toggleMenuVisibility() {
        setMenuVisibility(!menuIsVisible);
    }

    const outsideClick = useCallback(
        (e: MouseEvent) => {
            const menu = menuRef.current as unknown as Element;
            const elementClicked = e.target as Element;

            const elementClickedParentNode =
                elementClicked.parentNode as Element;
            const elementClickedIsTheMenuTrigger =
                elementClicked.id === "menu-trigger" ||
                elementClickedParentNode.id === "menu-trigger";

            if (elementClickedIsTheMenuTrigger) return;

            if (!menu.contains) return;

            const menuNotContainsElementClicked =
                !menu.contains(elementClicked);

            if (menuIsVisible && menuNotContainsElementClicked) {
                setMenuVisibility(false);
            }
        },
        [menuIsVisible]
    );

    useEffect(() => {
        document.addEventListener("click", outsideClick);
    }, [outsideClick]);

    return (
        <MenuContext.Provider
            value={{ toggleMenuVisibility, menuIsVisible, menuRef }}
        >
            {children}
        </MenuContext.Provider>
    );
}

export const useMenuContext = () => useContext(MenuContext);
