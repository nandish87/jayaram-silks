"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import GaneshaMotif from "@/components/GaneshaMotif";
import { X, MessageCircle, Phone, ShieldCheck, Tag, Sparkles, Check, Share2 } from "lucide-react";

export type Product = (typeof brandConfig.products)[0];

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ${brandConfig.businessName},\n\nI am interested in this pure handloom saree:\n• Saree: ${product.name}\n• SKU: ${product.sku}\n• Fabric: ${product.fabric}\n\nPlease share the wholesale/retail price and availability.`
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this handloom saree from ${brandConfig.businessName}: ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-brand-borderGold z-10 flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-md transition-colors"
          aria-label={t.productModal.close}
        >
          <X size={20} />
        </button>

        {/* Left: Image Viewer & Detail Tabs */}
        <div className="w-full lg:w-1/2 p-5 sm:p-6 bg-stone-50 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
          <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-white shadow-inner border border-stone-200">
            <Image
              src={activeImage || product.image}
              alt={product.name}
              fill
              className="object-cover object-top"
              priority
            />

            {/* In-Stock Badge */}
            <div className="absolute top-3 left-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-semibold shadow">
              <Check size={13} />
              <span>{t.collections.inStock}</span>
            </div>
          </div>

          {/* Alternate image thumbnail if detail crop available */}
          {product.detailImage && (
            <div className="flex items-center space-x-3 mt-4 w-full justify-start">
              <span className="text-xs font-medium text-stone-500">View:</span>
              <button
                onClick={() => setActiveImage(product.image)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === product.image ? "border-brand-primary ring-2 ring-brand-accentGold/50" : "border-stone-300 opacity-70"
                }`}
              >
                <Image src={product.image} alt="Full Saree" fill className="object-cover object-top" />
              </button>
              <button
                onClick={() => setActiveImage(product.detailImage!)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === product.detailImage ? "border-brand-primary ring-2 ring-brand-accentGold/50" : "border-stone-300 opacity-70"
                }`}
              >
                <Image src={product.detailImage} alt="Pallu / Zari Detail" fill className="object-cover" />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white text-center py-0.5">Pallu</span>
              </button>
            </div>
          )}
        </div>

        {/* Right: Saree Specifications & CTAs */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Header info */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                <Tag size={12} />
                <span>{product.sku}</span>
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center space-x-1 text-xs text-stone-500 hover:text-brand-primary transition-colors"
              >
                <Share2 size={14} />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>

            {/* Product Name */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              {product.name}
            </h2>

            {/* Price Badge */}
            <div className="inline-block px-4 py-2 rounded-xl bg-amber-50 border border-brand-accentGold/40">
              <span className="text-xs text-stone-600 block">Direct Loom Pricing:</span>
              <span className="text-lg font-bold text-brand-primary font-serif">
                {product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-stone-700 leading-relaxed">
              {product.description}
            </p>

            {/* Key Handloom Specs */}
            <div className="bg-brand-bgCream rounded-xl p-4 border border-brand-borderGold space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-start py-1 border-b border-stone-200/60">
                <span className="font-semibold text-stone-600">{t.productModal.fabric}:</span>
                <span className="font-medium text-stone-900 text-right">{product.fabric}</span>
              </div>
              <div className="flex justify-between items-start py-1 border-b border-stone-200/60">
                <span className="font-semibold text-stone-600">{t.productModal.zari}:</span>
                <span className="font-medium text-stone-900 text-right">{product.zari}</span>
              </div>
              <div className="flex justify-between items-start py-1 border-b border-stone-200/60">
                <span className="font-semibold text-stone-600">Origin & Loom:</span>
                <span className="font-medium text-stone-900 text-right">Madanapalle Traditional Pit Loom</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-semibold text-stone-600">{t.productModal.colors}:</span>
                <div className="flex items-center space-x-1.5">
                  {product.colors.map((c, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-full bg-white border border-stone-300 text-[11px] font-medium text-stone-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Authentic Trust Note */}
            <div className="flex items-center space-x-2 text-xs text-amber-900 bg-amber-50/70 p-3 rounded-lg border border-amber-200">
              <ShieldCheck size={18} className="text-emerald-700 flex-shrink-0" />
              <span>Silk Mark certified handloom weave with tested pure zari border. Direct from weavers.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-3">
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span>{t.productModal.enquireText}</span>
            </a>

            <div className="flex items-center justify-between gap-3">
              <a
                href={`tel:${brandConfig.primaryPhone}`}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-xs transition-colors"
              >
                <Phone size={14} />
                <span>Call {brandConfig.primaryPhone}</span>
              </a>

              <a
                href="#wholesale"
                onClick={onClose}
                className="flex-1 flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl border border-stone-300 hover:border-brand-accentGold text-stone-700 font-semibold text-xs transition-colors"
              >
                <Sparkles size={14} className="text-brand-accentGold" />
                <span>Bulk / Wholesale MOQ</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

