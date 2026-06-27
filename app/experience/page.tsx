import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Timeline } from "@/components/shared/timeline";
import { experienceTimeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <Section
      title="Experience"
      subtitle="A concise timeline of professional and academic technical work."
    >
      <Timeline items={experienceTimeline} />
    </Section>
  );
}
