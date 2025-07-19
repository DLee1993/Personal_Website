"use client";

import Link from "next/link";
import personal from "@/lib//personal.json";
import externalDocs from "@/lib//externalDocs.json";

export default function Information() {
    return (
        <section className="my-16 md:my-20 space-y-20 md:space-y-28 lg:space-y-32">
            <section className="flex flex-wrap justify-between items-end gap-10">
                <article className="space-y-5">
                    <h1 className="text-base space-y-5 max-w-3xl">
                        <p>
                            Continuous learning is the bedrock of my personal and professional
                            development. By tackling hands-on projects, specialized courses, and
                            collaborative challenges, I&apos;ve expanded my skills and reached new
                            milestones. Outside the digital realm, I test my mental and physical
                            limits at a kickboxing academy—training rigorously and competing in
                            tournaments.
                        </p>
                        <p>
                            Now I&apos;m ready to launch my career in tech, eager to embrace
                            challenges, drive innovation, and develop solutions with real impact.
                        </p>
                    </h1>
                </article>
                <Link
                    href={externalDocs[0].resume}
                    target="_blank"
                    className="customUnderlineDark cursor-pointer"
                >
                    View Resume
                </Link>
            </section>
            <section className="flex flex-wrap gap-10 sm:gap-20 md:gap-32 lg:gap-40">
                {personal.map((p, i) => (
                    <ul key={i}>
                        <li className="text-xs text-dark/75 mb-3">{p.listHeader}</li>
                        {p.listItems.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ))}
            </section>
        </section>
    );
}
