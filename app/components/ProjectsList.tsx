/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import projects from "@/lib/projects.json";
import SectionHeader from "@/app/components/SectionHeader";
import Link from "next/link";

export type Project = {
    title: string;
    type: string;
    url: string;
    repository: string;
    description: string;
    techStack: string[];
    images: { src: string; caption: string }[];
};

export default function ProjectsList() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const refs = useRef<{ [key: number]: HTMLDivElement }>({}); // Store refs for each item
    const mm = gsap.matchMedia();

    const toggleExpand = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    useGSAP(() => {
        mm.add("(min-width: 401px)", () => {
            projects.forEach(({ id }) => {
                // current ref for the project clicked
                const el = refs.current[id];
                if (!el) return;

                // animate the height of the element
                gsap.to(el, {
                    height: expandedId === id ? "230px" : "40px",
                    ease: "power2.inOut",
                    duration: 0.75,
                });
            });
        });
        mm.add("(max-width: 400px)", () => {
            projects.forEach(({ id }) => {
                // current ref for the project clicked
                const el = refs.current[id];
                if (!el) return;

                // animate the height of the element
                gsap.to(el, {
                    height: expandedId === id ? "250px" : "40px",
                    ease: "power2.inOut",
                    duration: 0.75,
                });
            });
        });
    }, [expandedId]);

    return (
        <>
            <section className="space-y-10">
                <SectionHeader text="selected work" />
                {projects.map((p, i) => (
                    <article
                        key={i}
                        className="relative group cursor-pointer"
                        onClick={() => toggleExpand(p.id)}
                    >
                        <div
                            ref={(el) => {
                                if (el) refs.current[p.id] = el;
                            }}
                            className="sticky top-16 z-40 h-10 bg-light overflow-hidden"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-baseline gap-2">
                                    <p className="text-[10px]">{`0${i + 1}`}</p>
                                    <h2>{p.title}</h2>
                                </div>
                                <p className="hidden min-[500px]:block">{p.type}</p>
                                <button className="font-thin text-4xl overflow-hidden cursor-pointer">
                                    <span
                                        className={`block transition-transform duration-300 ${
                                            expandedId === p.id ? "rotate-45" : "rotate-0"
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>
                            </div>
                            <section className="px-2.5 py-5 md:py-7 md:px-5 space-y-10">
                                <p className="max-w-xl">{p.description}</p>
                                <section className="flex justify-between items-end flex-wrap space-y-10 min-[440px]:space-y-0">
                                    <div className="flex gap-5">
                                        <Link
                                            href={p.repository}
                                            target="_blank"
                                            className="customUnderlineDark"
                                        >
                                            View Repository
                                        </Link>
                                        <Link
                                            href={p.url}
                                            target="_blank"
                                            className="customUnderlineDark"
                                        >
                                            Live Site
                                        </Link>
                                    </div>
                                </section>
                            </section>
                        </div>
                        <figure className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                            {p.images.map((img, i) => (
                                <div key={i} className="relative h-fit">
                                    <img src={img.src} alt={img.caption} />
                                    <div
                                        id="overlay"
                                        className="w-full h-full absolute top-0 left-0 bg-dark/5"
                                    ></div>
                                </div>
                            ))}
                        </figure>
                    </article>
                ))}
            </section>
        </>
    );
}
