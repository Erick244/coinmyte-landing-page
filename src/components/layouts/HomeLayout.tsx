import { MenuIcon, SearchIcon } from "lucide-react";
import { Header } from "../header";
import { Menu } from "../menu";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <HomeHeader />
            <main>{children}</main>
        </div>
    );
}

function HomeHeader() {
    return (
        <Header.Root>
            <Logo />
            <div className="flex items-center gap-3 text-xs font-semibold md:flex hidden">
                <HomeHeaderLinks />
            </div>
            <div className="flex gap-5 items-center">
                <Button className="bg-transparent">
                    <SearchIcon className="w-4 h-4" />
                </Button>
                <HomeMenu />
            </div>
        </Header.Root>
    );
}

function HomeHeaderLinks() {
    return (
        <>
            <Header.Link href="#">Home</Header.Link>
            <Header.Link href="#">About Us</Header.Link>
            <Header.Link href="#">Swap</Header.Link>
            <Header.Link href="#">Donate</Header.Link>
            <Button className="bg-white text-background font-bold">
                Get Started
            </Button>
        </>
    );
}

export function HomeMenu() {
    return (
        <Menu.Context>
            <Menu.Trigger className="md:hidden flex">
                <MenuIcon />
            </Menu.Trigger>
            <Menu.Container>
                <Menu.Content>
                    <Menu.Title>Menu</Menu.Title>
                    <HomeHeaderLinks />
                </Menu.Content>
            </Menu.Container>
        </Menu.Context>
    );
}
