import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tru Seeds Africa | Industrial Agribusiness & Strategic Consultancy — Ghana",
  description:
    "Tru Seeds Africa (TSA) is Ghana's premier industrial agribusiness and strategic consultancy firm. Discover our mission to industrialize African agriculture through Cassava, Oil Palm, Coconut, and Cocoa value chains — powering Africa's industrial future.",
  keywords: [
    "Tru Seeds Africa",
    "TSA",
    "industrial agribusiness Ghana",
    "agribusiness consultancy Africa",
    "Cassava processing Ghana",
    "Oil Palm value chain",
    "Coconut industry Africa",
    "Cocoa pod processing",
    "agricultural industrialization Africa",
    "circular bio-economy Ghana",
    "AfCFTA agribusiness",
    "Ransford Aleke",
    "Nana Ama Hawkins",
    "Dansoman Accra agribusiness",
    "Chamber of Agribusiness Ghana",
    "African commodity trade",
    "agribusiness consulting West Africa",
    "industrial agriculture Ghana",
    "value chain Africa",
    "agro-processing Ghana",
  ].join(", "),
  openGraph: {
    title: "About Tru Seeds Africa | Building Africa's Industrial Future",
    description:
      "TSA is a premier industrial agribusiness and strategic consultancy firm headquartered in Accra, Ghana — transforming Cassava, Oil Palm, Coconut, and Cocoa into high-value industrial outputs.",
    url: "https://www.truseedsafrica.com/about",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tru Seeds Africa | Industrial Agribusiness Ghana",
    description:
      "Discover how Tru Seeds Africa is industrializing African agriculture through 6 strategic pillars — from primary production to global trade.",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}