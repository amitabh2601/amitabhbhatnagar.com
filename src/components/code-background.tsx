"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  "{", "}", "<", "/>", "()", "=>", "[]", ";", "const", "async",
  "await", "def", "fn", "&&", "||", "::", "0x1f", "1010", "AI", "λ",
  "#", "$", "~", "...", "import", "return",
];

interface Particle {
  x: number;
  y: number;
  text: string;
  size: number;
  speed: number;
  opacity: number;
  hue: number;
}

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(60, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => createParticle(true));
    };

    const createParticle = (randomY: boolean): Particle => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 20,
      text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: 10 + Math.random() * 12,
      speed: 0.15 + Math.random() * 0.5,
      opacity: 0.06 + Math.random() * 0.22,
      // teal (170) to blue (200) range
      hue: 165 + Math.random() * 40,
    });

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(45, 212, 191, 0.04)";
      ctx.lineWidth = 1;
      const gap = 48;
      for (let x = 0; x <= width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      ctx.font = `400 0px var(--font-geist-mono), monospace`;
      for (const p of particles) {
        p.y -= p.speed;
        if (p.y < -20) Object.assign(p, createParticle(false));
        ctx.font = `400 ${p.size}px ui-monospace, monospace`;
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
      }
      raf = requestAnimationFrame(render);
    };

    init();
    if (prefersReduced) {
      drawGrid();
    } else {
      render();
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      init();
      if (!prefersReduced) render();
      else drawGrid();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
