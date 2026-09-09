"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Key,
  Home,
  ShieldCheck,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Paintbrush,
  LucideIcon,
  X,
  MessageSquare,
  Award,
  Lock,
  Compass,
  FileCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealText from "@/components/RevealText";

interface ServiceModule {
  id: string;
  icon: LucideIcon;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  image: string;
  highlightStat: string;
  highlightLabel: string;
}

const SERVICES: ServiceModule[] = [
  {
    id: "property-buying",
    icon: Home,
    category: "BUYING ADVISORY",
    title: "Luxury Property Buying",
    subtitle: "End-to-End Home Search & Legal Clearance",
    summary:
      "Exclusive access to off-market luxury estates, sea-facing penthouses, and private villas with complete title verification and price negotiation.",
    details: [
      "Off-market access to unlisted luxury properties in Bandra, Worli & Juhu",
      "Rigorous RERA & 30-year land title legal due diligence",
      "Data-backed price negotiation & comparative sales analysis",
      "Seamless registration assistance, stamp duty & key handover",
    ],
    image: "/images/hero-villa.png",
    highlightStat: "₹1,200+ Cr",
    highlightLabel: "Transactions Negotiated",
  },
  {
    id: "property-selling",
    icon: TrendingUp,
    category: "SELLER REPRESENTATION",
    title: "Premium Property Selling",
    subtitle: "High-Yield Portfolio Marketing & Closing",
    summary:
      "Strategic pricing models, architectural photography, targeted HNW buyer outreach, and confidential seller representation for maximum return.",
    details: [
      "4K Architectural photography & 3D virtual walkthrough rendering",
      "Targeted digital and private network marketing to vetted buyers",
      "Discreet & confidential seller representation for public figures",
      "Accelerated 45-day closing pipeline with pre-qualified buyers",
    ],
    image: "/images/skyline-residences.png",
    highlightStat: "45 Days",
    highlightLabel: "Average Time to Sell",
  },
  {
    id: "renting-leasing",
    icon: Key,
    category: "LEASING & RELOCATION",
    title: "High-End Corporate Leasing",
    subtitle: "Expat & Executive Residence Matching",
    summary:
      "Curated leasing solutions for expatriates, corporate leaders, and diplomats with tailored lease agreements and move-in concierge.",
    details: [
      "Fully furnished luxury penthouses & private gated villa leases",
      "Direct corporate relocation & embassy client matchmaking",
      "Comprehensive tenant background check & legally sound lease drafting",
      "Move-in inventory audit & digital property condition reports",
    ],
    image: "/images/greenwood-villas.png",
    highlightStat: "99.4%",
    highlightLabel: "Occupancy Rate",
  },
  {
    id: "property-management",
    icon: ShieldCheck,
    category: "ASSET MANAGEMENT",
    title: "Full-Spectrum Property Care",
    subtitle: "Complete Asset Preservation for NRIs",
    summary:
      "Dedicated asset management for non-resident owners and investors — including routine inspections, rent collection, and maintenance.",
    details: [
      "Bi-monthly physical inspections with high-res photo/video updates",
      "Automated rental collection & monthly financial statement reporting",
      "On-demand emergency maintenance & contractor supervision",
      "Property tax filing, utility management & compliance oversight",
    ],
    image: "/images/grove-residences.png",
    highlightStat: "250+",
    highlightLabel: "Estates Managed",
  },
  {
    id: "luxury-homes",
    icon: Sparkles,
    category: "PRIVATE CONCIERGE",
    title: "Ultra-Luxury Estates Advisory",
    subtitle: "Bespoke Portfolio & Sea-Facing Homes",
    summary:
      "White-glove private advisory dedicated to ultra-high-net-worth clients seeking iconic sea-front residences and trophy properties.",
    details: [
      "Personal dedicated senior advisor available 24/7",
      "Complete NDA-protected privacy for high-profile clients",
      "Custom architectural modification feasibility studies",
      "VIP pre-launch previews before public market release",
    ],
    image: "/images/cta-living-room.png",
    highlightStat: "100%",
    highlightLabel: "Confidentiality Guaranteed",
  },
  {
    id: "commercial-real-estate",
    icon: Building2,
    category: "COMMERCIAL ADVISORY",
    title: "Commercial & Land Development",
    subtitle: "Grade-A Office Space & Institutional Land",
    summary:
      "Strategic acquisition of Grade-A commercial office towers, flagship retail locations, and institutional land development parcels.",
    details: [
      "Grade-A IT park and corporate headquarters leasing in BKC",
      "Prime high-street retail location strategy & footfall analytics",
      "Joint-venture land acquisition & structuring for developers",
      "Yield optimization & long-term commercial lease drafting",
    ],
    image: "/images/why-choose-us.png",
    highlightStat: "8.5%",
    highlightLabel: "Avg Commercial Yield",
  },
  {
    id: "investment-consulting",
    icon: Briefcase,
    category: "INVESTMENT STRATEGY",
    title: "Real Estate Investment Advisory",
    subtitle: "Data-Driven Wealth & Yield Optimization",
    summary:
      "Analytic portfolio guidance for family offices and investors seeking capital appreciation, pre-launch entry, and steady rental returns.",
    details: [
      "Early-stage pre-launch entry with institutional pricing benefits",
      "Custom cash-flow models, ROI projections & rental yield forecasts",
      "Risk-balanced portfolio allocation across commercial & luxury residential",
      "Strategic exit timing & capital gains tax planning guidance",
    ],
    image: "/images/testimonial-balcony.png",
    highlightStat: "14.2%",
    highlightLabel: "Annual Capital Growth",
  },
  {
    id: "interior-design",
    icon: Paintbrush,
    category: "INTERIOR SOLUTIONS",
    title: "Bespoke Architectural Interiors",
    subtitle: "Turnkey Luxury Design & Marble Crafting",
    summary:
      "Full-service interior design, space planning, and execution tailored to turn newly acquired structural shells into bespoke dream homes.",
    details: [
      "Architectural layout optimization & photorealistic 3D renders",
      "Direct Italian marble sourcing & custom bespoke teak woodwork",
      "Integrated smart home automation & mood lighting design",
      "Turnkey project delivery with guaranteed completion timelines",
    ],
    image: "/images/testimonial-dining.png",
    highlightStat: "60 Days",
    highlightLabel: "Turnkey Handover",
  },
];

