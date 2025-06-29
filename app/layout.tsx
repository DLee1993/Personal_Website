import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "David Lee | Frontend Developer",
    description: "Frontend Developer portfolio of David Lee",
    keywords: [
        "Frontend",
        "Developer",
        "Frontend Developer",
        "React",
        "React Developer",
        "Nextjs Developer",
    ],
    icons: {
        icon: "/portfolioIcon.webp",
    },
};

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas",
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    variable: "--font-nunito",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen antialiased bg-primary text-secondary font-nunito ${nunito.variable} ${bebas.variable}`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
