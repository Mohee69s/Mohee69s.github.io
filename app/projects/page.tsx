import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Reusable project cards populated from a dedicated data source."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={idx * 0.06} />
        ))}
      </div>
    </Section>
  );
}
