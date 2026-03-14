import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Commodities | Tru Seeds Africa — Cassava, Oil Palm, Coconut & Cocoa Ghana",
  description:
    "Explore Tru Seeds Africa's 4 strategic commodities: Cassava, Oil Palm, Coconut, and Cocoa Pods. Discover how TSA transforms Ghana's agricultural crops into pharmaceutical-grade starch, crude palm oil, extra virgin coconut oil, and circular bio-economy outputs.",
  keywords: [
    "Tru Seeds Africa commodities",
    "cassava processing Ghana",
    "cassava starch pharmaceutical grade",
    "cassava bio-ethanol Africa",
    "oil palm value chain Ghana",
    "crude palm oil CPO Ghana",
    "palm kernel oil PKO Africa",
    "oleochemicals agribusiness",
    "coconut processing Africa",
    "extra virgin coconut oil Ghana",
    "activated carbon coconut husk",
    "coco-peat horticulture Ghana",
    "cocoa pod processing Ghana",
    "cocoa pod potash soap production",
    "organic fertilizer cocoa Africa",
    "circular bio-economy agribusiness",
    "zero waste agriculture Ghana",
    "industrial agribusiness West Africa",
    "AfCFTA commodity trade",
    "Tru Seeds Africa TSA Ghana",
  ].join(", "),
  openGraph: {
    title: "Strategic Commodities | Tru Seeds Africa — Cassava, Oil Palm, Coconut & Cocoa",
    description:
      "TSA transforms 4 strategic African crops into high-value industrial outputs — from pharmaceutical starch and crude palm oil to activated carbon and circular bio-fertilizers.",
    url: "https://www.truseedsafrica.com/commodities",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Commodities | Tru Seeds Africa",
    description:
      "Cassava, Oil Palm, Coconut & Cocoa Pods — discover how TSA industrializes Ghana's 4 core crops into global-grade outputs with zero agricultural waste.",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com/commodities",
  },
};

export default function CommoditiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}