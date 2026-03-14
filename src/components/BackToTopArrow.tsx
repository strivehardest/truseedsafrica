"use client";
import { useEffect, useState } from "react";
import { COLORS } from "@/lib/constants";

export default function BackToTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      // Show only when user is in the bottom 30% of the page
      setVisible(total > 0 && scrolled / total >= 0.70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .btt-btn {
          position: fixed;
          left: 28px;
          bottom: 36px;
          z-index: 1000;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #D4A017 0%, #f0c840 50%, #D4A017 100%);
          box-shadow: 0 4px 20px rgba(212,160,23,0.45), 0 2px 8px rgba(0,0,0,0.12);
          transition: opacity 0.35s ease, transform 0.35s ease, box-shadow 0.25s ease;
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
        }
        .btt-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .btt-btn:hover {
          box-shadow: 0 8px 32px rgba(212,160,23,0.55), 0 4px 12px rgba(0,0,0,0.15);
          transform: translateY(-3px) scale(1.06);
        }
        .btt-btn:active {
          transform: translateY(0) scale(0.97);
        }
        /* Subtle ring pulse */
        .btt-btn::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(212,160,23,0.3);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btt-btn.visible::before {
          opacity: 1;
          animation: btt-pulse 2.5s ease-in-out infinite;
        }
        @keyframes btt-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0; }
        }
        @media (max-width: 600px) {
          .btt-btn { left: 16px; bottom: 24px; width: 46px; height: 46px; }
        }
      `}</style>

      <button
        aria-label="Back to top"
        className={`btt-btn${visible ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* Outer ring accent */}
        <span style={{
          position: "absolute",
          inset: 3,
          borderRadius: "50%",
          border: `1.5px solid rgba(23,79,23,0.15)`,
          pointerEvents: "none",
        }} />
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.greenDark}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 15 12 9 18 15" />
        </svg>
      </button>
    </>
  );
}