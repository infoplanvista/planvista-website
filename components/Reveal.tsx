"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  delay?: number;
  trigger?: "scroll" | "load";
  start?: string;
};

export default function Reveal({
  children,
  className,
  y = 28,
  stagger,
  delay = 0,
  trigger = "scroll",
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: stagger ?? 0,
          delay,
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: el, start, toggleActions: "play none none none" }
              : undefined,
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, stagger, delay, trigger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
