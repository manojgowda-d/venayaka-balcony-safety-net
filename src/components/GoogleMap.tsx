"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function GoogleMap() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
      {/* Map Header / Location Bar */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4" />
            <span>Service Location &amp; Directions</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Venayaka Balcony Safety Net
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            {BUSINESS_CONFIG.primaryServiceAreasText}
          </p>
        </div>

        {/* Action Button opening the exact Google Maps URL */}
        <div className="flex items-center gap-2.5">
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Embedded Map Area (Clipped top offset to remove Google's 'Open in Maps' overlay) */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100 overflow-hidden">
        <div className="absolute inset-x-0 -top-12 h-[calc(100%+48px)]">
          <iframe
            src="https://maps.google.com/maps?q=Saraswathipuram%2C%20KG%20Koppal%2C%20Mysuru%2C%20Karnataka%20570005&t=&z=14&ie=UTF8&iwloc=&output=embed"
            title="Venayaka Balcony Safety Net Service Location in Mysore"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Service Localities Quick List */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200">
        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Key Localities Served in Mysore:
        </p>
        <div className="flex flex-wrap gap-2">
          {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
            >
              <MapPin className="w-3 h-3 text-emerald-600" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
