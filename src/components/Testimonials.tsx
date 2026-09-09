"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

interface TestimonialCard {
  id: number;
  image: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TESTIMONIALS_DATA: TestimonialCard[] = [
  {
    id: 1,
    image: "/images/cta-living-room.png",
    quote:
      "The team made the entire process smooth and stress-free. They truly understood what we were looking for and found us our dream home.",
    name: "Rohit & Priya Sharma",
    role: "Homeowners, Mumbai",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/testimonial-dining.png",
    quote:
      "Transparent communication, honest advice, and zero pressure. A refreshing experience from start to finish.",
    name: "Ankit Mehta",
    role: "Homeowner, Pune",
    rating: 5,
  },
  {
    id: 3,
    image: "/images/testimonial-balcony.png",
    quote:
      "Professional, responsive, and reliable. They helped us invest in the right property with complete peace of mind.",
    name: "Neha & Karan Iyer",
    role: "Investors, Bengaluru",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  };

  return (
    <section id="testimonials" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header Row with Arrow Nav */}
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
                TESTIMONIALS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em]">
              <RevealText text="Trusted by homeowners." />
              <br />
              <RevealText text="Loved for the experience." delay={0.2} />
            </h2>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-8">
            <p className="text-sm text-[#555555] max-w-xs leading-relaxed hidden sm:block">
              Real stories from real people who found their perfect space with us.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-[#d1d1cd] bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-[#d1d1cd] bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#f7f7f5] border border-[#e2e2df] flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[220px] sm:h-[250px] overflow-hidden bg-[#eaeaea]">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <Quote className="w-7 h-7 text-[#111111] fill-[#111111] mb-4 stroke-none group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed mb-6">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#e2e2df] flex items-end justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111111]">
                      {card.name}
                    </h3>
                    <span className="text-[11px] text-[#777777] font-medium block mt-0.5">
                      {card.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#111111]">
                    {Array.from({ length: card.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#111111] text-[#111111]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === i ? "bg-[#111111] w-7" : "bg-[#d1d1cd] w-2.5 hover:bg-[#888888]"
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-[#e2e2df] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <Quote className="w-6 h-6 text-[#111111] fill-[#111111] stroke-none shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm font-medium text-[#444444]">
              Join hundreds of happy homeowners who found their perfect space with us.
            </p>
          </div>

          <Link
            href="#contact"
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#111111] hover:underline shrink-0"
          >
            <span>READ MORE REVIEWS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
