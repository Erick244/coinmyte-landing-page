import { MenuIcon, SearchIcon } from "lucide-react";
import { Footer } from "../footer";
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
            <Footer.Root>
                <Footer.Content>
                    <Footer.Group.Root title="COINMYTE">
                        <Footer.Group.Item href="#">About Us</Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            What We Do
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Our Platform
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Trading Crypto
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Other Products
                        </Footer.Group.Item>
                    </Footer.Group.Root>
                    <Footer.Group.Root title="CRYPTO">
                        <Footer.Group.Item href="#">
                            Learn from Experts
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Trading Basics
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            The Market
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">FAQs</Footer.Group.Item>
                    </Footer.Group.Root>
                    <Footer.Group.Root title="OUR TEAM">
                        <Footer.Group.Item href="#">The Team</Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Our Sponsors
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">Careers</Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Trading Experts
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Affiliate Program
                        </Footer.Group.Item>
                    </Footer.Group.Root>
                    <Footer.Group.Root title="LEGAL">
                        <Footer.Group.Item href="#">
                            Privacy Policy
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">Cookies</Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Copyright Info
                        </Footer.Group.Item>
                        <Footer.Group.Item href="#">
                            Terms & Conditions
                        </Footer.Group.Item>
                    </Footer.Group.Root>
                </Footer.Content>
                <Footer.Copyright>
                    Copyright © {new Date().getFullYear()} Coinmyte Inc. All
                    Rights Reserved.
                </Footer.Copyright>
            </Footer.Root>
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
