"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText";

type PropertyCategory =
  | "ALL PROPERTIES"
  | "APARTMENTS"
  | "VILLAS"
  | "PENTHOUSES"
  | "COMMERCIAL";

interface Property {
  id: string;
  title: string;
  location: string;
  category: PropertyCategory;
  bedrooms: string;
  area: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

const PROPERTIES_DATA: Property[] = [
  {
    id: "horizon-heights",
    title: "Horizon Heights",
    location: "Bandra West, Mumbai",
    category: "VILLAS",
    bedrooms: "3 BHK",
    area: "2,450 sq ft",
    price: "₹ 6.25 Cr",
    image: "/images/hero-property.png",
    isFeatured: true,
  },
  {
    id: "skyline-residences",
    title: "Skyline Residences",
    location: "Lower Parel, Mumbai",
    category: "APARTMENTS",
    bedrooms: "2 BHK",
    area: "1,350 sq ft",
    price: "₹ 3.85 Cr",
    image: "/images/skyline-residences.png",
  },
  {
    id: "greenwood-villas",
    title: "Greenwood Villas",
    location: "Panchgani, Maharashtra",
    category: "VILLAS",
    bedrooms: "4 BHK",
    area: "3,200 sq ft",
    price: "₹ 8.75 Cr",
    image: "/images/greenwood-villas.png",
  },
  {
    id: "azure-penthouse",
    title: "Azure Sky Penthouse",
    location: "Worli, Mumbai",
    category: "PENTHOUSES",
    bedrooms: "4 BHK",
    area: "4,100 sq ft",
    price: "₹ 14.50 Cr",
    image: "/images/skyline-residences.png",
  },
  {
    id: "zenith-commercial",
    title: "Zenith Business Tower",
    location: "BKC, Mumbai",
    category: "COMMERCIAL",
    bedrooms: "Office Space",
    area: "5,800 sq ft",
    price: "₹ 18.20 Cr",
    image: "/images/hero-property.png",
  },
];

const TABS: PropertyCategory[] = [
  "ALL PROPERTIES",
  "APARTMENTS",
  "VILLAS",
  "PENTHOUSES",
  "COMMERCIAL",
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<PropertyCategory>("ALL PROPERTIES");

  const filteredProperties =
    activeTab === "ALL PROPERTIES"
      ? PROPERTIES_DATA.slice(0, 3)
      : PROPERTIES_DATA.filter((p) => p.category === activeTab);

  const featuredProp =
    filteredProperties.find((p) => p.isFeatured) || filteredProperties[0];
  const secondaryProps = filteredProperties.filter(
    (p) => p.id !== featuredProp?.id
  );

  return (
    <section id="properties" className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Header & Feature Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20"
        >
          {/* Left Heading */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                EXCEPTIONAL LIVING
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em] mb-5">
              <RevealText text="Spaces that inspire every day." />
            </h2>

            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-md">
              Curated properties in prime locations, designed for modern lifestyles
              and lasting value.
            </p>
          </div>

          {/* Right Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-2">
            {[
              {
                icon: MapPin,
                title: "Prime Locations",
                text: "Off-market properties in Bandra, Worli, BKC & Juhu.",
              },
              {
                icon: ShieldCheck,
                title: "RERA Verified",
                text: "30-year clear legal title checks & transparent deals.",
              },
              {
                icon: Headphones,
                title: "Dedicated Advisor",
                text: "White-glove private consultation tailored to you.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group p-4 bg-white/70 border border-[#e2e2df] shadow-xs hover:shadow-md transition-all duration-300 ${
                    idx < 2 ? "sm:border-r border-[#e2e2df]" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#111111] mb-3 bg-white border border-[#e2e2df] shadow-xs group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2e2df] pb-4 mb-10">
          <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap pb-3 ${
                    isActive ? "text-[#111111]" : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <Link
            href="#all-properties"
            className="group flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#111111] hover:text-black transition-colors self-end sm:self-auto"
          >
            <span>VIEW ALL PROPERTIES</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Properties Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Featured Main Card */}
              {featuredProp && (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-6 flex flex-col group cursor-pointer border border-[#e2e2df] bg-[#f7f7f5] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-[#eaeaea]">
                    <Image
                      src={featuredProp.image}
                      alt={featuredProp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white text-[#111111] px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                      FEATURED
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6 bg-[#f7f7f5] flex-1">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2 group-hover:text-black">
                        {featuredProp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[#555555]">
                        <MapPin className="w-4 h-4 text-[#111111]" />
                        <span className="text-xs font-medium tracking-wide text-[#333333]">
                          {featuredProp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#e2e2df]">
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#111111] block">
                          {featuredProp.bedrooms}
                        </span>
                        <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                          Bedrooms
                        </span>
                      </div>

                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#111111] block">
                          {featuredProp.area}
                        </span>
                        <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                          Area
                        </span>
                      </div>

                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#111111] block">
                          {featuredProp.price}
                        </span>
                        <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                          Price
                        </span>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-white border border-[#d1d1cd] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Secondary Cards */}
              {secondaryProps.map((prop) => (
                <motion.div
                  key={prop.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-3 flex flex-col group cursor-pointer border border-[#e2e2df] bg-[#f7f7f5] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden bg-[#eaeaea]">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#f7f7f5]">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-1.5">
                        {prop.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[#555555]">
                        <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                        <span className="text-xs font-medium tracking-wide text-[#333333]">
                          {prop.location}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#e2e2df] flex items-center justify-between">
                      <div className="grid grid-cols-3 gap-2 flex-1">
                        <div>
                          <span className="text-xs font-bold text-[#111111] block">
                            {prop.bedrooms}
                          </span>
                          <span className="text-[9px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                            Bedrooms
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-[#111111] block">
                            {prop.area}
                          </span>
                          <span className="text-[9px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                            Area
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-[#111111] block">
                            {prop.price}
                          </span>
                          <span className="text-[9px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                            Price
                          </span>
                        </div>
                      </div>

                      <div className="ml-2 w-7 h-7 rounded-full bg-white border border-[#d1d1cd] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="py-16 text-center text-[#777777] text-sm">
              No properties found in this category.
            </div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <p className="text-xs sm:text-sm text-[#444444] font-medium tracking-wide">
            Looking for something specific? Let us help you find the perfect space.
          </p>

          <Link
            href="#contact"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111] group-hover:underline">
              GET IN TOUCH
            </span>
            <div className="w-10 h-10 rounded-full border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-all duration-300 shadow-sm">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
