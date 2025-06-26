import type { Metadata } from "next";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen h-[200vh] antialiased bg-primary text-secondary font-medium tracking-wide">
                {children}
            </body>
        </html>
    );
}
