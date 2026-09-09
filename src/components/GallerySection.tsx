"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";

type GalleryCategory = "ALL" | "EXTERIORS" | "INTERIORS" | "VILLAS" | "PENTHOUSES";

interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  subtitle: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Horizon Heights Villa",
    category: "VILLAS",
    image: "/images/hero-villa.png",
    subtitle: "Bandra West, Mumbai",
  },
  {
    id: 2,
    title: "Skyline Living Lounge",
    category: "INTERIORS",
    image: "/images/skyline-residences.png",
    subtitle: "Lower Parel, Mumbai",
  },
  {
    id: 3,
    title: "Greenwood Architecture",
    category: "EXTERIORS",
    image: "/images/greenwood-villas.png",
    subtitle: "Panchgani, Maharashtra",
  },
  {
    id: 4,
    title: "Grove Residential Complex",
    category: "EXTERIORS",
    image: "/images/grove-residences.png",
    subtitle: "Juhu, Mumbai",
  },
  {
    id: 5,
    title: "Azure Sky Penthouse Lounge",
    category: "PENTHOUSES",
    image: "/images/cta-living-room.png",
    subtitle: "Worli, Mumbai",
  },
  {
    id: 6,
    title: "Twilight Estate View",
    category: "VILLAS",
    image: "/images/why-choose-us.png",
    subtitle: "Lonavala, Maharashtra",
  },
];

const CATEGORIES: GalleryCategory[] = [
  "ALL",
  "EXTERIORS",
  "INTERIORS",
  "VILLAS",
  "PENTHOUSES",
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("ALL");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                CURATED GALLERY
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em]">
              <RevealText text="Architectural elegance" />
              <br />
              <RevealText text="in every detail." delay={0.2} />
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative text-xs font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap pb-2 ${
                    isActive ? "text-[#111111]" : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.span
                      layoutId="galleryTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[320px] sm:h-[380px] overflow-hidden bg-[#eaeaea] cursor-pointer border border-[#e2e2df] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 font-medium">
                    {item.subtitle}
                  </p>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dedicated Gallery Page Link CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-[#111111] text-white hover:bg-black px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-all shadow-md group"
          >
            <span>Explore Full Dedicated Gallery Page</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[70vh] bg-black rounded-lg overflow-hidden border border-white/10"
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm text-white/70">{selectedImage.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
