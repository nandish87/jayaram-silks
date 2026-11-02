"use client";

import React from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import GaneshaMotif from "@/components/GaneshaMotif";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { Award, HeartHandshake, History, Sparkles } from "lucide-react";

export default function AboutUs() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-bgCream relative overflow-hidden">
      {/* Decorative Silk threads */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Real Loom & Saree Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-accentGold/40 bg-white">
                <Image
                  src="/images/sarees/deep-maroon-purple-brocade-silk.jpg"
                  alt="Madanapalle Master Weavers Silk Saree"
                  fill
                  className="object-cover object-top"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center space-x-1 text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">
                    <Sparkles size={12} />
                    <span>Loom-Direct Guarantee</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold">
                    {brandConfig.ownerName}
                  </h4>
                  <p className="text-xs text-amber-100/90 mt-1">
                    Traditional Handloom Pit-Looms • Madanapalle
                  </p>
                </div>
              </div>

              {/* Inset Secondary Image (Combo set) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-white hidden sm:block">
                <Image
                  src="/images/sarees/wholesale-combo-set-6.jpg"
                  alt="Wholesale Silk Sarees"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white p-3.5 rounded-2xl shadow-xl flex items-center space-x-2 border border-brand-accentGold/40">
                <Award size={24} className="text-brand-accentGold" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-amber-300 uppercase">
                    36+ Years
                  </span>
                  <span className="block text-[10px] text-stone-200">
                    Handloom Legacy
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Heritage Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase self-start">
              <GaneshaMotif size={18} />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Heritage Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-brand-borderGold shadow-sm flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-50 text-brand-primary">
                  <History size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Hereditary Pit Looms
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Operating traditional wooden pit looms with precision hand-throwing shuttles.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-borderGold shadow-sm flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-brand-secondary">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Loom-to-Wardrobe Pricing
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Direct factory wholesale rates for brides, boutiques, and saree retailers nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Address callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/60 to-amber-50 border border-brand-accentGold/40 text-xs sm:text-sm text-stone-800">
              <strong className="text-brand-primary font-serif text-base block mb-0.5">
                Weaving Unit & Showroom:
              </strong>
              {brandConfig.address.full}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

