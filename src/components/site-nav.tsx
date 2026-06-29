"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = ["Work", "Blog", "Travel", "Sports", "Life", "Contact"];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded border border-accent/40 text-sm font-bold tracking-tight text-accent transition-colors hover:bg-accent/10"
          aria-label="Amitabh Bhatnagar home"
        >
          AB
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative transition-colors hover:text-foreground"
              >
                <span className="text-accent">{"// "}</span>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-muted transition-colors hover:text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-col gap-1 border-t border-border/60 px-5 py-3 text-sm text-muted md:hidden"
        >
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-foreground"
              >
                <span className="text-accent">{"// "}</span>
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
