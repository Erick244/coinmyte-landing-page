import { SearchIcon } from "lucide-react";
import { Header } from "../header";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="h-screen w-screen">
            <HomeHeader />
            <main>{children}</main>
        </div>
    );
}

function HomeHeader() {
    return (
        <Header.Root>
            <Logo />
            <div className="flex items-center gap-3 text-xs font-semibold">
                <Header.Link href="#">Home</Header.Link>
                <Header.Link href="#">About Us</Header.Link>
                <Header.Link href="#">Swap</Header.Link>
                <Header.Link href="#">Donate</Header.Link>
                <Button className="bg-white text-background font-bold">
                    Get Started
                </Button>
            </div>
            <Button className="bg-transparent">
                <SearchIcon className="w-4 h-4" />
            </Button>
        </Header.Root>
    );
}
