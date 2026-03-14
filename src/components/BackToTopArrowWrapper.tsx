"use client";
import dynamic from "next/dynamic";

const BackToTopArrow = dynamic(() => import("@/components/BackToTopArrow"), { ssr: false });

export default function BackToTopArrowWrapper() {
  return <BackToTopArrow />;
}