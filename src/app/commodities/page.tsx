import Head from "next/head";
"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/CTASection";
import CommoditiesHeroSection from "@/components/sections/CommoditiesHeroSection";
import { COLORS, COMMODITIES } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import { CassavaIcon, OilPalmIcon, CoconutIcon, CocoaPodIcon } from "@/components/ui/icons";
// Map icon keys to components
const commodityIconMap = {
  cassava: CassavaIcon,
  oilPalm: OilPalmIcon,
  coconut: CoconutIcon,
  cocoaPod: CocoaPodIcon,
};

// Helper to try .webp, .png, .jpg, then placeholder
interface CommodityImageProps {
  name: string;
  alt: string;
  priority?: boolean;
}

function CommodityImage({ name, alt, priority = false }: CommodityImageProps) {
  const base = `/commodities/${name.toLowerCase().replace(/\s/g, "-")}`;
  const sources = [`${base}.webp`, `${base}.png`, `${base}.jpg`, "/commodities/placeholder.jpg"];
  const [srcIdx, setSrcIdx] = useState(0);
  return (
    <Image
      src={sources[srcIdx]}
      alt={alt}
      width={260}
      height={200}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      onError={() => {
        if (srcIdx < sources.length - 1) setSrcIdx(srcIdx + 1);
      }}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      sizes="(max-width: 900px) 100vw, 260px"
    />
  );
}

export default function CommoditiesPage() {
  return (
    <>
      <Head>
        <title>Commodities | Tru Seeds Africa</title>
        <meta name="description" content="Explore the strategic agricultural commodities of Tru Seeds Africa, including cassava, oil palm, coconut, and cocoa. Discover how we drive agribusiness in Ghana and across Africa." />
        <meta name="keywords" content="Tru Seeds Africa, commodities, Ghana, Africa, cassava, oil palm, coconut, cocoa, agribusiness, agriculture, industrial processing, value chain, West Africa" />
      </Head>
      <style>{`
        @media (max-width: 900px) {
          .commodity-detail-section { padding: 60px 12px !important; }
          .commodity-detail-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 600px) {
          .commodity-detail-section { padding: 36px 2vw !important; }
          .zero-waste-section { padding: 40px 2vw !important; }
        }
      `}</style>
      {/* Page Hero */}
      <AnimatedSection>
        <CommoditiesHeroSection />
      </AnimatedSection>

      {/* Commodities Detail */}
      <section className="commodity-detail-section" style={{ background: COLORS.offWhite, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {COMMODITIES.map((c, i) => (
              <AnimatedSection key={c.name}>
                <div
                  className="commodity-detail-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: i % 2 === 0 ? "300px 1fr" : "1fr 300px",
                    gap: "60px",
                    alignItems: "center",
                  }}
                >
                  {/* Image block (left for even) */}
                  {i % 2 === 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <div style={{
                        width: 260,
                        height: 200,
                        marginBottom: 20,
                        borderRadius: 18,
                        overflow: "hidden",
                        background: "#fff",
                        boxShadow: `0 0 0 8px ${c.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}>
                        {/* Render icon above image if desired */}
                        {commodityIconMap[c.icon] && (
                          <span style={{ display: "block", marginBottom: 8 }}>
                            {commodityIconMap[c.icon]({ style: { width: 40, height: 40 } })}
                          </span>
                        )}
                        <CommodityImage name={c.name} alt={c.name} priority={i === 0} />
                      </div>
                      <h2
                        style={{
                          color: c.color,
                          fontFamily: "'Georgia', serif",
                          fontWeight: 700,
                          fontSize: "28px",
                          margin: 0,
                        }}
                      >
                        {c.name}
                      </h2>
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <span
                      style={{
                        color: COLORS.gold,
                        fontSize: "11px",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        fontFamily: "'Arial', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Strategic Commodity 0{i + 1}
                    </span>
                    <h3
                      style={{
                        color: COLORS.green,
                        fontFamily: "'Georgia', serif",
                        fontSize: "clamp(22px, 3vw, 36px)",
                        margin: "12px 0 20px",
                      }}
                    >
                      {c.name}
                    </h3>
                    <p
                      style={{
                        color: COLORS.charcoalLight,
                        fontSize: "16px",
                        lineHeight: 1.9,
                        fontFamily: "'Arial', sans-serif",
                        marginBottom: "24px",
                      }}
                    >
                      {c.detail}
                    </p>
                    <div
                      style={{
                        background: COLORS.white,
                        borderRadius: "4px",
                        padding: "24px 28px",
                        borderLeft: `4px solid ${c.color}`,
                      }}
                    >
                      <p
                        style={{
                          color: COLORS.charcoal,
                          fontSize: "14px",
                          fontFamily: "'Arial', sans-serif",
                          margin: 0,
                          fontWeight: 600,
                        }}
                      >
                        {c.desc}
                      </p>
                    </div>
                  </div>

                  {/* Image block (right for odd) */}
                  {i % 2 !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <div style={{
                        width: 260,
                        height: 200,
                        marginBottom: 20,
                        borderRadius: 18,
                        overflow: "hidden",
                        background: "#fff",
                        boxShadow: `0 0 0 8px ${c.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}>
                        {/* Render icon above image if desired */}
                        {commodityIconMap[c.icon] && (
                          <span style={{ display: "block", marginBottom: 8 }}>
                            {commodityIconMap[c.icon]({ style: { width: 40, height: 40 } })}
                          </span>
                        )}
                        <CommodityImage name={c.name} alt={c.name} priority={i === 0} />
                      </div>
                      <h2
                        style={{
                          color: c.color,
                          fontFamily: "'Georgia', serif",
                          fontWeight: 700,
                          fontSize: "28px",
                          margin: 0,
                        }}
                      >
                        {c.name}
                      </h2>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Zero-waste note */}
      <section
        className="zero-waste-section"
        style={{
          background: COLORS.charcoal,
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2
              style={{
                color: COLORS.white,
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(22px, 3vw, 36px)",
                marginBottom: "20px",
              }}
            >
              Zero-Waste{" "}
              <span style={{ color: COLORS.gold }}>Circular Bio-Economy</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                lineHeight: 1.9,
                fontFamily: "'Arial', sans-serif",
              }}
            >
              TSA ensures every part of every crop is converted into value. From cocoa pod potash
              to palm husk bio-fertilizers — our circular economy model guarantees zero agricultural
              waste across all four strategic commodities.
            </p>
          </div>
        </AnimatedSection>
      </section>
      {/* ── CTA SECTION ── */}
      <CTASection
        eyebrow="Work With Us"
        title="Ready to Industrialize"
        highlight="Your Agribusiness?"
        subtitle="Let's discuss how Tru Seeds Africa's 6 Strategic Pillars can transform your agricultural operations into a high-yield, industrial-grade enterprise."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
        theme="dark"
        agriElement={true}
      />
    </>
  );
}
