/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Project({ project, index }) {
    useGSAP(() => {
        document.querySelectorAll(".ticker").forEach((ticker) => {
            const inner = ticker?.querySelector(".ticker-wrap");
            const content = ticker?.querySelector(".ticker-text");
            inner?.append(content!.cloneNode(true));

            const animations = [];

            inner?.querySelectorAll(".ticker-text").forEach((el) => {
                const anim = gsap.to(el, {
                    x: "-200%",
                    repeat: -1,
                    duration: 20,
                    ease: "linear",
                });
                animations.push(anim);
            });
        });
    });

    return (
        <Link key={`project-${index}`} href={project.url} className="w-full space-y-5 p-3 group">
            <figure className="relative overflow-hidden h-96 rounded-md">
                <div className="ticker w-full absolute top-1/2 left-1/2 z-10 -translate-1/2 whitespace-nowrap">
                    <div className="ticker-wrap flex justify-center items-center gap-5 h-0 group-hover:h-10 transition-all duration-300 overflow-hidden bg-primary">
                        <span className="ticker-text flex justify-center items-center gap-5">
                            View Project
                            <span>-</span>
                        </span>
                    </div>
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="absolute z-0 top-1/2 left-1/2 -translate-1/2"
                />
                <img
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className="absolute scale-0 group-hover:scale-100 z-10 top-1/2 left-1/2 -translate-1/2 transition-all duration-300"
                />
            </figure>
            <article>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </article>
        </Link>
    );
}
