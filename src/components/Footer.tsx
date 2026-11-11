import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS_CONFIG } from "@/data/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Venayaka Balcony Safety Net specializes in professional installation of balcony safety nets, anti-bird netting, and pigeon protection for residential apartments and homes across Mysore, Karnataka.
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-900/80 hover:bg-green-800 text-green-200 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-emerald-400 transition-colors">
                  Installation Videos
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-400 transition-colors">
                  Work Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Key Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#pigeon-safety-nets" className="hover:text-emerald-400 transition-colors">
                  Pigeon Safety Nets
                </Link>
              </li>
              <li>
                <Link href="/services#anti-bird-nets" className="hover:text-emerald-400 transition-colors">
                  Anti-Bird Nets
                </Link>
              </li>
              <li>
                <Link href="/services#balcony-safety-nets" className="hover:text-emerald-400 transition-colors">
                  Balcony Safety Nets
                </Link>
              </li>
              <li>
                <Link href="/services#terrace-safety-nets" className="hover:text-emerald-400 transition-colors">
                  Terrace Safety Nets
                </Link>
              </li>
              <li>
                <Link href="/services#children-safety-nets" className="hover:text-emerald-400 transition-colors">
                  Children Safety Nets
                </Link>
              </li>
              <li>
                <Link href="/services#invisible-safety-nets" className="hover:text-emerald-400 transition-colors">
                  Invisible Safety Nets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Mysore Location */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact &amp; Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <a href={BUSINESS_CONFIG.phoneLink} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <a
                  href={BUSINESS_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 {BUSINESS_CONFIG.whatsappNumber}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-slate-400 text-xs leading-relaxed">
                <p className="font-semibold text-slate-300">Service Locations:</p>
                <p>KG Koppal, Chamarajapuram, Lakshmipuram, Saraswathipuram, Mysore, Karnataka – 570005</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Venayaka Balcony Safety Net. All rights reserved.</p>
          <p className="text-slate-400">
            Professional Balcony, Pigeon &amp; Anti-Bird Netting in Mysore, Karnataka.
          </p>
        </div>
      </div>
    </footer>
  );
}
