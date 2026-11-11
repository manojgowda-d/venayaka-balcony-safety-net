import React from "react";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Navigation } from "lucide-react";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import { BUSINESS_CONFIG } from "@/data/business";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Direct Local Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Venayaka Balcony Safety Net
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Get in touch directly with our Mysore installation team for prompt on-site measurement, questions, and safety net quotes.
          </p>
        </div>

        {/* 3 Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Phone Call</h3>
              <p className="text-xs text-slate-600 mt-1">Speak directly with our installation specialist</p>
              <p className="text-xl font-extrabold text-emerald-950 mt-3">
                {BUSINESS_CONFIG.phoneFormatted}
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-green-50/70 border border-green-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-700 text-white flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-200" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">WhatsApp Chat</h3>
              <p className="text-xs text-slate-600 mt-1">Send photos of your balcony for immediate estimates</p>
              <p className="text-xl font-extrabold text-slate-900 mt-3">
                +91 {BUSINESS_CONFIG.whatsappNumber}
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-emerald-950 bg-emerald-300 hover:bg-emerald-400 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-950" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Service Area Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Service Coverage</h3>
              <p className="text-xs text-slate-600 mt-1">Local residential installation across Mysore</p>
              <p className="text-sm font-semibold text-slate-800 mt-3">
                {BUSINESS_CONFIG.primaryServiceAreasText}
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              <Navigation className="w-4 h-4 text-emerald-700" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Form and Map Grid */}
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
  );
}

