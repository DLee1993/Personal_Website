import socialLinks from "@/data/socials.json";
import Menu from "@/app/components/Menu";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 py-4 flex justify-between items-center font-medium">
            <p>David Lee</p>
            <div className="flex justify-between space-x-10 sm:space-x-16 md:space-x-20">
                <p className="text-dark/50 hidden sm:block">Cardiff, United Kingdom</p>
                <ul className="hidden min-[400px]:flex gap-5">
                    {socialLinks.map((l, i) => (
                        <li key={i}>
                            <Link
                                href={l.src}
                                target="_blank"
                                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                                {l.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul></ul>
                <Menu />
            </div>
        </header>
    );
}
