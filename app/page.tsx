import ProjectsList from "@/app/components/ProjectsList";

export default function Home() {
    return (
        <section>
            <h1 className="text-lg max-w-2xl my-36">
                A React-based developer focused on experiences that go beyond aesthetics—building
                websites that serve, inform, and engage. I code with the intention to create
                meaningful, lasting impact.
            </h1>
            <ProjectsList />
        </section>
    );
}
