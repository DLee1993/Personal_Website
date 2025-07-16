import OpenSourceList from "@/app/components/OpenSourceList";
import ProjectsList from "@/app/components/ProjectsList";
import Link from "next/link";

export default function Home() {
    return (
        <section className="space-y-10">
            <div className="min-h-[50vh] flex items-center">
                <h1 className="text-base sm:text-lg max-w-2xl">
                    A React-based developer focused on building websites that go beyond
                    aesthetics—building sites that serve, inform, and engage. I code with the
                    intention to create a meaningful, lasting impact.
                </h1>
            </div>
            <ProjectsList />
            <OpenSourceList />
            <section className="min-h-[50vh] flex justify-center items-center">
                <Link href="/information" className="flex justify-center items-center gap-2 group">
                    <article>
                        <sup>Next page</sup>
                        <p className="text-5xl min-[500px]:text-6xl md:text-8xl">About me</p>
                    </article>
                    <div className="relative h-10 w-10 overflow-hidden">
                        <div className="absolute transition-all duration-300 group-hover:-translate-y-5 md:group-hover:-translate-y-10 group-hover:translate-x-8">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-10 sm:w-10 fill-dark"
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
                                className="h-5 w-5 md:h-10 sm:w-10 -translate-x-8 fill-dark"
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
            </section>
        </section>
    );
}
