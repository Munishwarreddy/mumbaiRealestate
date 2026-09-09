"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f5] border-t border-[#e2e2df] pt-16 sm:pt-20 pb-10 px-6 sm:px-10 md:px-14 text-[#111111]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#e2e2df]">
          {/* Brand Info (Spans 3 cols) */}
          <div className="lg:col-span-3 pr-4 border-r-0 lg:border-r border-[#e2e2df]">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 bg-[#111111] text-white flex items-center justify-center rounded-sm">
                <Building2 className="w-5 h-5 stroke-[1.75]" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#111111] uppercase">
                HORIZON
              </span>
            </Link>

            <p className="text-xs text-[#666666] leading-relaxed mb-6 font-medium">
              Modern spaces.
              <br />
              Better living.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#d1d1cd] flex items-center justify-center text-[#333333] hover:bg-[#111111] hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#d1d1cd] flex items-center justify-center text-[#333333] hover:bg-[#111111] hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#d1d1cd] flex items-center justify-center text-[#333333] hover:bg-[#111111] hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#d1d1cd] flex items-center justify-center text-[#333333] hover:bg-[#111111] hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111] mb-5">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-[#555555]">
              <li>
                <Link href="/about" className="hover:text-[#111111] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-[#111111] transition-colors">
                  Our Advisors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#111111] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#111111] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Properties Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111] mb-5">
              PROPERTIES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#555555]">
              <li>
                <Link href="/properties" className="hover:text-[#111111] transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#111111] transition-colors">
                  Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#111111] transition-colors">
                  Sky Penthouses
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#111111] transition-colors">
                  Commercial Space
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111] mb-5">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#555555]">
              <li>
                <Link href="/services" className="hover:text-[#111111] transition-colors">
                  Property Buying
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#111111] transition-colors">
                  Property Selling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#111111] transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#111111] transition-colors">
                  Interior Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111] mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#555555]">
              <li>
                <Link href="/gallery" className="hover:text-[#111111] transition-colors">
                  Architectural Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#111111] transition-colors">
                  Company Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#111111] transition-colors">
                  Office Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111] mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs text-[#555555]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <Link href="/contact" className="hover:text-[#111111]">
                  Bandra West, Mumbai 400050
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#111111] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#111111]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#111111] shrink-0" />
                <a href="mailto:hello@horizonrealty.com" className="hover:text-[#111111]">
                  hello@horizonrealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2024 Horizon Realty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#111111] transition-colors">
              Terms of Use
            </a>
            <span className="text-[#d1d1cd]">|</span>
            <a href="#" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
