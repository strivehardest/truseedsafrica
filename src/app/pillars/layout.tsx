import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6 Strategic Pillars | Tru Seeds Africa — Industrial Agribusiness Framework Ghana",
  description:
    "Explore Tru Seeds Africa's 6 integrated strategic pillars: Primary Production, Industrial Processing, Mechanization, Global Commodity Trade, Agribusiness Consulting, and Policy Advocacy. The complete framework for Africa's agricultural industrialization.",
  keywords: [
    "Tru Seeds Africa pillars",
    "strategic pillars agribusiness",
    "industrial agribusiness framework Ghana",
    "primary production Africa",
    "industrial processing cassava palm oil",
    "mechanization as a service Ghana",
    "global commodity trade Africa",
    "agribusiness consulting Ghana",
    "policy advocacy agriculture AfCFTA",
    "value chain integration Africa",
    "circular bio-economy Ghana",
    "agro-processing framework West Africa",
    "Tru Seeds Africa TSA",
    "agricultural industrialization Ghana",
    "cassava starch processing",
    "palm oil value chain",
    "coconut processing Africa",
    "cocoa pod bio-economy",
    "outgrower scheme Ghana",
    "AfCFTA trade facilitation agribusiness",
  ].join(", "),
  openGraph: {
    title: "6 Strategic Pillars | Tru Seeds Africa",
    description:
      "From primary cultivation to global commodity trade — TSA's 6 integrated pillars form a complete industrial agribusiness engine for Africa.",
    url: "https://www.truseedsafrica.com/pillars",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Strategic Pillars | Tru Seeds Africa",
    description:
      "Discover how TSA's 6 integrated strategic pillars transform African agriculture from raw production into industrial-grade global enterprise.",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com/pillars",
  },
};

export default function PillarsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}