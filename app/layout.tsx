import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
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
    openGraph: {
        title: "David's Portfolio",
        description:
            "Designed to perform, built with intention. Explore interactive, accessible, and responsive web projects powered by modern tools.",
        url: "https://your-portfolio.com",
        type: "website",
        images: [
            {
                url: "https://your-portfolio.com/preview-image.jpg",
                width: 1200,
                height: 630,
                alt: "Preview of David's portfolio site",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "David's Portfolio",
        description: "Creative developer crafting performant and intentional web experiences.",
        images: ["https://your-portfolio.com/preview-image.jpg"],
    },
    metadataBase: new URL("https://your-portfolio.com"),
};

const jetBrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetBrains",
});

const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jetBrains.variable} ${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
