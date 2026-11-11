"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Balcony Safety Nets",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid mobile number.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter your location or area in Mysore.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const formattedMessage =
      `Hello Venayaka Balcony Safety Net,\n\n` +
      `I would like to enquire about your services.\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Phone: ${formData.phone.trim()}\n` +
      `Service: ${formData.service}\n` +
      `Location: ${formData.location.trim()}\n` +
      `Message: ${formData.message.trim() || "Please share quotation and availability."}\n\n` +
      `Please contact me.`;

    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
          <span>Quick WhatsApp Enquiry</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Request a Free Quotation
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Fill out this simple form to instantly send your requirement directly to our team on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
              errors.name ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 9880364527"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
              errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Select Required Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          >
            {SERVICES_DATA.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
            <option value="General Safety Net Enquiry">Other / Multiple Safety Nets</option>
          </select>
        </div>

        {/* Customer Location */}
        <div>
          <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Location / Area in Mysore <span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Saraswathipuram / KG Koppal / Lakshmipuram"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all ${
              errors.location ? "border-red-400 bg-red-50/30" : "border-slate-300 bg-white"
            }`}
          />
          {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Message or Balcony Dimensions (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Need pigeon netting for 2 balconies on the 3rd floor."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 disabled:opacity-75 transition-all shadow-md shadow-emerald-950/20 text-base"
        >
          <Send className="w-5 h-5 text-emerald-300" />
          <span>{isSubmitting ? "Opening WhatsApp..." : "Submit Enquiry via WhatsApp"}</span>
        </button>

        <p className="text-center text-xs text-slate-500">
          Submitting opens WhatsApp with your prefilled details to chat with +91 9880364527 directly.
        </p>
      </form>
    </div>
  );
}
