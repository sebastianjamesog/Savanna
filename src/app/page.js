"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InteractiveMap from "@/components/InteractiveMap";

export default function Home() {
  const [activeItems, setActiveItems] = useState({});

  useEffect(() => {
    // Reveal animation observer
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
      <header className="relative min-h-screen pt-32 pb-20 flex items-center justify-start overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50"
            alt="Cinematic wide shot of a massive industrial shipping port at dusk, featuring towering cranes and rows of containers"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnaIsyGYBwQ6IB6cLzM5x0XeOQY00QWmBFtnT36ZXetRWtGSVRqe4GfAljkADafJ6CciFMuDjwyxaQykOjjA1dGHEK7_ydFZ1doLH5q_Lgd0vr1-l9hfnt05vrXx4pUVkncJ8tMbBz1cmT0eHkM3lPak-dIWa-XK8dVvBud0GZTf3nBCRbCkDg0AZHwNNTq_C0NsSILdrLcKHSJrRao-qtNWJ0eFtAFKJ4gcmmwVAzVaBF_VkB0jBvljHy1IkD3GADy6Z81nSm-gk"
          />
          <div className="absolute inset-0 industrial-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-4 mb-6 bg-[#D4A017] text-white font-label-md text-xs uppercase tracking-[0.2em] font-semibold">
              Global Industrial Partner
            </span>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-tight">
              Global Procurement &amp; Industrial Supply Solutions
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
              Empowering international trade through robust supply chains, precision engineering, and elite procurement strategies for the world's most demanding industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-[#D4A017] text-white px-10 py-4 font-button text-xs uppercase tracking-widest hover:bg-[#b38612] transition-all text-center"
              >
                Explore Products
              </Link>
              <button
                onClick={handleQuoteClick}
                className="border-2 border-white text-white px-10 py-4 font-button text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-surface-gray py-12 border-y border-gray-200">
        <div className="max-w-container-max mx-auto px-margin-page">
          <p className="text-center font-label-md text-xs text-gray-500 uppercase tracking-widest mb-10 opacity-70">
            Trusted by Global Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 md:gap-12 opacity-40 transition-all duration-700">
            <div className="flex items-center gap-2 font-display-lg text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">factory</span> INDUS
            </div>
            <div className="flex items-center gap-2 font-display-lg text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">precision_manufacturing</span> CORE
            </div>
            <div className="flex items-center gap-2 font-display-lg text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">local_shipping</span> ATLAS
            </div>
            <div className="flex items-center gap-2 font-display-lg text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">terminal</span> TECH
            </div>
            <div className="flex items-center gap-2 font-display-lg text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">build</span> PRIME
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-desktop reveal-on-scroll reveal-element" id="about">
        <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] mb-4 block font-semibold">
              Corporate Stewardship
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-8 leading-tight">
              Engineered for Reliability. Built for the Future.
            </h2>
            <div className="space-y-6 font-body-lg text-base text-gray-600 leading-relaxed">
              <p>
                Savanna Crest stands at the intersection of global trade and industrial excellence. We are more than a trading house; we are a strategic partner providing critical infrastructure and raw materials to the world's most vital sectors.
              </p>
              <p>
                With a presence spanning four continents, our logistics network ensures that whether it's specialized machinery for oil &amp; gas or sustainable raw materials for manufacturing, we deliver with surgical precision and absolute integrity.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-[#D4A017] font-display-lg text-4xl lg:text-5xl mb-2">20+ Years</div>
                <div className="font-label-md text-xs text-gray-500 uppercase tracking-wider">
                  Industry Sourcing Experience
                </div>
              </div>
              <div>
                <div className="text-[#D4A017] font-display-lg text-4xl lg:text-5xl mb-2">500+</div>
                <div className="font-label-md text-xs text-gray-500 uppercase tracking-wider">
                  Global Sourcing Partners
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-surface-variant overflow-hidden rounded-xl shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Close-up photograph of high-end industrial machinery components gears"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_djCedv8MeGrVPlnUn0Cr9LCetixF1Lnrf96YjVG9nmrZFCFh6i9LvrK72KIxm_Hb9zL0H1FnG-MUTdmq5nzpm_3iTafixHGL2v3WOv2M7WMcHMh4rdcCfXbDlyHogxEPau1a3b-l2BVFxAOkdbi69NAq_EdCDK6MiqZU1sZFIvNYO-IlOwLUYxppGu8g64mfyjokR9C8IylUD_JPpHepZi91uL7Ke3F1ftWMeHAocZPB-L77_UaF2Z6z6Qmcgdbl27G7KFtuwgs"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 md:-left-10 bg-primary p-6 md:p-8 text-white max-w-xs shadow-xl rounded-lg border-l-4 border-[#D4A017]">
              <span className="material-symbols-outlined text-4xl mb-4 text-[#D4A017]">verified</span>
              <p className="font-headline-md text-xl leading-tight mb-2">ISO 9001 Compliant</p>
              <p className="font-label-md text-xs text-gray-400">
                Adhering to the highest global standards of industrial compliance and supply chain security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-section-desktop bg-surface-gray border-y border-gray-200 reveal-on-scroll reveal-element" id="industries">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] mb-4 block font-semibold">
                Our Sectors
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary leading-tight">
                Industries We Serve
              </h2>
            </div>
            <Link
              href="/industries"
              className="flex items-center gap-2 font-button text-xs text-primary hover:text-[#D4A017] transition-colors uppercase tracking-widest group font-semibold"
            >
              View All Industries
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Construction"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8aMc5zqxjOlCCT0L2mCgYna372uACsVFwZDSfcli32Oil57jNgY_Le6WqH2x97TV96C73RXa8U55CHXe3KUxUR2jLN3dr6b-I95t64kjU4n-SwpqdiH7bt2Z_VAiGji-ktRr-2_YtEL11wKJw_7CZlEX3r3eabVFDvy0hDZdpZYDGyRffyosfZxUAqdScwQkKtosQFwELhJFBf0MRDfxLdfSiPlxTwGLJ1W11tdd9U5EH9lU_g7Z5mUYS020UstvBtOvRxoxOh0"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    construction
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Construction</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Heavy machinery, structural components, infrastructure support, and earthmoving assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Agriculture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw-kS6Z1O7Ua5PxU67wKvBE8QcAccr_QELXBrssFmz_A1EqVy8aEfThdnqCX1LEzO3rkt23IMY_EBJ0Sjls-79DmhHCR4rF9vkXsrbJl_MTB_WjY13cnejqyUxQdVU-xMoCr2M7Mi4cu-KxCk-H1U3mSYAJHldC1LF1PkyBuZQ_5TVgFBHO6-ngwNwyghcQvO9TW4KQvbw03-NMqx2Ku5GVpPPYPqtzND6OeFjkMFQ6pVH298cLbT3-LIjeqcTOcZnTACVcwmhFWA"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    agriculture
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Agriculture</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Farm equipment, harvesting systems, irrigation networks, and specialized spares.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Manufacturing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc7yESyempNPbdErQAU9ZgmNpAOsX99URKQxvs9A1RS6qRDoJfRiW9pNwaSUPpQY9HuOOBsWP0zqOYV6kSNB-GTQyARPkctgPWrwGqc62whKRSIo7C2QahOvtTkrxVQS3PDeRtwmfZg_Hw60jMHZOd4yvwMRjRjx7Z1ZCpgzAj-ENYXMc4jYJ0FYfW3EQ9jEdT5gwoH75RyFSomM6kk-30wEdGJdg9SK15eqC5pGiwaHPgePthlOf5phWwW9Qjn4LPGTEoVLB67ic"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    precision_manufacturing
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Manufacturing</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Production line systems, automation machinery, parts procurement, and consumables.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Automotive"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHJ0wXHSaNyn2p32WIJwnZeIW8_ikH0bvTr2RHq8V_vcPuwOZuJo95gS21OyHiqJYtPATL20m-Ke4t7w-THja2h6Jq-Gpw4xQsahQwj31qOjP8KLuFQzPKLILbKX1XRi0djyLuweZmpLS4c0aLpuG094fmKqkAfbCrgDQtqc36MjHrwny5a3JZ4qZyvq33H8z3BFG_2czZcrxktNDRpxPuoCXQnAHB8pPv9tkjHT-PF2lVbGs9iPD8WeOqxyCF4GGFjDdkiZdYtBM"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    local_shipping
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Automotive</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Commercial vehicle fleets, utility transport solutions, and spare parts coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 (Wide Solar Card) */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group md:col-span-2 border border-gray-100 flex flex-col sm:flex-row overflow-hidden min-h-[320px]">
              <div className="flex-1 p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:text-[#D4A017] transition-colors">
                  science
                </span>
                <h3 className="font-headline-md text-xl text-primary mb-2">Chemicals &amp; Materials</h3>
                <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                  Industrial raw materials, custom chemicals, and specialized compounds sourced securely for manufacturers.
                </p>
              </div>
              <div className="w-full sm:w-1/2 min-h-[200px] sm:min-h-full overflow-hidden relative shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Industrial chemicals and compounds processing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8YSBLlTgRnYKgCe6BJDdfreW1UaLmCu678w8VMeVhA200Ig4EKzHphAgEiuP2nrVTjJd9U4yuAhM4PTlgZhwMlwHhcw1KSXHNZwGJlvsH3noSwgPMFzZLkMJAR8yju2GYJxiKZbvoKI9AVb3nEWgW_FqBgYtENbjoxiiy6wgbm_EHFCc99IKytoH72H22399c7xBO9r2E-irHSXkLa-ui4ntkZrJE5h9grdFvL2xVt1wtAgZfNOTFr3xjKur1QBhGJsKG7xWKTo"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Medical Equipment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk2rUm47blgEVgbGUv-C7r5WJALDvEAjVN7c50gYQxyHvUDRuOE5Xh8Svdlr0GLhkaSbApWZavRFGjZPUiWDBRN6fg6mrgt57AJMCqYyHzRZEKCi9l_zxQIQIl5XKwxOmgxeclatEUQJ_POSWQBJv2RqeeegeeSyCg1onbqUaYtM8Luz6Os6FhhBuSPyujmcd8e_ZRQyHDVr_VEroOhwinAIEE1rKxKW6u3YTIyLkKySkT1z_uP15KE5_y8HULntu03wyWnB6abOw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    medical_services
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Medical Equipment</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Diagnostic systems, healthcare furniture, and medical consumables.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="gold-hover-card bg-white shadow-sm rounded-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[320px]">
              <div className="w-full h-32 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Safety & PPE"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwHNRYmDcEfBbROrWZbzwlvmVxddlR6GMt-MBHxxMmslH49qKoJPaAfojRm_ComoLy5LXdFI81FVe8W1I23kYAJManHvF5EavxxqK0sBXRJjaVYokN-woqdrYE-MRdhIuVsGE2L88Mt_EXUeOtSLVtUfwEIoQGpO-an3WRuB4SsmLsRE7k9wCddiz5M2PnaKP6OkqZmiSuRa9cyk0sYi38chZ0VzyhyF7TfFzM9D7Qs2aH_kVAKQlVpppM26QTGAXh2YqCx6Pxy8k"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:text-[#D4A017] transition-colors">
                    health_and_safety
                  </span>
                  <h3 className="font-headline-md text-lg text-primary mb-2 font-bold">Safety &amp; PPE</h3>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Compliance protective gear, site safety systems, and response equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-section-desktop relative overflow-hidden reveal-on-scroll reveal-element">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] absolute -right-20 -top-20 text-white">
            public
          </span>
        </div>
        <div className="max-w-container-max mx-auto px-margin-page relative z-10">
          <div className="text-center mb-20">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] mb-4 block font-semibold">
              The Savanna Crest Advantage
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white leading-tight">
              Why Corporate Partners Trust Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">public</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">Global Sourcing Network</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Direct access to over 500 validated manufacturers and suppliers across Europe, Asia, and North America.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">Quality Assurance</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Strict pre-shipment inspections and compliance validation to ensure parts conform to international standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">Competitive Pricing</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Maximizing efficiency via direct-to-manufacturer channels and consolidated volume procurement contracts.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">Reliable Logistics</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Vast experience in shipping coordination, customs clearance, and delivery across challenging MEA locations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">Technical Support</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Professional consulting from qualified industrial engineers to specify the exact systems your project needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg border border-white/10 text-[#D4A017]">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-white mb-2 font-bold">One-Stop Solution</h4>
                <p className="font-body-md text-xs text-gray-400 leading-relaxed">
                  Single supplier invoice management for machinery, raw components, spare parts, vehicles, and protection equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Masonry Showcase */}
      <section className="py-section-desktop reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="mb-16">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] mb-4 block font-semibold">
              Product Showcase
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary leading-tight">
              Precision Sourced Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Big feature block */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-primary h-[500px] md:h-[600px] rounded-xl shadow-lg border border-gray-100">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                alt="Molten metal being poured in industrial foundry representing heavy raw materials supply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB42Cf6_-tn-pRpyvLtamA-RqupQUnVNHV7858lwRnW-f-UMoN1EmUDmgypHHyTfZc0CiR5WfK91vJdG3rENSsvbDLdEufFoYdeeD6-cDVqhEdL-0gCXQ6Z-cJZ9mFHz9tfwPKaCv8358kG7KzQKwPw-iGJ-ZDrL7ZzShJmkX5xR1oHud_2_LyyGitsZ_AqVLc-QsZfKq9dj2LJ4Gav3gFjsskspgcClZ7H1py2TgTsDw8eY6Ou0EFpxHjD0niL46Xd357_N-5joO0"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-primary/95 to-transparent">
                <h4 className="font-headline-md text-2xl text-white mb-2">Raw Materials &amp; Alloys</h4>
                <p className="text-white/70 text-sm">
                  Certified industrial steel, alloys, and processing inputs for high-performance fabrication.
                </p>
                <Link href="/products" className="mt-4 inline-flex items-center text-[#D4A017] text-xs uppercase tracking-wider font-semibold hover:underline">
                  Inquire Now <span className="material-symbols-outlined text-xs ml-1">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Small block 1 */}
            <div className="group relative overflow-hidden bg-primary h-[288px] rounded-xl shadow-md border border-gray-100">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                alt="CNC machinery precision drill tooling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyZBDgBXAxpgmk6lZbZ53e-njWCX86lBomjLLTyyVHSRHPcIaf-TgFeUB2NQcKaNFx5d51dOfMgopycfJ3j82VFlk58MKFlXrbtU8NPuXsahkiK6hzg5HOxbkUJ0LVX1Gn1ObxmYZvwDeerYu1c7ZcZzJasTtUvEVTBP8nboSD_O8KGfrGeHi9zJDxznkNWJzyc5lkN-yjykIAeZJfF458sR9Gk5J4wIFeM7IWA95gMe6H5rHEzc9fvrX63-MAMuP3mxzNMN8W3w4"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/95 to-transparent">
                <h4 className="font-headline-md text-lg text-white">Machinery Components</h4>
              </div>
            </div>

            {/* Small block 2 */}
            <div className="group relative overflow-hidden bg-primary h-[288px] rounded-xl shadow-md border border-gray-100">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                alt="Heavy construction machinery excavator"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0s4xy3JB_EijxyaRrLFoKXfbURarZXDnAEgld3wq8w600v2WSAZyCUOAyZetPbR4MEIFeP6Fg0wxZpHDoxvQzYeBxl9thZPmr1EGZaT_pGPdursY6wXxEXAp536mW6l_UGyQ5p2WfPTg0Mf1DtEB3xRb7ZYnybuDcK2MURcq2Q53i6MmfgJ2HzJnIsFUU1stf2kHJIZ4i0YPi1CU0O0hrwuhSylWn05QgY806vcilx5mXu6HHlnei2ycHCevuinknnlXsLyyhz4"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/95 to-transparent">
                <h4 className="font-headline-md text-lg text-white">Construction Machinery</h4>
              </div>
            </div>

            {/* Wide block */}
            <div className="md:col-span-2 group relative overflow-hidden bg-primary h-[288px] rounded-xl shadow-md border border-gray-100">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                alt="Electrical transformers and automation grids"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANNUJ9XH-olUYs5rXzoK0jMhg5QhFJ-Hfx9tya6ax288mcogSp4-oEJ_AdWjvi6HAQ-PptvKlMgOa9erkjWOXE3J_KUlKnn7-3fssWCgNbWFTTVT9fWGD-APglP1lah-LsgJrw07gv6ZnGx39E3WdRldrnkpcwpwcndMMV3DWY-N8fB9QUYWEhXccCAZUE4sixhAXKddoO3RYqAxOb0b0JnJA59G2_ah_8wiYTilWUfyZIdvayEXlig02nQtc4eR0ykyBKMC9HOEw"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/95 to-transparent">
                <h4 className="font-headline-md text-xl text-white mb-1">Energy &amp; Electrical Grid</h4>
                <p className="text-white/60 text-xs">High-voltage transformers, switchgears, and power generation solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Map Section */}
      <section className="py-section-desktop bg-primary text-white overflow-hidden reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-2 space-y-6">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] block font-semibold">
              Global Footprint
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl leading-tight text-white">
              Bridging Sourcing Markets Across Continents
            </h2>
            <p className="font-body-lg text-sm text-gray-300 leading-relaxed">
              Our trading network coordinates the movement of heavy machinery, equipment, and raw materials from manufacturers in Europe, USA, and Asia to high-growth sectors across the Middle East and Africa.
            </p>
            <div className="space-y-4 pt-4">
              <div className="p-4 border-l-2 border-[#D4A017] bg-primary-container rounded-r-lg">
                <h4 className="font-button text-xs uppercase text-[#ffdfa0] mb-1 font-bold">
                  Middle East Gateway
                </h4>
                <p className="font-body-md text-xs text-gray-400">
                  Headquartered in the UAE for distribution logistics and trade financing.
                </p>
              </div>
              <div className="p-4 border-l-2 border-transparent hover:border-[#D4A017] hover:bg-white/5 transition-all duration-300 rounded-r-lg">
                <h4 className="font-button text-xs uppercase text-white mb-1 font-bold">
                  African Logistics Corridors
                </h4>
                <p className="font-body-md text-xs text-gray-400">
                  Key supply terminals in Kenya, South Africa, and Nigeria serving 20+ countries.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-section-desktop reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center mb-20">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] mb-4 block font-semibold">
              Procurement Cycle
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary leading-tight">
              Standard Sourcing Process
            </h2>
          </div>
          
          <div className="relative">
            {/* Horizontal connector line on desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 hidden lg:block z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { step: "01", title: "Requirement Analysis", desc: "Consulting with engineers to review technical specs, quantities, and standards." },
                { step: "02", title: "Global Sourcing", desc: "Requesting quotes from qualified global partners and negotiating bulk pricing." },
                { step: "03", title: "Quality Audit", desc: "Rigorous quality inspection at manufacturers' plants before shipment." },
                { step: "04", title: "Logistics Coordination", desc: "Managing cargo, customs brokerage, and multi-modal transport lines." },
                { step: "05", title: "Site Delivery", desc: "Seamless shipping and local handling to deliver assets to your doorstep." },
                { step: "06", title: "After-Sales Support", desc: "Supporting warranties, supply documentation, and future replacements." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none text-center space-y-4">
                  <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full mx-auto text-lg font-bold border-4 border-white shadow-md ring-8 ring-gray-50">
                    {item.step}
                  </div>
                  <h4 className="font-headline-md text-base text-primary font-bold">{item.title}</h4>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed max-w-[180px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-container-max mx-auto px-margin-page pb-section-desktop reveal-on-scroll reveal-element">
        <div className="bg-primary-container relative p-12 md:p-20 overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-6 leading-tight">
                Ready to optimize your industrial supply chain?
              </h2>
              <p className="font-body-lg text-sm md:text-base text-white/70 leading-relaxed">
                Consult with our trade procurement experts today to discuss sourcing contracts, logistics terms (FOB, CIF, DDP), or project quotes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 justify-center w-full lg:w-auto">
              <button
                onClick={handleQuoteClick}
                className="bg-[#D4A017] hover:bg-[#b38612] text-white px-8 py-4 font-button text-xs uppercase tracking-widest transition-all shadow-lg whitespace-nowrap font-semibold cursor-pointer"
              >
                Get a Quote
              </button>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-4 font-button text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all text-center whitespace-nowrap font-semibold"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
