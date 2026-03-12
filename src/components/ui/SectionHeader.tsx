import { COLORS } from "@/lib/constants";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: "72px" }}>
      <span
        style={{
          color: COLORS.gold,
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif",
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 52px)",
          color: light ? COLORS.white : COLORS.green,
          fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif",
          fontWeight: 800,
          margin: "16px 0 20px",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "17px",
            color: light ? "rgba(255,255,255,0.7)" : COLORS.charcoalLight,
            maxWidth: "600px",
            margin: centered ? "0 auto" : "0",
            fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}