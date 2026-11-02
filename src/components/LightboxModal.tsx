"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import brandConfig from "@config/brand.config";

interface LightboxModalProps {
  images: Array<{ src: string; title: string; category: string }>;
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const current = images[currentIndex];
  const waText = encodeURIComponent(
    `Hello ${brandConfig.businessName}, I saw this saree photo in your website gallery: "${current.title}". Please share details and pricing.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X size={22} />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="Previous Image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="Next Image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption & WhatsApp CTA */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full text-white px-2 gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
              {current.category} • {brandConfig.businessName}
            </span>
            <h4 className="font-serif text-lg font-bold">{current.title}</h4>
          </div>

          <a
            href={`https://wa.me/${brandConfig.whatsappNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle size={15} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

