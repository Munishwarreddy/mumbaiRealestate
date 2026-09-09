"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Quote,
  Home,
  MapPin,
  Users,
  Calendar,
  ShieldCheck,
  FileCheck,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./RevealText";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "The team understood our needs perfectly and helped us find a home that fits our lifestyle and future.",
    author: "Arjun & Neha Mehta",
    role: "Homeowners",
  },
  {
    id: 2,
    quote:
      "From initial consultation to final paperwork and handover, the entire journey was completely seamless and transparent.",
    author: "Vikram & Priya Sharma",
    role: "Villa Buyers",
  },
  {
    id: 3,
    quote:
      "Their attention to detail and honest advice saved us so much time. Truly exceptional service from start to finish.",
    author: "Rohan & Ananya Kapoor",
    role: "Penthouse Owners",
  },
];

export default function WhyChooseUs() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <section id="services" className="w-full bg-[#f7f7f5] pt-16 sm:pt-24 pb-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                  WHY CHOOSE US
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em] mb-5">
                <RevealText text="More than properties." />
                <br />
                <RevealText text="We deliver peace of mind." delay={0.2} />
              </h2>

              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-lg mb-10">
                From thoughtful design and quality construction to transparent
                processes and after-sales support, we ensure a seamless
                experience at every step.
              </p>

              {/* Stacked Features */}
              <div className="space-y-6 max-w-xl mb-10">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Quality You Can Trust",
                    text: "Uncompromising standards, verified RERA legal compliance, and luxury architectural craftsmanship.",
                  },
                  {
                    icon: FileCheck,
                    title: "Transparent & Direct Process",
                    text: "Clear communication, verified documentation, zero hidden fees, and legal title protection.",
                  },
                  {
                    icon: UserCheck,
                    title: "White-Glove End-to-End Concierge",
                    text: "Dedicated personal advisor with you from discovery to key handover and long-term asset management.",
                  },
                ].map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title}>
                      <div className="flex items-start gap-5 group">
                        <div className="w-14 h-14 shrink-0 bg-white border border-[#e2e2df] shadow-xs rounded-lg flex items-center justify-center text-[#111111] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] group-hover:shadow-md">
                          <Icon className="w-6 h-6 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#111111] mb-1">
                            {feat.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                            {feat.text}
                          </p>
                        </div>
                      </div>
                      {idx < 2 && <div className="h-[1px] w-full bg-[#e2e2df] mt-6" />}
                    </div>
                  );
                })}
              </div>

              <Link
                href="#about"
                className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#111111] hover:underline"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] lg:h-[600px] overflow-hidden group"
          >
            <Image
              src="/images/why-choose-us.png"
              alt="Luxury modern architectural villa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Floating Testimonial Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-[420px] bg-white p-6 sm:p-7 shadow-2xl border border-black/5">
              <Quote className="w-7 h-7 text-[#111111] fill-[#111111] mb-3 stroke-none" />

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm font-medium text-[#333333] leading-relaxed mb-5 min-h-[48px]"
                >
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </motion.p>
              </AnimatePresence>

              <div className="w-6 h-[1.5px] bg-[#d1d1cd] mb-4"></div>

              <div className="flex items-end justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {currentTestimonial.author}
                  </h4>
                  <span className="text-[11px] text-[#777777] font-medium block mt-0.5">
                    {currentTestimonial.role}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2 rounded-full hover:bg-[#f2f2ef] text-[#555555] hover:text-[#111111] transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2 rounded-full hover:bg-[#f2f2ef] text-[#555555] hover:text-[#111111] transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Band with Animated Counters */}
      <div className="w-full bg-[#f2f2ef] border-t border-[#e2e2df] py-12 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          <div className="flex flex-col items-center justify-center text-center md:border-r border-[#e2e2df] px-4">
            <Home className="w-7 h-7 text-[#111111] stroke-[1.5] mb-3" />
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#111111] tracking-tight leading-none">
              <AnimatedCounter end={250} suffix="+" />
            </span>
            <span className="text-xs font-medium text-[#666666] tracking-wide mt-2">
              Properties Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:border-r border-[#e2e2df] px-4">
            <MapPin className="w-7 h-7 text-[#111111] stroke-[1.5] mb-3" />
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#111111] tracking-tight leading-none">
              <AnimatedCounter end={15} suffix="+" />
            </span>
            <span className="text-xs font-medium text-[#666666] tracking-wide mt-2">
              Prime Locations
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center sm:border-r border-[#e2e2df] md:border-r border-[#e2e2df] px-4">
            <Users className="w-7 h-7 text-[#111111] stroke-[1.5] mb-3" />
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#111111] tracking-tight leading-none">
              <AnimatedCounter end={98} suffix="%" />
            </span>
            <span className="text-xs font-medium text-[#666666] tracking-wide mt-2">
              Happy Clients
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4">
            <Calendar className="w-7 h-7 text-[#111111] stroke-[1.5] mb-3" />
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#111111] tracking-tight leading-none">
              <AnimatedCounter end={10} suffix="+" />
            </span>
            <span className="text-xs font-medium text-[#666666] tracking-wide mt-2">
              Years of Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
