import { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Timeline } from "@/components/shared/timeline";
import { aboutTimeline } from "@/data/timeline";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="About"
        subtitle="Backend-focused software engineer and QA professional with a strong preference for reliability and clarity."
      >
        <AnimatedSection>
          <Card>
            <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I am a software engineering student and QA engineer with over one year
                of practical experience shipping and validating software.
              </p>
              <p>
                My main focus is backend development. I spend most of my time designing
                APIs, building application logic, and improving system predictability
                under real usage.
              </p>
              <p>
                I use Linux daily and enjoy systems programming concepts because they
                make software behavior easier to reason about from first principles.
              </p>
              <p>
                I am most motivated by difficult technical problems where understanding
                internals changes the quality of the final solution.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </Section>
      <Section title="Timeline" subtitle="How my direction developed over time.">
        <Timeline items={aboutTimeline} />
      </Section>
    </>
  );
}
