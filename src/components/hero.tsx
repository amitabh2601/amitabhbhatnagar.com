"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CodeBackground } from "./code-background";
import { TypedText } from "./typed-text";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
} from "./brand-icons";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "Twitter / X", href: "https://twitter.com", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <CodeBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start px-5 pt-28 pb-16 sm:px-8">
        {/* status line */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>~/amitabh — available for hard problems</span>
        </motion.div>

        {/* name */}
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Amitabh Bhatnagar
        </motion.h1>

        {/* subtitle */}
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-4 text-sm sm:text-lg text-muted"
        >
          SDE III <span className="text-accent">·</span> AI Systems{" "}
          <span className="text-accent">·</span> Expedia Group
        </motion.p>

        {/* typed tagline */}
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 font-mono text-lg sm:text-2xl"
        >
          <span className="text-muted">$ </span>
          <TypedText text="I build things that think." />
        </motion.div>

        {/* bio */}
        <motion.p
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base"
        >
          8 years shipping AI pipelines, mobile SDKs, and cloud-native systems
          across 16 brands and 25+ regions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
          >
            View My Work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#blog"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            Read My Blog
          </a>
        </motion.div>

        {/* socials */}
        <motion.ul
          custom={6}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center gap-3"
        >
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
