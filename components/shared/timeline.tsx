import { TimelineItem } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-6">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />
      {items.map((item, idx) => (
        <AnimatedSection key={item.title} delay={idx * 0.06}>
          <Card className="relative ml-0 md:ml-10">
            <span className="absolute -left-[2.45rem] top-8 hidden h-3 w-3 rounded-full border border-border bg-accent md:block" />
            <CardContent className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <Badge>{item.period}</Badge>
              </div>
              <p className="text-sm font-medium text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
