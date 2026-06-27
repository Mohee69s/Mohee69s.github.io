import { Braces, Camera, Cpu, ServerCog } from "lucide-react";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Compiler Project",
    description:
      "A learning-focused compiler prototype that parses a subset of a language and emits intermediate representation for analysis.",
    stack: ["TypeScript", "AST", "Parsing"],
    githubUrl: "https://github.com/Mohee69s/compiler-project",
    liveUrl: "#",
    icon: Cpu,
  },
  {
    title: "Backend API",
    description:
      "A modular API service with authentication, role-based access, and structured logging designed for predictable operations.",
    stack: ["Node.js", "NestJS", "MySQL", "Redis"],
    githubUrl: "https://github.com/Mohee69s/backend-api",
    liveUrl: "#",
    icon: ServerCog,
  },
  {
    title: "Flutter Photo Sorter",
    description:
      "A mobile utility that classifies and organizes photos into user-defined groups with a simple offline-first experience.",
    stack: ["Flutter", "Dart", "SQLite"],
    githubUrl: "https://github.com/Mohee69s/flutter-photo-sorter",
    liveUrl: "#",
    icon: Camera,
  },
  {
    title: "Linux Automation Scripts",
    description:
      "A collection of shell scripts for workstation setup, backups, and day-to-day automation across Linux environments.",
    stack: ["Bash", "Linux", "Systemd"],
    githubUrl: "https://github.com/Mohee69s/linux-automation-scripts",
    liveUrl: "#",
    icon: Braces,
  },
];
