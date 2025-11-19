# Portfolio

A polished single-page portfolio built with Next.js that highlights Brody Broughton’s work, skills, and contact details. The site uses animated sections, responsive navigation, and a clean dark theme to deliver a professional presentation.

## Features
- **Hero & About**: Clear introduction with role, tagline, and calls to action for projects and contact.
- **Projects Grid**: Cards for Veilscope, a local network chat app, and a shell note-taking tool, each with tech tags and external links.
- **Skills by Category**: Frontend, backend, and tooling skills displayed as labeled chips for quick scanning.
- **Contact Card**: Email-first contact section with availability indicator and response expectation.
- **Responsive Navigation**: Desktop links, animated mobile menu, and smooth scrolling.
- **Motion with A11y Considerations**: Section fade/slide animations using Framer Motion that respect `prefers-reduced-motion`.

## Tech Stack
- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- Tailwind CSS utilities (Next.js built-in styling pipeline)
- TypeScript

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the portfolio. Edits to `app/page.tsx` hot-reload in the browser.

## Available Scripts
- `npm run dev` &mdash; start the Next.js dev server.
- `npm run build` &mdash; create an optimized production build.
- `npm start` &mdash; serve the production build.
- `npm run lint` &mdash; run ESLint.

## Content Overview
- **Projects**: Defined in `projects` array in `app/page.tsx`.
- **Skills**: Defined in `skills` array in `app/page.tsx`.
- **Sections**: Hero/About, Projects, Skills, Contact, and Footer are composed in `HomePage` within `app/page.tsx`.

## Deployment
Deploy on any Next.js-compatible host (e.g., Vercel). Build with `npm run build` and serve with `npm start`.
