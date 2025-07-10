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
        });
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
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
            <section className="w-full h-full flex flex-col md:flex-row justify-between items-start p-5 overflow-y-scroll gap-10 md:gap-5">
                <article className="md:max-w-1/2 md:sticky top-0 space-y-10">
                    <div>
                        <sup>{project?.type}</sup>
                        <h3 className="font-semibold text-lg">{project?.title}</h3>
                    </div>
                    <p className="text-light/75">{project?.description}</p>
                    <div className="space-x-10">
                        <Link href={project ? project.repository : ""} className="customUnderlineLight">
                            View the code
                        </Link>
                        <Link href={project ? project.url : ""} className="customUnderlineLight">
                            Visit the site
                        </Link>
                    </div>
                </article>
                <figure className="space-y-5 columns-2 md:columns-1">
                    {project?.images.map((img, i) => (
                        <img src={img.src} alt={img.caption} key={i} className="w-full" />
                    ))}
                </figure>
            </section>
        </section>
    );
}
