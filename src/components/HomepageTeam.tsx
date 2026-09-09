"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageSquare, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

interface Agent {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
}

const AGENTS: Agent[] = [
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    role: "Managing Director & Founder",
    expertise: ["Luxury Homes", "Investment Advisory", "High-Net-Worth Portfolio"],
    experience: "14+ Years Experience",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "vikram@horizonrealty.com",
    image: "/images/agent-vikram.png",
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Head of Luxury Residences",
    expertise: ["Penthouse Sales", "Bandra & Worli Market", "Client Concierge"],
    experience: "9+ Years Experience",
    phone: "+91 98765 43211",
    whatsapp: "919876543211",
    email: "ananya@horizonrealty.com",
    image: "/images/agent-ananya.png",
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    role: "VP Commercial & Land Advisory",
    expertise: ["Commercial Leasing", "BKC & Lower Parel", "Institutional Investments"],
    experience: "11+ Years Experience",
    phone: "+91 98765 43212",
    whatsapp: "919876543212",
    email: "rohan@horizonrealty.com",
    image: "/images/agent-rohan.png",
  },
];

export default function HomepageTeam() {
  return (
    <section id="team" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14 border-t border-[#e2e2df]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                EXPERT ADVISORS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em]">
              <RevealText text="Guided by industry" />
              <br />
              <RevealText text="leaders and experts." delay={0.2} />
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between lg:justify-end gap-6 max-w-xl">
            <p className="text-sm text-[#555555] leading-relaxed max-w-sm">
              Our seasoned real estate advisors combine deep local knowledge with transparent service to guide your property decisions.
            </p>

            <Link
              href="/agents"
              className="group flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#111111] hover:underline whitespace-nowrap"
            >
              <span>VIEW ALL AGENTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Agents Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#e2e2df] flex flex-col justify-between group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Photo Box */}
              <div className="relative w-full h-[320px] bg-[#eaeaea] overflow-hidden">
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

              {/* Info Box */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-1">
                    {agent.name}
                  </h3>
                  <span className="text-xs font-medium text-[#777777] block mb-4">
                    {agent.role}
                  </span>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {agent.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#f7f7f5] border border-[#e2e2df] px-2.5 py-1 text-[10px] font-semibold text-[#444444]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons: WhatsApp & Phone & Email */}
                <div className="pt-4 border-t border-[#e2e2df] flex items-center justify-between gap-3">
                  {/* WhatsApp Direct Chat Button */}
                  <a
                    href={`https://wa.me/${agent.whatsapp}?text=Hi%20${encodeURIComponent(
                      agent.name
                    )},%20I%20saw%20your%20profile%20on%20Horizon%20Realty%20and%20would%20like%20to%20inquire%20about%20a%20property.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white hover:bg-[#20bd5a] px-3.5 py-2.5 flex items-center justify-center gap-2 text-xs font-bold tracking-wide transition-all shadow-sm rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Call Direct Button */}
                  <a
                    href={`tel:${agent.phone}`}
                    className="w-10 h-10 rounded-sm border border-[#e2e2df] bg-[#f7f7f5] hover:bg-[#111111] hover:text-white flex items-center justify-center text-[#111111] transition-all"
                    title={`Call ${agent.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  {/* Email Direct Button */}
                  <a
                    href={`mailto:${agent.email}`}
                    className="w-10 h-10 rounded-sm border border-[#e2e2df] bg-[#f7f7f5] hover:bg-[#111111] hover:text-white flex items-center justify-center text-[#111111] transition-all"
                    title={`Email ${agent.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
