const STACK = [
  "TypeScript",
  "Python",
  "Kotlin",
  "Swift",
  "AWS",
  "Claude",
  "React",
  "Next.js",
  "LangChain",
  "Docker",
];

export function TechTicker() {
  return (
    <div className="marquee-pause relative w-full overflow-hidden border-y border-border/60 bg-card/40 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center"
            aria-hidden={dup === 1}
          >
            {STACK.map((tech) => (
              <li
                key={tech}
                className="flex items-center whitespace-nowrap px-6 text-sm text-muted"
              >
                <span className="mr-6 text-accent">·</span>
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
