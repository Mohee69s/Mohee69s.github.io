import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TerminalWindow } from "@/components/shared/terminal-window";
import { CodeBlock } from "@/components/shared/code-block";
import { AnimatedSection } from "@/components/shared/animated-section";

const snippet = `$ whoami
mohee

$ cat focus.txt
- Backend services
- API design
- Linux automation
- Systems internals

$ echo "I build reliable software."
I build reliable software.`;

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]" />
      <div className="pointer-events-none absolute left-1/4 top-24 -z-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl md:h-72 md:w-72" />
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <AnimatedSection>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Software Engineer
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I design backend systems that stay understandable under pressure. Most of
              my work lives where application logic, data consistency, and operations
              meet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects">
                <Button size="lg">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={siteConfig.github}>
                <Button variant="outline" size="lg">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.12}>
          <TerminalWindow title="~/workspace/portfolio">
            <CodeBlock code={snippet} />
          </TerminalWindow>
        </AnimatedSection>
      </Container>
    </section>
  );
}
