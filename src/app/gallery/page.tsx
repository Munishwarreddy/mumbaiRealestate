"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  Grid,
  Maximize2,
  Search,
  ArrowUpRight,
  MapPin,
  Building,
  Ruler,
  Calendar,
  Compass,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealText from "@/components/RevealText";

type GalleryCategory =
  | "ALL"
  | "EXTERIORS"
  | "INTERIORS"
  | "LUXURY VILLAS"
  | "PENTHOUSES";

interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  location: string;
  sqft: string;
  yearBuilt: string;
  architect: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Horizon Heights Villa",
    category: "LUXURY VILLAS",
    image: "/images/hero-villa.png",
    location: "Bandra West, Mumbai",
    sqft: "12,500 Sq.Ft",
    yearBuilt: "2023",
    architect: "Studio Mumbai Architects",
    description:
      "A subterranean modern masterpiece featuring cantilevered glass facades, expansive infinity pools, and imported Italian teak woodwork.",
  },
  {
    id: 2,
    title: "Skyline Living Lounge",
    category: "INTERIORS",
    image: "/images/skyline-residences.png",
    location: "Lower Parel, Mumbai",
    sqft: "4,800 Sq.Ft",
    yearBuilt: "2024",
    architect: "KNS Architects",
    description:
      "Double-height ceiling penthouse lounge with panoramic sea-facing views, smart climate management, and customized acoustic lighting.",
  },
  {
    id: 3,
    title: "Greenwood Architecture",
    category: "EXTERIORS",
    image: "/images/greenwood-villas.png",
    location: "Panchgani, Maharashtra",
    sqft: "18,200 Sq.Ft",
    yearBuilt: "2022",
    architect: "Malik Architecture",
    description:
      "Nestled among coastal pine slopes, this estate blends raw basalt stone with sustainable solar glass for zero-carbon mountain living.",
  },
  {
    id: 4,
    title: "Grove Residential Complex",
    category: "EXTERIORS",
    image: "/images/grove-residences.png",
    location: "Juhu, Mumbai",
    sqft: "9,600 Sq.Ft",
    yearBuilt: "2024",
    architect: "Hafeez Contractor Studio",
    description:
      "A tranquil beach-front enclave with private elevators, manicured zen gardens, and double-layered soundproof glass balconies.",
  },
  {
    id: 5,
    title: "Azure Sky Penthouse Lounge",
    category: "PENTHOUSES",
    image: "/images/cta-living-room.png",
    location: "Worli, Mumbai",
    sqft: "6,400 Sq.Ft",
    yearBuilt: "2023",
    architect: "Sanjay Puri Architects",
    description:
      "Top-floor sea link view residence equipped with private plunge pool, automated shades, and custom bronze fixtures.",
  },
  {
    id: 6,
    title: "Twilight Estate View",
    category: "LUXURY VILLAS",
    image: "/images/why-choose-us.png",
    location: "Lonavala, Maharashtra",
    sqft: "15,000 Sq.Ft",
    yearBuilt: "2021",
    architect: "Sodha & Associates",
    description:
      "Secluded mountain retreat with private helipad, heated outdoor lap pool, and temperature-controlled wine cellar.",
  },
  {
    id: 7,
    title: "Minimalist Dining Suite",
    category: "INTERIORS",
    image: "/images/testimonial-dining.png",
    location: "Alibaug, Maharashtra",
    sqft: "3,200 Sq.Ft",
    yearBuilt: "2024",
    architect: "Morphogenesis",
    description:
      "Open-concept indoor-outdoor dining space with floating travertine table, concealed ambient LEDs, and integrated garden courtyards.",
  },
  {
    id: 8,
    title: "Oceanfront Terrace Deck",
    category: "EXTERIORS",
    image: "/images/testimonial-balcony.png",
    location: "Marine Drive, Mumbai",
    sqft: "5,100 Sq.Ft",
    yearBuilt: "2023",
    architect: "Khanna Design Studio",
    description:
      "Sweeping sea views along Queen's Necklace, featuring frameless glass balustrades and teak wood sunbeds.",
  },
  {
    id: 9,
    title: "Heritage Living Pavilion",
    category: "INTERIORS",
    image: "/images/loading-villa.png",
    location: "Koregaon Park, Pune",
    sqft: "8,900 Sq.Ft",
    yearBuilt: "2022",
    architect: "Talati & Partners",
    description:
      "Luxurious blend of classical Indian marble flooring with ultra-modern scandinavian furniture and customized art gallery walls.",
  },
];

const CATEGORIES: GalleryCategory[] = [
  "ALL",
  "EXTERIORS",
  "INTERIORS",
  "LUXURY VILLAS",
  "PENTHOUSES",
];

