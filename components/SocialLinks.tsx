import data from "@/data/navData.json";
import Link from "next/link";

export default function SocialLinks() {
    return (
        <ul className="flex flex-wrap gap-5">
            {data.socialLinks.map((link, i) => (
                <li key={i}>
                    <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tertiary hover:text-secondary transition-colors"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
