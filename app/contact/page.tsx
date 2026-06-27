import Link from "next/link";
import { Metadata } from "next";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/contact-form";
import { CopyEmailButton } from "@/components/shared/copy-email-button";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", value: "@Mohee69s", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", value: "Profile", href: siteConfig.linkedin, icon: Linkedin },
  { label: "Discord", value: siteConfig.discord, href: "#", icon: MessageSquare },
];

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Open to backend roles, collaboration, and interesting technical problems.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>Reach Out</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-muted"
                >
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {item.label}
                  </span>
                  <span className="text-muted-foreground">{item.value}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <CopyEmailButton email={siteConfig.email} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
