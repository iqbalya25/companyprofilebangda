import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Bangda Bertiga Karya — Payment & Technology Solutions",
  description:
    "Mitra strategis payment & teknologi terpercaya. Fasilitasi sistem pembayaran, instalasi infrastruktur teknologi, dan general supplier untuk kebutuhan bisnis Anda.",
  keywords: ["payment solutions", "infrastruktur teknologi", "general supplier", "Depok", "Indonesia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
