import type { Metadata } from "next";
import "./globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const metadata: Metadata = {
    title: "David Lee | Frontend Developer",
    description: "Frontend Developer portfolio of David Lee",
    keywords: ["Frontend", "Developer", "Frontend Developer", "React", "React Developer", "Nextjs Developer"],
    icons: {
        icon: "/portfolioIcon.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-primary text-secondary">{children}</body>
        </html>
    );
}
