"use client";

import Link from "next/link";
import { COLORS, NAV_LINKS } from "@/lib/constants";
import BackToTopArrowWrapper from "@/components/BackToTopArrowWrapper";

// ── Contact icons ──
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

// ── Commodity crop icons ──
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

// ── Official social media brand icons ──
const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const colHeadStyle: React.CSSProperties = {
  color: COLORS.gold,
  fontSize: "12px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontFamily: "'Fira Sans', Arial, sans-serif",
  fontWeight: 700,
  paddingBottom: "14px",
  borderBottom: `1px solid rgba(212,160,23,0.3)`,
  margin: "0 0 24px",
  display: "block",
};

const socialLinks = [
  { Icon: TwitterXIcon,  label: "X (Twitter)",  href: "https://twitter.com/TruSeedsAfrica",    color: "#000" },
  { Icon: FacebookIcon,  label: "Facebook",     href: "https://facebook.com/TruSeedsAfrica",   color: "#1877F2" },
  { Icon: InstagramIcon, label: "Instagram",    href: "https://instagram.com/TruSeedsAfrica",  color: "#E4405F" },
  { Icon: LinkedInIcon,  label: "LinkedIn",     href: "https://linkedin.com/company/truseedsafrica", color: "#0A66C2" },
  { Icon: YouTubeIcon,   label: "YouTube",      href: "https://youtube.com/@TruSeedsAfrica",   color: "#FF0000" },
];

const commodityItems = [
  { Icon: IconLeaf, name: "Cassava",    href: "/commodities#cassava" },
  { Icon: IconPalm, name: "Oil Palm",   href: "/commodities#oil-palm" },
  { Icon: IconSeed, name: "Coconut",    href: "/commodities#coconut" },
  { Icon: IconBean, name: "Cocoa Pods", href: "/commodities#cocoa-pods" },
];

const contactItems = [
  { Icon: IconPin,     label: "Address",       value: "#4 Terminalia Street,\nDansoman, Accra, Ghana", href: undefined },
  { Icon: IconMailbox, label: "P.O. Box",      value: "AN 16695, Accra North",                         href: undefined },
  { Icon: IconPhone,   label: "Phone (Ghana)", value: "+233 244 434 333",                               href: "tel:+233244434333" },
  { Icon: IconPhone,   label: "Phone (Ghana)", value: "+233 248 614 242",                               href: "tel:+233248614242" },
  { Icon: IconPhone,   label: "Phone (USA)",   value: "+1 (240) 217-0810",                              href: "tel:+12402170810" },
  { Icon: IconMail,    label: "Email",         value: "info@truseedsafrica.com",                        href: "mailto:info@truseedsafrica.com" },
];

export default function Footer() {
  return (
    <footer style={{ background: COLORS.greenDark, color: COLORS.white, position: "relative" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 56px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-partners {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          padding: 22px 32px;
          background: rgba(255,255,255,0.03);
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .footer-partner-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.15); }
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
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-nav-link:hover { color: ${COLORS.gold}; padding-left: 6px; }
        .footer-commodity-link {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: color 0.2s, gap 0.2s;
        }
        .footer-commodity-link:hover { color: ${COLORS.gold}; gap: 16px; }
        .footer-contact-link {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          font-family: 'Fira Sans', Arial, sans-serif;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s;
          white-space: pre-line;
        }
        .footer-contact-link:hover { color: ${COLORS.gold}; }

        /* Social media icons */
        .footer-social-row {
          display: flex;
          gap: 10px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
          opacity: 0.85;
        }
        .footer-social-btn:hover {
          transform: translateY(-3px);
          opacity: 1;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 44px; }
        }
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-partners { flex-direction: column; gap: 10px; text-align: center; }
          .footer-partner-divider { display: none; }
        }
      `}</style>

      {/* ── TOP ACCENT BAR ── */}
      <div style={{ height: "4px", background: `linear-gradient(90deg, transparent, ${COLORS.gold} 30%, ${COLORS.goldLight ?? "#E8B832"} 50%, ${COLORS.gold} 70%, transparent)` }} />

      {/* ── MAIN BODY ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 48px 56px" }}>

        <div className="footer-grid">

          {/* ── COL 1: BRAND ── */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "22px" }}>
              <img src="/logo/logo.png" alt="Tru Seeds Africa Logo" style={{ height: "68px", width: "auto", objectFit: "contain", display: "block" }} />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.85, fontFamily: "'Georgia', serif", margin: "0 0 16px", fontStyle: "italic" }}>
              &quot;Beyond Farming &mdash; We Are Building Industries.&quot;
            </p>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "14px", lineHeight: 1.85, fontFamily: "'Fira Sans', Arial, sans-serif", margin: "0 0 24px" }}>
              Premier industrial agribusiness and strategic consultancy firm dedicated to transforming
              African agriculture into a high-yield, industrial-grade economic engine.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid rgba(212,160,23,0.3)`, padding: "10px 18px", borderRadius: 3, marginBottom: 24 }}>
              <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                Ghana &middot; Africa &middot; Global
              </span>
            </div>

            {/* ── SOCIAL MEDIA ICONS ── */}
            <div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", marginBottom: 10 }}>
                Follow Us
              </div>
              <div className="footer-social-row">
                {socialLinks.map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-btn"
                    style={{ background: color }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL 2: QUICK LINKS ── */}
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

          {/* ── COL 3: COMMODITIES ── */}
          <div>
            <span style={colHeadStyle}>Commodities</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {commodityItems.map(({ Icon, name, href }) => (
                <Link key={name} href={href} className="footer-commodity-link">
                  <Icon />{name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── COL 4: CONTACT ── */}
          <div>
            <span style={colHeadStyle}>Contact Us</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label + value} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: 2, flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "rgba(212,160,23,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{ color: COLORS.gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 3 }}>{label}</div>
                    {href ? (
                      <a href={href} className="footer-contact-link">{value}</a>
                    ) : (
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.5, whiteSpace: "pre-line" }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PARTNERS ── */}
        <div className="footer-partners">
          <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>Strategic Partner</span>
          <div className="footer-partner-divider" />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 600 }}>Chamber of Agribusiness Ghana (CAG)</span>
          <div className="footer-partner-divider" />
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>AfCFTA Trade Framework</span>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "12px", fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Cultivating Wealth &middot; Processing the Future
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "17px", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", margin: 0 }}>
            &copy; {new Date().getFullYear()} Tru Seeds Africa. All rights reserved. | Registered in Ghana.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", margin: 0 }}>
            Website Development &amp; Design by{" "}
            <a
              href="https://www.celestialwebsolutions.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF6B00", textDecoration: "none", fontWeight: 700, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF8C33")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FF6B00")}
            >
              Celestial Web Solutions
            </a>
          </p>
        </div>

      </div>

      <BackToTopArrowWrapper />
    </footer>
  );
}