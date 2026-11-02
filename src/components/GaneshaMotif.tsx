"use client";

import React from "react";
import brandConfig from "@config/brand.config";

interface GaneshaMotifProps {
  className?: string;
  size?: number;
}

export default function GaneshaMotif({ className = "", size = 48 }: GaneshaMotifProps) {
  if (!brandConfig.showAuspiciousMotif) return null;

  return (
    <div
      className={`inline-flex items-center justify-center text-brand-accentGold ${className}`}
      title={`|| Sri ${brandConfig.auspiciousMotifName || "Ganesha"} Namaha ||`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform duration-300 hover:scale-110"
      >
        <defs>
          <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-accent-gold-light, #E8C15A)" />
            <stop offset="100%" stopColor="var(--brand-accent-gold, #C59B27)" />
          </linearGradient>
        </defs>

        {/* Outer auspicious halo circle */}
        <circle cx="32" cy="32" r="30" stroke="url(#ganeshaGold)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

        {/* Crown / Mukut */}
        <path
          d="M 27 18 L 32 10 L 37 18 Z"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="14" r="1.5" fill="url(#ganeshaGold)" />

        {/* Forehead / Tilak (Trishul style) */}
        <path
          d="M 29 20 Q 32 24 35 20"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.5"
          fill="none"
        />
        <line x1="32" y1="18" x2="32" y2="25" stroke="var(--brand-primary, #7B1113)" strokeWidth="1.5" />
        <circle cx="32" cy="27" r="1.2" fill="var(--brand-primary, #7B1113)" />

        {/* Head and Large Ears */}
        <path
          d="M 25 22 C 16 22 16 34 26 36"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 39 22 C 48 22 48 34 38 36"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sacred Trunk (Curving to the right for prosperity / Valampuri style) */}
        <path
          d="M 32 28 C 30 33 27 38 31 43 C 33 46 39 46 41 42 C 42 39 39 37 36 38"
          stroke="url(#ganeshaGold)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Modak in trunk */}
        <circle cx="37" cy="38" r="1.8" fill="url(#ganeshaGold)" />

        {/* Auspicious Lotus Petals below */}
        <path
          d="M 24 50 Q 32 46 40 50 Q 32 54 24 50 Z"
          stroke="url(#ganeshaGold)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
}

