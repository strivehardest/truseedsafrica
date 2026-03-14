"use client";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("pwa-dismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt after a 3s delay
      setTimeout(() => setVisible(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setVisible(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("pwa-dismissed", "1");
  };

  if (!visible || dismissed) return null;

  return (
    <>
      <style>{`
        .pwa-prompt {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) translateY(120px);
          z-index: 99998;
          background: #0e3a0e;
          border: 1px solid rgba(212,160,23,0.3);
          border-radius: 10px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,160,23,0.1);
          max-width: 420px;
          width: calc(100vw - 32px);
          animation: pwa-slide-up 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes pwa-slide-up {
          to { transform: translateX(-50%) translateY(0); }
        }
        .pwa-prompt-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: #1F6B1F;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid rgba(212,160,23,0.4);
          overflow: hidden;
        }
        .pwa-install-btn {
          background: linear-gradient(135deg, #D4A017, #E8B832);
          color: #0e3a0e;
          border: none;
          border-radius: 6px;
          padding: 9px 18px;
          font-size: 13px;
          font-weight: 800;
          font-family: 'Fira Sans', Arial, sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.15s;
        }
        .pwa-install-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .pwa-dismiss-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          padding: 4px;
          font-size: 20px;
          line-height: 1;
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .pwa-dismiss-btn:hover { color: rgba(255,255,255,0.7); }
        @media (max-width: 480px) {
          .pwa-prompt { bottom: 16px; padding: 14px 16px; gap: 12px; }
        }
      `}</style>

      <div className="pwa-prompt" role="dialog" aria-label="Install Tru Seeds Africa app">
        {/* App icon */}
        <div className="pwa-prompt-icon">
          <img src="/logo/logo.png" alt="TSA" style={{ width: 40, height: 40, objectFit: "contain" }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", marginBottom: 3 }}>
            Install TSA App
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.4 }}>
            Add to your home screen for quick access
          </div>
        </div>

        {/* Install button */}
        <button className="pwa-install-btn" onClick={handleInstall}>
          Install
        </button>

        {/* Dismiss */}
        <button className="pwa-dismiss-btn" onClick={handleDismiss} aria-label="Dismiss">
          &times;
        </button>
      </div>
    </>
  );
}