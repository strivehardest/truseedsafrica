"use client";
import { useEffect, useState } from "react";

export default function TSALoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.6s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 2100);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .tsa-loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0e3a0e;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          transition: opacity 0.5s ease;
        }
        .tsa-loader-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        /* Outer ring — green rotating */
        .tsa-spinner-outer {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #1F6B1F;
          border-right-color: #1F6B1F;
          animation: tsa-spin 1.2s linear infinite;
        }
        /* Inner ring — gold rotating opposite */
        .tsa-spinner-inner {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 2.5px solid transparent;
          border-bottom-color: #D4A017;
          border-left-color: #D4A017;
          animation: tsa-spin-reverse 0.9s linear infinite;
        }
        /* Centre dot */
        .tsa-spinner-dot {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes tsa-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes tsa-spin-reverse {
          to { transform: rotate(-360deg); }
        }

        /* Pulsing tagline dots */
        .tsa-loader-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .tsa-loader-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D4A017;
          animation: tsa-dot-pulse 1.2s ease-in-out infinite;
          opacity: 0.3;
        }
        .tsa-loader-dot:nth-child(1) { animation-delay: 0s; }
        .tsa-loader-dot:nth-child(2) { animation-delay: 0.2s; }
        .tsa-loader-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes tsa-dot-pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1.2); }
        }

        /* Grid texture on overlay */
        .tsa-loader-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,160,23,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,160,23,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
      `}</style>

      <div className={`tsa-loader-overlay${fadeOut ? " fade-out" : ""}`}>

        {/* Spinner ring */}
        <div style={{ position: "relative", width: 90, height: 90 }}>
          <div className="tsa-spinner-outer" />
          <div className="tsa-spinner-inner" />
          {/* Logo in centre */}
          <div className="tsa-spinner-dot">
            <img
              src="/logo/logo.png"
              alt="TSA"
              style={{
                width: 52,
                height: 52,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>

        {/* Brand text */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            color: "#fff",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 6,
          }}>
            Tru Seeds Africa
          </div>
          <div style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "11px",
            fontFamily: "'Fira Sans', Arial, sans-serif",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Beyond Farming
          </div>
          <div className="tsa-loader-dots">
            <div className="tsa-loader-dot" />
            <div className="tsa-loader-dot" />
            <div className="tsa-loader-dot" />
          </div>
        </div>

        {/* Bottom gold accent line */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #D4A017, transparent)",
        }} />
      </div>
    </>
  );
}