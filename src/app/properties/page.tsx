"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Grid,
  List,
  MapPin,
  Heart,
  ArrowRight,
  Map as MapIcon,
  RotateCcw,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  category: "APARTMENTS" | "VILLAS" | "PENTHOUSES" | "COMMERCIAL";
  bedrooms: number;
  bathrooms: number;
  area: number; // sq ft
  price: number; // in Cr INR
  priceDisplay: string;
  image: string;
  isFeatured?: boolean;
}

const ALL_PROPERTIES: Property[] = [
  {
    id: "horizon-heights",
    title: "Horizon Heights Villa",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    category: "VILLAS",
    bedrooms: 3,
    bathrooms: 4,
    area: 2450,
    price: 6.25,
    priceDisplay: "₹ 6.25 Cr",
    image: "/images/hero-villa.png",
    isFeatured: true,
  },
  {
    id: "skyline-residences",
    title: "Skyline Residences",
    location: "Lower Parel, Mumbai",
    city: "Mumbai",
    category: "APARTMENTS",
    bedrooms: 2,
    bathrooms: 2,
    area: 1350,
    price: 3.85,
    priceDisplay: "₹ 3.85 Cr",
    image: "/images/skyline-residences.png",
  },
  {
    id: "greenwood-villas",
    title: "Greenwood Architecture Villa",
    location: "Panchgani, Maharashtra",
    city: "Panchgani",
    category: "VILLAS",
    bedrooms: 4,
    bathrooms: 5,
    area: 3200,
    price: 8.75,
    priceDisplay: "₹ 8.75 Cr",
    image: "/images/greenwood-villas.png",
  },
  {
    id: "grove-residences",
    title: "The Grove Residences",
    location: "Juhu, Mumbai",
    city: "Mumbai",
    category: "APARTMENTS",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    price: 5.5,
    priceDisplay: "₹ 5.50 Cr",
    image: "/images/grove-residences.png",
  },
  {
    id: "azure-penthouse",
    title: "Azure Sky Penthouse",
    location: "Worli, Mumbai",
    city: "Mumbai",
    category: "PENTHOUSES",
    bedrooms: 4,
    bathrooms: 5,
    area: 4100,
    price: 14.5,
    priceDisplay: "₹ 14.50 Cr",
    image: "/images/cta-living-room.png",
  },
  {
    id: "zenith-commercial",
    title: "Zenith Business Tower",
    location: "BKC, Mumbai",
    city: "Mumbai",
    category: "COMMERCIAL",
    bedrooms: 0,
    bathrooms: 4,
    area: 5800,
    price: 18.2,
    priceDisplay: "₹ 18.20 Cr",
    image: "/images/why-choose-us.png",
  },
];

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedCity, setSelectedCity] = useState<string>("ALL");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(20);
  const [bedrooms, setBedrooms] = useState<number>(0);

  // Favorites state
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([]);
  // Compare state
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const toggleSave = (id: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) {
        alert("You can compare up to 3 properties at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
    setSelectedCity("ALL");
    setMinPrice(0);
    setMaxPrice(20);
    setBedrooms(0);
  };

  const filteredProperties = ALL_PROPERTIES.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "ALL" || item.category === selectedCategory;
    const matchesCity = selectedCity === "ALL" || item.city === selectedCity;
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    const matchesBeds = bedrooms === 0 || item.bedrooms >= bedrooms;

    return matchesSearch && matchesCat && matchesCity && matchesPrice && matchesBeds;
  });

  const comparePropertiesList = ALL_PROPERTIES.filter((p) =>
    compareIds.includes(p.id)
  );

  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="w-full bg-[#f7f7f5] pt-12 pb-8 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-2">
              CURATED COLLECTION
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              Properties for Sale
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMap(!showMap)}
              className={`px-4 py-2.5 text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-2 border transition-all ${
                showMap
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111] border-[#e2e2df] hover:border-[#111111]"
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>{showMap ? "Hide Map" : "Show Map"}</span>
            </button>

            <div className="flex items-center border border-[#e2e2df] bg-white p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 text-[#111111] ${
                  viewMode === "grid" ? "bg-[#111111] text-white" : "hover:bg-[#f7f7f5]"
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 text-[#111111] ${
                  viewMode === "list" ? "bg-[#111111] text-white" : "hover:bg-[#f7f7f5]"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Control Bar */}
      <section className="w-full bg-white border-b border-[#e2e2df] py-5 px-6 sm:px-10 md:px-14 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#777777] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by property name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f9f9f8] border border-[#e2e2df] pl-11 pr-4 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#f9f9f8] border border-[#e2e2df] px-3.5 py-2.5 text-xs font-bold text-[#111111] focus:outline-none uppercase tracking-wider"
            >
              <option value="ALL">All Types</option>
              <option value="VILLAS">Villas</option>
              <option value="APARTMENTS">Apartments</option>
              <option value="PENTHOUSES">Penthouses</option>
              <option value="COMMERCIAL">Commercial</option>
            </select>

            {/* City Select */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-[#f9f9f8] border border-[#e2e2df] px-3.5 py-2.5 text-xs font-bold text-[#111111] focus:outline-none uppercase tracking-wider"
            >
              <option value="ALL">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Panchgani">Panchgani</option>
            </select>

            {/* Bedrooms Select */}
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="bg-[#f9f9f8] border border-[#e2e2df] px-3.5 py-2.5 text-xs font-bold text-[#111111] focus:outline-none uppercase tracking-wider"
            >
              <option value={0}>Bedrooms (Any)</option>
              <option value={2}>2+ BHK</option>
              <option value={3}>3+ BHK</option>
              <option value={4}>4+ BHK</option>
            </select>

            <button
              onClick={resetFilters}
              className="p-2.5 border border-[#e2e2df] bg-[#f9f9f8] text-[#555555] hover:text-[#111111] flex items-center gap-1.5 text-xs font-semibold"
              title="Reset Filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area: Map View vs Grid/List View */}
      <section className="w-full py-12 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto">
          {/* Map View Toggle Panel */}
          {showMap && (
            <div className="w-full h-[360px] bg-[#eae7e1] border border-[#e2e2df] mb-10 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="text-center p-6 bg-white/90 backdrop-blur-md shadow-lg border border-[#e2e2df]">
                <MapIcon className="w-8 h-8 text-[#111111] mx-auto mb-2" />
                <h3 className="text-base font-bold text-[#111111]">Interactive Map View</h3>
                <p className="text-xs text-[#666666]">Showing {filteredProperties.length} active listings across Mumbai & Maharashtra.</p>
              </div>
            </div>
          )}

          {/* Properties Grid or List */}
          {filteredProperties.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredProperties.map((prop) => {
                const isSaved = savedPropertyIds.includes(prop.id);
                const isCompared = compareIds.includes(prop.id);

                if (viewMode === "list") {
                  return (
                    <div
                      key={prop.id}
                      className="bg-white border border-[#e2e2df] flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative w-full md:w-[320px] h-[240px] bg-[#eaeaea] shrink-0">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          sizes="320px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={() => toggleSave(prop.id)}
                          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111111]"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isSaved ? "fill-[#111111] text-[#111111]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#777777] uppercase">
                              {prop.category}
                            </span>
                            <span className="text-lg font-bold text-[#111111]">
                              {prop.priceDisplay}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-[#111111] mb-2">
                            {prop.title}
                          </h3>

                          <div className="flex items-center gap-1.5 text-xs text-[#555555] mb-4">
                            <MapPin className="w-4 h-4 text-[#111111]" />
                            <span>{prop.location}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#e2e2df] flex items-center justify-between">
                          <div className="flex items-center gap-6 text-xs text-[#555555]">
                            <span>
                              <strong className="text-[#111111]">
                                {prop.bedrooms}
                              </strong>{" "}
                              Beds
                            </span>
                            <span>
                              <strong className="text-[#111111]">
                                {prop.bathrooms}
                              </strong>{" "}
                              Baths
                            </span>
                            <span>
                              <strong className="text-[#111111]">
                                {prop.area}
                              </strong>{" "}
                              sq ft
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => toggleCompare(prop.id)}
                              className={`px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                                isCompared
                                  ? "bg-[#111111] text-white border-[#111111]"
                                  : "border-[#e2e2df] text-[#555555] hover:border-[#111111]"
                              }`}
                            >
                              {isCompared ? "Compared" : "+ Compare"}
                            </button>

                            <Link
                              href="#contact"
                              className="w-9 h-9 rounded-full bg-[#f7f7f5] border border-[#e2e2df] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={prop.id}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-[#e2e2df] flex flex-col group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-[280px] bg-[#eaeaea]">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <button
                        onClick={() => toggleSave(prop.id)}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111111] shadow-md"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isSaved ? "fill-[#111111] text-[#111111]" : ""
                          }`}
                        />
                      </button>

                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#111111]">
                        {prop.priceDisplay}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#777777] uppercase block mb-1">
                          {prop.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#111111] mb-2">
                          {prop.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-[#555555] mb-6">
                          <MapPin className="w-4 h-4 text-[#111111]" />
                          <span>{prop.location}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#e2e2df] flex items-center justify-between">
                        <div className="grid grid-cols-3 gap-2 flex-1 text-xs">
                          <div>
                            <span className="font-bold text-[#111111] block">
                              {prop.bedrooms > 0 ? `${prop.bedrooms} BHK` : "Office"}
                            </span>
                            <span className="text-[9px] text-[#777777] uppercase tracking-wider block">
                              Type
                            </span>
                          </div>
                          <div>
                            <span className="font-bold text-[#111111] block">
                              {prop.area}
                            </span>
                            <span className="text-[9px] text-[#777777] uppercase tracking-wider block">
                              Sq Ft
                            </span>
                          </div>
                          <div>
                            <span className="font-bold text-[#111111] block">
                              {prop.priceDisplay}
                            </span>
                            <span className="text-[9px] text-[#777777] uppercase tracking-wider block">
                              Price
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleCompare(prop.id)}
                          className={`ml-2 px-3 py-2 text-[10px] font-bold tracking-wider uppercase border transition-all ${
                            isCompared
                              ? "bg-[#111111] text-white border-[#111111]"
                              : "border-[#e2e2df] text-[#555555] hover:border-[#111111]"
                          }`}
                        >
                          {isCompared ? "Compared" : "+ Compare"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center text-[#777777] bg-white border border-[#e2e2df]">
              No properties match your filter criteria.
            </div>
          )}
        </div>
      </section>

      {/* Compare Drawer Modal */}
      <AnimatePresence>
        {comparePropertiesList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-[9990] bg-white border-t border-[#e2e2df] shadow-2xl p-6"
          >
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777777] block">
                  PROPERTY COMPARISON ({comparePropertiesList.length}/3)
                </span>
                <h3 className="text-lg font-bold text-[#111111]">
                  Comparing Selected Properties
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 max-w-3xl">
                {comparePropertiesList.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-[#f7f7f5] border border-[#e2e2df] flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-[#111111] block">
                        {p.title}
                      </span>
                      <span className="text-[#666666]">
                        {p.bedrooms} BHK • {p.priceDisplay}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleCompare(p.id)}
                      className="text-[#777777] hover:text-[#111111] p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCompareIds([])}
                className="text-xs font-bold text-[#777777] hover:text-[#111111] uppercase tracking-wider"
              >
                Clear All
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
