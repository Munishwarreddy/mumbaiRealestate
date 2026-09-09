"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="w-full bg-[#f2f2ef] border-t border-[#e2e2df] py-16 sm:py-20 px-6 sm:px-10 md:px-14">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side: Mail Icon & Text */}
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-[#e7e7e2] border border-[#d8d8d3] flex items-center justify-center text-[#111111] shrink-0">
            <Mail className="w-6 h-6 stroke-[1.5]" />
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#666666] uppercase block mb-1">
              STAY UPDATED
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              Insights, updates and exclusive offers
              <br className="hidden sm:block" /> — straight to your inbox.
            </h3>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-auto">
          {subscribed ? (
            <div className="text-xs sm:text-sm font-semibold text-[#2d6a2d] bg-[#e4f4e4] border border-[#b6e2b6] px-6 py-4 rounded">
              Thank you for subscribing to Horizon Realty insights!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch gap-0 w-full lg:w-[480px]"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-[#d1d1cd] px-5 py-4 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#111111] text-white hover:bg-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#777777] mt-2.5 text-center sm:text-left">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
