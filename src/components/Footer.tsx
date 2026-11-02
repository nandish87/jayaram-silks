"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import GaneshaMotif from "@/components/GaneshaMotif";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primaryDark text-amber-100 border-t-2 border-brand-accentGold/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-accentGold/20">
          
          {/* Brand Info & Auspicious Blessing */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={brandConfig.logoMark || "/images/logo-mark.svg"}
                  alt={brandConfig.businessName}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-amber-200 block">
                  {brandConfig.businessName}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-300/80">
                  {brandConfig.businessType}
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-100/80 leading-relaxed max-w-sm">
              {brandConfig.shortDescription}
            </p>

            {/* Auspicious line */}
            <div className="flex items-center space-x-2 pt-2 text-xs text-amber-300/90">
              <GaneshaMotif size={18} />
              <span>|| శ్రీ గణేశాయ నమః • Traditional Handloom Legacy ||</span>
            </div>

            {/* Social Icons (Auto-hide empty) */}
            <div className="flex items-center space-x-3 pt-2">
              {brandConfig.socialLinks.whatsapp && (
                <a
                  href={brandConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-emerald-600 text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              )}
              {brandConfig.socialLinks.instagram && (
                <a
                  href={brandConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {brandConfig.socialLinks.facebook && (
                <a
                  href={brandConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-blue-600 text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {brandConfig.socialLinks.youtube && (
                <a
                  href={brandConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-amber-300 transition-colors">
                  {t.nav.craftsmanship}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-amber-300 transition-colors">
                  {t.nav.wholesale}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Saree Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.collections}
            </h4>
            <ul className="space-y-2 text-xs">
              {brandConfig.categories.slice(1).map((cat) => (
                <li key={cat.id}>
                  <a href="#collections" className="hover:text-amber-300 transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Weaver Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-amber-100/80">
              <div className="flex items-start space-x-2">
                <MapPin size={15} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span>{brandConfig.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-amber-300 flex-shrink-0" />
                <span>+91 {brandConfig.phones.join(" / +91 ")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} className="text-amber-300 flex-shrink-0" />
                <span>{brandConfig.businessHours.timings} ({brandConfig.businessHours.days})</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & White-Label Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-200/60 gap-3">
          <div>
            &copy; {currentYear} {brandConfig.businessName}. {t.footer.copyright}
          </div>

          {brandConfig.credits.show && (
            <div className="text-center sm:text-right text-amber-300/80">
              <span>{brandConfig.credits.text}</span>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}

