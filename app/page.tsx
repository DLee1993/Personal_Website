import ProjectsList from "@/app/components/ProjectsList";

export default function Home() {
    return (
        <section>
            <h1 className="text-md md:text-lg max-w-xl my-20">
                A a React-based developer focused on experiences that go beyond aesthetics—building
                websites that serve, inform, and engage. I code with the intention to create
                meaningful, lasting impact.
            </h1>
            <ProjectsList />
        </section>
    );
}
