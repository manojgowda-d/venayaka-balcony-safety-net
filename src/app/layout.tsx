import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { BUSINESS_CONFIG } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#14532D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.siteUrl),
  title: {
    default: "Venayaka Balcony Safety Net | Pigeon Nets & Anti-Bird Nets in Mysore",
    template: "%s | Venayaka Balcony Safety Net Mysore",
  },
  description:
    "Venayaka Balcony Safety Net provides balcony safety nets, pigeon nets, anti-bird nets, terrace safety nets and residential safety net installation services in Mysore, Karnataka. Contact us at 9880364527.",
  keywords: [
    "Venayaka Balcony Safety Net",
    "Venayaka Safety Net Mysore",
    "Pigeon Nets in Mysore",
    "Balcony Safety Nets in Mysore",
    "Anti-Bird Nets in Mysore",
    "Pigeon Net Installation Mysore",
    "Balcony Protection Nets Mysore",
    "Terrace Safety Nets Mysore",
    "Bird Protection Nets Mysore",
    "Children Safety Nets Mysore",
    "Safety Nets in Saraswathipuram",
    "Safety Nets in KG Koppal",
    "Safety Nets in Chamarajapuram",
    "Safety Nets in Lakshmipuram",
  ],
  authors: [{ name: "Venayaka Balcony Safety Net" }],
  creator: "Venayaka Balcony Safety Net",
  publisher: "Venayaka Balcony Safety Net",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Venayaka Balcony Safety Net | Pigeon Nets & Anti-Bird Nets in Mysore",
    description:
      "Venayaka Balcony Safety Net provides balcony safety nets, pigeon nets, anti-bird nets, terrace safety nets and residential safety net installation services in Mysore, Karnataka. Contact us at 9880364527.",
    url: BUSINESS_CONFIG.siteUrl,
    siteName: "Venayaka Balcony Safety Net",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Venayaka Balcony Safety Net Mysore - Professional Netting Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venayaka Balcony Safety Net | Mysore",
    description:
      "Balcony safety nets, anti-bird nets, and pigeon protection installation in Mysore. Contact: 9880364527.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-800">
        <div className="antialiased selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <JsonLd />
        </div>
      </body>
    </html>
  );
}
