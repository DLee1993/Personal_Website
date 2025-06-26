import ProjectsList from "@/components/ProjectsList";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
    return (
        <section>
            <section className="py-10 px-5 md:py-16 md:px-10 lg:py-20 lg:px-20 space-y-20">
                <article className="space-y-5 max-w-2xl">
                    <h1 className="text-2xl lg:text-4xl max-w-sm lg:max-w-xl font-serif">
                        A Frontend Developer & Kickboxer based in the UK.
                    </h1>
                    <p>
                        I&apos;m a React-based Dev that aims to create an experience that goes
                        beyond the visuals—sites that serve, inform, and engage. I build with
                        intention, not just for clicks or profit, but to make a genuine impact.
                    </p>
                </article>
                <SocialLinks />
            </section>
            <ProjectsList />
        </section>
    );
}
