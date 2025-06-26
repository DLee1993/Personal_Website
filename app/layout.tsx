import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
            <body className="min-h-screen antialiased bg-primary text-secondary">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
