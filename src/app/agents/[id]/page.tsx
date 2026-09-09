"use client";

import { use, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  Award,
  Calendar,
  Globe,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { AGENTS_DATA } from "@/data/agents";
import { notFound } from "next/navigation";

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const agent = AGENTS_DATA.find((a) => a.id === resolvedParams.id);

  const [bookingOpen, setBookingOpen] = useState(false);

  if (!agent) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="w-full bg-white border-b border-[#e2e2df] py-16 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Agent Photo */}
          <div className="lg:col-span-4 relative h-[420px] bg-[#eaeaea] overflow-hidden border border-[#e2e2df]">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Agent Details */}
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] block mb-2">
              REAL ESTATE ADVISOR PROFILE
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-2">
              {agent.name}
            </h1>
            <span className="text-base font-semibold text-[#555555] block mb-6">
              {agent.role} • {agent.experience}
            </span>

            <p className="text-sm text-[#555555] leading-relaxed mb-8 max-w-2xl">
              {agent.bio}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#f7f7f5] border border-[#e2e2df] mb-8">
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  {agent.soldProperties}+
                </span>
                <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                  Properties Sold
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  {agent.salesVolume}
                </span>
                <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                  Career Sales Volume
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  99%
                </span>
                <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                  Client Satisfaction
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111111] block">
                  {agent.languages.length}
                </span>
                <span className="text-[10px] text-[#777777] font-semibold uppercase tracking-wider block mt-0.5">
                  Languages Spoken
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${agent.whatsapp}?text=Hi%20${encodeURIComponent(
                  agent.name
                )},%20I%20would%20like%20to%20schedule%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-3.5 text-xs font-bold tracking-wide flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[#111111] text-white hover:bg-black px-6 py-3.5 text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Meeting</span>
              </button>

              <a
                href={`tel:${agent.phone}`}
                className="border border-[#e2e2df] bg-white hover:border-[#111111] px-5 py-3.5 text-xs font-bold text-[#111111] flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{agent.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications, Languages, & Sold Properties */}
      <section className="w-full py-16 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Certifications & Specs */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white border border-[#e2e2df]">
              <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications & RERA</span>
              </h3>
              <div className="space-y-2.5">
                {agent.certifications.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-xs text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white border border-[#e2e2df]">
              <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Languages Spoken</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((l) => (
                  <span key={l} className="bg-[#f7f7f5] border border-[#e2e2df] px-3 py-1 text-xs font-semibold text-[#111111]">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Sold Properties & Reviews */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">
                Featured Listings & Portfolio
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {agent.featuredListings.map((prop) => (
                  <div key={prop.title} className="bg-white border border-[#e2e2df] overflow-hidden group">
                    <div className="relative h-[200px]">
                      <Image src={prop.image} alt={prop.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-bold text-[#111111]">{prop.title}</h4>
                        <span className="text-xs text-[#666666]">{prop.location}</span>
                      </div>
                      <span className="text-xs font-bold text-[#111111]">{prop.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">
                Client Testimonials
              </h3>
              <div className="space-y-4">
                {agent.clientReviews.map((rev, idx) => (
                  <div key={idx} className="p-6 bg-white border border-[#e2e2df]">
                    <Quote className="w-6 h-6 text-[#111111] mb-3 stroke-none fill-[#111111]" />
                    <p className="text-xs sm:text-sm text-[#444444] mb-4">&ldquo;{rev.quote}&rdquo;</p>
                    <span className="text-xs font-bold text-[#111111] block">— {rev.client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Meeting Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-8 border border-[#e2e2df]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Schedule Meeting with {agent.name}</h3>
            <p className="text-xs text-[#666666] mb-6">Choose your preferred date and time for a private consultation.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Meeting scheduled with ${agent.name}! We will send a calendar invite shortly.`);
                setBookingOpen(false);
              }}
              className="space-y-4"
            >
              <input type="text" required placeholder="Your Full Name" className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3 text-xs" />
              <input type="email" required placeholder="Your Email Address" className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3 text-xs" />
              <input type="date" required className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3 text-xs" />
              <select className="w-full bg-[#f9f9f8] border border-[#e2e2df] p-3 text-xs font-bold">
                <option>10:00 AM - 11:00 AM</option>
                <option>02:00 PM - 03:00 PM</option>
                <option>05:00 PM - 06:00 PM</option>
              </select>

              <div className="flex items-center gap-3 pt-2">
                <button type="submit" className="flex-1 bg-[#111111] text-white py-3 text-xs font-bold uppercase">Confirm Schedule</button>
                <button type="button" onClick={() => setBookingOpen(false)} className="px-4 py-3 border text-xs font-bold uppercase">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
