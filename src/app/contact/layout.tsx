import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tru Seeds Africa — Agribusiness Enquiries, Accra Ghana",
  description:
    "Get in touch with Tru Seeds Africa. Contact our team in Dansoman, Accra, Ghana for agribusiness consulting, commodity trade, mechanization, investment due diligence, and partnership enquiries. We respond within 24 business hours.",
  keywords: [
    "contact Tru Seeds Africa",
    "TSA contact Ghana",
    "agribusiness enquiry Ghana",
    "Tru Seeds Africa Accra",
    "agribusiness consulting contact",
    "commodity trade enquiry Africa",
    "investment due diligence contact Ghana",
    "mechanization partnership Africa",
    "outgrower scheme enquiry Ghana",
    "industrial agribusiness contact",
    "Dansoman Accra agribusiness office",
    "info@truseedsafrica.com",
    "AfCFTA trade enquiry",
    "Ghana agribusiness phone number",
    "TSA partnership enquiry",
    "agribusiness consulting West Africa contact",
    "Tru Seeds Africa phone",
    "cassava palm oil coconut cocoa trade Ghana",
    "agribusiness support Ghana",
    "Tru Seeds Africa TSA",
  ].join(", "),
  openGraph: {
    title: "Contact Us | Tru Seeds Africa — Accra, Ghana",
    description:
      "Reach Tru Seeds Africa for agribusiness consulting, commodity trade, mechanization, and investment enquiries. Headquartered in Dansoman, Accra, Ghana.",
    url: "https://www.truseedsafrica.com/contact",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tru Seeds Africa | Accra, Ghana",
    description:
      "Get in touch with TSA for agribusiness consulting, commodity trade, mechanization-as-a-service, and investment partnerships across Africa.",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}