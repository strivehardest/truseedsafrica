"use client";
import dynamic from "next/dynamic";

const SectionDots = dynamic(() => import("@/components/SectionDots"), { ssr: false });

// Sections that exist on the homepage with IDs
const HOME_SECTIONS = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "pillars",    label: "Pillars" },
  { id: "commodities", label: "Commodities" },
];

export default function HomeSectionDots() {
  return <SectionDots sections={HOME_SECTIONS} />;
}