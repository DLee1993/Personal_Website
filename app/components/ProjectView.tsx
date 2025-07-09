import { Project } from "@/app/components/ProjectsList";

export default function ProjectView({ project }: { project: Project }) {
    return (
        <div className="fixed bottom-0 left-0 z-50 bg-dark text-light w-full h-2/3">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* You can animate in more details with Framer Motion or GSAP here */}
        </div>
    );
}
