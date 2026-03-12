"use client";
import { COLORS } from "@/lib/constants";
import type { Pillar } from "@/types";

interface PillarCardProps extends Pillar {
  index: number;
}

export default function PillarCard({ num, title, desc, icon, index }: PillarCardProps) {
  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: "4px",
        padding: "40px 36px",
        border: `1px solid rgba(31,107,31,0.1)`,
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 50px rgba(31,107,31,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          background: index % 2 === 0 ? COLORS.green : COLORS.gold,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            fontSize: "42px",
            fontWeight: 900,
            color: "rgba(31,107,31,0.08)",
            fontFamily: "'Georgia', serif",
            lineHeight: 1,
          }}
        >
          {num}
        </span>

      </div>

      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          color: COLORS.green,
          fontFamily: "'Georgia', serif",
          lineHeight: 1.3,
          margin: "0 0 16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.8,
          color: COLORS.charcoalLight,
          margin: 0,
          fontFamily: "'Arial', sans-serif",
        }}
      >
        {desc}
      </p>
    </div>
  );
}