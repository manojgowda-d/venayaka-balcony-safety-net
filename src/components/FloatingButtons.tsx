"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Quick Contact Actions"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={BUSINESS_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Venayaka Balcony Safety Net on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>

        {/* Ping pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={BUSINESS_CONFIG.phoneLink}
        aria-label={`Call Venayaka Balcony Safety Net at ${BUSINESS_CONFIG.phoneFormatted}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-800 text-white shadow-xl hover:bg-emerald-900 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7 fill-emerald-300 text-emerald-800" />

        {/* Hover Tooltip */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call Now: {BUSINESS_CONFIG.phoneFormatted}
        </span>
      </a>
    </div>
  );
}

