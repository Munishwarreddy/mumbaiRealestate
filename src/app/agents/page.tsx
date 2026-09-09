"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import { AGENTS_DATA } from "@/data/agents";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero */}
      <section className="w-full bg-[#f7f7f5] py-20 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-[#777777] uppercase block mb-3">
            EXPERT ADVISORS & AGENTS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-[-0.03em] mb-6">
            <RevealText text="Meet our leadership" />
            <br />
            <RevealText text="& real estate experts." delay={0.2} />
          </h1>
        </div>
      </section>

      {/* Agent Directory Grid */}
      <section className="w-full py-20 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS_DATA.map((agent) => (
            <motion.div
              key={agent.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#e2e2df] flex flex-col justify-between group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-[340px] bg-[#eaeaea]">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-[#111111] border border-black/5 flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#111111]" />
                  <span>{agent.experience}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-1">
                    {agent.name}
                  </h2>
                  <span className="text-xs font-semibold text-[#777777] block mb-3">
                    {agent.role}
                  </span>

                  <p className="text-xs text-[#555555] leading-relaxed mb-6 line-clamp-3">
                    {agent.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#e2e2df] mb-6 text-xs">
                    <div>
                      <span className="font-bold text-[#111111] block">
                        {agent.soldProperties}+
                      </span>
                      <span className="text-[9px] text-[#777777] uppercase tracking-wider block">
                        Properties Sold
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-[#111111] block">
                        {agent.salesVolume}
                      </span>
                      <span className="text-[9px] text-[#777777] uppercase tracking-wider block">
                        Sales Volume
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/agents/${agent.id}`}
                    className="w-full bg-[#111111] text-white hover:bg-black py-3 px-4 text-xs font-bold tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Profile & Listings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/${agent.whatsapp}?text=Hi%20${encodeURIComponent(
                      agent.name
                    )},%20I%20saw%20your%20profile%20on%20Horizon%20Realty.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] py-2.5 px-4 text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
