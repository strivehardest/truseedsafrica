"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import CTASection from "@/components/CTASection";
import { COLORS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <AnimatedSection>
        <section
          style={{
            background: `linear-gradient(160deg, ${COLORS.greenDark} 0%, ${COLORS.green} 100%)`,
            padding: "120px 40px 90px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src="/logo/logo.png"
            alt="Tru Seeds Africa Logo"
            style={{ height: "32px", width: "auto", marginBottom: "22px", display: "inline-block", objectFit: "contain" }}
          />
          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                color: COLORS.gold,
                fontSize: "12px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "'Fira Sans', Arial, sans-serif",
                fontWeight: 700,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 2,
                padding: "4px 18px",
                display: "inline-block",
              }}
            >
              Who We Are
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              color: COLORS.white,
              fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
              fontWeight: 900,
              margin: "0 0 22px",
              letterSpacing: "-2px",
              lineHeight: 1.08,
            }}
          >
            About <span style={{ color: COLORS.gold }}>Tru Seeds Africa</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "21px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontFamily: "'Fira Sans', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            Cultivating Wealth, Processing the Future
          </p>
        </section>
      </AnimatedSection>

      {/* Mission */}
      <section style={{ background: COLORS.white, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "start",
              }}
            >
              <div>
                <SectionHeader
                  eyebrow="Our Mission"
                  title="Industrializing African Agriculture"
                  centered={false}
                />
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: COLORS.charcoalLight,
                    marginBottom: "24px",
                    fontFamily: "'Arial', sans-serif",
                  }}
                >
                  TRU SEEDS AFRICA (TSA) is a premier industrial agribusiness and
                  strategic consultancy firm based in Ghana. We bridge the gap between
                  primary agricultural production and global industrial demand.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: COLORS.charcoalLight,
                    fontFamily: "'Arial', sans-serif",
                  }}
                >
                  By integrating cutting-edge Ag-Tech, circular economy principles, and
                  strategic value-chain architecture, TSA empowers African
                  commodities — Cassava, Oil Palm, Coconut, and Cocoa — to compete on
                  the global stage through high-value industrial transformation.
                </p>
              </div>
              <div
                style={{
                  background: COLORS.offWhite,
                  borderRadius: "4px",
                  padding: "48px 44px",
                  borderLeft: `4px solid ${COLORS.gold}`,
                }}
              >
                <h3
                  style={{
                    color: COLORS.green,
                    fontFamily: "'Georgia', serif",
                    fontSize: "20px",
                    margin: "0 0 24px",
                  }}
                >
                  Corporate Overview
                </h3>
                {[
                  ["Type", "Industrial Agribusiness & Strategic Consultancy"],
                  ["Registration", "Duly registered under the laws of Ghana"],
                  ["Headquarters", "#4 Terminalia Street, Dansoman, Accra"],
                  ["P.O. Box", "AN 16695, Accra North"],
                  ["Partners", "Chamber of Agribusiness Ghana (CAG)"],
                  ["Framework", "AfCFTA Trade Facilitation"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      marginBottom: "20px",
                      paddingBottom: "20px",
                      borderBottom: `1px solid rgba(0,0,0,0.06)`,
                    }}
                  >
                    <span
                      style={{
                        color: COLORS.gold,
                        fontWeight: 700,
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontFamily: "'Arial', sans-serif",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        color: COLORS.charcoal,
                        fontSize: "14px",
                        fontFamily: "'Arial', sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ background: COLORS.offWhite, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader eyebrow="Our Leadership" title="The Founders" />
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {[
              {
                name: "Ransford Aleke",
                role: "Founder & Chief Executive Officer",
                desc: "The progenitor and visionary behind Tru Seeds Africa. Ransford drives the strategic direction, industrial partnerships, and policy advocacy that positions TSA as a continent-wide agribusiness leader.",
                initial: "RA",
              },
              {
                name: "Nana Ama Hawkins",
                role: "Co-Founder",
                desc: "A founding pillar of TSA, Nana Ama brings institutional networks and operational expertise that complement TSA's mission to industrialize African commodity value chains.",
                initial: "NH",
              },
            ].map((person) => (
              <AnimatedSection key={person.name}>
                <div
                  style={{
                    background: COLORS.white,
                    borderRadius: "4px",
                    padding: "48px 44px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                    display: "flex",
                    gap: "28px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      minWidth: "72px",
                      background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.greenDark})`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: COLORS.gold,
                      fontWeight: 800,
                      fontSize: "20px",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {person.initial}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: COLORS.green,
                        fontFamily: "'Georgia', serif",
                        fontSize: "20px",
                        margin: "0 0 6px",
                      }}
                    >
                      {person.name}
                    </h3>
                    <p
                      style={{
                        color: COLORS.gold,
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontFamily: "'Arial', sans-serif",
                        fontWeight: 700,
                        margin: "0 0 16px",
                      }}
                    >
                      {person.role}
                    </p>
                    <p
                      style={{
                        color: COLORS.charcoalLight,
                        fontSize: "14px",
                        lineHeight: 1.8,
                        fontFamily: "'Arial', sans-serif",
                        margin: 0,
                      }}
                    >
                      {person.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <CTASection
        theme="white"
        agriElement={false}
        eyebrow="Partner With TSA"
        title="Ready to Build Value Chains?"
        highlight="Africa's Future"
        subtitle="Join us in transforming African agriculture through innovation, integration, and industrialization."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
      />

    </>
  );
}
