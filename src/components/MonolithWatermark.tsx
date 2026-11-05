"use client";

import React, { useState } from "react";
import brandConfig from "@config/brand.config";
import { ExternalLink, X } from "lucide-react";

export default function MonolithWatermark() {
  const [isDismissed, setIsDismissed] = useState(false);
  const credits = brandConfig.credits;

  if (!credits?.show || !credits?.showFloatingBadge || isDismissed) {
    return null;
  }

  const agencyUrl = credits.agencyUrl || "https://getmonolith.in";
  const agencyName = credits.agencyName || "Monolith";

  return (
    <aside
      aria-label="Agency watermark"
      className="fixed bottom-5 left-5 z-40 pointer-events-auto transition-all duration-300"
    >
      <div className="group relative flex items-center bg-[#07070a]/92 text-stone-200 pl-2.5 pr-2 py-1.5 rounded-full border border-white/10 shadow-2xl backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300">
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Link to Monolith */}
        <a
          href={agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center space-x-2 text-xs"
          title={`${agencyName} — ${credits.tagline || "Autonomous AI Infrastructure"}`}
        >
          {/* Official Monolith SVG Logo Mark */}
          <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
              <rect width="32" height="32" rx="6" fill="rgba(6,182,212,0.2)"></rect>
              <path
                d="M8 24V8h4.5l3.5 7 3.5-7H24v16h-4V14.5L16.5 21h-1L12 14.5V24H8z"
                fill="#22D3EE"
                className="group-hover:fill-cyan-300 transition-colors"
              ></path>
            </svg>
          </div>

          {/* Text */}
          <div className="flex items-center space-x-1.5 pr-1">
            <span className="text-[11px] text-stone-400 font-normal">Made by</span>
            <span className="font-semibold tracking-wider text-white text-[11px] group-hover:text-cyan-300 transition-colors">
              {agencyName.toUpperCase()}
            </span>
            <ExternalLink size={10} className="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>

        {/* Subtle close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="relative z-10 ml-1 p-1 text-stone-500 hover:text-stone-300 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Dismiss watermark"
          title="Dismiss"
        >
          <X size={11} />
        </button>
      </div>
    </aside>
  );
}

