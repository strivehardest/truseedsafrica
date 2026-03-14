import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientComponents from "@/components/ClientComponents";

export const metadata: Metadata = {
  title: {
    default: "Tru Seeds Africa | Industrial Agribusiness & Strategic Consultancy — Accra, Ghana",
    template: "%s | Tru Seeds Africa",
  },
  description:
    "Tru Seeds Africa (TSA) is Ghana's premier industrial agribusiness and strategic consultancy firm. We transform Cassava, Oil Palm, Coconut, and Cocoa into high-value industrial outputs across 6 strategic pillars — driving Africa's agricultural industrialization under the AfCFTA framework.",
  keywords: [
    "Tru Seeds Africa",
    "TSA Ghana",
    "industrial agribusiness Ghana",
    "agribusiness consultancy Africa",
    "cassava processing Ghana",
    "oil palm value chain Ghana",
    "coconut industry Africa",
    "cocoa pod bio-economy Ghana",
    "6 strategic pillars agribusiness",
    "agricultural industrialization Africa",
    "circular bio-economy Ghana",
    "AfCFTA agribusiness trade",
    "agro-processing Ghana",
    "commodity trade West Africa",
    "mechanization as a service Ghana",
    "outgrower scheme management Africa",
    "industrial agribusiness consultancy Accra",
    "Dansoman Accra agribusiness",
    "value chain integration Africa",
    "Beyond Farming Building Industries",
  ],
  authors: [{ name: "Tru Seeds Africa", url: "https://www.truseedsafrica.com" }],
  creator: "Tru Seeds Africa",
  publisher: "Tru Seeds Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Tru Seeds Africa | Beyond Farming — We Are Building Industries",
    description:
      "TSA is a premier industrial agribusiness and strategic consultancy firm headquartered in Accra, Ghana — transforming Africa's 4 core crops into global industrial outputs through 6 integrated strategic pillars.",
    url: "https://www.truseedsafrica.com",
    siteName: "Tru Seeds Africa",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tru Seeds Africa | Industrial Agribusiness Ghana",
    description:
      "Beyond Farming — We Are Building Industries. Discover how TSA transforms Cassava, Oil Palm, Coconut & Cocoa into global-grade industrial outputs across Africa.",
    creator: "@TruSeedsAfrica",
    site: "@TruSeedsAfrica",
  },
  alternates: {
    canonical: "https://www.truseedsafrica.com",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-google-verification-token",
  },
  category: "Agribusiness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ── Preconnect — eliminates font DNS/TCP latency ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ── PWA ── */}
        <meta name="application-name" content="Tru Seeds Africa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TSA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1F6B1F" />
        <meta name="msapplication-TileColor" content="#1F6B1F" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Apple touch icon — uses your existing android-chrome files */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png" />
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        {/* Structured data — Organisation schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tru Seeds Africa",
              alternateName: "TSA",
              url: "https://www.truseedsafrica.com",
              logo: "https://www.truseedsafrica.com/logo/logo.png",
              description:
                "Premier industrial agribusiness and strategic consultancy firm transforming African agriculture into a high-yield, industrial-grade economic engine.",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#4 Terminalia Street",
                addressLocality: "Dansoman, Accra",
                addressCountry: "GH",
                postalCode: "AN 16695",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+233-244-434-333",
                  contactType: "customer service",
                  areaServed: "GH",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+233-248-614-242",
                  contactType: "customer service",
                  areaServed: "GH",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+1-240-217-0810",
                  contactType: "customer service",
                  areaServed: "US",
                  availableLanguage: "English",
                },
              ],
              email: "info@truseedsafrica.com",
              sameAs: [
                "https://twitter.com/TruSeedsAfrica",
              ],
              areaServed: {
                "@type": "Place",
                name: "Africa",
              },
              knowsAbout: [
                "Industrial Agribusiness",
                "Cassava Processing",
                "Oil Palm Value Chain",
                "Coconut Industry",
                "Cocoa Pod Bio-Economy",
                "Agricultural Consulting",
                "AfCFTA Trade Facilitation",
              ],
            }),
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif",
          color: "#36454F",
          background: "#F5F2EC",
          overflowX: "hidden",
        }}
      >
        <ClientComponents />
        <Navbar />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
        <style>{`
          .back-to-top-arrow {
            animation: fadein 0.5s;
          }
          @media (max-width: 900px) {
            .back-to-top-arrow {
              left: 12px;
              bottom: 18px;
              width: 40px;
              height: 40px;
            }
          }
          @media (max-width: 600px) {
            .back-to-top-arrow {
              left: 8px;
              bottom: 12px;
              width: 36px;
              height: 36px;
            }
          }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </body>
    </html>
  );
}