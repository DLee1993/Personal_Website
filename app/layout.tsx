import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter_Tight({
    subsets: ["latin", "latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    id="jsonld-person-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "David",
                            url: "https://your-portfolio.com",
                            hasPart: [
                                {
                                    "@type": "WebApplication",
                                    name: "Toolbox",
                                    description:
                                        "A suite of digital tools designed for accessibility and performance.",
                                    applicationCategory: "Utility",
                                },
                                {
                                    "@type": "ArtGallery",
                                    name: "Galleria",
                                    description:
                                        "A digital art gallery experience featuring curated works and responsive design.",
                                },
                                {
                                    "@type": "Game",
                                    name: "Codetype",
                                    description:
                                        "A React-based typing game with Framer Motion animations for speed and accuracy.",
                                    applicationCategory: "EducationalGame",
                                },
                                {
                                    "@type": "WebApplication",
                                    name: "WordUp",
                                    description:
                                        "A modern dictionary application offering searchable definitions and accessibility support.",
                                    applicationCategory: "ReferenceApplication",
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body
                className={`min-h-screen antialiased bg-light text-dark text-[14px] sm:text-[15px] 2xl:text-base px-4 font-medium ${inter.className}`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
