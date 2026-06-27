# Mohee Portfolio

A modern, dark-first, backend-engineer focused portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Reusable shadcn-style UI primitives (`Button`, `Badge`, `Card`, etc.)

## Features

- Multi-page structure: Home, About, Skills, Projects, Experience, Contact
- Data-driven skills/projects/timeline content
- Reusable components and clean folder organization
- Dark-first design with optional theme toggle
- Subtle, reduced-motion aware animations
- Command palette (`Cmd/Ctrl + K`)
- Scroll progress indicator
- SEO metadata, OpenGraph/Twitter cards, robots, sitemap, web manifest
- Accessible semantic structure and keyboard-friendly interactions

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   npm run start
   ```

## Project Structure

```text
app/                # Routes, layout, metadata, sitemap, robots
components/         # Reusable UI/layout/feature components
constants/          # Shared constants (navigation)
data/               # Portfolio content (projects, skills, timeline, site config)
hooks/              # Reusable client hooks
lib/                # Utilities
public/             # Static assets (favicon, OG image)
types/              # Shared TypeScript types
```

## Customization

- Edit personal info in `data/site.ts`
- Update skill groups in `data/skills.ts`
- Replace project placeholders in `data/projects.ts`
- Adjust timeline in `data/timeline.ts`

## Deployment

This project is ready for deployment to Vercel or GitHub Pages workflows that build a Next.js app.