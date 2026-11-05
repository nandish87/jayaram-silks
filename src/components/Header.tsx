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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ["hero", "collections", "services", "about", "contact"];
      const scrollPos = window.scrollY + 140;
      for (const sId of sectionIds) {
        const el = document.getElementById(sId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero", id: "hero" },
    { label: t.nav.collections, href: "#collections", id: "collections" },
    { label: t.nav.services || "Services", href: "#services", id: "services" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
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

          {/* Desktop Floating Pill Navigation (Monolith-Inspired) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-stone-900/[0.04] border border-stone-900/[0.08] backdrop-blur-sm shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 group ${
                    isActive
                      ? "text-brand-primary"
                      : "text-stone-600 hover:text-stone-950"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white border border-brand-accentGold/60 shadow-sm" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Call Button */}
            <a
              href={`tel:${brandConfig.primaryPhone}`}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:text-brand-primary border border-stone-300 hover:border-brand-primary rounded-full transition-all duration-200"
            >
              <Phone size={13} />
              <span>{t.nav.callNow}</span>
            </a>

            {/* WhatsApp CTA (High-impact pill like Monolith's Get Started) */}
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(
                brandConfig.businessName
              )}%2C%20I%20would%20like%20to%20enquire%20about%20your%20pure%20handloom%20silk%20sarees.`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center space-x-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
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

