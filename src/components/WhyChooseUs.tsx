"use client";

import React from "react";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { CheckCircle2, Factory, BadgePercent, Video, Truck, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <BadgePercent className="w-6 h-6 text-brand-primary" />,
      title: "Direct Weaver Pricing",
      description:
        "Save 30% to 50% compared to luxury city retail showrooms by purchasing straight from the Madanapalle looms.",
    },
    {
      icon: <Factory className="w-6 h-6 text-brand-secondary" />,
      title: "100% Handloom Mulberry Silk",
      description:
        "Guaranteed authentic pure silk tested for strength, weight, and luster with verified Silk Mark standards.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-accentGold" />,
      title: "Tested Pure Zari Borders",
      description:
        "Traditional temple spires, intricate peacocks, chakras, and floral mandalas woven with genuine metallic zari threads.",
    },
    {
      icon: <Video className="w-6 h-6 text-brand-primary" />,
      title: "Live Video Call Loom Inspection",
      description:
        "Can't travel to Madanapalle? Book a live WhatsApp video call to inspect saree drapes and color choices in real-time.",
    },
    {
      icon: <Truck className="w-6 h-6 text-brand-secondary" />,
      title: "Secure Pan-India Shipping",
      description:
        "Insured express courier delivery to your doorstep anywhere in India with instant tracking updates.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-brand-accentGold" />,
      title: "Custom Wedding & Bulk Orders",
      description:
        "Bespoke color matching sets and bulk gift packaging for weddings, bridesmaids, family rituals, and reselling.",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-brand-bgCream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={13} className="text-brand-accentGold" />
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.whyUs.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.whyUs.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-borderGold shadow-sm hover:shadow-luxury hover:border-brand-accentGold transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50/80 border border-brand-accentGold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2">
                {r.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

