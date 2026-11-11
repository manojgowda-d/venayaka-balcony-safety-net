import React from "react";
import Link from "next/link";
import { ShieldAlert, Home, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Page Not Found (404)
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 mt-2">
          Looking for Safety Nets in Mysore?
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you are looking for might have been moved or does not exist. Browse our services or contact our team directly.
        </p>

        <div className="mt-8 space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>View All Safety Net Services</span>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500">
          <a href={BUSINESS_CONFIG.phoneLink} className="hover:text-emerald-800 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.phoneFormatted}</span>
          </a>
          <span>•</span>
          <a
            href={BUSINESS_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-800 flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

