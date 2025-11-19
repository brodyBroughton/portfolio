// app/page.tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

const projects = [
  {
    title: "Veilscope",
    description:
      "Web application and marketing website for an AI investment algorithm.",
    tech: ["Next.js", "Web Application", "Investing"],
    link: "https://veilscope.com",
  },
  {
    title: "Local Network Chat App",
    description:
      "Local network chat application enabling real-time messaging without internet access.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/brodyBroughton/simple-local-network-chat-app",
  },
  {
    title: "Note Taking App",
    description:
      "Simple shell script-based note-taking application for quick and easy note management in terminal.",
    tech: ["Shell", "Linux", "Bash"],
    link: "https://github.com/brodyBroughton/note-to-shelf-brodyBroughton",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: "💻",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: "🧠",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Tools & Other",
    icon: "🛠️",
    items: ["Git & GitHub", "VS Code", "Figma", "Vercel"],
  },
];

type FadeInSectionProps = {
  id?: string;
  ariaLabelledBy?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

/**
 * FadeInSection
 * - Slides and fades content in when it enters the viewport
 * - Uses whileInView + viewport.once for scroll-triggered animations
 * - Respects prefers-reduced-motion to avoid animations for those users
 */
function FadeInSection({
  id,
  ariaLabelledBy,
  className,
  children,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const axis: "x" | "y" =
    direction === "left" || direction === "right" ? "x" : "y";
  const distance = 40;
  const from =
    direction === "up" || direction === "left" ? -distance : distance;

  const ariaProps = ariaLabelledBy
    ? { "aria-labelledby": ariaLabelledBy }
    : {};

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className} {...ariaProps}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, [axis]: from }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...ariaProps}
    >
      {children}
    </motion.section>
  );
}

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Site header and navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          {/* Brand link to scroll to top */}
          <button
            className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300"
            onClick={() => {
              // Scroll to top when the brand is clicked
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              closeMobileNav();
            }}
          >
            Brody Broughton
          </button>

          {/* Desktop navigation links */}
          <div className="hidden gap-6 md:flex">
            <a
              href="#about"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile navigation toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-2.5 py-2 text-slate-200 transition hover:border-sky-500/60 hover:text-sky-300 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileNav}
          >
            <span className="sr-only">Open main menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                  mobileNavOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all ${
                  mobileNavOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                  mobileNavOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile navigation panel */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 ${
            mobileNavOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mx-auto flex max-w-5xl flex-col space-y-1 px-4 py-3 text-sm">
            <a
              href="#about"
              className="rounded-md px-2 py-2 text-slate-300 hover:bg-slate-800/70 hover:text-white"
              onClick={closeMobileNav}
            >
              About
            </a>
            <a
              href="#projects"
              className="rounded-md px-2 py-2 text-slate-300 hover:bg-slate-800/70 hover:text-white"
              onClick={closeMobileNav}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="rounded-md px-2 py-2 text-slate-300 hover:bg-slate-800/70 hover:text-white"
              onClick={closeMobileNav}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-md px-2 py-2 text-slate-300 hover:bg-slate-800/70 hover:text-white"
              onClick={closeMobileNav}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero and about section */}
        <FadeInSection
          id="about"
          className="relative flex flex-col gap-10 py-16 md:flex-row md:items-center"
          direction="up"
        >
          {/* Decorative gradient background */}
          <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-72 bg-gradient-to-b from-sky-500/10 via-slate-950 to-slate-950 blur-3xl" />

          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Portfolio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Brody Broughton
            </h1>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              Frontend Developer · Student
            </p>
            <p className="text-base leading-relaxed text-slate-300">
              I&apos;m a{" "}
              <span className="font-semibold text-sky-400">
                frontend developer
              </span>{" "}
              who enjoys building clean, performant, and user-friendly web
              experiences with React &amp; Next.js.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              Student at Jeffco Virtual Academy and the Warren Tech Computer
              Science and Cybersecurity program. Passionate about coding,
              technology, and continuous learning, and actively exploring
              opportunities to apply my skills in real-world projects.
            </p>
            <p className="text-xs text-slate-500">
              Currently open to opportunities where I can grow as a developer
              and contribute to meaningful products.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium transition hover:border-sky-400 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile photo container */}
          <div className="relative mx-auto h-48 w-48 md:h-64 md:w-64 md:translate-y-2">
            <div
              className="absolute inset-0 rounded-3xl bg-sky-500/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900 shadow-xl shadow-sky-500/10">
              <Image
                src="/profile.jpeg"
                alt="Professional headshot of Brody Broughton"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Projects showcase */}
        <FadeInSection
          id="projects"
          ariaLabelledBy="projects-heading"
          className="border-t border-slate-900/60 py-16"
          direction="right"
          delay={0.05}
        >
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A selection of projects that highlight my skills, interests, and the
            technologies I enjoy working with.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/40 transition-transform transition-shadow hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <header className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Project
                  </span>
                </header>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5 text-[11px] text-sky-300">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-sky-500/30 bg-sky-500/5 px-2 py-0.5"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-sky-400 transition group-hover:text-sky-300"
                >
                  View project
                  <span
                    aria-hidden
                    className="ml-1 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </FadeInSection>

        {/* Skills overview */}
        <FadeInSection
          id="skills"
          ariaLabelledBy="skills-heading"
          className="border-t border-slate-900/60 py-16"
          direction="left"
          delay={0.05}
        >
          <h2
            id="skills-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Skills
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Technologies, tools, and platforms I work with regularly.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {skills.map(({ category, icon, items }) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-200">
                  <span aria-hidden>{icon}</span>
                  <span>{category}</span>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Contact information */}
        <FadeInSection
          id="contact"
          ariaLabelledBy="contact-heading"
          className="border-t border-slate-900/60 py-16"
          direction="up"
          delay={0.05}
        >
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Want to get in contact? I&apos;d be happy to connect.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              ● Open to opportunities
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The best way to reach me is by email. Feel free to get in touch
              with questions, collaboration ideas, or opportunities. You can
              contact me at:
            </p>
            <p className="mt-3 text-sm font-medium text-sky-400">
              broughton.brody07@gmail.com
            </p>
            <p className="mt-3 text-xs text-slate-500">
              I aim to respond as soon as possible and appreciate your interest
              in connecting.
            </p>
          </div>
        </FadeInSection>
      </main>

      {/* Site footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Brody Broughton. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/brodyBroughton"
              className="rounded-full border border-slate-700/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300 transition hover:border-sky-500/60 hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brodybroughton/"
              className="rounded-full border border-slate-700/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300 transition hover:border-sky-500/60 hover:text-sky-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
