"use client";

import React, { useState } from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { MessageCircle, Phone, PackageCheck, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function WholesaleSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    quantity: "6-12 Sarees",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `*WHOLESALE ENQUIRY - ${brandConfig.businessName}*\n\n` +
      `• *Name/Business:* ${formData.name}\n` +
      `• *Contact:* ${formData.phone}\n` +
      `• *City/Location:* ${formData.city}\n` +
      `• *Quantity Required:* ${formData.quantity}\n` +
      `• *Requirements:* ${formData.message || "Please share wholesale price list and catalogue."}\n\n` +
      `_Sent from website wholesale portal_`
    );

    const waUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${waText}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 500);
  };

  return (
    <section id="wholesale" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <PackageCheck size={14} className="text-brand-accentGold" />
            <span>{t.wholesale.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.wholesale.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.wholesale.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center rounded-3xl bg-brand-bgCream border border-brand-borderGold p-6 sm:p-10 lg:p-12 shadow-luxury">
          
          {/* Left Column: Wholesale Pack Info & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Combo Photo Banner */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-brand-borderGold">
              <Image
                src="/images/sarees/wholesale-combo-set-6.jpg"
                alt="Direct Loom Saree Wholesale Combo Pack"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Wholesale 6-Piece Color Pack
              </div>
            </div>

            {/* Minimum Order Quantity Callout */}
            <div className="p-4 rounded-xl bg-amber-100/70 border border-brand-accentGold/60">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                {t.wholesale.moqLabel}:
              </span>
              <span className="font-serif text-lg font-bold text-brand-primary">
                {brandConfig.wholesale.minimumOrderQuantity}
              </span>
            </div>

            {/* Wholesale Highlights */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-stone-900 text-base">
                Direct Weaver Privileges:
              </h4>
              <ul className="space-y-2.5">
                {brandConfig.wholesale.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Calling helpline */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${brandConfig.primaryPhone}`}
                className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full border border-brand-primary text-brand-primary font-semibold text-xs hover:bg-brand-primary hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span>Call Wholesale Desk: {brandConfig.primaryPhone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Wholesale Enquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-brand-borderGold shadow-md">
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {t.wholesale.formTitle}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {t.wholesale.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.wholesale.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Reddy / Sri Sai Silks"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentGold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.wholesale.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentGold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.wholesale.city} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Hyderabad / Bengaluru"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentGold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.wholesale.quantity}
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentGold bg-white"
                >
                  <option value="6-12 Sarees (Trial wholesale pack)">6 – 12 Sarees (Trial Wholesale Pack)</option>
                  <option value="15-30 Sarees (Boutique lot)">15 – 30 Sarees (Boutique Lot)</option>
                  <option value="50+ Sarees (Showroom bulk)">50+ Sarees (Showroom Bulk Lot)</option>
                  <option value="Wedding Trousseau Bulk (Assorted)">Wedding Trousseau Bulk (Assorted)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.wholesale.message}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us your color preferences, occasion, or targeted price range..."
                  className="w-full px-4 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentGold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>{t.wholesale.submit}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs text-center border border-emerald-200">
                  {t.wholesale.successMessage}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

