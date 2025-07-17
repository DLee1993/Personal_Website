"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import pageLinks from "@/data/pages.json";
import socialLinks from "@/data/socials.json";

gsap.registerPlugin(useGSAP);

export default function Menu() {
    const [menuState, setMenuState] = useState(false);
    const pathname = usePathname();

    const toggleMenuState = () => {
        setMenuState(!menuState);
    };

    useGSAP(() => {
        gsap.to("menu", {
            height: menuState ? "250px" : "44px",
            ease: "power2.inOut",
            duration: 0.75,
        });
        gsap.to("button", {
            rotate: menuState ? "45deg" : "0deg",
        });
    }, [menuState]);

    return (
        <menu className="fixed bottom-5 left-1/2 -translate-x-1/2 w-11/12 max-w-lg h-11 bg-dark/80 backdrop-blur-lg text-light rounded-sm z-50 overflow-hidden flex flex-col justify-between">
            <header
                className="flex justify-between items-center h-12 border-b border-light/15 px-2"
                onClick={toggleMenuState}
            >
                <p className="text-light/50 flex justify-center items-center gap-2">
                    Available for work{" "}
                    <span className="block size-1.5 rounded-full bg-green-500"></span>
                </p>
                <button
                    onClick={toggleMenuState}
                    className="font-thin text-4xl grid place-content-center cursor-pointer mb-1"
                >
                    +
                </button>
            </header>
            <section className="p-4 flex justify-between items-start min-h-40 flex-wrap gap-10">
                <div className="flex flex-wrap gap-20">
                    <ul className="space-y-1">
                        <li className="mb-2.5 font-semibold">Sitemap</li>
                        {pageLinks.map((l, i) => (
                            <li key={i}>
                                <Link
                                    href={l.src}
                                    className={
                                        pathname === l.src
                                            ? "text-light"
                                            : "text-light/50 hover:text-light transition-colors"
                                    }
                                >
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="space-y-1">
                        <li className="mb-2.5 font-semibold">Digital spaces</li>
                        {socialLinks.map((l, i) => (
                            <li key={i}>
                                <Link
                                    href={l.src}
                                    className="w-fit flex justify-start items-center gap-2 customUnderlineLight"
                                >
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    href="/contact"
                    className="mx-auto border border-light rounded-full w-44 h-8 grid place-content-center hover:bg-light hover:text-dark"
                >
                    Start a conversation
                </Link>
            </section>
            <footer className="flex items-center h-12 border-t border-light/15 px-2">
                <p className="text-light/50">David Lee &copy; 2025</p>
            </footer>
        </menu>
    );
}
