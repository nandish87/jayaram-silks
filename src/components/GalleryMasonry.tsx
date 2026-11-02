"use client";

import React, { useState } from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import LightboxModal from "@/components/LightboxModal";
import { Sparkles, ZoomIn } from "lucide-react";

export default function GalleryMasonry() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-brand-bgCream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={13} className="text-brand-accentGold" />
            <span>{t.gallery.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.gallery.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.gallery.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Gallery Masonry / Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandConfig.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 border border-brand-borderGold shadow-sm hover:shadow-luxury cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  {item.category}
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-bold line-clamp-2">
                  {item.title}
                </h4>

                <div className="mt-2 inline-flex items-center space-x-1 text-[11px] text-amber-100 font-medium">
                  <ZoomIn size={12} />
                  <span>Click to view large</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={brandConfig.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}

