import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  icon: LucideIcon;
}
