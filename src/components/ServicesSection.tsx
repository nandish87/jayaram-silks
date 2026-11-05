"use client";

import React from "react";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import {
  PackageCheck,
  Sparkles,
  Video,
  Factory,
  Truck,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Handshake,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  PackageCheck: <PackageCheck className="w-6 h-6 text-brand-primary" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-accentGold" />,
  Video: <Video className="w-6 h-6 text-brand-secondary" />,
  Factory: <Factory className="w-6 h-6 text-brand-primary" />,
  Truck: <Truck className="w-6 h-6 text-amber-700" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
};

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const services = brandConfig.services || [];

  if (services.length === 0) return null;

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Silk Texture Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accentGold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Handshake size={14} className="text-brand-accentGold" />
            <span>{t.services?.badge || "Weaving & Manufacturing Services"}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.services?.title || "Our Weaving & Wholesale Services"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.services?.subtitle ||
              "From bulk wholesale packs to bespoke bridal trousseaus and live video call selection — direct from master pit-looms in Madanapalle."}
          </p>

          <ZariBorderDivider className="mt-5" />
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const isTelugu = language === "te";
            const title = isTelugu && service.teTitle ? service.teTitle : service.title;
            const description = isTelugu && service.teDescription ? service.teDescription : service.description;
            const features = isTelugu && service.teFeatures ? service.teFeatures : service.features;

            const whatsappMessage = encodeURIComponent(
              `Hello ${brandConfig.businessName}, I would like to enquire about your service: "${service.title}". Please provide more details.`
            );
            const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${whatsappMessage}`;

            return (
              <div
                key={service.id || idx}
                className="group relative rounded-3xl bg-brand-bgCream border border-brand-borderGold/70 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 hover:border-brand-accentGold/80"
              >
                {/* Top Icon & Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-brand-borderGold p-3 shadow-sm group-hover:scale-110 group-hover:border-brand-accentGold transition-all duration-300 flex items-center justify-center">
                      {ICON_MAP[service.icon] || <Sparkles className="w-6 h-6 text-brand-primary" />}
                    </div>
                    <span className="font-serif text-2xl font-bold text-stone-300 group-hover:text-brand-accentGold/60 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-brand-primary transition-colors mb-3 leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-brand-borderGold/50">
                    {features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs text-stone-700">
                        <CheckCircle2 size={15} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors group/btn"
                  >
                    <MessageCircle size={15} className="text-emerald-700" />
                    <span>{t.services?.ctaEnquire || "Enquire on WhatsApp"}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Linking to Wholesale */}
        <div className="mt-14 rounded-3xl bg-brand-primaryDark text-amber-100 p-8 sm:p-10 border border-brand-accentGold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Direct Loom Procurement
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Looking for Bulk Wholesale Lots or Boutique Supplies?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 mt-2">
              We supply assortments of 6-saree combo packs and 10-saree design lots to retailers across India. Get custom factory quotes instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="#wholesale"
              className="px-6 py-3.5 rounded-full bg-brand-accentGold hover:bg-brand-accentGoldLight text-stone-900 font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              {t.services?.viewWholesale || "View Wholesale Pricing"}
            </a>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${brandConfig.businessName}, I would like to consult with master weavers regarding bulk wholesale saree orders.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Weavers</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
