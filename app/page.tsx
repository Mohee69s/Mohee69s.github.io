import Link from "next/link";
import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { CurrentStack } from "@/components/home/current-stack";
import { Section } from "@/components/shared/section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/shared/skill-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentStack />
      <Section title="Featured Projects" subtitle="A few builds that reflect how I approach problem solving.">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.08} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects">
            <Button variant="outline">See all projects</Button>
          </Link>
        </div>
      </Section>
      <Section title="Core Skills" subtitle="Technical capabilities used consistently in production and project work.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 3).map((group, idx) => (
            <SkillCard key={group.title} group={group} delay={idx * 0.06} />
          ))}
        </div>
      </Section>
    </>
  );
}
