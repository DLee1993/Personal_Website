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
                                    className="flex justify-start items-center gap-2 group"
                                >
                                    {l.title}
                                    <div className="relative h-2.5 w-2.5 overflow-hidden">
                                        <div className="absolute transition-all duration-300 group-hover:-translate-y-2.5 group-hover:translate-x-5">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5 fill-light"
                                            >
                                                <path
                                                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5 -translate-x-5 fill-light"
                                            >
                                                <path
                                                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
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
