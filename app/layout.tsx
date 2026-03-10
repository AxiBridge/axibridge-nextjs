import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AxiBridge - AI Intake for Restoration Companies. 24/7.",
  description:
    "AxiBridge captures emergency leads 24/7 for water, fire, and mold restoration companies. AI-powered intake, insurance verification, and instant email summaries.",
  openGraph: {
    title: "AxiBridge - Never Miss an Emergency Lead Again",
    description: "AI-powered intake and lead capture for restoration companies. 24/7 emergency coverage.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
