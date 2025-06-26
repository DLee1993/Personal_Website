import data from "@/data/projectList.json";
import Project from "@/components/Project";

export default function ProjectsList() {
    return (
        <section className="px-2 h-fit relative grid grid-cols-2 place-items-center divide-tertiary/50 divide-x mb-40">
            {data.map((project, i) => (
                <Project project={project} index={i} key={i} />
            ))}
        </section>
    );
}
