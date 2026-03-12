import Head from "next/head";
"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "@/components/ui/PillarCard";
import { COLORS, PILLARS } from "@/lib/constants";
import PillarsHeroSection from "@/components/sections/PillarsHeroSection";
import CTASection from "@/components/CTASection";

export default function PillarsPage() {
  return (
    <>
      <Head>
        <title>Pillars | Tru Seeds Africa</title>
        <meta name="description" content="Discover the six strategic pillars of Tru Seeds Africa—integrating cultivation, processing, mechanization, logistics, consulting, and policy for Africa's industrial future." />
        <meta name="keywords" content="Tru Seeds Africa, pillars, strategic pillars, framework, industrialization, agriculture, Ghana, Africa, value chain, processing, consulting" />
      </Head>
      {/* ── PAGE HERO ── */}
      <PillarsHeroSection />

      {/* ── PILLARS GRID ── */}
      <section style={{ background: COLORS.offWhite, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}>
            {PILLARS.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 80}>
                <PillarCard {...p} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION NOTE ── */}
      <section style={{ background: COLORS.white, padding: "80px 40px", textAlign: "center" }}>
        <AnimatedSection>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span style={{
              color: COLORS.gold, fontSize: "11px", letterSpacing: "4px",
              textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
            }}>How It Works</span>

            <h2 style={{
              color: COLORS.green,
              fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 3vw, 36px)",
              margin: "16px 0 24px",
            }}>
              All Six Pillars Work as One
            </h2>

            <p style={{
              color: COLORS.charcoalLight,
              fontSize: "16px", lineHeight: 1.9,
              fontFamily: "'Fira Sans', Arial, sans-serif",
              marginBottom: "40px",
            }}>
              TSA does not merely farm — we industrialize. Our six pillars are integrated vertically,
              ensuring every commodity moves seamlessly from cultivation through processing,
              mechanization, logistics, consulting, and policy into a self-reinforcing industrial engine.
            </p>

            {/* Purple double-border quote */}
            <div style={{ display: "inline-block", border: "2px solid #660099", padding: "3px" }}>
              <div style={{ border: "1px solid #660099", padding: "16px 40px" }}>
                <span style={{
                  color: COLORS.green, fontSize: "16px",
                  fontStyle: "italic", fontFamily: "'Georgia', serif", fontWeight: 700,
                }}>
                  &quot;Rooted in Production. Scaled Through Industrialization.&quot;
                </span>
              </div>
            </div>
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