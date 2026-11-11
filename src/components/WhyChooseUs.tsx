import React from "react";
import { ShieldCheck, Home, Grid, Wrench, Headphones, MessageSquare, CheckCircle } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Quality Safety Net Solutions",
    description: "High-tensile nylon and UV-stabilized netting materials built to withstand sun exposure and monsoons.",
  },
  {
    icon: Home,
    title: "Residential Protection",
    description: "Protects family, children, and pets on open balconies, high-rise apartments, and window openings.",
  },
  {
    icon: Grid,
    title: "Multiple Netting Services",
    description: "Comprehensive solutions covering pigeon nets, anti-bird netting, terrace nets, and window safety nets.",
  },
  {
    icon: Wrench,
    title: "Professional Installation Services",
    description: "Trained local technicians who ensure taut fitting with stainless steel wire frame borders and rust-proof hooks.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Attentive customer support ready to address enquiries, discuss balcony specifications, and schedule visits.",
  },
  {
    icon: MessageSquare,
    title: "Easy Contact and Enquiry",
    description: "Direct instant communication via phone call or WhatsApp without complicated booking procedures.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Reliable Local Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Venayaka Balcony Safety Net
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated safety net installation for homes, apartments, and residential buildings across Mysore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
