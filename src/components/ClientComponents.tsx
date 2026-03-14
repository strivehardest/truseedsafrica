"use client";
import dynamic from "next/dynamic";

const TSALoader          = dynamic(() => import("@/components/TSALoader"),          { ssr: false });
const ReadingProgressBar = dynamic(() => import("@/components/ReadingProgressBar"), { ssr: false });
const WhatsAppButton     = dynamic(() => import("@/components/WhatsAppButton"),     { ssr: false });
const PWAInstallPrompt   = dynamic(() => import("@/components/PWAInstallPrompt"),   { ssr: false });
const FontLoader         = dynamic(() => import("@/components/FontLoader"),         { ssr: false });

export default function ClientComponents() {
  return (
    <>
      <FontLoader />
      <TSALoader />
      <ReadingProgressBar />
      <WhatsAppButton />
      <PWAInstallPrompt />
    </>
  );
}