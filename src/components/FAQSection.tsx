"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import RevealText from "./RevealText";

interface FAQItem {
  question: string;
  answer: string;
  category: "BUYING" | "SELLING" | "DOCUMENTATION" | "PRICING";
}

const FAQS_DATA: FAQItem[] = [
  {
    category: "BUYING",
    question: "What steps are involved in purchasing a property through Horizon Realty?",
    answer:
      "Our process begins with a personalized consultation to understand your requirements, followed by curated shortlisting, private property viewings, legal title verification, price negotiation, and full assistance with registration and handover.",
  },
  {
    category: "BUYING",
    question: "Are all properties listed on Horizon Realty verified?",
    answer:
      "Yes. Every property undergoes strict due diligence, clear title checks, and physical inspections by our legal and technical team before being published.",
  },
  {
    category: "SELLING",
    question: "How do you determine the market value of my home?",
    answer:
      "We combine recent neighborhood sales data, architectural condition, current demand trends, and comparative market analysis to provide an accurate valuation that maximizes your returns.",
  },
  {
    category: "DOCUMENTATION",
    question: "What legal documents do I need to buy a home in Maharashtra?",
    answer:
      "Key documents include the Title Deed, Sale Agreement, RERA Registration, Approved Building Plan, Occupancy Certificate (OC), Encumbrance Certificate, and PAN/Aadhaar cards.",
  },
  {
    category: "PRICING",
    question: "What additional costs should I budget for besides the property price?",
    answer:
      "Common additional costs include Stamp Duty & Registration fees (typically 5-7%), GST for under-construction units, legal verification fees, maintenance deposit, and interior customization.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === "ALL" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="w-full bg-[#f7f7f5] py-20 sm:py-28 px-6 sm:px-10 md:px-14 border-t border-[#e2e2df]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading & Search */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em] mb-6">
            <RevealText text="Everything you" />
            <br />
            <RevealText text="need to know." delay={0.2} />
          </h2>

          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            Have questions about buying, selling, or legal documentation? Find clear answers from our real estate experts.
          </p>

          {/* Search Field */}
          <div className="relative mb-8">
            <Search className="w-4 h-4 text-[#777777] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e2e2df] pl-11 pr-4 py-3.5 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "BUYING", "SELLING", "DOCUMENTATION", "PRICING"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-[#111111] text-white"
                    : "bg-white text-[#555555] border border-[#e2e2df] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:col-span-7">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#e2e2df] bg-white transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#f7f7f5] border border-[#e2e2df] flex items-center justify-center text-[#111111] shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#f0f0ed] mt-1 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-[#777777] text-sm bg-white border border-[#e2e2df]">
              No questions found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
