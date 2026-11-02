"use client";

import React, { useState, useEffect } from "react";
import brandConfig from "@config/brand.config";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${brandConfig.businessName}, I would like to enquire about your pure handloom silk sarees.`
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${brandConfig.primaryPhone}`}
        className="flex items-center space-x-2 bg-brand-primary hover:bg-brand-primaryDark text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-brand-accentGold/40 group"
        aria-label={`Call ${brandConfig.businessName}`}
      >
        <Phone size={20} className="text-amber-200" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Call Now
        </span>
      </a>

      {/* WhatsApp Quick Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-emerald-400/50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle size={22} className="relative z-10" />
        <span className="relative z-10 hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp Weavers
        </span>
      </a>

    </div>
  );
}

