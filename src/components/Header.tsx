"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f7f5]/90 backdrop-blur-md shadow-sm border-b border-[#e2e2df]"
          : "bg-[#f7f7f5] border-b border-[#e8e8e5]/60"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex flex-col items-center justify-center">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#111111] group-hover:scale-110 transition-transform duration-300"
            >
              <path
                d="M12 2L2 11H5.5L12 5.15L18.5 11H22L12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 8L4.5 14.75H8L12 11.15L16 14.75H19.5L12 8Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-[0.2em] text-[#111111]">
            HORIZON
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {[
            { label: "Properties", href: "/properties" },
            { label: "Services", href: "/services" },
            { label: "Gallery", href: "/gallery" },
            { label: "About", href: "/about" },
            { label: "Advisors", href: "/agents" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-[11px] lg:text-xs font-semibold tracking-[0.18em] text-[#222222] hover:text-black uppercase transition-colors group py-1"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Link */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-[11px] lg:text-xs font-semibold tracking-[0.18em] text-[#111111] uppercase hover:opacity-70 transition-opacity"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#111111] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f7f7f5] border-t border-[#e5e5e2] px-6 py-6 space-y-4 overflow-hidden"
          >
            {[
              { label: "Properties", href: "/properties" },
              { label: "Services", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "About", href: "/about" },
              { label: "Advisors", href: "/agents" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-semibold tracking-[0.18em] text-[#111111] uppercase py-2 border-b border-gray-200/50"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-xs font-semibold tracking-[0.18em] text-[#111111] uppercase py-2 pt-4"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
