/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Project } from "@/app/components/ProjectsList";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function ProjectView({
    project,
    open,
    setOpen,
}: {
    project: Project;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const togglePopup = () => {
        setOpen(false);
    };

    useGSAP(() => {
        gsap.to("#popup", {
            y: open ? 0 : "100%",
            ease: "power2.inOut",
            duration: 0.75,
        });
        gsap.to(document.body, {
            overflowY: open ? "hidden" : "auto",
        });
    }, [open]);

    return (
        <section
            id="popup"
            className="fixed bottom-0 left-0 z-50 bg-dark text-light w-full h-full md:h-4/5 m-0 translate-y-full"
        >
            <nav className="flex justify-end items-center h-16 px-2">
                <button
                    onClick={() => togglePopup()}
                    className="font-thin text-4xl h-fit cursor-pointer"
                >
                    <span className="inline-block rotate-45">+</span>
                </button>
            </nav>
            <section className="w-full h-full flex flex-col md:flex-row justify-between items-start px-2 sm:px-4 md:px-5 overflow-y-scroll gap-10">
                <article className="md:max-w-1/2 md:sticky top-0 space-y-10">
                    <div>
                        <sup className="text-xs text-light/50">{project?.type}</sup>
                        <h3 className="font-semibold text-xl">{project?.title}</h3>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs text-light/50">Description</p>
                        <p className="text-xs sm:text-sm">{project?.description}</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-light/50">Tech stack</p>
                        <ul className="flex flex-wrap gap-2 capitalize text-xs sm:text-sm">
                            {project?.techStack.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-x-10">
                        <Link
                            href={project ? project.url : ""}
                            className="border border-light px-4 py-2 text-xs sm:text-sm rounded-md hover:text-dark hover:bg-light"
                        >
                            Visit the site
                        </Link>
                        <Link
                            href={project ? project.repository : ""}
                            className="customUnderlineLight text-xs sm:text-sm"
                        >
                            View the code
                        </Link>
                    </div>
                </article>
                <figure className="space-y-5 columns-2">
                    {project?.images.map((img, i) => (
                        <img src={img.src} alt={img.caption} key={i} />
                    ))}
                </figure>
            </section>
        </section>
    );
}
