import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_CONFIG } from "@/data/business";

interface ServicesProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function Services({ limit, showAllLink = false }: ServicesProps) {
  const displayedServices = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  const createWhatsAppQuoteUrl = (serviceTitle: string) => {
    const text = `Hello Venayaka Balcony Safety Net, I would like to get a quotation for ${serviceTitle} in Mysore. Please share details.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Professional Netting Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Safety Net Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tailored safety net installations for balconies, windows, terraces, and apartments across Mysore. Durable, neat, and bird-proof protection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedServices.map((service) => {
            const whatsappUrl = createWhatsAppQuoteUrl(service.title);

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Card Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} in Mysore - Venayaka Balcony Safety Net`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-emerald-800/90 backdrop-blur-xs text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 transition-all shadow-xs"
                      title={`Get WhatsApp Quotation for ${service.title}`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-300" />
                      <span>Contact for Quotation</span>
                    </a>

                    <a
                      href={BUSINESS_CONFIG.phoneLink}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Direct Call</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional View All Button */}
        {showAllLink && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-emerald-900 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 shadow-sm transition-all"
            >
              <span>View All 8 Safety Net Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
