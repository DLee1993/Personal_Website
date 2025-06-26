"use client";

import data from "@/data/navData.json";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Header() {
    const pathname = usePathname();

    useGSAP(() => {
        gsap.to(["#el1", "#el2"], {
            scrollTrigger: {
                trigger: document.querySelector("body"),
                start: "top+=50 top",
                end: "center center",
                scrub: 1,
                // markers: true,
            },
            y: "-100%",
        });
    });

    return (
        <header className="sticky top-0 left-0 z-50 w-full flex justify-between items-center h-16 px-2.5 sm:px-5 md:px-7 lg:px-10 bg-primary">
            <p className="relative flex flex-col h-6 w-40 overflow-hidden">
                <span id="el1" className="h-6">
                    David Lee
                </span>
                <span id="el2" className="h-6 flex gap-2 items-center translate-y-10">
                    <span className="size-2 rounded-full bg-accent"></span>
                    Available for work
                </span>
            </p>
            <ul className="flex flex-wrap gap-5 capitalize">
                {data.navItems.map((item, i) => (
                    <li key={i}>
                        <Link
                            href={item.href}
                            className={
                                pathname === item.href
                                    ? "text-secondary"
                                    : "text-tertiary hover:text-secondary transition-colors"
                            }
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
