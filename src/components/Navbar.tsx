"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isHome && !scrolled ? "transparent" : COLORS.green;

  return (
    <>
      <style>{`
        .navbar-mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #174F17;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .navbar-mobile-overlay.open { display: flex; }
        .navbar-mobile-link {
          display: block;
          width: 100%;
          max-width: 400px;
          text-align: center;
          padding: 22px 40px;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 20px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s, background 0.2s;
        }
        .navbar-mobile-link:first-of-type { border-top: 1px solid rgba(255,255,255,0.08); }
        .navbar-mobile-link:hover, .navbar-mobile-link.active {
          color: #D4A017;
          background: rgba(255,255,255,0.04);
        }
        .navbar-mobile-close {
          position: absolute;
          top: 20px; right: 24px;
          background: none; border: none;
          color: #fff; font-size: 42px;
          cursor: pointer; line-height: 1;
          padding: 8px; opacity: 0.7;
          transition: opacity 0.2s;
        }
        .navbar-mobile-close:hover { opacity: 1; }
        .hamburger-bar {
          width: 26px; height: 2.5px;
          background: #fff;
          border-radius: 2px;
          display: block;
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: navBg,
        transition: "background 0.4s ease",
        padding: isMobile ? "0 16px" : "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: scrolled || !isHome ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="/logo/logo.png"
            alt="Tru Seeds Africa"
            style={{ height: "52px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link key={label} href={href} style={{
                  color: active ? COLORS.gold : COLORS.white,
                  textDecoration: "none", fontSize: "13px",
                  letterSpacing: "1.5px", textTransform: "uppercase",
                  fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 600,
                  borderBottom: active ? `2px solid ${COLORS.gold}` : "2px solid transparent",
                  paddingBottom: "4px", transition: "color 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = COLORS.gold; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = COLORS.white; }}
                >{label}</Link>
              );
            })}
          </div>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none", border: "none",
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center",
              gap: "6px", width: 44, height: 44,
              cursor: "pointer", padding: "8px",
              flexShrink: 0,
            }}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        )}
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div className={`navbar-mobile-overlay${menuOpen ? " open" : ""}`}>
        <button className="navbar-mobile-close" aria-label="Close menu"
          onClick={() => setMenuOpen(false)}>&times;</button>

        <div style={{ marginBottom: "48px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="/logo/logo.png"
            alt="Tru Seeds Africa"
            style={{ height: "72px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {NAV_LINKS.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link key={label} href={href}
              className={`navbar-mobile-link${active ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          );
        })}

        <p style={{
          position: "absolute", bottom: "28px",
          color: "rgba(255,255,255,0.2)", fontSize: "11px",
          letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Arial, sans-serif",
        }}>Cultivating Wealth · Processing the Future</p>
      </div>
    </>
  );
}