import React from "react";
import type { Metadata } from "next";
import { Film, ShieldCheck } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Installation Videos | Watch Netting Work in Mysore",
  description:
    "Watch real installation videos of pigeon nets, balcony safety nets, anti-bird nets, terrace nets and window nets by Venayaka Balcony Safety Net in Mysore, Karnataka.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    title: "Installation Videos | Venayaka Balcony Safety Net Mysore",
    description:
      "Watch actual on-site installation videos of balcony safety nets and pigeon protection in Mysore.",
  },
};

export default function VideosPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/50">
              <Film className="w-4 h-4 text-emerald-400" />
              <span>Real Work in Action</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Safety Net Installation Videos
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              See how our technicians install, tighten, and secure balcony and anti-bird nets across apartments and buildings in Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery with all filters */}
      <VideoGallery showAllFilter={true} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
