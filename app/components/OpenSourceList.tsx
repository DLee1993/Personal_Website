import SectionHeader from "@/app/components/SectionHeader";
import opensource from "@/lib/openSource.json";
import Link from "next/link";

export default function OpenSourceList() {
    return (
        <section>
            <SectionHeader text="open source contributions" />
            <p className="max-w-2xl">
                Contributing to open-source projects has been an invaluable learning experience,
                shaping my understanding of software development beyond just writing code.
            </p>
            <ul className="text-sm mt-10">
                {opensource.map((ops, i) => (
                    <li key={i}>
                        <Link
                            href={ops.url}
                            target="_blank"
                            className="relative flex justify-between items-center px-2 h-12 border-t border-dark/10 group"
                        >
                            <h3>{ops.title}</h3>
                            <p className="hidden sm:block w-full max-w-sm">{ops.description}</p>
                            <div className="relative ml-1 h-5 w-5 overflow-hidden">
                                <div className="absolute transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-4">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 fill-dark"
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
                                        className="h-5 w-5 -translate-x-4 fill-dark"
                                    >
                                        <path
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-0 motion-safe:group-hover:h-full transition-all bg-dark/[2.5%] duration-500"></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
