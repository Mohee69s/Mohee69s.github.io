import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/shared/skill-card";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <Section
      title="Skills"
      subtitle="Grouped by practical use, without arbitrary percentages."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <SkillCard key={group.title} group={group} delay={idx * 0.05} />
        ))}
      </div>
    </Section>
  );
}
