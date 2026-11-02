"use client";

import React from "react";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation, Mail } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-bgCream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin size={14} className="text-brand-accentGold" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.contact.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.contact.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Contact Info Grid & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Showroom & Loom Address */}
            <div className="p-6 rounded-2xl bg-white border border-brand-borderGold shadow-sm hover:shadow-luxury transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-50 text-brand-primary flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {brandConfig.address.full}
                  </p>

                  <div className="mt-4">
                    <a
                      href={brandConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-semibold hover:bg-brand-primaryDark transition-colors shadow-sm"
                    >
                      <Navigation size={13} />
                      <span>{t.contact.getDirections}</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines (Both numbers clickable) */}
            <div className="p-6 rounded-2xl bg-white border border-brand-borderGold shadow-sm hover:shadow-luxury transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-brand-secondary flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    {t.contact.phoneTitle}
                  </h4>
                  <p className="text-xs text-stone-500 mb-3">
                    Speak directly with master weavers {brandConfig.ownerName}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {brandConfig.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-stone-200 hover:border-brand-primary hover:bg-brand-primary/5 text-stone-800 font-bold text-xs transition-colors"
                      >
                        <Phone size={13} className="text-brand-primary" />
                        <span>+91 {phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hello ${brandConfig.businessName}, I would like to visit your showroom or enquire about silk sarees.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Chat: {brandConfig.whatsappDisplayNumber}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Timings */}
            <div className="p-6 rounded-2xl bg-white border border-brand-borderGold shadow-sm flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-amber-50 text-brand-accentGold flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  {t.contact.hoursTitle}
                </h4>
                <div className="text-xs sm:text-sm text-stone-700 font-medium">
                  {brandConfig.businessHours.days}
                </div>
                <div className="text-xs font-bold text-brand-primary mt-0.5">
                  {brandConfig.businessHours.timings}
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  {brandConfig.businessHours.note}
                </p>
              </div>
            </div>

            {/* Optional Email */}
            {brandConfig.email && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center space-x-3 text-xs text-stone-700">
                <Mail size={16} className="text-stone-500" />
                <span>Email: <a href={`mailto:${brandConfig.email}`} className="text-brand-primary font-medium hover:underline">{brandConfig.email}</a></span>
              </div>
            )}

          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl border border-brand-borderGold shadow-luxury h-full flex flex-col">
            <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden border border-stone-200">
              <iframe
                title="Google Maps Location - Y Jayaram Silk Sarees"
                src={brandConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Action Strip */}
            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-stone-600">
                <MapPin size={15} className="text-brand-primary flex-shrink-0" />
                <span>Madanapalle, Chittoor Dist, Andhra Pradesh – 517 325</span>
              </div>

              <a
                href={brandConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 font-bold text-brand-primary hover:text-brand-primaryDark transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

