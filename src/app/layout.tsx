import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "The Walking Dead",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
