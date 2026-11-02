"use client";

import React, { useState } from "react";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { Star, ChevronLeft, ChevronRight, Quote, HeartHandshake } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);

  // Hide section if no testimonials are configured
  if (!brandConfig.testimonials || brandConfig.testimonials.length === 0) {
    return null;
  }

  const prev = () => {
    setCurrentIdx((prev) => (prev - 1 + brandConfig.testimonials.length) % brandConfig.testimonials.length);
  };

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % brandConfig.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <HeartHandshake size={14} className="text-brand-accentGold" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.testimonials.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.testimonials.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative rounded-3xl bg-brand-bgCream border border-brand-borderGold p-8 sm:p-12 shadow-luxury text-center flex flex-col items-center">
            
            <Quote size={40} className="text-brand-accentGold/40 mb-4" />

            {/* Stars */}
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(brandConfig.testimonials[currentIdx].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif italic text-base sm:text-xl text-stone-800 leading-relaxed max-w-2xl mb-8">
              &ldquo;{brandConfig.testimonials[currentIdx].comment}&rdquo;
            </p>

            {/* Author details */}
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-lg text-brand-primary">
                {brandConfig.testimonials[currentIdx].name}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                {brandConfig.testimonials[currentIdx].city}
              </span>
              <span className="mt-1 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                {brandConfig.testimonials[currentIdx].occasion}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2 mt-8">
              {brandConfig.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIdx === i
                      ? "bg-brand-primary w-8"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Navigation Controls */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-brand-borderGold shadow-lg text-stone-700 hover:text-brand-primary transition-all hover:scale-110"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-brand-borderGold shadow-lg text-stone-700 hover:text-brand-primary transition-all hover:scale-110"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}

