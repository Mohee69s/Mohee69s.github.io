import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and TypeScript.</p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.github} className="hover:text-foreground">
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} className="hover:text-foreground">
            LinkedIn
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
