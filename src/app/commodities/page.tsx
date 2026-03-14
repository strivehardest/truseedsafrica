"use client";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import CommoditiesHeroSection from "@/components/sections/CommoditiesHeroSection";
import { COLORS, COMMODITIES } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Exact filenames from public/commodities/
const commodityImages: Record<string, string> = {
  "Cassava":    "/commodities/cassava.png",
  "Oil Palm":   "/commodities/oil-palm.jpg",
  "Coconut":    "/commodities/coconut.webp",
  "Cocoa Pods": "/commodities/cocoa-pods.webp",
};

// Accent colours per commodity
const commodityAccents: Record<string, { bg: string; border: string; badge: string }> = {
  "Cassava":    { bg: "#fdf8ee", border: "#D4A017", badge: "#B8860B" },
  "Oil Palm":   { bg: "#f0f7f0", border: "#1F6B1F", badge: "#1F6B1F" },
  "Coconut":    { bg: "#eef2f5", border: "#2C4A52", badge: "#2C4A52" },
  "Cocoa Pods": { bg: "#eef2ee", border: "#174F17", badge: "#174F17" },
};

// Inline SVG icons per commodity
const CassavaSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 6 6 10 8 14c1 2 3 4 4 8"/>
    <path d="M12 2c4 4 6 8 4 12-1 2-3 4-4 8"/>
    <path d="M8 8c-3 1-5 3-4 6"/>
    <path d="M16 8c3 1 5 3 4 6"/>
  </svg>
);
const PalmSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h11z"/>
    <path d="M13 8c0-2.76 2.46-5 5.5-5S24 5.24 24 8H13z"/>
    <path d="M13 8c0 5.5-4 8-4 14h8c0-6-4-8.5-4-14z"/>
  </svg>
);
const CoconutSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="7"/>
    <path d="M12 6V2"/>
    <path d="M8 4c1 1 2.5 2 4 2s3-1 4-2"/>
    <path d="M9 13c0 2 1.3 3.5 3 3.5S15 15 15 13"/>
  </svg>
);
const CocoaSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="5" ry="8"/>
    <path d="M12 4V2"/>
    <path d="M7 12H3"/>
    <path d="M21 12h-4"/>
    <path d="M8 6.5C6 7 4.5 9 5 11"/>
    <path d="M16 6.5c2 .5 3.5 2.5 3 4.5"/>
  </svg>
);

const commodityIconMap: Record<string, React.FC> = {
  "Cassava":    CassavaSVG,
  "Oil Palm":   PalmSVG,
  "Coconut":    CoconutSVG,
  "Cocoa Pods": CocoaSVG,
};

// Products derived from each commodity
const commodityProducts: Record<string, string[]> = {
  "Cassava":    ["Pharmaceutical-grade Starch", "Industrial Binders", "High-Quality Flour", "Bio-Ethanol"],
  "Oil Palm":   ["Crude Palm Oil (CPO)", "Palm Kernel Oil (PKO)", "Oleochemicals", "Soap & Cosmetics Inputs"],
  "Coconut":    ["Extra Virgin Coconut Oil", "Activated Carbon", "Coco-Peat", "Coconut Water"],
  "Cocoa Pods": ["Organic Fertilizer", "Cocoa Pod Potash", "Livestock Feed", "Soap Production Inputs"],
};

