import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Venayaka Balcony Safety Net Mysore",
  description:
    "Learn about Venayaka Balcony Safety Net. We provide balcony safety nets, pigeon protection nets, and anti-bird nets across Mysore including Saraswathipuram, KG Koppal, and Chamarajapuram.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Venayaka Balcony Safety Net Mysore",
    description:
      "Reliable residential safety net installation in Mysore. Pigeon nets, balcony protection, and anti-bird mesh.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Mysore Safety Net Specialist</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About Venayaka Balcony Safety Net
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Committed to providing safe, clean, and pigeon-free living environments for residential families and apartment communities across Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Protecting Balconies and Homes in Mysore
              </h2>

              <p className="text-slate-700 leading-relaxed">
                Balconies, terraces, and open windows offer scenic relaxation, natural daylight, and fresh airflow. However, in urban residential areas like Mysore, pigeons and birds often invade open balconies to nest and roost. Pigeon droppings are not only unsightly and difficult to clean, but they also carry health risks and acidic odors that ruin floor tiles and railings.
              </p>

              <p className="text-slate-700 leading-relaxed">
                At <strong>Venayaka Balcony Safety Net</strong>, we solve this with high-strength, weather-resistant nylon nets that create a firm, unobtrusive barrier. Our nets allow complete sunlight and continuous fresh breeze into your home while keeping pigeons and birds outside.
              </p>

              <p className="text-slate-700 leading-relaxed">
                In addition to pigeon prevention, our safety nets provide a vital protective barrier for high-rise apartment balconies, safeguarding young children and household pets from accidental slips or falling toys.
              </p>

              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <h3 className="text-base font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <span>Serving All Major Localities in Mysore</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We actively provide on-site inspection and installation across {BUSINESS_CONFIG.primaryServiceAreasText}.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={BUSINESS_CONFIG.phoneLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Call {BUSINESS_CONFIG.phoneFormatted}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Contact Form &amp; Map</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                  alt="Apartment balcony safety net installation in Mysore"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Pigeon-Free Balconies</h4>
                  <p className="text-xs text-slate-600 mt-1">Keep balconies sanitary and free of bird nesting.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">High-Tensile Wire Border</h4>
                  <p className="text-xs text-slate-600 mt-1">Rigid frame support with stainless steel anchors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
}
