"use client";

import React from "react";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { Sparkles, Layers, Palette, Cpu, CheckCircle } from "lucide-react";

export default function CraftsmanshipProcess() {
  const { t } = useLanguage();

  const stepIcons = [
    <Layers key="1" size={24} className="text-brand-accentGold" />,
    <Palette key="2" size={24} className="text-brand-accentGold" />,
    <Cpu key="3" size={24} className="text-brand-accentGold" />,
    <Sparkles key="4" size={24} className="text-brand-accentGold" />,
    <CheckCircle key="5" size={24} className="text-brand-accentGold" />,
  ];

  return (
    <section id="craftsmanship" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={13} className="text-brand-accentGold" />
            <span>{t.craftsmanship.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.craftsmanship.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.craftsmanship.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* 5-Step Craftsmanship Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accentGold/20 via-brand-accentGold to-brand-accentGold/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {brandConfig.craftsmanshipSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-bgCream border border-brand-borderGold shadow-sm hover:shadow-luxury transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step Number Circle */}
                <div className="relative w-16 h-16 rounded-full bg-white border-2 border-brand-accentGold flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform">
                  <span className="font-serif font-extrabold text-lg text-brand-primary">
                    {step.step}
                  </span>
                  
                  {/* Subtle pulsing ring */}
                  <div className="absolute -inset-1 rounded-full border border-brand-accentGold/40 animate-pulse pointer-events-none" />
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weaver Quote Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-primaryDark to-brand-primary text-white text-center max-w-4xl mx-auto shadow-2xl border border-brand-accentGold/30">
          <blockquote className="font-serif italic text-base sm:text-xl text-amber-100 leading-relaxed">
            &ldquo;A handloom saree is not fabricated by machine; it breathes with the rhythmic heartbeat, patience, and prayers of the artisan family that spent hundreds of hours weaving it.&rdquo;
          </blockquote>
          <div className="mt-3 text-xs uppercase tracking-widest font-bold text-amber-300">
            — {brandConfig.ownerName}, Madanapalle Handloom Weavers
          </div>
        </div>

      </div>
    </section>
  );
}

