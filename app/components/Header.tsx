import socialLinks from "@/lib//socials.json";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 h-16 flex justify-between items-center bg-light z-50">
            <Link href={"/"}>David Lee</Link>
            <div className="flex justify-between space-x-10 sm:space-x-16 md:space-x-40">
                <div className="flex justify-between min-[500px]:space-x-8 md:space-x-14">
                    <p className="text-dark/75 block">Cardiff, United Kingdom</p>
                    <ul className="hidden min-[500px]:flex gap-5">
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
