"use client";
import { COLORS } from "@/lib/constants";

export default function BackToTopArrow() {
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        left: 24,
        bottom: 32,
        zIndex: 1000,
        background: COLORS.gold,
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      className="back-to-top-arrow"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.greenDark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 15 12 9 18 15" />
      </svg>
    </button>
  );
}