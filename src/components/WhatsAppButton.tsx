"use client";
import { useState } from "react";

const PHONE = "233244434333";
const MESSAGE = "Hello! I'm interested in learning more about Tru Seeds Africa's services.";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .wa-wrapper {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        /* Tooltip bubble */
        .wa-tooltip {
          background: #fff;
          color: #1a1a1a;
          font-family: 'Fira Sans', Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          padding: 12px 16px;
          border-radius: 12px 12px 0 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          max-width: 220px;
          position: relative;
          animation: wa-pop 0.25s ease;
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 18px;
          border-width: 8px 8px 0 0;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }
        .wa-close {
          position: absolute;
          top: 6px; right: 8px;
          background: none; border: none;
          font-size: 16px; color: #999;
          cursor: pointer; line-height: 1;
          padding: 2px 4px;
        }
        .wa-close:hover { color: #333; }

        /* Main button */
        .wa-btn {
          width: 60px; height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          cursor: pointer;
          border: none;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          position: relative;
        }
        .wa-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px rgba(37,211,102,0.55);
        }
        /* Pulse ring */
        .wa-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.45);
          animation: wa-pulse 2s ease-out infinite;
        }
        .wa-pulse-2 {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.2);
          animation: wa-pulse 2s ease-out infinite 0.5s;
        }

        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes wa-pop {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 480px) {
          .wa-wrapper { bottom: 20px; right: 20px; }
          .wa-btn { width: 54px; height: 54px; }
        }
      `}</style>

      <div className="wa-wrapper">
        {/* Tooltip bubble */}
        {hovered && (
          <div className="wa-tooltip">
            <button className="wa-close" onClick={() => setVisible(false)} aria-label="Close">×</button>
            <strong style={{ color: "#25D366", display: "block", marginBottom: "4px" }}>Chat with us!</strong>
            We typically reply within minutes.
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="wa-pulse" />
          <div className="wa-pulse-2" />
          {/* WhatsApp SVG icon */}
          <svg width="30" height="30" viewBox="0 0 32 32" fill="white">
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.635 4.64 1.84 6.653L2.667 29.333l6.88-1.8A13.28 13.28 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a11 11 0 0 1-5.6-1.533l-.4-.24-4.08 1.067 1.08-3.973-.267-.413A11.02 11.02 0 0 1 5 16c0-6.067 4.933-11 11.004-11C23.08 5 28 9.933 28 16s-4.933 11-11.996 11zm6.04-8.213c-.333-.173-1.96-.96-2.267-1.067-.306-.12-.52-.173-.747.173-.213.333-.853 1.067-1.04 1.28-.2.213-.387.24-.72.08-.333-.173-1.413-.52-2.693-1.667-.987-.88-1.667-1.973-1.867-2.307-.187-.333-.013-.507.16-.68.16-.147.333-.4.507-.6.173-.2.227-.333.333-.547.12-.213.053-.4-.013-.573-.08-.173-.747-1.813-.987-2.467-.267-.653-.533-.56-.747-.573-.2-.013-.413-.013-.64-.013-.213 0-.573.08-.88.413-.293.333-1.147 1.12-1.147 2.747 0 1.627 1.173 3.2 1.347 3.413.16.213 2.32 3.547 5.613 4.973.787.347 1.4.547 1.88.693.787.253 1.507.213 2.08.133.627-.093 1.96-.8 2.24-1.573.28-.773.28-1.44.2-1.587-.08-.146-.28-.226-.613-.4z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
