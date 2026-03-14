import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tru Seeds Africa — Agribusiness Consulting, Mechanization & Commodity Trade Ghana",
  description:
    "Tru Seeds Africa offers end-to-end agribusiness services across 6 strategic pillars: consulting, outgrower scheme management, investment due diligence, mechanization-as-a-service, global commodity trade, and policy advocacy — headquartered in Accra, Ghana.",
  keywords: [
    "Tru Seeds Africa services",
    "agribusiness consulting Ghana",
    "outgrower scheme management Africa",
    "investment due diligence agribusiness",
    "mechanization as a service Ghana",
    "global commodity trade Africa",
    "AfCFTA trade facilitation",
    "policy advocacy agriculture Ghana",
    "value chain consulting Africa",
    "industrial agribusiness services",
    "cassava processing consulting",
    "palm oil mechanization Ghana",
    "circular bio-economy services",
    "ESG agribusiness strategy",
    "agro-processing investment Ghana",
    "nucleus outgrower model Africa",
    "commodity brokerage West Africa",
    "agribusiness due diligence Ghana",
    "post-harvest logistics Africa",
    "Tru Seeds Africa TSA",
  ].join(", "),
  openGraph: {
    title: "Services | Tru Seeds Africa — End-to-End Agribusiness Solutions",
    description:
      "From primary cultivation to global commodity trade — TSA's 6 integrated service pillars provide the complete framework for industrial agribusiness success across Africa.",
    url: "https://www.truseedsafrica.com/services",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Tru Seeds Africa",
    description:
      "Agribusiness consulting, mechanization, commodity trade, and policy advocacy — discover TSA's 6 integrated service pillars for Africa's industrial future.",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}