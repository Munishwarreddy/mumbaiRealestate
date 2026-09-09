"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Home,
  Handshake,
  Key,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="w-full bg-[#f7f7f5] pt-20 sm:pt-28 pb-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
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
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.08] tracking-[-0.025em] mb-5">
                <RevealText text="Let's build something" />
                <br />
                <RevealText text="extraordinary together." delay={0.2} />
              </h2>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-lg mb-10">
                Have a question, need advice, or ready to find your perfect space?
                We&apos;d love to hear from you.
              </p>

              {/* Stacked Contact Details */}
              <div className="space-y-6 max-w-lg">
                {[
                  {
                    icon: MapPin,
                    label: "VISIT OUR OFFICE",
                    title: "Bandra West, Mumbai 400050",
                    sub: "Maharashtra, India",
                  },
                  {
                    icon: Phone,
                    label: "CALL US",
                    title: "+91 98765 43210",
                    sub: "Mon – Sat | 10:00 AM – 7:00 PM",
                  },
                  {
                    icon: Mail,
                    label: "EMAIL US",
                    title: "hello@horizonrealty.com",
                    sub: "We aim to reply within 24 hours.",
                  },
                  {
                    icon: Clock,
                    label: "WORKING HOURS",
                    title: "Mon – Sat | 10:00 AM – 7:00 PM",
                    sub: "Sunday by appointment only.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-start gap-4 pb-6 group ${
                        idx < 3 ? "border-b border-[#e2e2df]" : ""
                      }`}
                    >
                      <div className="w-12 h-12 shrink-0 bg-[#efefe9] flex items-center justify-center text-[#111111] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#111111] group-hover:text-white">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#777777] uppercase block mb-1">
                          {item.label}
                        </span>
                        <h3 className="text-sm font-bold text-[#111111]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#666666] mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative w-full min-h-[560px] lg:min-h-[640px] overflow-hidden flex items-center justify-center p-4 sm:p-8 group"
          >
            <Image
              src="/images/cta-living-room.png"
              alt="Modern luxury interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="relative z-10 w-full max-w-lg bg-white p-7 sm:p-10 shadow-2xl border border-black/5">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#666666] uppercase block mb-2">
                SEND US A MESSAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-6">
                We&apos;re here to help.
              </h3>

              {submitted ? (
                <div className="bg-[#f0f9f0] border border-[#c2e5c2] p-6 text-center text-[#2d6a2d] text-sm rounded">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] px-4 py-3.5 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] px-4 py-3.5 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] px-4 py-3.5 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                  />

                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] px-4 py-3.5 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full group bg-[#111111] text-white hover:bg-black py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2 pt-2 text-[11px] text-[#777777]">
                    <ShieldCheck className="w-4 h-4 text-[#111111]" />
                    <span>Your information is safe with us. We respect your privacy.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom 4 Value Badges */}
      <div className="w-full bg-[#f2f2ef] border-t border-[#e2e2df] py-10 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {[
            {
              icon: Home,
              title: "Find Your Perfect Space",
              desc: "Personalized recommendations that fit your lifestyle.",
            },
            {
              icon: Handshake,
              title: "Trusted By Many",
              desc: "A commitment to honesty, quality and trust.",
            },
            {
              icon: Key,
              title: "Seamless Experience",
              desc: "From discovery to handover, we're with you all the way.",
            },
            {
              icon: Headphones,
              title: "Here For You",
              desc: "Dedicated support whenever you need us.",
            },
          ].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex items-center gap-4 lg:px-6 ${
                  idx < 3 ? "lg:border-r border-[#e2e2df]" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#e7e7e2] flex items-center justify-center shrink-0 text-[#111111] transition-transform duration-300 hover:scale-110">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-[#666666] leading-normal mt-0.5">
                    {badge.desc}
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
