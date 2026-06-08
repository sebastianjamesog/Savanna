"use client";

import { useEffect } from "react";
import InteractiveMap from "@/components/InteractiveMap";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleQuoteClick = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[400px] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            alt="Cinematic high-angle view of a bustling global logistics terminal at dawn"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp99J8_4pFB3aJyXEuAEqRn435fW3YGT2Xjgnc-p1f09YGiEEiNCB-PS_hBZA3tp9h7l-7FMGUdorMEf4TEDaRPNkOmnZIDXqz3lq9Hpn4VhHdb82CvxubL4SY5Fb43NeGSBo1m1DAF1LAULY2awNfgepYhSzGQQG9q-0mrfJu17u1gQS898dCWCEKE0M4mbTdTITbyL-xfzH5ggnPW4AIusG-RZPygx66v-fWtuKqEpNtVQIc0I8zRqk6BupXq5MV37zX9xU4sEY"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/25"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page text-center w-full">
          <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.3em] mb-4 block font-semibold">
            Legacy of Excellence
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Two Decades of Global Sourcing Stewardship
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Savanna Crest serves as the critical bridge in global commerce, transforming complex procurement into seamless industrial partnerships since 2004.
          </p>
        </div>
      </section>

      {/* Heritage & Mission (Bento Grid) */}
      <section className="py-section-desktop max-w-container-max mx-auto px-margin-page reveal-on-scroll reveal-element">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Lead */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold">
              Built on a Foundation of Trust
            </h2>
            <div className="h-1 w-24 bg-[#D4A017] mb-8"></div>
            <p className="font-body-lg text-sm md:text-base text-gray-600 leading-relaxed">
              Our journey began over twenty years ago with a single mission: to redefine the standards of industrial procurement. Today, Savanna Crest stands as a trusted partner in global trade, managing a network that connects manufacturers across six continents to clients in the Middle East and Africa.
            </p>
            <p className="font-body-lg text-sm md:text-base text-gray-600 leading-relaxed">
              We don't just move products; we move progress. By adhering to the most stringent international standards, we ensure that every sourcing agreement is rooted in absolute reliability, full compliance, and ethical supply practices.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-primary p-8 flex flex-col justify-center items-center text-center rounded-xl shadow-md">
              <span className="font-display-lg text-4xl text-[#ffdfa0] mb-2">20+</span>
              <span className="font-label-md text-xs text-white uppercase tracking-wider">Years Experience</span>
            </div>
            
            <div className="bg-surface-gray p-8 flex flex-col justify-center items-center text-center rounded-xl border-t-4 border-[#D4A017] shadow-sm">
              <span className="font-display-lg text-4xl text-primary mb-2">45+</span>
              <span className="font-label-md text-xs text-gray-500 uppercase tracking-wider">Countries Served</span>
            </div>
            
            <div className="bg-surface-gray p-8 flex flex-col justify-center items-center text-center rounded-xl border-t-4 border-[#D4A017] shadow-sm">
              <span className="font-display-lg text-4xl text-primary mb-2">500+</span>
              <span className="font-label-md text-xs text-gray-500 uppercase tracking-wider">Manufacturers</span>
            </div>
            
            <div className="bg-primary p-8 flex flex-col justify-center items-center text-center rounded-xl shadow-md">
              <span className="font-display-lg text-4xl text-[#ffdfa0] mb-2">100%</span>
              <span className="font-label-md text-xs text-white uppercase tracking-wider">Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sourcing Network Map */}
      <section className="bg-primary py-section-desktop relative overflow-hidden reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page relative z-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] block font-semibold">
              Logistics Reach
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white">
              A Global Logistics Network
            </h2>
            <p className="text-gray-400 font-body-lg text-xs leading-relaxed">
              We leverage strategically positioned hubs to manage complex shipping routes and customs processes, ensuring on-time delivery.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <InteractiveMap />
          </div>
        </div>
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4A017 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </section>

      {/* Leadership & Philosophy */}
      <section className="py-section-desktop max-w-container-max mx-auto px-margin-page reveal-on-scroll reveal-element">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4A017]"></div>
            <img
              className="w-full h-[500px] object-cover brightness-90 shadow-2xl rounded-lg"
              alt="Modern corporate glass and steel architectural angles represent engineering precision"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABh7aNtsPsYf1KbfXhKYWxNRkCrA1o1tBoG5QE0RMMOGn0p7nOXx_hxPv_RSQjO9xtXOZ0jGKMFsu9-X1G-7c9jiUHcwRW9UW_s4NFYHvhanLEeXSziizsyeJMOcUBLMIPGDUK65Cm0HkIS0W_sMR7TaFQOVNnf-w6nYjyFttoCCUAKDJO0TO51UKASe0NqYn6uh6XldcSVZZPTp-2npOSq6O6wNOXLZqqLmBWlqbJfGlyhSyXifMHDLZjHCYetmVMxrIo3Vobv_I"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary"></div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-widest mb-4 block font-semibold">
                Our Code
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">
                Guided by Engineering Precision and Corporate Integrity
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#ffdfa0] font-display-lg font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary mb-2 font-bold">Resilience by Design</h4>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    We architect supply chains to withstand geopolitical shifts, material shortages, and market volatility, ensuring continuity for our partners.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#ffdfa0] font-display-lg font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary mb-2 font-bold">Transparent Stewardship</h4>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Full visibility is our mandate. We provide detailed compliance tracking and complete documentation audits for every procurement cycle.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#ffdfa0] font-display-lg font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary mb-2 font-bold">Sustainable Procurement</h4>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Growth must be responsible. We prioritize manufacturing partners who meet carbon-neutral objectives and fair labor international standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="bg-surface-gray py-section-desktop border-y border-gray-200 reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-2">
                Global Compliance Standards
              </h2>
              <p className="text-gray-500 font-body-lg text-sm">
                Adhering to the world's most rigorous industrial benchmarks.
              </p>
            </div>
            <button 
              onClick={handleQuoteClick}
              className="text-primary font-button border-b border-primary hover:text-[#D4A017] hover:border-[#D4A017] transition-all text-sm uppercase tracking-widest font-semibold"
            >
              Request Compliance Info
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-sm industry-card-hover group min-h-[140px]">
              <span className="material-symbols-outlined text-4xl mb-3 text-primary group-hover:text-[#D4A017] transition-colors">
                verified_user
              </span>
              <span className="font-label-md text-xs text-primary font-bold">ISO 9001:2015</span>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-sm industry-card-hover group min-h-[140px]">
              <span className="material-symbols-outlined text-4xl mb-3 text-primary group-hover:text-[#D4A017] transition-colors">
                eco
              </span>
              <span className="font-label-md text-xs text-primary font-bold">ISO 14001:2015</span>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-sm industry-card-hover group min-h-[140px]">
              <span className="material-symbols-outlined text-4xl mb-3 text-primary group-hover:text-[#D4A017] transition-colors">
                security
              </span>
              <span className="font-label-md text-xs text-primary font-bold">C-TPAT Certified</span>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-sm industry-card-hover group min-h-[140px]">
              <span className="material-symbols-outlined text-4xl mb-3 text-primary group-hover:text-[#D4A017] transition-colors">
                factory
              </span>
              <span className="font-label-md text-xs text-primary font-bold">Sedex Member</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
