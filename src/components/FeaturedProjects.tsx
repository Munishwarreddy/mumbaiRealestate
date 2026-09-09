"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

interface Project {
  number: string;
  title: string;
  location: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Horizon Heights",
    location: "Bandra West, Mumbai",
    image: "/images/hero-property.png",
  },
  {
    number: "02",
    title: "Greenwood Villas",
    location: "Panchgani, Maharashtra",
    image: "/images/greenwood-villas.png",
  },
  {
    number: "03",
    title: "The Skyline",
    location: "Lower Parel, Mumbai",
    image: "/images/skyline-residences.png",
  },
  {
    number: "04",
    title: "The Grove Residences",
    location: "Juhu, Mumbai",
    image: "/images/grove-residences.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em]">
              <RevealText text="Spaces designed" />
              <br />
              <RevealText text="for a better tomorrow." delay={0.2} />
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between lg:justify-end gap-6 max-w-xl">
            <p className="text-sm text-[#555555] leading-relaxed max-w-sm">
              Each project is a reflection of our commitment to quality, innovation
              and creating lasting value.
            </p>

            <Link
              href="#all-projects"
              className="group flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#111111] hover:underline whitespace-nowrap"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer border border-[#e2e2df] bg-[#f7f7f5] transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Image Box */}
              <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#eaeaea]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-xs font-semibold tracking-wider text-[#111111] bg-white/90 backdrop-blur-sm px-2.5 py-1">
                  {project.number}
                </div>
              </div>

              {/* Info Box */}
              <div className="p-5 flex items-center justify-between bg-[#f7f7f5] flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#555555]">
                    <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                    <span className="text-xs font-normal text-[#333333]">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white border border-[#d1d1cd] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
