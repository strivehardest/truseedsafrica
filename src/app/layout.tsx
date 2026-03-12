import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COLORS } from "@/lib/constants";
import BackToTopArrowWrapper from "@/components/BackToTopArrowWrapper";

export const metadata: Metadata = {
  title: "Tru Seeds Africa | Cultivating Wealth, Processing the Future",
  description:
    "Premier industrial agribusiness and strategic consultancy firm transforming African agriculture into a high-yield, industrial-grade economic engine.",
  keywords:
    "agribusiness, Ghana, cassava, oil palm, coconut, cocoa, Africa, industrial processing",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif",
          color: COLORS.charcoal,
          background: COLORS.offWhite,
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
        <WhatsAppButton />
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