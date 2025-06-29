import type { Metadata } from "next";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen antialiased bg-primary text-secondary`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

/*
# Notes

- minimal header with animate down menu
- scale down projects list, animate scale on scroll,
- list in the center of the page, make it only half the width of the page to have a natural border around the egde
- project info shows up on the image and links to project popup
- project popup has a small description, images and links to project and github repo
- collabs section is an accordian with a title, description and link to project
- contact is direct to email
- the only additional page is the info/about page
- the about page will have information about me, teck stack and anything extra i can think of
- all pages share header, footer

*/
