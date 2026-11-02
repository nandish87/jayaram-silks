"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import GaneshaMotif from "@/components/GaneshaMotif";
import { Phone, MessageCircle, Menu, X, Globe, Sparkles } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.collections, href: "#collections" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.craftsmanship, href: "#craftsmanship" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.wholesale, href: "#wholesale" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Auspicious Top Bar */}
      <div className="bg-brand-primaryDark text-amber-100 text-xs py-1.5 px-4 border-b border-brand-accentGold/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GaneshaMotif size={16} />
            <span className="font-medium tracking-wide">
              || శ్రీ గణేశాయ నమః || {brandConfig.tagline}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Direct Loom Wholesale Call */}
            <a
              href={`tel:${brandConfig.primaryPhone}`}
              className="hidden sm:inline-flex items-center space-x-1.5 text-amber-200 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-brand-accentGold" />
              <span>Loom Helpline: {brandConfig.primaryPhone}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-black/20 rounded-full px-2 py-0.5 border border-brand-accentGold/20">
              <Globe size={11} className="text-brand-accentGold" />
              <button
                onClick={() => setLanguage("en")}
                className={`text-[11px] px-1.5 py-0.5 rounded transition-colors ${
                  language === "en"
                    ? "bg-brand-accentGold text-stone-900 font-bold"
                    : "text-amber-200/80 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-amber-300/40">|</span>
              <button
                onClick={() => setLanguage("te")}
                className={`text-[11px] px-1.5 py-0.5 rounded transition-colors ${
                  language === "te"
                    ? "bg-brand-accentGold text-stone-900 font-bold"
                    : "text-amber-200/80 hover:text-white"
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-luxury py-2.5 border-b border-brand-borderGold"
            : "bg-brand-bgCream py-4 border-b border-brand-borderGold/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Business Name */}
          <Link href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={brandConfig.logoMark || "/images/logo-mark.svg"}
                alt={brandConfig.businessName}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-primary group-hover:text-brand-accentGold transition-colors">
                {brandConfig.businessName}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-brand-secondary">
                {brandConfig.businessType}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-brand-primary transition-colors tracking-wide relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accentGold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Call Button */}
            <a
              href={`tel:${brandConfig.primaryPhone}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-brand-primary border border-brand-primary/30 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <Phone size={13} />
              <span>{t.nav.callNow}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(
                brandConfig.businessName
              )}%2C%20I%20would%20like%20to%20enquire%20about%20your%20pure%20handloom%20silk%20sarees.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={14} />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-brand-primary rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-borderGold shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-800 hover:text-brand-primary py-2 px-3 rounded-lg hover:bg-brand-bgCream border-b border-stone-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${brandConfig.primaryPhone}`}
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-brand-primary text-brand-primary font-semibold text-sm"
                >
                  <Phone size={15} />
                  <span>{t.nav.callNow}</span>
                </a>
                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-700 text-white font-semibold text-sm"
                >
                  <MessageCircle size={15} />
                  <span>{t.nav.whatsapp}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

