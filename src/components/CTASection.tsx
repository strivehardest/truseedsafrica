"use client";
import Link from "next/link";
import { COLORS } from "@/lib/constants";
import styles from "./CTASection.module.css";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  highlight?: string;        // word(s) in title to highlight in gold
  subtitle?: string;
  buttons?: CTAButton[];
  theme?: "dark" | "green" | "gold" | "white";
  agriElement?: boolean;     // show subtle agri SVG decoration
}

// Allow custom CSS variables in style objects
type CSSVars = React.CSSProperties & { [key: string]: string | number };

// Default props for TSA usage
const defaultButtons: CTAButton[] = [
  { label: "Get In Touch", href: "/contact", variant: "primary" },
  { label: "Our Services", href: "/services", variant: "outline" },
];


export default function CTASection({
  eyebrow = "Work With Us",
  title = "Ready to Industrialize",
  highlight = "Your Agribusiness?",
  subtitle = "Let's discuss how Tru Seeds Africa's 6 Strategic Pillars can transform your agricultural operations into a high-yield, industrial-grade enterprise.",
  buttons = defaultButtons,
  theme = "dark",
  agriElement = true,
}: CTASectionProps) {

  let bg: string = COLORS.greenDark;
  let textColor: string = COLORS.white;
  let subColor: string = "rgba(255,255,255,0.6)";
  let cssVars: CSSVars = {
    '--cta-gold': COLORS.gold,
    '--cta-greenDark': COLORS.greenDark,
    '--cta-outline-color': COLORS.white,
    '--cta-outline-border': 'rgba(255,255,255,0.3)',
  };

  if (theme === "green") {
    bg = COLORS.green;
    textColor = COLORS.white;
    subColor = "rgba(255,255,255,0.6)";
    cssVars = {
      '--cta-gold': COLORS.gold,
      '--cta-greenDark': COLORS.greenDark,
      '--cta-outline-color': COLORS.white,
      '--cta-outline-border': 'rgba(255,255,255,0.3)',
    };
  } else if (theme === "gold") {
    bg = COLORS.gold;
    textColor = COLORS.greenDark;
    subColor = "rgba(23,79,23,0.75)";
    cssVars = {
      '--cta-gold': COLORS.gold,
      '--cta-greenDark': COLORS.greenDark,
      '--cta-outline-color': COLORS.greenDark,
      '--cta-outline-border': 'rgba(23,79,23,0.4)',
    };
  } else if (theme === "white") {
    bg = COLORS.white;
    textColor = COLORS.greenDark;
    subColor = "rgba(23,79,23,0.75)";
    cssVars = {
      '--cta-gold': COLORS.gold,
      '--cta-greenDark': COLORS.greenDark,
      '--cta-outline-color': COLORS.greenDark,
      '--cta-outline-border': 'rgba(23,79,23,0.4)',
    };
  }

  return (
    <section style={{ background: bg, padding: "100px 40px", position: "relative", overflow: "hidden", ...cssVars }}>
      <div className="cta-top-line" />
      <div className="cta-texture" />
      <div className="cta-vline-l" />
      <div className="cta-vline-r" />
      {agriElement && (
        <>
          <svg style={{ position: "absolute", left: "3%", top: "50%", transform: "translateY(-50%)", width: "110px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
            <line x1="50" y1="200" x2="50" y2="20"/>
            <ellipse cx="50" cy="25" rx="8" ry="14" transform="rotate(-20 50 25)"/>
            <ellipse cx="50" cy="50" rx="8" ry="14" transform="rotate(20 50 50)"/>
            <ellipse cx="50" cy="73" rx="8" ry="14" transform="rotate(-20 50 73)"/>
            <ellipse cx="50" cy="96" rx="8" ry="14" transform="rotate(20 50 96)"/>
            <ellipse cx="50" cy="118" rx="8" ry="14" transform="rotate(-15 50 118)"/>
          </svg>
          <svg style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", width: "100px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 100 160" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
            <path d="M20 160 Q40 120 50 80 Q55 50 50 20"/>
            <path d="M50 55 Q70 38 85 18 Q65 32 50 55"/>
            <path d="M50 78 Q25 62 10 42 Q30 56 50 78"/>
            <path d="M50 100 Q72 85 88 65 Q68 78 50 100"/>
            <path d="M50 122 Q28 108 12 88 Q32 100 50 122"/>
          </svg>
        </>
      )}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
      <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "28px" }}>
          <div style={{ width: "36px", height: "1px", background: COLORS.gold }} />
          <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
            {eyebrow}
          </span>
          <div style={{ width: "36px", height: "1px", background: COLORS.gold }} />
        </div>
        <h2 style={{
          fontSize: "clamp(30px, 5vw, 58px)",
          color: textColor,
          fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: "0 0 8px",
          letterSpacing: "-1px",
        }}>
          {title}{" "}
          {highlight && <span style={{ color: COLORS.gold }}>{highlight}</span>}
        </h2>
        <div style={{ width: "52px", height: "3px", background: COLORS.gold, margin: "24px auto 28px" }} />
        {subtitle && (
          <p style={{
            color: subColor, fontSize: "17px", lineHeight: 1.9,
            fontFamily: "'Fira Sans', Arial, sans-serif",
            margin: "0 auto 52px", maxWidth: "660px",
          }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: "inline-block", border: `2px solid ${COLORS.purple}`, padding: "2px", marginBottom: "52px" }}>
          <div style={{ border: `1px solid ${COLORS.purple}`, padding: "9px 24px" }}>
            <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
              Beyond Farming — We Are Building Industries
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={btn.variant === "outline" ? styles["cta-btn-outline"] : styles["cta-btn-primary"]}
            >
              <span>{btn.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
