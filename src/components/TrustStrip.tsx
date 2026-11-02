"use client";

import React from "react";
import brandConfig from "@config/brand.config";
import { ShieldCheck, Factory, PackageCheck, Truck, Sparkles } from "lucide-react";

export default function TrustStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
    Factory: <Factory className="w-8 h-8 text-brand-secondary" />,
    PackageCheck: <PackageCheck className="w-8 h-8 text-brand-accentGold" />,
    Truck: <Truck className="w-8 h-8 text-brand-primary" />,
    Sparkles: <Sparkles className="w-8 h-8 text-brand-accentGold" />,
  };

  return (
    <div className="bg-white border-y border-brand-borderGold shadow-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4">
          {brandConfig.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-brand-bgCream/80 transition-colors"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-amber-50 border border-brand-accentGold/20">
                {iconMap[badge.icon] || <ShieldCheck className="w-8 h-8 text-brand-primary" />}
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                  {badge.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

