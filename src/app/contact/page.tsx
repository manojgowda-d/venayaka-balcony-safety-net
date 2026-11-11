import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us | Venayaka Balcony Safety Net Mysore",
  description:
    "Contact Venayaka Balcony Safety Net for balcony safety net, pigeon net, and anti-bird net installation in Mysore. Phone & WhatsApp: 9880364527. Google Maps location and directions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Venayaka Balcony Safety Net Mysore",
    description:
      "Get in touch for safety net installations in Mysore. Fast quotation via WhatsApp or direct phone call.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/50">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Customer Reach</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact Venayaka Balcony Safety Net
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We are ready to assist you with on-site measurements, inquiries, and immediate safety net installations anywhere in Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Action Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Phone Support</h3>
                <p className="text-xs text-slate-500 mt-1">Available for quick queries &amp; bookings</p>
                <p className="text-xl font-extrabold text-emerald-900 mt-3">
                  {BUSINESS_CONFIG.phoneFormatted}
                </p>
              </div>
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Directly</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">WhatsApp Instant Chat</h3>
                <p className="text-xs text-slate-500 mt-1">Share photos or get instant pricing estimates</p>
                <p className="text-xl font-extrabold text-slate-900 mt-3">
                  +91 {BUSINESS_CONFIG.whatsappNumber}
                </p>
              </div>
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Service Area</h3>
                <p className="text-xs text-slate-500 mt-1">Local Mysore residential coverage</p>
                <p className="text-xs font-semibold text-slate-700 mt-3 leading-relaxed">
                  {BUSINESS_CONFIG.primaryServiceAreasText}
                </p>
              </div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Navigation className="w-4 h-4 text-emerald-700" />
                <span>Google Maps Location</span>
              </a>
            </div>
          </div>

          {/* Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
            <div className="lg:col-span-6">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
