"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(
  ref: React.RefObject<HTMLElement>,
  threshold = 0.15
): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return visible;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  disableAnimation?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  disableAnimation = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<HTMLElement>);

  const style = disableAnimation
    ? { opacity: 1, transform: "none", transition: "none", display: "block" }
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        display: "block",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}