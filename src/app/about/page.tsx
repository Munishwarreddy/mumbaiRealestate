"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Sparkles, Heart, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import RevealText from "@/components/RevealText";

const TIMELINE = [
  { year: "2012", title: "Foundation in Mumbai", desc: "Horizon Realty was established in Bandra West with a vision for transparency in high-end real estate." },
  { year: "2015", title: "Expansion to Pune & Hill Estates", desc: "Acquired exclusive marketing rights for premium luxury villas in Panchgani and Lonavala." },
  { year: "2018", title: "Commercial Division Launch", desc: "Expanded into institutional land acquisition and prime Grade-A commercial leasing in BKC." },
  { year: "2021", title: "RERA Excellence Award", desc: "Recognized as Maharashtra's most trusted luxury real estate consultancy." },
  { year: "2024", title: "Crossing ₹1,000+ Cr Transactions", desc: "Surpassed 250+ delivered homes with 98% client satisfaction rating." },
];

const AWARDS = [
  { title: "Best Luxury Brokerage 2024", body: "Real Estate Excellence Awards India" },
  { title: "Most Transparent Consultancy 2023", body: "National Property Summit" },
  { title: "Architectural Marketing Leader 2022", body: "Urban Design & Living Forum" },
];

const OFFICES = [
  { city: "Mumbai HQ", location: "Bandra West, Mumbai 400050", phone: "+91 98765 43210" },
  { city: "BKC Commercial", location: "Maker Maxity, BKC, Mumbai 400051", phone: "+91 98765 43211" },
  { city: "Pune Office", location: "Koregaon Park, Pune 411001", phone: "+91 98765 43212" },
  { city: "Bengaluru Desk", location: "Indiranagar, Bengaluru 560038", phone: "+91 98765 43213" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[#f7f7f5] py-20 lg:py-28 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                ABOUT HORIZON REALTY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-[-0.03em] mb-6">
              <RevealText text="Built on trust." />
              <br />
              <RevealText text="Driven by design." delay={0.2} />
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl mb-8">
              We are a premier real estate advisory firm dedicated to matching discerning buyers and investors with architecturally significant properties across India.
            </p>

            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.18em] uppercase">
              <Link
                href="/properties"
                className="bg-[#111111] text-white hover:bg-black px-7 py-4 flex items-center gap-2 transition-all"
              >
                <span>EXPLORE PROPERTIES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] overflow-hidden border border-[#e2e2df]">
            <Image
              src="/images/hero-villa.png"
              alt="Horizon Realty Corporate Vision"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="w-full bg-[#f7f7f5] py-20 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-3">
              OUR STORY
            </span>
            <h2 className="text-3xl font-bold text-[#111111] mb-6">
              Redefining real estate advisory through absolute clarity.
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              Founded in 2012, Horizon Realty was established to fix the fragmentation and opacity common in premium real estate. We built a firm where client interests always precede transactions.
            </p>
            <p className="text-sm text-[#555555] leading-relaxed">
              Today, we represent over 250+ completed luxury residences, commercial towers, and private villa estates, operating with uncompromising legal rigor and architectural passion.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-[#e2e2df]">
              <Sparkles className="w-6 h-6 text-[#111111] mb-4" />
              <h3 className="text-base font-bold text-[#111111] mb-2">Our Mission</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                To simplify real estate acquisition through curated listings, rigorous title verification, and tailored advisory.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2e2df]">
              <Heart className="w-6 h-6 text-[#111111] mb-4" />
              <h3 className="text-base font-bold text-[#111111] mb-2">Our Philosophy</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Every space should elevate daily life. We curate only properties that combine structural excellence with lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-[#f2f2ef] py-20 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-2">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Milestones of excellence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 border border-[#e2e2df] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold text-[#111111] block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-sm font-bold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Statistics */}
      <section className="w-full bg-[#f7f7f5] py-20 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-3">
              RECOGNITION
            </span>
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              Industry Awards & Accolades
            </h2>

            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div key={award.title} className="p-5 bg-white border border-[#e2e2df] flex items-start gap-4">
                  <Award className="w-6 h-6 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#111111]">{award.title}</h3>
                    <p className="text-xs text-[#666666] mt-0.5">{award.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-3">
                OUR IMPACT
              </span>
              <h2 className="text-3xl font-bold text-[#111111] mb-8">
                Numbers that define our legacy.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-white p-8 border border-[#e2e2df]">
              <div>
                <span className="text-4xl font-normal text-[#111111] block mb-1">
                  <AnimatedCounter end={250} suffix="+" />
                </span>
                <span className="text-xs text-[#666666] font-medium uppercase tracking-wider">
                  Homes Delivered
                </span>
              </div>

              <div>
                <span className="text-4xl font-normal text-[#111111] block mb-1">
                  <AnimatedCounter end={1000} suffix=" Cr+" />
                </span>
                <span className="text-xs text-[#666666] font-medium uppercase tracking-wider">
                  Transaction Value
                </span>
              </div>

              <div>
                <span className="text-4xl font-normal text-[#111111] block mb-1">
                  <AnimatedCounter end={98} suffix="%" />
                </span>
                <span className="text-xs text-[#666666] font-medium uppercase tracking-wider">
                  Client Retention
                </span>
              </div>

              <div>
                <span className="text-4xl font-normal text-[#111111] block mb-1">
                  <AnimatedCounter end={12} suffix="+" />
                </span>
                <span className="text-xs text-[#666666] font-medium uppercase tracking-wider">
                  Years of Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Network */}
      <section className="w-full bg-[#f7f7f5] py-20 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-2">
              OUR OFFICES
            </span>
            <h2 className="text-3xl font-bold text-[#111111]">
              Located in prime economic hubs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office) => (
              <div key={office.city} className="p-6 bg-white border border-[#e2e2df]">
                <Building2 className="w-6 h-6 text-[#111111] mb-4" />
                <h3 className="text-base font-bold text-[#111111] mb-2">{office.city}</h3>
                <p className="text-xs text-[#666666] mb-3">{office.location}</p>
                <a href={`tel:${office.phone}`} className="text-xs font-bold text-[#111111] hover:underline">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
