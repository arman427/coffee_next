import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const cormorantGaramond = Lora({
    variable: "--font-cormorantGaramond-sans",
    subsets: ["latin", "cyrillic"],
});

const manropeSans = Manrope({
    variable: "--font-manrope-sans",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://caffein-coffee.com"),
    title: {
        default: "Caffein",
        template: "%s | Caffein",
    },
    description:
        "Уютное спешелти-пространство: свежая обжарка, сезонное меню, зоны для работы и бронирование столиков онлайн.",

    keywords: [
        "кофейня",
        "спешелти кофе",
        "specialty coffee",
        "забронировать столик",
        "coffee shop",
        "table reservation",
        "коворкинг кофейня",
        "свежая обжарка",
    ],

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${cormorantGaramond.variable} ${manropeSans.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
            </body>
        </html>
    );
}
