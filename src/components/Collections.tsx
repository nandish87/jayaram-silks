"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import brandConfig from "@config/brand.config";
import { useLanguage } from "@/components/LanguageContext";
import ZariBorderDivider from "@/components/ZariBorderDivider";
import ProductModal, { Product } from "@/components/ProductModal";
import { Search, MessageCircle, Eye, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export default function Collections() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Filtered products list based on category & search
  const filteredProducts = useMemo(() => {
    return brandConfig.products.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.zari.toLowerCase().includes(q) ||
        p.colors.some((c) => c.toLowerCase().includes(q)) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="collections" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-accentGold/40 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={13} className="text-brand-accentGold" />
            <span>{t.collections.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            {t.collections.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.collections.subtitle}
          </p>

          <ZariBorderDivider className="mt-4" />
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {brandConfig.categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const displayName =
                language === "te" && cat.teName ? cat.teName : cat.name;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? "bg-brand-primary text-white shadow-luxury ring-2 ring-brand-accentGold/50 scale-105"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {displayName}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.collections.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-accentGold focus:bg-white transition-all shadow-inner"
            />
          </div>

        </div>

        {/* Showing Count */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>
            {t.collections.showingCount.replace(
              "{count}",
              filteredProducts.length.toString()
            )}
          </span>
          <span className="font-medium text-brand-secondary">
            Madanapalle Weaving Unit Direct
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const whatsappText = encodeURIComponent(
              `Hello ${brandConfig.businessName},\n\nI want to enquire about this saree:\n• ${product.name} (${product.sku})\n• Fabric: ${product.fabric}\n\nPlease share wholesale/retail rate & availability.`
            );

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl border border-brand-borderGold/70 shadow-sm hover:shadow-luxury hover:border-brand-accentGold transition-all duration-300 overflow-hidden"
              >
                {/* Saree Image Container */}
                <div
                  onClick={() => setModalProduct(product)}
                  className="relative aspect-[3/4] w-full bg-stone-100 cursor-pointer overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-brand-primary shadow-sm backdrop-blur-sm border border-brand-primary/20">
                      {product.sku}
                    </span>

                    {product.tags[0] && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-primaryDark/90 text-amber-200 shadow-sm backdrop-blur-sm">
                        {product.tags[0]}
                      </span>
                    )}
                  </div>

                  {/* Quick View Button on Hover */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProduct(product);
                    }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-semibold shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Eye size={13} className="text-brand-primary" />
                    <span>{t.collections.viewDetails}</span>
                  </button>
                </div>

                {/* Saree Info & Actions */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    {/* Fabric & Zari tag line */}
                    <div className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wider line-clamp-1">
                      {product.fabric}
                    </div>

                    {/* Saree Name */}
                    <h3
                      onClick={() => setModalProduct(product)}
                      className="font-serif text-base sm:text-lg font-bold text-stone-900 mt-1 line-clamp-2 hover:text-brand-primary cursor-pointer transition-colors"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Zari description */}
                    <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.zari}
                    </p>
                  </div>

                  {/* Pricing & WhatsApp Direct CTA */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-stone-500 font-medium">Pricing</span>
                      <span className="text-xs font-bold text-brand-primary">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${brandConfig.whatsappNumber}?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-all transform hover:scale-105"
                      title={t.collections.enquireWhatsApp}
                    >
                      <MessageCircle size={14} />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
            <p className="text-stone-600 text-sm">
              No sarees found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-full hover:bg-brand-primaryDark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
}

