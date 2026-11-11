"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, Map as MapIcon } from "lucide-react";
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

        {/* Action Buttons opening the exact Google Maps URL */}
        <div className="flex items-center gap-2.5">
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Map</span>
          </a>
        </div>
      </div>

      {/* Embedded Map Area */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <iframe
          src="https://maps.google.com/maps?q=Saraswathipuram%2C%20KG%20Koppal%2C%20Mysuru%2C%20Karnataka%20570005&t=&z=14&ie=UTF8&iwloc=&output=embed"
          title="Venayaka Balcony Safety Net Service Location in Mysore"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Quick Action Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200 max-w-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-slate-900">Mysore Service Hub</p>
              <p className="text-[11px] text-slate-600">KG Koppal, Saraswathipuram &amp; nearby</p>
            </div>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors"
            >
              Open in App
            </a>
          </div>
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
