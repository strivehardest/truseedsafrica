import Head from "next/head";
"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import CTASection from "@/components/CTASection";
import { COLORS } from "@/lib/constants";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Tru Seeds Africa</title>
        <meta name="description" content="Learn about Tru Seeds Africa, a leading industrial agribusiness and consultancy based in Ghana, empowering Africa's agriculture for global competitiveness." />
        <meta name="keywords" content="Tru Seeds Africa, about Tru Seeds Africa, agribusiness in Ghana, agribusiness in Africa, agribusiness, consultancy, company, team, mission, industrial agriculture, Accra, West Africa" />
      </Head>
      {/* Page Hero */}
      <AnimatedSection>
        <section className={styles.hero}>
          <img
            src="/logo/logo.png"
            alt="Tru Seeds Africa Logo"
            className={styles["hero-logo"]}
          />
          <div>
            <span className={styles["hero-eyebrow"]}>Who We Are</span>
          </div>
          <h1 className={styles["hero-title"]}>
            About <span style={{ color: COLORS.gold }}>Tru Seeds Africa</span>
          </h1>
          <p className={styles["hero-desc"]}>Cultivating Wealth, Processing the Future</p>
        </section>
      </AnimatedSection>

      {/* Mission */}
      <section className={styles.section}>
        <div className={styles["section-inner"]}>
          <AnimatedSection>
            <div className={styles["grid-2"]}>
              <div>
                <SectionHeader
                  eyebrow="Our Mission"
                  title="Industrializing African Agriculture"
                  centered={false}
                />
                <p style={{ fontSize: 16, lineHeight: 1.9, color: COLORS.charcoalLight, marginBottom: 24, fontFamily: "'Arial', sans-serif" }}>
                  TRU SEEDS AFRICA (TSA) is a premier industrial agribusiness and strategic consultancy firm based in Ghana. We bridge the gap between primary agricultural production and global industrial demand.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: COLORS.charcoalLight, fontFamily: "'Arial', sans-serif" }}>
                  By integrating cutting-edge Ag-Tech, circular economy principles, and strategic value-chain architecture, TSA empowers African commodities — Cassava, Oil Palm, Coconut, and Cocoa — to compete on the global stage through high-value industrial transformation.
                </p>
              </div>
              <div style={{ background: COLORS.offWhite, borderRadius: 4, padding: "48px 44px", borderLeft: `4px solid ${COLORS.gold}` }}>
                <h3 style={{ color: COLORS.green, fontFamily: "'Georgia', serif", fontSize: 20, margin: "0 0 24px" }}>Corporate Overview</h3>
                {[
                  ["Type", "Industrial Agribusiness & Strategic Consultancy"],
                  ["Registration", "Duly registered under the laws of Ghana"],
                  ["Headquarters", "#4 Terminalia Street, Dansoman, Accra"],
                  ["P.O. Box", "AN 16695, Accra North"],
                  ["Partners", "Chamber of Agribusiness Ghana (CAG)"],
                  ["Framework", "AfCFTA Trade Facilitation"],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ color: COLORS.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Arial', sans-serif" }}>{label}</span>
                    <span style={{ color: COLORS.charcoal, fontSize: 14, fontFamily: "'Arial', sans-serif", lineHeight: 1.5 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles["section-offwhite"]}>
        <div className={styles["section-inner"]}>
          <AnimatedSection>
            <SectionHeader eyebrow="Our Leadership" title="The Founders" />
          </AnimatedSection>
          <div className={styles["leadership-grid"]}>
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
                <div className={styles.card}>
                  <div className={styles["card-avatar"]}>{person.initial}</div>
                  <div>
                    <h3 style={{ color: COLORS.green, fontFamily: "'Georgia', serif", fontSize: 20, margin: "0 0 6px" }}>{person.name}</h3>
                    <p style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Arial', sans-serif", fontWeight: 700, margin: "0 0 16px" }}>{person.role}</p>
                    <p style={{ color: COLORS.charcoalLight, fontSize: 14, lineHeight: 1.8, fontFamily: "'Arial', sans-serif", margin: 0 }}>{person.desc}</p>
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
