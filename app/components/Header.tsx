import socialLinks from "@/data/socials.json";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 h-16 flex justify-between items-center bg-light z-50">
            <p>David Lee</p>
            <div className="flex justify-between space-x-10 sm:space-x-16 md:space-x-40">
                <div className="flex justify-between space-x-10">
                    <p className="text-dark/50 hidden sm:block">Available for work</p>
                    <ul className="hidden min-[400px]:flex gap-5">
                        {socialLinks.map((l, i) => (
                            <li key={i}>
                                <Link href={l.src} target="_blank" className="customUnderlineDark">
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
