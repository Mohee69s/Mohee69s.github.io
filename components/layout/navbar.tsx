"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TerminalSquare } from "lucide-react";
import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/70 backdrop-blur-md">
      <Container className="py-2">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold">
            <TerminalSquare className="h-4 w-4 text-accent" />
            <span>mohee.dev</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
              aria-label="Open command palette"
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            >
              ⌘K
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto py-1" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
