import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COLORS } from "@/lib/constants";

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
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: COLORS.charcoal,
          background: COLORS.offWhite,
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}