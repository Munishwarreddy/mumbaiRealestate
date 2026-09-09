"use client";

import { Compass, ListFilter, Building2, KeyRound, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

const PROCESS_STEPS = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We understand your lifestyle vision and curate premier unlisted options.",
  },
  {
    number: "02",
    icon: ListFilter,
    title: "Shortlist",
    description:
      "We filter high-potential properties matching your location and budget.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Evaluate & Choose",
    description:
      "Private walkthroughs, legal title auditing, and expert negotiation.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Seamless Move In",
    description:
      "Smooth registration, stamp duty filing, and key handover concierge.",
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                OUR PROCESS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em]">
              <RevealText text="A simple process." />
              <br />
              <RevealText text="A seamless experience." delay={0.2} />
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-md">
              We make real estate simple and transparent. From understanding your
              needs to handing over the keys, we&apos;re with you all the way.
            </p>
          </div>
        </motion.div>

        {/* 4 Steps Horizontal Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pt-4">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col justify-between p-6 sm:p-8 group transition-all duration-300 rounded-lg lg:rounded-none bg-white lg:bg-transparent border border-[#e2e2df] lg:border-none shadow-xs lg:shadow-none hover:bg-white/80 hover:shadow-xl ${
                  !isLast ? "lg:border-r lg:border-[#e2e2df]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-extralight text-[#111111] tracking-tight group-hover:font-normal transition-all">
                      {step.number}
                    </span>
                    {!isLast && (
                      <ArrowRight className="hidden lg:block w-5 h-5 text-[#888888] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <div className="mb-6 text-[#111111] w-14 h-14 rounded-full bg-white border border-[#e2e2df] shadow-xs flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