export default function DedicatedGalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      activeTab === "ALL" ? true : item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.architect.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Banner Header */}
      <section className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                  DEDICATED ARCHITECTURAL GALLERY
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-[-0.03em] mb-4">
                <RevealText text="Visual portfolio of" />
                <br />
                <RevealText text="extraordinary spaces." delay={0.2} />
              </h1>

              <p className="text-sm sm:text-base text-[#555555] max-w-xl leading-relaxed">
                Explore our curated collection of luxury residential architecture, private estates, high-rise penthouses, and bespoke interiors.
              </p>
            </div>

            {/* Gallery Quick Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-white border border-[#e2e2df]">
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  150+
                </span>
                <span className="text-[10px] text-[#777777] uppercase font-semibold tracking-wider">
                  Photos & Renderings
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  35+
                </span>
                <span className="text-[10px] text-[#777777] uppercase font-semibold tracking-wider">
                  Architectural Awards
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  4
                </span>
                <span className="text-[10px] text-[#777777] uppercase font-semibold tracking-wider">
                  Design Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Bar: Categories, Search, View Mode Toggle */}
      <section className="w-full bg-white border-b border-[#e2e2df] py-6 px-6 sm:px-10 md:px-14 sticky top-[73px] z-40 shadow-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative text-xs font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? "text-[#111111]"
                      : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.span
                      layoutId="dedicatedGalleryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search & Layout Controls */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f7f7f5] border border-[#e2e2df] focus:border-[#111111] pl-9 pr-4 py-2 text-xs text-[#111111] outline-none transition-all placeholder:text-[#888888]"
              />
            </div>

            <div className="flex items-center border border-[#e2e2df] bg-[#f7f7f5] p-1">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-1.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[#111111] shadow-xs"
                    : "text-[#777777] hover:text-[#111111]"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("large")}
                aria-label="Large View"
                className={`p-1.5 transition-colors ${
                  viewMode === "large"
                    ? "bg-white text-[#111111] shadow-xs"
                    : "text-[#777777] hover:text-[#111111]"
                }`}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="w-full py-16 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-24 bg-white border border-[#e2e2df]">
              <Building className="w-12 h-12 text-[#999999] mx-auto mb-4 stroke-1" />
              <h3 className="text-xl font-bold text-[#111111] mb-2">
                No gallery items match your filter
              </h3>
              <p className="text-xs text-[#666666] mb-6">
                Try searching for another keyword or reset category filter.
              </p>
              <button
                onClick={() => {
                  setActiveTab("ALL");
                  setSearchQuery("");
                }}
                className="bg-[#111111] text-white px-6 py-3 text-xs font-bold tracking-[0.18em] uppercase"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${viewMode}-${searchQuery}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 lg:grid-cols-2"
                }`}
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedItem(item)}
                    className="group relative bg-white border border-[#e2e2df] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-[#eaeaea] ${
                        viewMode === "grid" ? "h-[320px]" : "h-[420px]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                        <div className="flex items-center justify-between">
                          <span className="bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                            {item.category}
                          </span>
                          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <ZoomIn className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-white/80 font-medium flex items-center gap-1 mb-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </p>
                          <h3 className="text-2xl font-bold tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white flex flex-col justify-between flex-1 border-t border-[#f0f0ed]">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#555555] transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-xs font-semibold text-[#777777] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#111111]" />
                            {item.location.split(",")[0]}
                          </span>
                        </div>
                        <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#e2e2df] flex items-center justify-between text-[11px] text-[#555555]">
                        <span className="font-semibold">{item.sqft}</span>
                        <span className="text-[#999999]">•</span>
                        <span>{item.architect}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Lightbox Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer overflow-y-auto"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="fixed top-6 right-6 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111111] text-white border border-white/15 overflow-hidden my-auto shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Section */}
                <div className="lg:col-span-8 relative h-[360px] sm:h-[480px] lg:h-[580px] bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white border border-white/10">
                    {selectedItem.category}
                  </div>
                </div>

                {/* Specs & Information Side Panel */}
                <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#161616]">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-2">
                      ARCHITECTURAL SPECIFICATIONS
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className="text-xs text-white/70 flex items-center gap-1.5 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-white/90" />
                      <span>{selectedItem.location}</span>
                    </p>

                    <p className="text-xs text-white/80 leading-relaxed mb-8 font-light">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-white/10 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 flex items-center gap-2">
                          <Ruler className="w-4 h-4 text-white/80" /> Total Area
                        </span>
                        <span className="font-bold text-white">
                          {selectedItem.sqft}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-white/80" /> Year Built
                        </span>
                        <span className="font-bold text-white">
                          {selectedItem.yearBuilt}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 flex items-center gap-2">
                          <Compass className="w-4 h-4 text-white/80" /> Lead Architect
                        </span>
                        <span className="font-bold text-white">
                          {selectedItem.architect}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 space-y-3">
                    <Link
                      href="/contact"
                      className="w-full bg-white text-[#111111] hover:bg-gray-200 py-3.5 px-4 text-xs font-bold tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Inquire About Property</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full border border-white/20 hover:border-white text-white/80 hover:text-white py-3 px-4 text-xs font-bold tracking-[0.18em] uppercase transition-all"
                    >
                      Close Gallery View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <section className="w-full bg-[#111111] text-white py-20 px-6 sm:px-10 md:px-14 border-t border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase block mb-3">
              PRIVATE ARCHITECTURAL TOURS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Would you like a private viewing of these estates?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light">
              Schedule a personalized walkthrough with our senior property advisors or request detailed blueprint drawings.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-white text-[#111111] hover:bg-gray-100 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap flex items-center gap-2 transition-all shadow-lg"
          >
            <span>Book Private Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
