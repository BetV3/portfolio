import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsSorted, statusLabel } from "@/data/projects";

export default function ProjectsPage() {
  const projects = getProjectsSorted();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Systems I have actually built, at the size they actually are. Each
          page states what is running, what is still in progress, and where the
          numbers came from.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.tagline}
            tags={project.tech.slice(0, 4).map((t) => t.name)}
            href={`/projects/${project.slug}`}
            github={project.github}
            demo={project.demo}
            status={statusLabel[project.status]}
            statusTone={project.status}
          />
        ))}
      </div>
    </div>
  );
}
