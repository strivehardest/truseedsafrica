"use client";
import React, { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
type IconKey = "leaf" | "gear" | "wrench" | "globe" | "chart" | "bank";

interface PillarCardProps {
  num: string;
  title: string;
  description: string;
  icon: IconKey;
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const LeafIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <line x1="6" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="30" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 22 C20 22 12 20 11 13 C16 12 21 17 20 22Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 19 C20 19 28 17 29 10 C24 9 19 14 20 19Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 14 C20 14 20 10 23 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 30 C18 32 15 33 13 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 30 C22 32 25 33 27 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GearIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="6" y="22" width="28" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="10" y="14" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="19" y="17" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12.5 14 C12.5 12 11 10.5 12.5 9 C14 7.5 12.5 6 12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21.5 17 C21.5 15 20 13.5 21.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="17" y="25" width="6" height="6" rx="0.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="27" width="4" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 22 L13.5 16 L21 22" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const WrenchIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="14" cy="28" r="7" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="14" cy="28" r="2.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="21" x2="14" y2="24" stroke="currentColor" strokeWidth="1.4" />
    <line x1="14" y1="32" x2="14" y2="35" stroke="currentColor" strokeWidth="1.4" />
    <line x1="7" y1="28" x2="10" y2="28" stroke="currentColor" strokeWidth="1.4" />
    <line x1="18" y1="28" x2="21" y2="28" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="30" cy="30" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="30" cy="30" r="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M21 30 L21 22 L28 22 L32 26 L32 30Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <rect x="22" y="16" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <line x1="26" y1="16" x2="26" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 12 C26 10.5 25 9.5 26 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const GlobeIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="20" cy="18" r="11" stroke="currentColor" strokeWidth="1.8" />
    <ellipse cx="20" cy="18" rx="5" ry="11" stroke="currentColor" strokeWidth="1.3" />
    <line x1="9" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.3" />
    <path d="M11 12 C14 13.5 26 13.5 29 12" stroke="currentColor" strokeWidth="1.3" />
    <path d="M11 24 C14 22.5 26 22.5 29 24" stroke="currentColor" strokeWidth="1.3" />
    <path d="M27 25 L34 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <polyline points="30,32 34,32 34,28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <line x1="10" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.3" />
    <line x1="10" y1="24" x2="10" y2="12" stroke="currentColor" strokeWidth="1.3" />
    <rect x="12" y="19" width="4" height="5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
    <rect x="18" y="16" width="4" height="8" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.2" />
    <rect x="24" y="12" width="4" height="12" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1.2" />
    <polyline points="14,19 20,16 26,12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
    <path d="M16 32 C16 29.5 24 29.5 24 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <rect x="10" y="32" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <line x1="20" y1="32" x2="20" y2="38" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const BankIcon: React.FC = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="8" y="6" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M22 6 L26 10 L22 10 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <line x1="12" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="12" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="12" y1="23" x2="18" y2="23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="26" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="20" x2="32" y2="34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="29" y1="34" x2="35" y2="34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26 20 L24 26 L28 26 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    <path d="M38 20 L36 25 L40 25 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const ICON_MAP: Record<IconKey, React.FC> = {
  leaf:   LeafIcon,
  gear:   GearIcon,
  wrench: WrenchIcon,
  globe:  GlobeIcon,
  chart:  ChartIcon,
  bank:   BankIcon,
};

const FONT = "'Fira Sans', Arial, sans-serif";
const GREEN = "#1F6B1F";
const GOLD = "#D4A017";
const GOLD_DARK = "#B8860B";
const GREY = "#4A5568";

export default function PillarCard({ num, title, description, icon }: PillarCardProps) {
  console.log("NEW PILLARCARD LOADED");
  console.log("CARD PROPS", { num, title, description, icon });

  const Icon = ICON_MAP[icon] ?? LeafIcon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid rgba(31, 107, 31, 0.1)",
        borderTop: hovered ? `3px solid ${GOLD}` : `3px solid ${GREEN}`,
        padding: "36px 32px 32px",
        position: "relative",
        boxShadow: hovered ? "0 12px 40px rgba(31, 107, 31, 0.12)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease, border-top-color 0.25s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
   
      {/* Number badge */}
      <span
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          fontFamily: FONT,
          fontSize: 11,
          fontWeight: 900,
          letterSpacing: 3,
          color: "rgba(212, 160, 23, 0.5)",
          textTransform: "uppercase",
        }}
      >
        {num}
      </span>

      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          background: hovered ? "rgba(212, 160, 23, 0.1)" : "rgba(31, 107, 31, 0.06)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          color: hovered ? GOLD_DARK : GREEN,
          flexShrink: 0,
          transition: "background 0.25s ease, color 0.25s ease",
        }}
      >
        <Icon />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: FONT,
          fontSize: 17,
          fontWeight: 800,
          color: GREEN,
          margin: "0 0 14px",
          lineHeight: 1.25,
          letterSpacing: -0.2,
        }}
      >
        {title}
      </h3>

      {/* Gold divider */}
      <div
        style={{
          width: hovered ? 48 : 32,
          height: 2,
          background: GOLD,
          borderRadius: 2,
          marginBottom: 14,
          transition: "width 0.25s ease",
          flexShrink: 0,
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: FONT,
          fontSize: 14.5,
          lineHeight: 1.85,
          color: GREY,
          margin: 0,
          flex: 1,
        }}
      >
        {description}
      </p>
    </div>
  );
}
