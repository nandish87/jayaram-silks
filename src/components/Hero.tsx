"use client";

import React, { useState } from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import GaneshaMotif from "@/components/GaneshaMotif";
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Award, Layers } from "lucide-react";

export default function Hero() {
  const { t, language } = useLanguage();

  // Featured hero images from real cropped photos
  const heroShowcases = [
    {
      image: "/images/sarees/rani-pink-paisley-bridal-silk.jpg",
      title: "Rani Pink Paisley Bridal Pattu",
      badge: "Pure Mulberry Silk",
    },
    {
      image: "/images/sarees/peacock-teal-green-handloom.jpg",
      title: "Twin Peacock Teal Green Handloom",
      badge: "Pure Zari Weave",
    },
    {
      image: "/images/sarees/wholesale-combo-set-6.jpg",
      title: "6-Color Wholesale Master Combo",
      badge: "Wholesale Bulk Pack",
    },
  ];

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-brand-bgCream via-amber-50/30 to-brand-bgCream">
      {/* Decorative Traditional Zari Mandala Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-accentGold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Auspicious Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold">
              <GaneshaMotif size={20} />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.15] tracking-tight">
              {t.hero.title} –{" "}
              <span className="text-maroon-gradient underline decoration-brand-accentGold/60 decoration-wavy decoration-1">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-700 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Highlighted Call-out Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-secondary bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                <ShieldCheck size={16} className="text-emerald-700" />
                <span>Madanapalle Handloom Certified</span>
              </div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
                <Layers size={16} className="text-amber-700" />
                <span>Wholesale Packs & Retail Supply</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary: Collections */}
              <a
                href="#collections"
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-brand-primary text-white font-semibold text-sm sm:text-base shadow-luxury hover:bg-brand-primaryDark transition-all transform hover:-translate-y-0.5 group"
              >
                <span>{t.hero.ctaCollections}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Hello ${brandConfig.businessName}, I would like to enquire about your pure handloom silk sarees and wholesale rates.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle size={19} />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              {/* Wholesale Link */}
              <a
                href="#wholesale"
                className="inline-flex items-center justify-center space-x-2 px-5 py-4 rounded-full bg-white text-stone-800 border border-brand-accentGold/60 hover:border-brand-primary hover:text-brand-primary font-semibold text-sm transition-all"
              >
                <span>{t.hero.ctaWholesale}</span>
              </a>
            </div>

            {/* Trust Stats Bar (only shown if stats are configured) */}
            {brandConfig.stats && brandConfig.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-borderGold w-full">
                {brandConfig.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs text-stone-600 font-medium">
                      {language === "te" && stat.teLabel ? stat.teLabel : stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Hero Visual Saree Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Zari Border Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-accentGold via-amber-200 to-brand-primary opacity-30 blur-lg transform -rotate-1" />

              {/* Main Saree Showcase Card */}
              <div className="relative rounded-2xl bg-white p-3 shadow-2xl border border-brand-borderGold overflow-hidden">
                
                {/* Saree Image Container */}
                <div className="relative h-[430px] sm:h-[490px] w-full rounded-xl overflow-hidden bg-stone-100 group">
                  <Image
                    src={heroShowcases[activeHeroIdx].image}
                    alt={heroShowcases[activeHeroIdx].title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlay for Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 text-xs font-semibold border border-amber-300/30">
                    <Sparkles size={12} className="text-amber-400" />
                    <span>{heroShowcases[activeHeroIdx].badge}</span>
                  </div>

                  {/* Floating Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-medium tracking-widest uppercase text-amber-300 block mb-1">
                      {brandConfig.businessName} • Madanapalle Weaves
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow">
                      {heroShowcases[activeHeroIdx].title}
                    </h3>
                  </div>
                </div>

                {/* Saree Thumbnail Switcher */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {heroShowcases.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHeroIdx(idx)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeHeroIdx === idx
                          ? "border-brand-primary ring-2 ring-brand-accentGold/50 scale-[1.02]"
                          : "border-stone-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top"
                      />
                    </button>
                  ))}
                </div>

              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -bottom-5 -left-5 bg-brand-primaryDark text-amber-100 px-4 py-3 rounded-2xl shadow-xl border border-brand-accentGold/40 flex items-center space-x-3 hidden sm:flex">
                <Award size={28} className="text-brand-accentGold" />
                <div className="text-left">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    100% Genuine
                  </div>
                  <div className="text-[11px] text-amber-100/90 font-medium">
                    Pure Silk Mark Quality
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

