"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./RevealText";

export default function Hero() {
  return (
    <section className="w-full bg-[#f7f7f5] overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-85px)] grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Content & Stats */}
        <div className="px-6 sm:px-10 md:px-14 py-12 lg:py-16 flex flex-col justify-between z-10">
          {/* Main Hero Content */}
          <div className="max-w-xl">
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 28 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1.5px] bg-[#111111] inline-block"
              />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                Find Your Perfect Space
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#111111] leading-[1.04] tracking-[-0.03em]">
                <RevealText text="Modern Spaces." delay={0.1} />
                <br />
                <RevealText text="Better Living." delay={0.3} />
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-md mb-10"
            >
              Discover thoughtfully designed homes in prime locations. Built for
              comfort, crafted for life.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-16 lg:mb-20"
            >
              <Link
                href="#properties"
                className="group relative bg-[#111111] text-white hover:bg-black px-8 py-4 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 overflow-hidden"
              >
                <span className="relative z-10">Explore Properties</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="#services"
                className="bg-transparent border border-[#d1d1cd] text-[#111111] hover:bg-white hover:border-[#111111] px-8 py-4 flex items-center justify-center text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Bottom Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-3 pt-8 border-t border-[#e5e5e2]"
          >
            <div className="pr-4 sm:pr-8 border-r border-[#e2e2df]">
              <span className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight leading-none block">
                <AnimatedCounter end={250} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mt-2 block">
                Properties
              </span>
            </div>

            <div className="px-4 sm:px-8 border-r border-[#e2e2df]">
              <span className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight leading-none block">
                <AnimatedCounter end={15} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mt-2 block">
                Locations
              </span>
            </div>

            <div className="pl-4 sm:pl-8">
              <span className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight leading-none block">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mt-2 block">
                Happy Clients
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Architectural Image & Parallax Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative w-full h-[380px] sm:h-[480px] lg:h-auto min-h-full overflow-hidden group"
        >
          <Image
            src="/images/hero-villa.png"
            alt="Horizon Heights Modern Villa"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Property Card Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[340px] bg-[#f7f7f5]/95 p-5 sm:p-6 shadow-xl border border-white/60 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1.5px] bg-[#666666] inline-block"></span>
              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#666666] uppercase">
                Featured Property
              </span>
            </div>

            <div className="flex items-center justify-between group/badge cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">
                Horizon Heights
              </h3>
              <ArrowUpRight className="w-5 h-5 text-[#111111] transition-transform duration-300 group-hover/badge:translate-x-1 group-hover/badge:-translate-y-1" />
            </div>

            <div className="flex items-center gap-1.5 mt-2 text-[#555555]">
              <MapPin className="w-4 h-4 text-[#111111]" />
              <span className="text-xs font-normal tracking-wide text-[#333333]">
                Bandra West, Mumbai
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
