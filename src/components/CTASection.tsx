"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealText from "./RevealText";

export default function CTASection() {
  return (
    <section id="contact" className="w-full bg-[#f7f7f5] pb-20 sm:pb-28 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: CTA Content & Buttons */}
          <div className="lg:col-span-6 bg-[#eeeeea] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                READY TO FIND YOUR SPACE?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#111111] leading-[1.1] tracking-[-0.025em] mb-4 max-w-lg">
              <RevealText text="Let's find a place you'll love to call home." />
            </h2>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-md mb-10">
              Our experts are here to help you find the perfect property that fits
              your lifestyle and goals.
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="#consultation"
                className="group bg-[#111111] text-white hover:bg-black px-7 py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#properties"
                className="group text-[#111111] hover:text-black flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase underline-offset-4 hover:underline transition-all"
              >
                <span>EXPLORE PROPERTIES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Living Room Image with Floating Get in Touch Card */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/cta-living-room.png"
              alt="Luxury modern living room interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Floating Get In Touch Overlay Box */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-xl border border-black/5 min-w-[260px] sm:min-w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[1.5px] bg-[#666666] inline-block"></span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#666666] uppercase">
                  GET IN TOUCH
                </span>
              </div>

              <a
                href="tel:+919876543210"
                className="text-lg sm:text-xl font-bold text-[#111111] hover:text-black tracking-tight block mt-2 mb-1"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@horizonrealty.com"
                className="text-xs sm:text-sm text-[#555555] hover:text-[#111111] hover:underline block"
              >
                hello@horizonrealty.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
