import data from "@/data/navData.json";
import Link from "next/link";

export default function SocialLinks({ theme }: { theme: string }) {
    return (
        <ul className="flex gap-2 font-bebas">
            {data.socialLinks.map((link, i) => (
                <li key={i}>
                    <Link
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={`flex items-center gap-1 font-medium group ${
                            theme === "dark"
                                ? "text-secondary stroke-secondary"
                                : "text-primary stroke-primary"
                        }`}
                    >
                        {link.name}
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-3 group-hover:rotate-45 transition-transform duration-300"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M19 11H37V29"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                                <path
                                    d="M11.5441 36.4559L36.9999 11"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
