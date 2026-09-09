"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingCurtain() {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 700;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsOpening(true);
        }, 100);

        setTimeout(() => {
          setIsDone(true);
        }, 400);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none">
      {/* 5-Layer Staggered Vertical Curtain Panels matching cream white #f7f7f5 */}
      <div className="absolute inset-0 flex w-full h-full">
        {[0, 1, 2, 3, 4].map((layerIndex) => {
          const delays = [0, 90, 180, 270, 360];
          const delayMs = delays[layerIndex];

          return (
            <div
              key={layerIndex}
              className="w-1/5 h-full bg-[#f7f7f5] border-r border-[#e8e8e5]/40 transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)]"
              style={{
                transitionDelay: isOpening ? `${delayMs}ms` : "0ms",
                transform: isOpening ? "translateY(-100%)" : "translateY(0%)",
              }}
            />
          );
        })}
      </div>

      {/* Center Layout Content Matching Cream White Background #f7f7f5 */}
      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-[#f7f7f5] transition-opacity duration-300 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center max-w-lg w-full text-center">
          {/* Architectural Villa Sketch with Seamless Multiply Blending */}
          <div className="relative w-[340px] sm:w-[420px] h-[220px] sm:h-[260px] mb-6 flex items-center justify-center">
            {/* Soft Warm Golden Halo */}
            <div className="absolute w-44 h-44 rounded-full bg-[#f3e8d6]/50 blur-xl top-6 left-1/2 -translate-x-1/2 pointer-events-none" />

            <Image
              src="/images/loading-sketch.png"
              alt="Architectural Villa Blueprint Sketch"
              fill
              priority
              className="object-contain object-center mix-blend-multiply"
            />
          </div>

          {/* LOADING Heading */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-[#666666] uppercase block">
              L O A D I N G
            </span>
            <span className="w-6 h-[2px] bg-[#c59b63] inline-block mt-2" />
          </div>

          {/* Golden Progress Slider Bar with Moving Knob */}
          <div className="w-full max-w-md mb-3 px-2">
            <div className="relative w-full h-[2.5px] bg-[#e5e2db] rounded-full">
              {/* Golden Progress Line */}
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d8b584] to-[#c59b63] rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />

              {/* Glowing Circular Handle Slider Knob */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f7f7f5] border-2 border-[#c59b63] shadow-[0_0_8px_rgba(197,155,99,0.5)] transition-all duration-100 ease-out"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            </div>
          </div>

          {/* Percentage Indicator */}
          <span className="text-xs font-medium text-[#777777] font-mono tracking-wider mb-8 block">
            {progress}%
          </span>

          {/* Sub-tagline */}
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] text-[#555555] uppercase mb-8">
            C R A F T I N G &nbsp; S P A C E S . &nbsp; E L E V A T I N G &nbsp; L I F E S T Y L E S .
          </p>

          {/* Bottom Golden Line Divider with Architectural Icon */}
          <div className="flex items-center gap-4 w-full max-w-md text-[#c59b63]/80">
            <div className="w-2 h-2 rounded-full bg-[#c59b63] shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#c59b63]/60 to-transparent" />
            
            {/* Center Architectural Chevron Icon */}
            <div className="px-2 flex items-center gap-1">
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#c59b63]"
              >
                <path
                  d="M14 2L4 10H7.5L14 4.8L20.5 10H24L14 2Z"
                  fill="currentColor"
                />
                <path
                  d="M14 7L6.5 13.25H9.5L14 9.55L18.5 13.25H21.5L14 7Z"
                  fill="currentColor"
                />
                <path
                  d="M2 19.5H26V21H2V19.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="h-[1px] flex-1 bg-gradient-to-l from-[#c59b63]/60 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#c59b63] shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
