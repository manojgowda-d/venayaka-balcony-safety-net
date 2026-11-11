import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background soft decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold shadow-sm">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Serving Mysore and Surrounding Areas</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Venayaka Balcony <br className="hidden sm:inline" />
              <span className="text-emerald-800 underline decoration-emerald-400 decoration-wavy decoration-2">
                Safety Net
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              Protect Your Home with Reliable Balcony Safety Nets, Anti-Bird Nets &amp; Pigeon Protection Solutions.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We provide safety net solutions for balconies, windows, terraces and residential spaces. Contact us for your safety net installation requirements in Mysore.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 pb-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pigeon &amp; Bird Proof</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Child &amp; Pet Safety</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mysore Local Team</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              {/* Call Now */}
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 transition-all shadow-md shadow-emerald-950/20 text-base"
              >
                <Phone className="w-5 h-5 text-emerald-300" />
                <span>Call Now: {BUSINESS_CONFIG.phoneFormatted}</span>
              </a>

              {/* WhatsApp Us */}
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 active:scale-95 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700" />
                <span>WhatsApp Us</span>
              </a>

              {/* Explore Services */}
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-emerald-900 hover:bg-slate-100 transition-all text-base"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Location Subtext */}
            <p className="text-xs text-slate-500 pt-1">
              Active in Saraswathipuram, KG Koppal, Chamarajapuram, Lakshmipuram &amp; across Mysore, Karnataka.
            </p>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-3xl transform rotate-2 scale-[1.02] opacity-80 shadow-xl" />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <div className="relative h-72 sm:h-80 md:h-96 w-full bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                    alt="Professionally installed balcony safety net on residential apartment in Mysore"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  {/* Subtle dark gradient overlay at bottom for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* On-image badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-emerald-700 text-xs font-bold tracking-wider uppercase mb-1">
                      Apartment Protection
                    </span>
                    <p className="text-sm font-medium text-slate-100">
                      Taut, transparent, durable balcony safety net installation
                    </p>
                  </div>
                </div>

                {/* Quick Info Bar below image */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      Quick On-Site Measurement
                    </p>
                    <p className="text-sm font-bold text-white">Direct Installation Services</p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.phoneLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>

              {/* Floating Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Focused On Safety</div>
                  <div className="text-[11px] text-slate-500">Balcony, Window &amp; Bird Proofing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
