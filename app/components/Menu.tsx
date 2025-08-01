"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import pageLinks from "@/lib/pages.json";
import socialLinks from "@/lib/socials.json";

gsap.registerPlugin(useGSAP);

export default function Menu() {
    const [menuState, setMenuState] = useState(false);
    const pathname = usePathname();

    const toggleMenuState = () => {
        setMenuState(!menuState);
    };

    useGSAP(() => {
        gsap.to("#menu", {
            height: menuState ? "215px" : "44px",
            ease: "power2.inOut",
            duration: 0.75,
        });
        gsap.to("#menu button", {
            rotate: menuState ? "45deg" : "0deg",
        });
    }, [menuState]);

    return (
        <section
            id="menu"
            className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-w-lg h-11 bg-dark/90 backdrop-blur-lg text-light rounded-sm z-50 overflow-hidden flex flex-col justify-between"
        >
            <header className="flex justify-between items-center h-11 border-b border-light/15 px-2">
                <p className="font-light flex justify-center items-center gap-2">
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
            <section className="p-4">
                <div className="flex flex-wrap gap-10 lg:gap-20">
                    <ul className="space-y-1">
                        <li
                            className="text-xs text-light/75 mb-5"
                            aria-label="list of pages you can visit in this website"
                            title="list of pages you can visit in this website"
                        >
                            Sitemap
                        </li>
                        {pageLinks.map((l, i) => (
                            <li key={i}>
                                <Link
                                    href={l.src}
                                    aria-label={`This is a link to the ${l.title} website page`}
                                    title={`This is a link to the ${l.title} website page`}
                                    onClick={toggleMenuState}
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
                        <li
                            className="text-xs text-light/75 mb-5"
                            aria-label="list of my social media profiles"
                        >
                            Digital spaces
                        </li>
                        {socialLinks.map((l, i) => (
                            <li key={i}>
                                <Link
                                    href={l.src}
                                    target="_blank"
                                    className="w-fit flex justify-start items-center gap-2 customUnderlineLight"
                                >
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <footer className="flex justify-end items-center p-2">
                <p className="text-light/50">David Lee &copy; 2025</p>
            </footer>
        </section>
    );
}
