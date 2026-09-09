"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealText from "@/components/RevealText";

const OFFICES = [
  {
    city: "Mumbai Headquarters",
    address: "Horizon Tower, Hill Road, Bandra West, Mumbai 400050",
    phone: "+91 98765 43210",
    email: "mumbai@horizonrealty.com",
    hours: "Mon - Sat: 9:00 AM - 7:30 PM",
  },
  {
    city: "BKC Commercial Desk",
    address: "Level 8, Maker Maxity, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 98765 43211",
    email: "bkc@horizonrealty.com",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
  },
  {
    city: "Bengaluru Office",
    address: "100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "+91 98765 43212",
    email: "bengaluru@horizonrealty.com",
    hours: "Mon - Sat: 9:30 AM - 7:00 PM",
  },
  {
    city: "Dubai Desk (International)",
    address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@horizonrealty.com",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
  },
];

export default function DedicatedContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Buying Property",
    budget: "₹5 Cr - ₹10 Cr",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1.5px] bg-[#111111] inline-block"></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#333333] uppercase">
                  DEDICATED CONTACT & ADVISORY
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#111111] leading-[1.06] tracking-[-0.03em] mb-4">
                <RevealText text="Let's start a conversation" />
                <br />
                <RevealText text="about your next property." delay={0.2} />
              </h1>

              <p className="text-sm sm:text-base text-[#555555] max-w-xl leading-relaxed">
                Whether you are searching for a sea-facing penthouse, seeking land acquisition guidance, or listing a premium property, our senior advisors are ready to assist.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20Horizon%20Realty,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20listings."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-4 text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              <a
                href="tel:+919876543210"
                className="bg-[#111111] text-white hover:bg-black px-6 py-4 text-xs font-bold tracking-[0.18em] uppercase flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline (+91 98765 43210)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Form + Office Locations */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#e2e2df] p-8 sm:p-12 shadow-sm">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] block mb-2">
              DIRECT INQUIRY FORM
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">
              Send us a message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#f7f7f5] border border-[#e2e2df] p-8 text-center py-16"
              >
                <CheckCircle2 className="w-12 h-12 text-[#111111] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#111111] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-[#555555] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. A dedicated Horizon Realty senior advisor will contact you at <strong>{formData.email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#111111] text-white px-6 py-3 text-xs font-bold tracking-[0.18em] uppercase"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Shah"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] font-semibold outline-none transition-all"
                    >
                      <option>Buying Property</option>
                      <option>Selling Property</option>
                      <option>Luxury Villa Acquisition</option>
                      <option>Commercial Real Estate</option>
                      <option>Private Portfolio Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                    Estimated Investment Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] font-semibold outline-none transition-all"
                  >
                    <option>Under ₹5 Cr</option>
                    <option>₹5 Cr - ₹10 Cr</option>
                    <option>₹10 Cr - ₹25 Cr</option>
                    <option>Above ₹25 Cr</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about preferred locations, timelines, or specific property features..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#f9f9f8] border border-[#e2e2df] focus:border-[#111111] p-3.5 text-xs text-[#111111] outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111111] text-white hover:bg-black py-4 px-6 text-xs font-bold tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Locations & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] block mb-2">
                GLOBAL OFFICES
              </span>
              <h2 className="text-2xl font-bold text-[#111111] mb-6">
                Our Physical Presence
              </h2>

              <div className="space-y-4">
                {OFFICES.map((off) => (
                  <div
                    key={off.city}
                    className="bg-white border border-[#e2e2df] p-6 hover:border-[#111111] transition-all group"
                  >
                    <h3 className="text-base font-bold text-[#111111] mb-2 flex items-center justify-between">
                      <span>{off.city}</span>
                      <Building2 className="w-4 h-4 text-[#777777] group-hover:text-[#111111]" />
                    </h3>

                    <div className="space-y-2 text-xs text-[#555555]">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{off.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                        <a
                          href={`tel:${off.phone}`}
                          className="hover:text-[#111111] font-semibold"
                        >
                          {off.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                        <a
                          href={`mailto:${off.email}`}
                          className="hover:text-[#111111]"
                        >
                          {off.email}
                        </a>
                      </p>
                      <p className="flex items-center gap-2 pt-2 border-t border-[#f0f0ed] text-[11px] text-[#777777]">
                        <Clock className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                        <span>{off.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meet Personal Advisors Link */}
            <div className="bg-[#111111] text-white p-8 border border-[#111111]">
              <UserCheck className="w-8 h-8 mb-4 stroke-[1.5]" />
              <h3 className="text-lg font-bold mb-2">
                Prefer to connect with a specific advisor?
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                Browse our expert leadership directory and connect directly with dedicated property specialists.
              </p>
              <Link
                href="/agents"
                className="inline-flex items-center gap-2 bg-white text-[#111111] hover:bg-gray-100 px-5 py-3 text-xs font-bold tracking-[0.18em] uppercase transition-all"
              >
                <span>View Advisor Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
