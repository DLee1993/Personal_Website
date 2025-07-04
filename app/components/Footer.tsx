import Link from "next/link";
import pages from "@/data/pages.json";
import socials from "@/data/socials.json";

export default function Footer() {
    return (
        <footer className="p-5 flex justify-between items-end border-t border-light/25">
            <div className="flex justify-between items-start w-full max-w-2xl">
                <ul>
                    <li className="font-jetBrains uppercase text-light/50 mb-5">sitemap</li>
                    {pages.map((p, i) => (
                        <li key={i}>
                            <Link
                                href={p.src}
                                className="block font-medium hover:translate-x-2 transition-transform duration-300"
                            >
                                {p.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="font-jetBrains uppercase text-light/50 mb-5">location</li>
                    <li>Cardiff, United Kingdom</li>
                </ul>
                <ul>
                    <li className="font-jetBrains uppercase text-light/50 mb-5">socials</li>
                    {socials.map((s, i) => (
                        <li key={i}>
                            <Link
                                href={s.src}
                                target="_blank"
                                className="block font-medium hover:translate-x-2 transition-transform duration-300"
                            >
                                {s.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="w-fit font-medium text-light/50">Copyright &copy; 2025</p>
        </footer>
    );
}
