import { SkillGroup } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";

interface SkillCardProps {
  group: SkillGroup;
  delay?: number;
}

export function SkillCard({ group, delay = 0 }: SkillCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{group.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <Badge key={item} className="text-xs text-foreground">
              {item}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
