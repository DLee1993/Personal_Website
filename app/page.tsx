import OpenSourceList from "@/app/components/OpenSourceList";
import ProjectsList from "@/app/components/ProjectsList";
import SectionHeader from "@/app/components/SectionHeader";

export default function Home() {
    return (
        <section>
            <div className="min-h-[50vh] flex items-center">
                <h1 className="text-lg max-w-2xl">
                    A React-based developer focused on building websites that go beyond
                    aesthetics—building sites that serve, inform, and engage. I code with the
                    intention to create meaningful, lasting impact.
                </h1>
            </div>
            <ProjectsList />
            <section className="my-20 space-y-10">
                <SectionHeader text="open source contributions" />
                <p className="max-w-2xl">
                    Contributing to open-source projects has been an invaluable learning experience,
                    shaping my understanding of software development beyond just writing code.
                </p>
                <OpenSourceList />
            </section>
        </section>
    );
}
