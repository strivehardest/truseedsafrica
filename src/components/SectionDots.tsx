"use client";
import { useEffect, useState, useCallback } from "react";
import { COLORS } from "@/lib/constants";

interface Section {
  id: string;
  label: string;
}

interface SectionDotsProps {
  sections: Section[];
}

export default function SectionDots({ sections }: SectionDotsProps) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  const updateActive = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;
    const total = document.documentElement.scrollHeight - window.innerHeight;

    // Hide dots near top of page
    setVisible(window.scrollY > 200);

    let current = 0;
    sections.forEach((section, i) => {
      const el = document.getElementById(section.id);
      if (el && el.offsetTop <= scrollY) current = i;
    });
    setActive(current);
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .section-dots {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 900;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .section-dots.visible {
          opacity: 1;
          pointer-events: auto;
        }
        .section-dot-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          cursor: pointer;
        }
        .section-dot-label {
          position: absolute;
          right: 22px;
          background: rgba(23,79,23,0.92);
          color: #fff;
          font-size: 11px;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
          white-space: nowrap;
          padding: 4px 10px;
          border-radius: 3px;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.2s, transform 0.2s;
          pointer-events: none;
        }
        .section-dot-label::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: rgba(23,79,23,0.92);
          border-right: none;
        }
        .section-dot-wrap:hover .section-dot-label {
          opacity: 1;
          transform: translateX(0);
        }
        .section-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 2px solid rgba(212,160,23,0.5);
          background: transparent;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .section-dot.active {
          background: ${COLORS.gold};
          border-color: ${COLORS.gold};
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(212,160,23,0.6);
        }
        .section-dot-wrap:hover .section-dot {
          border-color: ${COLORS.gold};
          background: rgba(212,160,23,0.3);
        }
        @media (max-width: 768px) {
          .section-dots { display: none; }
        }
      `}</style>

      <nav
        className={`section-dots${visible ? " visible" : ""}`}
        aria-label="Page sections"
      >
        {sections.map((section, i) => (
          <div
            key={section.id}
            className="section-dot-wrap"
            onClick={() => scrollTo(section.id)}
            role="button"
            tabIndex={0}
            aria-label={`Go to ${section.label}`}
            onKeyDown={e => e.key === "Enter" && scrollTo(section.id)}
          >
            <span className="section-dot-label">{section.label}</span>
            <span className={`section-dot${active === i ? " active" : ""}`} />
          </div>
        ))}
      </nav>
    </>
  );
}