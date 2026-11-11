import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, CheckCircle, MapPin, ArrowRight, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
                    alt="Safety net installation service in Mysore apartments by Venayaka Balcony Safety Net"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Local Installation
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      Protecting Mysore Homes &amp; Balconies
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Serving KG Koppal, Saraswathipuram, Lakshmipuram &amp; Chamarajapuram
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Coverage Across Mysore</span>
                </div>
                <p className="text-xs text-slate-600">
                  {BUSINESS_CONFIG.primaryServiceAreasText}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-emerald-700" />
              <span>Dedicated To Home Protection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Venayaka Balcony Safety Net
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Venayaka Balcony Safety Net provides reliable safety net solutions for residential homes, apartments, and commercial spaces in Mysore. Balconies and open windows provide natural light and fresh ventilation, but they can also expose living spaces to pigeons, bird droppings, and safety hazards.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We install high-tensile balcony safety nets, pigeon protection nets, anti-bird netting, terrace safety nets, and window nets designed to keep your home safe, clean, and bird-free without obstructing light or airflow.
            </p>

            {/* Core Offerings List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Protection from Pigeons &amp; Birds</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Eliminate health risks associated with pigeon droppings, feathers, and nesting in balconies and utility ducts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Safety Solutions for Residential Apartments</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Protective boundaries for balconies, stairwells, and windows to provide safety for children, elders, and pets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Balcony and Terrace Netting Services</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Custom-measured netting fitted with strong anchors and stainless steel wire borders for long-lasting stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Customer-Focused Installation Services</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Prompt on-site visits, transparent measurement, and respectful service across all major localities in Mysore.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_CONFIG.phoneLink}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {BUSINESS_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

