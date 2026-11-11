import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_CONFIG } from "@/data/business";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Safety Net Services in Mysore | Pigeon Nets & Balcony Nets",
  description:
    "Explore our complete range of safety nets in Mysore: Pigeon safety nets, anti-bird nets, balcony safety nets, terrace nets, children safety nets, and invisible netting. Call 9880364527.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Safety Net Services in Mysore | Venayaka Balcony Safety Net",
    description:
      "Professional safety netting installation for apartments and homes in Mysore. Get instant WhatsApp quotations.",
  },
};

export default function ServicesPage() {
  const createWhatsAppQuoteUrl = (serviceTitle: string) => {
    const text = `Hello Venayaka Balcony Safety Net, I would like to get a quotation for ${serviceTitle} in Mysore. Please share details.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Complete Netting Range</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our Safety Net Installation Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Tailored safety netting solutions for residential apartments, individual houses, villas, and commercial spaces across Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            const quoteUrl = createWhatsAppQuoteUrl(service.title);

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                      <Image
                        src={service.image}
                        alt={`${service.title} installation in Mysore - Venayaka Balcony Safety Net`}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover"
                      />
                      {service.badge && (
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} space-y-4`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Service #{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Key Advantages &amp; Specifications:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={quoteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 transition-all shadow-sm text-sm"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-300" />
                        <span>Get WhatsApp Quotation</span>
                      </a>
                      <a
                        href={BUSINESS_CONFIG.phoneLink}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4 text-emerald-700" />
                        <span>Call {BUSINESS_CONFIG.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enquiry Form */}
      <ContactSection />
    </div>
  );
}

