/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import projects from "@/data/projects.json";
import ProjectView from "@/app/components/ProjectView";
import SectionHeader from "@/app/components/SectionHeader";

export type Project = {
    title: string;
    type: string;
    url: string;
    repository: string;
    description: string;
    images: { src: string; caption: string }[];
};

export default function ProjectsList() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section>
                <SectionHeader text="selected work" />
                {projects.map((p, i) => (
                    <article
                        key={i}
                        className="cursor-pointer group"
                        onClick={() => setSelectedProject(p)}
                    >
                        <div className="sticky top-16 z-40 flex justify-between items-center bg-light">
                            <div className="flex items-baseline gap-2">
                                <p className="text-[10px]">{`0${i + 1}`}</p>
                                <h3>{p.title}</h3>
                            </div>
                            <p className="hidden min-[500px]:block">{p.type}</p>
                            <button className="font-thin text-4xl cursor-pointer">+</button>
                        </div>
                        <figure className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-20">
                            {p.images.map((img, i) => (
                                <div key={i} className="relative h-fit">
                                    <img src={img.src} alt={img.caption} />
                                    <div
                                        id="overlay"
                                        className="w-full h-full absolute top-0 left-0 bg-dark/25"
                                    ></div>
                                </div>
                            ))}
                        </figure>
                    </article>
                ))}
            </section>

            {selectedProject && <ProjectView project={selectedProject} />}
        </>
    );
}
