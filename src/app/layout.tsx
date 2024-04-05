import { HomeLayout } from "@/components/layouts/HomeLayout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const young = localFont({
    src: "./fonts/young.ttf",
});

export const metadata: Metadata = {
    title: "Coinmyte.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen antialiased bg-background text-white bg-[url('/images/utils/bg.png')] bg-no-repeat bg-cover ",
                    young.className
                )}
            >
                <HomeLayout>{children}</HomeLayout>
            </body>
        </html>
    );
}
