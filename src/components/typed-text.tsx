"use client";

import { useEffect, useState } from "react";

interface TypedTextProps {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
}

export function TypedText({
  text,
  startDelay = 400,
  speed = 65,
  className,
}: TypedTextProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text.length, speed]);

  const done = count >= text.length;

  return (
    <span className={className}>
      <span className="text-accent">{text.slice(0, count)}</span>
      <span
        className={`ml-0.5 inline-block w-[0.6ch] -mb-0.5 bg-accent ${
          done ? "caret" : ""
        }`}
        style={{ height: "1em" }}
        aria-hidden="true"
      >
        &nbsp;
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
