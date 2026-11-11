import React from "react";
import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Work Gallery | Balcony & Pigeon Net Photos in Mysore",
  description:
    "View our completed installation photographs and sample netting designs for balconies, windows, terraces, and apartments in Mysore. Venayaka Balcony Safety Net.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Work Gallery | Venayaka Balcony Safety Net Mysore",
    description:
      "Explore photographs of safety net installations across apartments in Saraswathipuram, KG Koppal, and Mysore.",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/50">
              <ImageIcon className="w-4 h-4 text-emerald-400" />
              <span>Project Visuals</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Safety Net Installation Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore photographs of balcony safety nets, anti-pigeon netting, terrace barriers, and window nets across Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery showAllFilter={true} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