const GUARANTEES = [
  {
    icon: Lock,
    title: "100% Legal Title Protection",
    desc: "Every property goes through a 30-year legal audit before recommended.",
  },
  {
    icon: Compass,
    title: "Off-Market Priority Access",
    desc: "Gain first look at private unlisted penthouses and coastal estates.",
  },
  {
    icon: FileCheck,
    title: "Zero Hidden Charges",
    desc: "Complete transparency with itemized advisory contracts and fees.",
  },
  {
    icon: Award,
    title: "RERA Certified Expertise",
    desc: "Licensed luxury real estate advisors with over 15+ years experience.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceModule | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredServices =
    activeCategory === "ALL"
      ? SERVICES
      : SERVICES.filter((s) => s.category.includes(activeCategory));

  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Header with Split Visual Showcase */}
      <section className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                EXPERT REAL ESTATE SERVICES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-[-0.03em] mb-6">
              <RevealText text="Precision advisory." />
              <br />
              <RevealText text="Bespoke real estate solutions." delay={0.2} />
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl mb-8 font-light">
              Whether acquiring a trophy sea-facing villa, listing a luxury penthouse, managing overseas property assets, or crafting turnkey interiors — our specialized divisions deliver perfection.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services-grid"
                className="bg-[#111111] text-white hover:bg-black px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-3 transition-all shadow-md group"
              >
                <span>EXPLORE SERVICES BELOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="border border-[#e2e2df] bg-white hover:border-[#111111] text-[#111111] px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-all"
              >
                BOOK PRIVATE CONSULTATION
              </Link>
            </div>
          </div>

          {/* Right Hero Image Card Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden border border-[#e2e2df] shadow-xl group">
              <Image
                src="/images/cta-living-room.png"
                alt="Luxury Real Estate Advisory Services"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-1">
                  WHITE-GLOVE SERVICE
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  Tailored to High-Net-Worth Portfolio Standards
                </h3>
                <p className="text-xs text-white/70 font-light max-w-sm">
                  Over ₹1,000+ Cr in seamless transactions handled with absolute legal precision and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="w-full bg-white border-b border-[#e2e2df] py-12 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUARANTEES.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="flex items-start gap-4 p-4 border-l-2 border-[#111111]">
                <div className="w-10 h-10 rounded-full bg-[#f7f7f5] border border-[#e2e2df] flex items-center justify-center text-[#111111] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    {g.title}
                  </h4>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Filter Bar */}
      <section id="services-grid" className="w-full bg-[#f7f7f5] pt-16 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between border-b border-[#e2e2df] pb-6 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-1">
              SELECT SERVICE DIVISION
            </span>
            <h2 className="text-2xl font-bold text-[#111111]">
              Explore Our Specialist Capabilities
            </h2>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
            {["ALL", "BUYING", "SELLING", "LEASING", "COMMERCIAL", "INTERIOR"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white border border-[#e2e2df] text-[#555555] hover:text-[#111111] hover:border-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Visual Service Cards Grid with Images */}
      <section className="w-full py-12 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#e2e2df] overflow-hidden group shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Badge Overlay */}
                <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#eaeaea]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] border border-black/5 shadow-xs flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{service.category}</span>
                      </span>

                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 text-right border border-white/10">
                        <span className="text-xs font-bold text-white block">
                          {service.highlightStat}
                        </span>
                        <span className="text-[9px] text-white/70 uppercase tracking-wider block">
                          {service.highlightLabel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/80 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Details & Checklist */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                      {service.summary}
                    </p>

                    <div className="space-y-3 mb-8 pt-4 border-t border-[#f0f0ed]">
                      {service.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-xs text-[#333333]">
                          <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                          <span className="font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#e2e2df]">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-[#111111] text-white hover:bg-black py-3.5 px-4 text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      href="/contact"
                      className="border border-[#e2e2df] bg-[#f7f7f5] hover:bg-white hover:border-[#111111] text-[#111111] py-3.5 px-4 text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center transition-all text-center"
                    >
                      <span>Book Meeting</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Service Consultation Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white border border-[#e2e2df] shadow-2xl overflow-hidden my-auto"
            >
              {/* Modal Banner Image */}
              <div className="relative h-[200px] w-full bg-black">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover opacity-90"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 block">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs text-[#555555] leading-relaxed mb-6">
                  Fill out your requirements below to connect with a senior Horizon Realty advisor specializing in <strong>{selectedService.title}</strong>.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you! A senior specialist for ${selectedService.title} will contact you within 2 hours.`);
                    setSelectedService(null);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                    <select className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3.5 text-xs text-[#111111] font-semibold focus:outline-none focus:border-[#111111]">
                      <option>Timeline: Immediate (1-2 Weeks)</option>
                      <option>Timeline: Within 1 Month</option>
                      <option>Timeline: 3+ Months Investment</option>
                    </select>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Specific locations or requirements..."
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] resize-none"
                  />

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#111111] text-white hover:bg-black py-4 text-xs font-bold tracking-[0.18em] uppercase shadow-md"
                    >
                      Confirm Advisory Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-4 border border-[#e2e2df] text-xs font-bold text-[#555555] uppercase"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Consultation Banner */}
      <section className="w-full bg-[#111111] text-white py-20 px-6 sm:px-10 md:px-14 border-t border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase block mb-3">
              CUSTOM CONSULTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Require a specialized real estate service?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light">
              From institutional land joint-ventures to private family office portfolio restructuring, our leadership team handles complex requirements.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%20Horizon%20Realty,%20I%20need%20a%20custom%20real%20estate%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-4 text-xs font-bold tracking-wide flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Direct Line</span>
            </a>

            <Link
              href="/contact"
              className="bg-white text-[#111111] hover:bg-gray-100 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap flex items-center gap-2 transition-all shadow-lg"
            >
              <span>Contact Senior Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
