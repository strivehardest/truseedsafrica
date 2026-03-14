"use client";
import Link from "next/link";
import { COLORS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      background: COLORS.greenDark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      marginTop: "-72px",
      paddingTop: "72px",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <style>{`
        .hero-inner {
          position: relative;
          text-align: center;
          width: 100%;
          max-width: 960px;
          padding: 40px 24px;
          z-index: 2;
          box-sizing: border-box;
        }

        .hero-badge {
          display: inline-block;
          border: 2px solid ${COLORS.purple};
          padding: 2px;
          margin-bottom: 36px;
          max-width: 100%;
        }
        .hero-badge-inner {
          border: 1px solid ${COLORS.purple};
          padding: 8px 20px;
        }
        .hero-badge span {
          color: ${COLORS.gold};
          font-size: clamp(9px, 2.5vw, 11px);
          letter-spacing: 4px;
          text-transform: uppercase;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-weight: 700;
          white-space: nowrap;
        }

        .hero-rule {
          width: 60px;
          height: 3px;
          background: ${COLORS.gold};
          margin: 28px auto;
        }

        .hero-title {
          font-size: clamp(40px, 10vw, 100px);
          color: #fff;
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          font-weight: 800;
          line-height: 1.0;
          margin: 0 0 8px;
          letter-spacing: -2px;
          word-break: break-word;
        }
        .hero-title-gold { color: ${COLORS.gold}; }

        .hero-tagline {
          font-size: clamp(10px, 2.5vw, 15px);
          color: rgba(255,255,255,0.4);
          letter-spacing: 4px;
          text-transform: uppercase;
          font-family: 'Fira Sans', Arial, sans-serif;
          margin: 0 0 24px;
          word-break: break-word;
        }

        .hero-sub {
          font-size: clamp(14px, 2.5vw, 18px);
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          max-width: 620px;
          margin: 0 auto 52px;
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        .hero-btn-primary {
          background: ${COLORS.gold};
          color: ${COLORS.greenDark};
          padding: 16px 36px;
          text-decoration: none;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-weight: 800;
          font-size: clamp(11px, 2vw, 13px);
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.2s, transform 0.2s;
          display: inline-block;
          white-space: nowrap;
        }
        .hero-btn-primary:hover { background: #e8c040; transform: translateY(-2px); }

        .hero-btn-secondary {
          border: 2px solid rgba(255,255,255,0.25);
          color: #fff;
          padding: 16px 36px;
          text-decoration: none;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-weight: 700;
          font-size: clamp(11px, 2vw, 13px);
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover { border-color: ${COLORS.gold}; color: ${COLORS.gold}; }

        .hero-stats {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 72px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 40px;
          gap: 0;
          width: 100%;
        }
        .hero-stat {
          flex: 1;
          min-width: 80px;
          max-width: 180px;
          text-align: center;
          padding: 0 16px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-num {
          font-size: clamp(20px, 4vw, 30px);
          font-weight: 800;
          color: ${COLORS.gold};
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: clamp(8px, 1.5vw, 10px);
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          font-family: 'Fira Sans', Arial, sans-serif;
        }

        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }
        .hero-scroll span {
          color: rgba(255,255,255,0.25);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Fira Sans', Arial, sans-serif;
        }
        .hero-scroll-line {
          width: 1px;
          height: 44px;
          background: linear-gradient(to bottom, ${COLORS.gold}70, transparent);
        }

        /* Agri elements hidden on small screens to avoid clutter */
        .hero-agri { position: absolute; pointer-events: none; opacity: 0.07; }

        @media (max-width: 640px) {
          .hero-inner { padding: 32px 20px; }
          .hero-stats {
            margin-top: 40px;
            padding-top: 24px;
            gap: 16px;
          }
          .hero-stat {
            border-right: none;
            min-width: 70px;
            flex: 0 0 calc(50% - 16px);
          }
          .hero-agri { display: none; }
          .hero-badge span { letter-spacing: 2px; }
        }

        @media (max-width: 380px) {
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; }
        }
      `}</style>

      {/* ── AGRICULTURE SVG ELEMENTS ── */}
      <svg className="hero-agri" style={{ top: "8%", left: "3%", width: "140px" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <line x1="50" y1="200" x2="50" y2="20"/>
        <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(-20 50 20)"/>
        <ellipse cx="50" cy="45" rx="8" ry="14" transform="rotate(20 50 45)"/>
        <ellipse cx="50" cy="65" rx="8" ry="14" transform="rotate(-20 50 65)"/>
        <ellipse cx="50" cy="85" rx="8" ry="14" transform="rotate(20 50 85)"/>
        <ellipse cx="50" cy="105" rx="8" ry="14" transform="rotate(-15 50 105)"/>
        <ellipse cx="50" cy="125" rx="8" ry="14" transform="rotate(15 50 125)"/>
      </svg>

      <svg className="hero-agri" style={{ top: "5%", right: "4%", width: "120px" }} viewBox="0 0 120 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M60 200 Q58 160 55 130 Q52 100 60 60"/>
        <path d="M60 80 Q40 50 10 55 Q30 70 60 80"/>
        <path d="M60 70 Q80 35 110 30 Q95 55 60 70"/>
        <path d="M60 95 Q30 75 5 85 Q28 98 60 95"/>
        <path d="M60 90 Q90 72 115 80 Q92 95 60 90"/>
        <circle cx="60" cy="120" r="5"/>
        <circle cx="65" cy="113" r="4"/>
        <circle cx="55" cy="115" r="4"/>
      </svg>

      <svg className="hero-agri" style={{ bottom: "12%", left: "5%", width: "110px" }} viewBox="0 0 100 160" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M20 160 Q40 120 50 80 Q55 50 50 20"/>
        <path d="M50 60 Q70 40 85 20 Q65 35 50 60"/>
        <path d="M50 80 Q25 65 10 45 Q30 58 50 80"/>
        <path d="M50 100 Q72 88 88 68 Q68 80 50 100"/>
        <path d="M50 120 Q28 108 12 90 Q32 102 50 120"/>
      </svg>

      <svg className="hero-agri" style={{ bottom: "15%", right: "5%", width: "90px" }} viewBox="0 0 80 140" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <ellipse cx="40" cy="80" rx="22" ry="40"/>
        <path d="M40 40 Q40 20 40 10"/>
        <path d="M18 70 Q10 65 5 70 M62 70 Q70 65 75 70"/>
        <path d="M20 80 Q12 75 8 80 M60 80 Q68 75 72 80"/>
        <path d="M22 90 Q14 87 10 92 M58 90 Q66 87 70 92"/>
        <line x1="40" y1="40" x2="40" y2="120"/>
      </svg>

      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      {/* Vertical accent lines */}
      <div style={{ position: "absolute", top: 0, right: "18%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(212,160,23,0.2), transparent)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: "22%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)`, pointerEvents: "none" }} />

      {/* ── CONTENT ── */}
      <div className="hero-inner">

        <div className="hero-badge">
          <div className="hero-badge-inner">
            <span>Ghana · Africa · Global</span>
          </div>
        </div>

        <h1 className="hero-title">
          TRU SEEDS<br />
          <span className="hero-title-gold">AFRICA</span>
        </h1>

        <div className="hero-rule" />

        <p className="hero-tagline">
          Cultivating Wealth · Processing the Future
        </p>

        <p className="hero-sub">
          A premier industrial agribusiness and strategic consultancy firm dedicated to
          transforming African agriculture into a high-yield, industrial-grade economic engine.
        </p>

        <div className="hero-btns">
          <Link href="/services" className="hero-btn-primary" aria-label="Explore Tru Seeds Africa services">Our Services</Link>
          <Link href="/about" className="hero-btn-secondary" aria-label="Learn more about Tru Seeds Africa">Learn More About TSA</Link>
        </div>

        <div className="hero-stats">
          {[["4","Core Commodities"],["6","Strategic Pillars"],["AfCFTA","Trade Framework"],["Ghana","Headquarters"]].map(([num, label]) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}