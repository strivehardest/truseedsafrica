"use client";

import Link from "next/link";
import { COLORS, NAV_LINKS } from "@/lib/constants";
import BackToTopArrowWrapper from "@/components/BackToTopArrowWrapper";

const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconMailbox = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/><path d="M8 17v1a4 4 0 0 0 8 0v-1"/>
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
);
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconSocial = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.25-1.25 2.5-2.5 3.75-3.75C9 15 13 13 17 11c2-1 4-2.5 5-5-3 1-5 2-7 3.5C12 11 9 13 6 16c-1.5 1.5-3 3-4 6z"/>
    <path d="M22 2C22 2 16 2 11 7c-1.5 1.5-3 4-3 7"/>
  </svg>
);
const IconPalm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h11z"/>
    <path d="M13 8c0-2.76 2.46-5 5.5-5S24 5.24 24 8H13z"/>
    <path d="M13 8c0 5.5-4 8-4 14h8c0-6-4-8.5-4-14z"/>
  </svg>
);
const IconSeed = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/><path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7z"/>
  </svg>
);
const IconBean = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.5 2C6 2 3 6 3 10.5S6 19 10.5 19 18 16 18 10.5 15 2 10.5 2z"/>
    <path d="M10.5 2C14 5.5 14 15.5 10.5 19"/>
    <path d="M3 10.5C7 10.5 15 8 18 10.5"/>
  </svg>
);
const IconArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const colHeadStyle: React.CSSProperties = {
  color: COLORS.gold,
  fontSize: "13px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontFamily: "Arial, sans-serif",
  fontWeight: 700,
  paddingBottom: "12px",
  borderBottom: `2px solid ${COLORS.gold}`,
  margin: "0 0 28px",
  display: "block",
};

export default function Footer() {
  const contactItems = [
    { Icon: IconPin,     label: "Address", value: "#4 Terminalia Street,\nDansoman, Accra, Ghana" },
    { Icon: IconMailbox, label: "P.O. Box", value: "AN 16695, Accra North" },
    { Icon: IconPhone,   label: "Phone",   value: "+233 244 434 333" },
    { Icon: IconMail,    label: "Email",   value: "info@truseedsafrica.com" },
    { Icon: IconSocial,  label: "Social",  value: "@TruSeedsAfrica" },
  ];

  const commodityItems = [
    { Icon: IconLeaf, name: "Cassava" },
    { Icon: IconPalm, name: "Oil Palm" },
    { Icon: IconSeed, name: "Coconut" },
    { Icon: IconBean, name: "Cocoa Pods" },
  ];

  return (
    <footer style={{ background: COLORS.greenDark, color: COLORS.white, position: "relative" }}>
      <BackToTopArrowWrapper />

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 64px;
          margin-bottom: 64px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-partners {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          padding: 22px 32px;
          background: rgba(255,255,255,0.04);
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .footer-partner-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.2);
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          padding-top: 8px;
        }
        .footer-nav-link {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 16px;
          font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-nav-link:hover { color: ${COLORS.gold}; padding-left: 8px; }
        .footer-commodity-link {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 16px;
          font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: color 0.2s;
        }
        .footer-commodity-link:hover { color: ${COLORS.gold}; }
        .footer-credit-link {
          color: ${COLORS.gold};
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s;
        }
        .footer-credit-link:hover { color: #FF8C33; }
        .footer-logo-link { display: inline-block; }
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-partners { flex-direction: column; gap: 12px; text-align: center; }
          .footer-partner-divider { display: none; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-nav-link, .footer-commodity-link { font-size: 15px; }
        }
      `}</style>

      {/* ── TOP ACCENT BAR ── */}
      <div style={{ height: "5px", background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.green}, ${COLORS.gold})` }} />

      {/* ── MAIN BODY ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 48px 60px" }}>

        <div className="footer-grid">

          {/* ── BRAND ── */}
          <div>
            <Link href="/" className="footer-logo-link">
              <img src="/logo/logo.png" alt="Tru Seeds Africa Logo" style={{ height: "70px", width: "auto", objectFit: "contain", marginBottom: "24px", display: "block" }} />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.9, fontFamily: "'Georgia', serif", margin: "0 0 20px", fontStyle: "italic" }}>
              &quot;Beyond Farming &mdash; We Are Building Industries.&quot;
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif", margin: "0 0 28px" }}>
              Premier industrial agribusiness and strategic consultancy firm dedicated to transforming
              African agriculture into a high-yield, industrial-grade economic engine.
            </p>
            <div style={{ display: "inline-block", border: "2px solid #660099", padding: "2px" }}>
              <div style={{ border: "1px solid #660099", padding: "10px 20px" }}>
                <span style={{ color: COLORS.gold, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
                  Ghana &middot; Africa &middot; Global
                </span>
              </div>
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <span style={colHeadStyle}>Quick Links</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className="footer-nav-link">
                  <IconArrow />{label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── COMMODITIES ── */}
          <div>
            <span style={colHeadStyle}>Commodities</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {commodityItems.map(({ Icon, name }) => (
                <Link key={name} href="/commodities" className="footer-commodity-link">
                  <Icon />{name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <span style={colHeadStyle}>Contact Us</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactItems.map(({ Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "3px", flexShrink: 0 }}><Icon /></div>
                  <div>
                    <div style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Arial, sans-serif", fontWeight: 700, marginBottom: "3px" }}>{label}</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif", lineHeight: 1.5, whiteSpace: "pre-line" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PARTNERS ── */}
        <div className="footer-partners">
          <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>Strategic Partner</span>
          <div className="footer-partner-divider" />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 600 }}>Chamber of Agribusiness Ghana (CAG)</span>
          <div className="footer-partner-divider" />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontFamily: "Arial, sans-serif" }}>AfCFTA Trade Framework</span>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "15px", fontFamily: "Arial, sans-serif", margin: 0, letterSpacing: "2px", textTransform: "uppercase" }}>
            Cultivating Wealth &middot; Processing the Future
          </p>
          <p style={{ color: "rgba(255,255,255,1.50)", fontSize: "17px", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", margin: 0 }}>
            &copy; {new Date().getFullYear()} Tru Seeds Africa. All rights reserved. | Registered in Ghana.
          </p>
          <p style={{ color: "rgba(255,255,255,4.5)", fontSize: "17px", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", margin: 0 }}>
            Website Development & Design by{" "}
            <a href="https://www.celestialwebsolutions.net" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Celestial Web Solutions</a>
          </p>
        </div>

      </div>
      <BackToTopArrowWrapper />
    </footer>
  );
}