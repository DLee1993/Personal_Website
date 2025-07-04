import Menu from "@/app/components/Menu";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 flex justify-between items-center bg-gradient-to-b from-dark to-dark/25 backdrop-blur-lg p-5">
            <p className="font-jetBrains uppercase flex flex-col h-6 w-fit overflow-hidden">
                <span className="h-6">david lee</span>
                <span className="h-6">available for work</span>
            </p>
            <div className="flex gap-10">
                <Menu />
                <Link href="/contact">Get in touch</Link>
            </div>
        </header>
    );
}
