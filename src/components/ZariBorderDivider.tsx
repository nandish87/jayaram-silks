"use client";

import React from "react";

interface ZariBorderDividerProps {
  className?: string;
  variant?: "temple" | "floral" | "minimal";
}

export default function ZariBorderDivider({
  className = "",
  variant = "temple",
}: ZariBorderDividerProps) {
  return (
    <div className={`w-full overflow-hidden select-none py-4 ${className}`} aria-hidden="true">
      <div className="flex items-center justify-center space-x-3 max-w-4xl mx-auto px-4">
        {/* Left gold thread */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-accentGold/40 to-brand-accentGold" />

        {/* Traditional Temple Zari Spike Pattern */}
        {variant === "temple" && (
          <div className="flex items-center space-x-1 text-brand-accentGold opacity-90">
            <svg width="180" height="24" viewBox="0 0 180 24" fill="currentColor">
              {/* Repeating temple triangles */}
              <polygon points="10,22 18,6 26,22" />
              <circle cx="18" cy="3" r="1.5" />
              <polygon points="34,22 42,6 50,22" />
              <circle cx="42" cy="3" r="1.5" />
              <polygon points="58,22 66,6 74,22" />
              <circle cx="66" cy="3" r="1.5" />

              {/* Center Auspicious Kalash / Diamond Motif */}
              <polygon points="90,2 98,12 90,22 82,12" fill="var(--brand-primary, #7B1113)" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="90" cy="12" r="2.5" fill="currentColor" />

              <polygon points="106,22 114,6 122,22" />
              <circle cx="114" cy="3" r="1.5" />
              <polygon points="130,22 138,6 146,22" />
              <circle cx="138" cy="3" r="1.5" />
              <polygon points="154,22 162,6 170,22" />
              <circle cx="162" cy="3" r="1.5" />

              {/* Base zari line */}
              <rect x="0" y="23" width="180" height="1" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        )}

        {/* Right gold thread */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-brand-accentGold/40 to-brand-accentGold" />
      </div>
    </div>
  );
}

