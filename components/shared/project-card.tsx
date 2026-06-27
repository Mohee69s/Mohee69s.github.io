import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <AnimatedSection delay={delay}>
      <Card className="group h-full transition-transform duration-200 hover:-translate-y-1">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="rounded-lg border border-border bg-muted p-2 text-muted-foreground">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
            <Badge>Placeholder</Badge>
          </div>
          <div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="mt-3 leading-relaxed">
              {project.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="aspect-video rounded-lg border border-border bg-gradient-to-b from-muted to-background" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Link
              href={project.githubUrl}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-border bg-transparent px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
            <Link
              href={project.liveUrl}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
