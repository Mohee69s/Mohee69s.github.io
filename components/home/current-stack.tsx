import { Cpu, Database, Laptop, Wrench } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/animated-section";

const items = [
  { title: "Current Stack", text: "TypeScript, Node.js, NestJS, MySQL, Redis", icon: Cpu },
  { title: "Currently Learning", text: "Compilers, memory models, and async runtime internals", icon: Database },
  { title: "Linux Setup", text: "EndeavourOS + Hyprland + Wayland", icon: Laptop },
  { title: "Favorite Tools", text: "Neovim, Git, Docker, tmux", icon: Wrench },
];

export function CurrentStack() {
  return (
    <Section title="Technical Snapshot" subtitle="What I use and what I am exploring now.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <AnimatedSection key={item.title} delay={idx * 0.06}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <div className="rounded-md border border-border bg-muted p-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 text-sm text-muted-foreground">
                  {item.text}
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
