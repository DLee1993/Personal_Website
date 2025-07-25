"use client";

import pageLinks from "@/lib/pages.json";
import socialLinks from "@/lib/socials.json";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-dark/10 h-[350px] md:h-[250px] flex flex-col justify-around mb-10 md:mb-0">
            <div className="flex flex-wrap justify-between items-start gap-10">
                <div className="flex flex-wrap gap-20">
                    <ul className="space-y-1">
                        <li className="mb-2.5 font-semibold">Sitemap</li>
                        {pageLinks.map((l, i) => (
                            <li key={i}>
                                <Link
                                    href={l.src}
                                    aria-label={`This is a link to the ${l.title} website page`}
                                    title={`This is a link to the ${l.title} website page`}
                                    className="customUnderlineDark"
                                >
                                    {l.title}
                                    <span className="sr-only">{`this is a link to the ${l.title} page of the website`}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="space-y-1">
                        <li className="mb-2.5 font-semibold">Digital spaces</li>
                        {socialLinks.map((l, i) => (
                            <li key={i}>
                                <Link href={l.src} target="_blank" className="customUnderlineDark">
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="font-semibold">
                    Would you like to know more?{" "}
                    <span className="font-normal">
                        <Link href="/contact" className="customUnderlineDark">
                            Start a conversation
                        </Link>
                    </span>
                </p>
            </div>
            <div className="flex justify-between items-start gap-10 flex-wrap">
                <p
                    className="group flex gap-1 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <span>Scroll to top</span>
                    <span className="block relative h-5 w-5 overflow-hidden">
                        <span className="absolute transition-all duration-300 group-hover:-translate-y-5">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 fill-dark -rotate-45"
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
                                className="h-5 w-5 -rotate-45 fill-dark"
                            >
                                <path
                                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </p>
                <p>David Lee &copy; 2025</p>
            </div>
        </footer>
    );
}
