"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS_CONFIG } from "@/data/business";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Installation Videos", href: "/videos" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-2.5"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      {/* Top micro-bar for quick local service info on desktop */}
      <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Serving Mysore: Saraswathipuram, KG Koppal, Chamarajapuram, Lakshmipuram & Nearby</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Fast Local Installation & Free Quotation</span>
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-600" />
              {BUSINESS_CONFIG.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-800 bg-emerald-50 font-semibold"
                      : "text-slate-700 hover:text-emerald-800 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-sm shadow-emerald-900/20 active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_CONFIG.phoneLink}
              className="p-2 rounded-lg text-emerald-800 bg-emerald-50"
              aria-label="Call Venayaka Balcony Safety Net"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? "text-emerald-900 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Now: {BUSINESS_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

