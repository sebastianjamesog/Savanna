"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Industries() {
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
            alt="Wide cinematic view of a massive global industrial port at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXx8Sgln-egC340q0DaasQA73HHJSbfv5tTGql1zLB1gu0gt-V7JBQIlPzTE6YudZr_E-wpheP0fOWQMqGKhysDT9G_Er6WEz0mF2QPTZYqa9liAtLoi9IZTC8ORX55KGD-Q6iIvB2PsotiZ4nberZKecbIhdVTMutSGgEDQP_tHQLFBmZrmcGWErOOkKq9aKHhMXc2_tfXnIjBnM97rP82QywNCPpNaX6rO9PudaEGRtqLRZl6QI_3_SJRcP1Um8lABTyGiHDRXA"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/25"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page text-center w-full">
          <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.3em] mb-4 block font-semibold">
            Our Sectors
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Industries We Serve
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Partnering with global titans across essential sectors to deliver precision procurement and industrial excellence.
          </p>
        </div>
      </section>

      {/* Industry Grid (Bento Style) */}
      <section className="py-section-desktop max-w-container-max mx-auto px-margin-page reveal-on-scroll reveal-element">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Construction - Large Feature */}
          <div className="lg:col-span-8 group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 flex flex-col md:flex-row min-h-[380px]">
            <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="w-full md:w-1/2 overflow-hidden relative min-h-[200px]">
              <img
                className="industry-img w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                alt="Modern steel skyscraper under construction girder architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8aMc5zqxjOlCCT0L2mCgYna372uACsVFwZDSfcli32Oil57jNgY_Le6WqH2x97TV96C73RXa8U55CHXe3KUxUR2jLN3dr6b-I95t64kjU4n-SwpqdiH7bt2Z_VAiGji-ktRr-2_YtEL11wKJw_7CZlEX3r3eabVFDvy0hDZdpZYDGyRffyosfZxUAqdScwQkKtosQFwELhJFBf0MRDfxLdfSiPlxTwGLJ1W11tdd9U5EH9lU_g7Z5mUYS020UstvBtOvRxoxOh0"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-widest mb-2 block font-semibold">
                Sector 01
              </span>
              <h3 className="font-headline-md text-2xl text-primary mb-4 font-bold">Construction</h3>
              <p className="font-body-md text-xs text-gray-500 mb-6 leading-relaxed">
                Providing high-grade structural steel, heavy machinery, and specialized materials for landmark infrastructure projects worldwide.
              </p>
              <ul className="space-y-2 mb-8 font-body-md text-xs text-gray-700">
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-[#D4A017] mr-2 text-base">check_circle</span>
                  Structural Steel &amp; Rebars
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-[#D4A017] mr-2 text-base">check_circle</span>
                  Heavy Machinery Fleet Sourcing
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-[#D4A017] mr-2 text-base">check_circle</span>
                  Project Site Support Materials
                </li>
              </ul>
              <button 
                onClick={handleQuoteClick}
                className="flex items-center font-button text-xs text-primary hover:text-[#D4A017] transition-colors group uppercase tracking-widest font-semibold"
              >
                Inquire Sector <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Agriculture - Vertical */}
          <div className="lg:col-span-4 group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
            <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                className="industry-img w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                alt="Aerial view of organized agricultural crop field with modern irrigation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw-kS6Z1O7Ua5PxU67wKvBE8QcAccr_QELXBrssFmz_A1EqVy8aEfThdnqCX1LEzO3rkt23IMY_EBJ0Sjls-79DmhHCR4rF9vkXsrbJl_MTB_WjY13cnejqyUxQdVU-xMoCr2M7Mi4cu-KxCk-H1U3mSYAJHldC1LF1PkyBuZQ_5TVgFBHO6-ngwNwyghcQvO9TW4KQvbw03-NMqx2Ku5GVpPPYPqtzND6OeFjkMFQ6pVH298cLbT3-LIjeqcTOcZnTACVcwmhFWA"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-widest mb-2 block font-semibold">
                  Sector 02
                </span>
                <h3 className="font-headline-md text-2xl text-primary mb-4 font-bold">Agriculture</h3>
                <p className="font-body-md text-xs text-gray-500 mb-6 leading-relaxed">
                  Empowering global agricultural yields through advanced irrigation tech, harvesting systems, and tractors.
                </p>
              </div>
              <button 
                onClick={handleQuoteClick}
                className="flex items-center font-button text-xs text-primary hover:text-[#D4A017] transition-colors group uppercase tracking-widest font-semibold"
              >
                Inquire Sector <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Industrial - Landscape */}
          <div className="lg:col-span-6 group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
            <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                className="industry-img w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                alt="Automated manufacturing robotic arm facility"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc7yESyempNPbdErQAU9ZgmNpAOsX99URKQxvs9A1RS6qRDoJfRiW9pNwaSUPpQY9HuOOBsWP0zqOYV6kSNB-GTQyARPkctgPWrwGqc62whKRSIo7C2QahOvtTkrxVQS3PDeRtwmfZg_Hw60jMHZOd4yvwMRjRjx7Z1ZCpgzAj-ENYXMc4jYJ0FYfW3EQ9jEdT5gwoH75RyFSomM6kk-30wEdGJdg9SK15eqC5pGiwaHPgePthlOf5phWwW9Qjn4LPGTEoVLB67ic"
              />
            </div>
            <div className="p-8">
              <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-widest mb-2 block font-semibold">
                Sector 03
              </span>
              <h3 className="font-headline-md text-2xl text-primary mb-4 font-bold">Industrial</h3>
              <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                Smart manufacturing solutions, automated production machinery, pneumatic systems, and consumables.
              </p>
            </div>
          </div>

          {/* Automotive - Landscape */}
          <div className="lg:col-span-6 group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
            <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                className="industry-img w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                alt="High-performance vehicle assembly workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHJ0wXHSaNyn2p32WIJwnZeIW8_ikH0bvTr2RHq8V_vcPuwOZuJo95gS21OyHiqJYtPATL20m-Ke4t7w-THja2h6Jq-Gpw4xQsahQwj31qOjP8KLuFQzPKLILbKX1XRi0djyLuweZmpLS4c0aLpuG094fmKqkAfbCrgDQtqc36MjHrwny5a3JZ4qZyvq33H8z3BFG_2czZcrxktNDRpxPuoCXQnAHB8pPv9tkjHT-PF2lVbGs9iPD8WeOqxyCF4GGFjDdkiZdYtBM"
              />
            </div>
            <div className="p-8">
              <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-widest mb-2 block font-semibold">
                Sector 04
              </span>
              <h3 className="font-headline-md text-2xl text-primary mb-4 font-bold">Automotive</h3>
              <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                Precision parts, commercial fleet utility vehicles, heavy cargo trucks, and spare tires procurement.
              </p>
            </div>
          </div>

          {/* Bottom row: Chemicals, Medical, Safety (3 items) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chemicals */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 p-8 flex flex-col justify-between">
              <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
              <div>
                <div className="mb-6 h-12 w-12 bg-primary-container rounded-lg flex items-center justify-center text-[#ffc641]">
                  <span className="material-symbols-outlined text-2xl">science</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-4 font-bold">Chemicals</h3>
                <p className="font-body-md text-xs text-gray-500 mb-6 leading-relaxed">
                  Safe and compliant global distribution of raw industrial chemicals and processing inputs.
                </p>
              </div>
              <img
                className="industry-img w-full h-36 object-cover rounded-lg"
                alt="Laboratory clean environment with glass test tubes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcQFFPyLwMQJgRsNEU0NcXqF_Xg9vFhlUmpJDujfRVJWSaZptdzBD8rOR_I0AuMY3DsiDATG0VqRrUy40FPifkOWF_A826lTM5r74wsBQYyHQJv9BtGAONAW9nTbsNbIPSlMgFlTM8UnMMQ0ChyNLRoGhrI_Su8Tos1SLIwM674TB82xGaiFI6uH1W9XZiKEmMUbxLkS1DDbdHiZAym9R3FLUEsmpB0Ye43ktm2hZbdtuPyf2b62faJsFpljm8_P5r9gBUuv_ng3A"
              />
            </div>

            {/* Medical */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 p-8 flex flex-col justify-between">
              <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
              <div>
                <div className="mb-6 h-12 w-12 bg-primary-container rounded-lg flex items-center justify-center text-[#ffc641]">
                  <span className="material-symbols-outlined text-2xl">medical_services</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-4 font-bold">Medical</h3>
                <p className="font-body-md text-xs text-gray-500 mb-6 leading-relaxed">
                  High-end healthcare diagnostic devices, hospital infrastructure systems, and sterile consumables.
                </p>
              </div>
              <img
                className="industry-img w-full h-36 object-cover rounded-lg"
                alt="Medical diagnostic device closeup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk2rUm47blgEVgbGUv-C7r5WJALDvEAjVN7c50gYQxyHvUDRuOE5Xh8Svdlr0GLhkaSbApWZavRFGjZPUiWDBRN6fg6mrgt57AJMCqYyHzRZEKCi9l_zxQIQIl5XKwxOmgxeclatEUQJ_POSWQBJv2RqeeegeeSyCg1onbqUaYtM8Luz6Os6FhhBuSPyujmcd8e_ZRQyHDVr_VEroOhwinAIEE1rKxKW6u3YTIyLkKySkT1z_uP15KE5_y8HULntu03wyWnB6abOw"
              />
            </div>

            {/* Safety */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-150 transition-all duration-300 hover:-translate-y-1.5 p-8 flex flex-col justify-between">
              <div className="absolute top-0 left-0 h-1 bg-[#D4A017] w-0 group-hover:w-full transition-all duration-500"></div>
              <div>
                <div className="mb-6 h-12 w-12 bg-primary-container rounded-lg flex items-center justify-center text-[#ffc641]">
                  <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-4 font-bold">Safety</h3>
                <p className="font-body-md text-xs text-gray-500 mb-6 leading-relaxed">
                  Personal protective equipment (PPE), industrial site safety gear, and fire hazard protection systems.
                </p>
              </div>
              <img
                className="industry-img w-full h-36 object-cover rounded-lg"
                alt="Industrial helmet and goggles safety gear"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwHNRYmDcEfBbROrWZbzwlvmVxddlR6GMt-MBHxxMmslH49qKoJPaAfojRm_ComoLy5LXdFI81FVe8W1I23kYAJManHvF5EavxxqK0sBXRJjaVYokN-woqdrYE-MRdhIuVsGE2L88Mt_EXUeOtSLVtUfwEIoQGpO-an3WRuB4SsmLsRE7k9wCddiz5M2PnaKP6OkqZmiSuRa9cyk0sYi38chZ0VzyhyF7TfFzM9D7Qs2aH_kVAKQlVpppM26QTGAXh2YqCx6Pxy8k"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Global Reach Stats Section */}
      <section className="bg-primary py-section-desktop reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page text-center">
          <h2 className="font-display-lg text-3xl md:text-4xl text-white mb-16 font-bold uppercase tracking-wider">
            Network Operations Strength
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-4xl lg:text-5xl text-[#ffc641] mb-2 font-bold">45+</span>
              <span className="font-label-md text-xs text-white uppercase tracking-widest font-medium">Countries Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-4xl lg:text-5xl text-[#ffc641] mb-2 font-bold">500+</span>
              <span className="font-label-md text-xs text-white uppercase tracking-widest font-medium">Global Suppliers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-4xl lg:text-5xl text-[#ffc641] mb-2 font-bold">12k</span>
              <span className="font-label-md text-xs text-white uppercase tracking-widest font-medium">Shipments Fulfilled</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-4xl lg:text-5xl text-[#ffc641] mb-2 font-bold">0</span>
              <span className="font-label-md text-xs text-white uppercase tracking-widest font-medium">Logistics Failures</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-desktop bg-surface-gray border-t border-gray-200 reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="bg-white p-12 md:p-20 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between relative overflow-hidden border-t-8 border-[#D4A017]">
            <div className="z-10 lg:w-2/3 space-y-6">
              <h2 className="font-display-lg text-3xl md:text-4xl text-primary font-bold">
                Ready to Scale Your Procurement?
              </h2>
              <p className="font-body-lg text-sm md:text-base text-gray-500 leading-relaxed">
                Join the ranks of global industry leaders who trust Savanna Crest for their most critical supply chain and industrial sourcing needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleQuoteClick}
                  className="bg-primary text-white px-8 py-4 font-button text-xs uppercase tracking-wider hover:bg-primary-container transition-all font-semibold cursor-pointer"
                >
                  Get a Quote
                </button>
                <Link 
                  href="/products"
                  className="border-2 border-primary text-primary px-8 py-4 font-button text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all text-center font-semibold"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-primary" style={{ fontVariationSettings: "'wght' 200" }}>
                public
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