function CommodityImage({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const src = commodityImages[name];
  if (!src || failed) {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#e8e8e8" }}>
        <span style={{ color: "#aaa", fontSize: 13, fontFamily: "'Fira Sans', Arial, sans-serif" }}>Image</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      onError={() => setFailed(true)}
      sizes="(max-width: 900px) 100vw, 480px"
    />
  );
}

const styles = `
  .comm-page { background: #F5F2EC; }

  /* ── Commodity card ── */
  .comm-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(0,0,0,0.07);
    display: grid;
    grid-template-columns: 480px 1fr;
    min-height: 420px;
    transition: box-shadow 0.3s;
    scroll-margin-top: 88px;
  }
  .comm-card:hover { box-shadow: 0 12px 48px rgba(0,0,0,0.13); }
  .comm-card.reverse { grid-template-columns: 1fr 480px; }

  .comm-img-col {
    position: relative;
    overflow: hidden;
    min-height: 360px;
  }
  .comm-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 60%, rgba(0,0,0,0.18));
    z-index: 1;
    pointer-events: none;
  }
  .comm-card.reverse .comm-img-overlay {
    background: linear-gradient(to left, transparent 60%, rgba(0,0,0,0.18));
  }
  .comm-img-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    border-radius: 4px;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(6px);
  }

  .comm-body {
    padding: 52px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .comm-products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 24px;
  }
  .comm-product-tag {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Fira Sans', Arial, sans-serif;
    font-weight: 600;
    line-height: 1.4;
  }

  /* ── Zero waste ── */
  .zero-waste {
    background: #174F17;
    padding: 96px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .zero-waste::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(212,160,23,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,160,23,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .comm-card { grid-template-columns: 380px 1fr; }
    .comm-card.reverse { grid-template-columns: 1fr 380px; }
  }
  @media (max-width: 900px) {
    .comm-card,
    .comm-card.reverse {
      grid-template-columns: 1fr;
    }
    .comm-img-col { min-height: 280px; }
    .comm-body { padding: 36px 28px; }
    .comm-products { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .comm-body { padding: 28px 20px; }
    .comm-products { grid-template-columns: 1fr; }
    .zero-waste { padding: 64px 20px; }
  }
`;

export default function CommoditiesPage() {
  return (
    <>
      <style>{styles}</style>

      <AnimatedSection>
        <CommoditiesHeroSection />
      </AnimatedSection>

      {/* ── INTRO BAND ── */}
      <div style={{ background: COLORS.green, padding: "28px 40px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(15px, 2vw, 18px)", fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, letterSpacing: 0.5, lineHeight: 1.8 }}>
          TSA operates across <strong style={{ color: COLORS.gold }}>4 strategic commodities</strong> — each selected for its industrial depth, circular economy potential, and global market demand.
        </p>
      </div>

      {/* ── COMMODITY CARDS ── */}
      <section style={{ background: COLORS.offWhite, padding: "80px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {COMMODITIES.map((c, i) => {
            const accent = commodityAccents[c.name] ?? { bg: "#f5f5f5", border: COLORS.green, badge: COLORS.green };
            const Icon = commodityIconMap[c.name];
            const products = commodityProducts[c.name] ?? [];
            const isReverse = i % 2 !== 0;

            return (
              <AnimatedSection key={c.name} delay={i * 80}>
                <div
                  id={c.name.toLowerCase().replace(/\s+/g, "-")}
                  className={`comm-card${isReverse ? " reverse" : ""}`}
                >

                  {/* Image — left for even, right for odd (CSS handles mobile stacking) */}
                  {!isReverse && (
                    <div className="comm-img-col">
                      <CommodityImage name={c.name} />
                      <div className="comm-img-overlay" />
                      <div className="comm-img-badge" style={{ background: `${accent.badge}cc` }}>
                        <span style={{ color: "#fff", display: "flex" }}>{Icon && <Icon />}</span>
                        <span style={{ color: "#fff", fontSize: 12, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{c.name}</span>
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="comm-body" style={{ background: accent.bg }}>
                    {/* Number + eyebrow */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: accent.badge, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif" }}>0{i + 1}</span>
                      </div>
                      <span style={{ color: accent.badge, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                        Strategic Commodity
                      </span>
                    </div>

                    <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: COLORS.greenDark, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.1 }}>
                      {c.name}
                    </h2>

                    {/* Accent line */}
                    <div style={{ width: 48, height: 3, background: accent.border, borderRadius: 2, marginBottom: 20 }} />

                    <p style={{ color: "#4A5F6A", fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.95, margin: "0 0 20px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                      {c.detail}
                    </p>

                    {/* Highlighted desc */}
                    <div style={{ background: "#fff", borderLeft: `4px solid ${accent.border}`, padding: "16px 20px", borderRadius: "0 4px 4px 0", marginBottom: 24 }}>
                      <p style={{ color: COLORS.charcoal, fontSize: "clamp(14px, 1.6vw, 16px)", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
                        {c.desc}
                      </p>
                    </div>

                    {/* Products grid */}
                    <div style={{ marginBottom: 8 }}>
                      <div style={{ color: accent.badge, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 12 }}>
                        Key Outputs
                      </div>
                      <div className="comm-products">
                        {products.map(p => (
                          <div key={p} className="comm-product-tag" style={{ background: "#fff", color: COLORS.charcoal, fontSize: 14 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent.border} strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image — right for odd */}
                  {isReverse && (
                    <div className="comm-img-col">
                      <CommodityImage name={c.name} />
                      <div className="comm-img-overlay" />
                      <div className="comm-img-badge" style={{ background: `${accent.badge}cc`, left: "auto", right: 20 }}>
                        <span style={{ color: "#fff", display: "flex" }}>{Icon && <Icon />}</span>
                        <span style={{ color: "#fff", fontSize: 12, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{c.name}</span>
                      </div>
                    </div>
                  )}

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── ZERO WASTE ── */}
      <section className="zero-waste">
        <AnimatedSection>
          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            {/* Icon */}
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(212,160,23,0.15)", border: "2px solid rgba(212,160,23,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
            </div>

            <div style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 16 }}>
              Our Philosophy
            </div>
            <h2 style={{ color: COLORS.white, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 46px)", marginBottom: 20, lineHeight: 1.1 }}>
              Zero-Waste{" "}
              <span style={{ color: COLORS.gold }}>Circular Bio-Economy</span>
            </h2>
            <div style={{ width: 60, height: 3, background: COLORS.gold, margin: "0 auto 28px", borderRadius: 2 }} />
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.95, fontFamily: "'Fira Sans', Arial, sans-serif", margin: "0 0 40px" }}>
              TSA ensures every part of every crop is converted into measurable value. From cocoa pod potash to palm husk bio-fertilizers — our circular economy model guarantees zero agricultural waste across all four strategic commodities, driving sustainability and profitability simultaneously.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 40 }}>
              {[
                ["4", "Strategic Crops"],
                ["0%", "Waste Target"],
                ["6", "Value Pillars"],
                ["AfCFTA", "Trade Framework"],
              ].map(([num, label]) => (
                <div key={label} style={{ flex: "1 0 120px", textAlign: "center", padding: "0 24px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ color: COLORS.gold, fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1 }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Work With Us"
        title="Ready to Industrialize"
        highlight="Your Agribusiness?"
        subtitle="Let's discuss how Tru Seeds Africa's 6 Strategic Pillars can transform your agricultural operations into a high-yield, industrial-grade enterprise."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
        theme="white"
        agriElement={false}
      />
    </>
  );
}