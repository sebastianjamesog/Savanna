"use client";

import { useEffect } from "react";
import InteractiveMap from "@/components/InteractiveMap";
import AnimatedCounter from "@/components/AnimatedCounter";

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
            className="w-full h-full object-cover opacity-55"
            alt="Cinematic high-angle view of a bustling global logistics terminal at dawn"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp99J8_4pFB3aJyXEuAEqRn435fW3YGT2Xjgnc-p1f09YGiEEiNCB-PS_hBZA3tp9h7l-7FMGUdorMEf4TEDaRPNkOmnZIDXqz3lq9Hpn4VhHdb82CvxubL4SY5Fb43NeGSBo1m1DAF1LAULY2awNfgepYhSzGQQG9q-0mrfJu17u1gQS898dCWCEKE0M4mbTdTITbyL-xfzH5ggnPW4AIusG-RZPygx66v-fWtuKqEpNtVQIc0I8zRqk6BupXq5MV37zX9xU4sEY"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/25"></div> */}
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page text-center w-full">
          <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.3em] mb-4 block font-semibold">
            Legacy of Excellence
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Two Decades of Global Sourcing Stewardship
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Savanna Crest simplifies global procurement by connecting businesses with trusted industrial supply solutions. Backed by a team with more than 20 years of industry experience, we combine deep market knowledge, strong supplier networks, and a commitment to excellence to deliver dependable results for our clients worldwide..
          </p>
        </div>
      </section>

      {/* Heritage & Mission (Bento Grid) */}
      <section className="py-section-desktop max-w-container-max mx-auto px-margin-page reveal-on-scroll reveal-element">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Story Lead */}
          <div className="lg:col-span-4 space-y-6">
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

          {/* Aligned Sourcing Image */}
          <div className="lg:col-span-3 h-80 lg:h-[420px] w-full relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group shrink-0">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Cinematic container shipping yard at sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnaIsyGYBwQ6IB6cLzM5x0XeOQY00QWmBFtnT36ZXetRWtGSVRqe4GfAljkADafJ6CciFMuDjwyxaQykOjjA1dGHEK7_ydFZ1doLH5q_Lgd0vr1-l9hfnt05vrXx4pUVkncJ8tMbBz1cmT0eHkM3lPak-dIWa-XK8dVvBud0GZTf3nBCRbCkDg0AZHwNNTq_C0NsSILdrLcKHSJrRao-qtNWJ0eFtAFKJ4gcmmwVAzVaBF_VkB0jBvljHy1IkD3GADy6Z81nSm-gk"
            />
            {/* <div className="absolute inset-0 bg-primary/10"></div> */}
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-primary p-8 flex flex-col justify-center items-center text-center rounded-xl shadow-md">
              <span className="font-display-lg text-4xl text-[#ffdfa0] mb-2">
                <AnimatedCounter target={20} suffix="+" />
              </span>
              <span className="font-label-md text-xs text-white uppercase tracking-wider">Years Experience</span>
            </div>

            <div className="bg-surface-gray p-8 flex flex-col justify-center items-center text-center rounded-xl border-t-4 border-[#D4A017] shadow-sm">
              <span className="font-display-lg text-4xl text-primary mb-2">
                <AnimatedCounter target={45} suffix="+" />
              </span>
              <span className="font-label-md text-xs text-gray-500 uppercase tracking-wider">Countries Served</span>
            </div>

            <div className="bg-surface-gray p-8 flex flex-col justify-center items-center text-center rounded-xl border-t-4 border-[#D4A017] shadow-sm">
              <span className="font-display-lg text-4xl text-primary mb-2">
                <AnimatedCounter target={500} suffix="+" />
              </span>
              <span className="font-label-md text-xs text-gray-500 uppercase tracking-wider">Manufacturers</span>
            </div>

            <div className="bg-primary p-8 flex flex-col justify-center items-center text-center rounded-xl shadow-md">
              <span className="font-display-lg text-4xl text-[#ffdfa0] mb-2">
                <AnimatedCounter target={100} suffix="%" />
              </span>
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
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold">
                Guided by Engineering Precision and Corporate Integrity
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Resilience by Design",
                  desc: "We architect supply chains to withstand geopolitical shifts, material shortages, and market volatility, ensuring continuity for our partners.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnaIsyGYBwQ6IB6cLzM5x0XeOQY00QWmBFtnT36ZXetRWtGSVRqe4GfAljkADafJ6CciFMuDjwyxaQykOjjA1dGHEK7_ydFZ1doLH5q_Lgd0vr1-l9hfnt05vrXx4pUVkncJ8tMbBz1cmT0eHkM3lPak-dIWa-XK8dVvBud0GZTf3nBCRbCkDg0AZHwNNTq_C0NsSILdrLcKHSJrRao-qtNWJ0eFtAFKJ4gcmmwVAzVaBF_VkB0jBvljHy1IkD3GADy6Z81nSm-gk"
                },
                {
                  num: "2",
                  title: "Transparent Stewardship",
                  desc: "Full visibility is our mandate. We provide detailed compliance tracking and complete documentation audits for every procurement cycle.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_djCedv8MeGrVPlnUn0Cr9LCetixF1Lnrf96YjVG9nmrZFCFh6i9LvrK72KIxm_Hb9zL0H1FnG-MUTdmq5nzpm_3iTafixHGL2v3WOv2M7WMcHMh4rdcCfXbDlyHogxEPau1a3b-l2BVFxAOkdbi69NAq_EdCDK6MiqZU1sZFIvNYO-IlOwLUYxppGu8g64mfyjokR9C8IylUD_JPpHepZi91uL7Ke3F1ftWMeHAocZPB-L77_UaF2Z6z6Qmcgdbl27G7KFtuwgs"
                },
                {
                  num: "3",
                  title: "Sustainable Procurement",
                  desc: "Growth must be responsible. We prioritize manufacturing partners who meet carbon-neutral objectives and fair labor international standards.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw-kS6Z1O7Ua5PxU67wKvBE8QcAccr_QELXBrssFmz_A1EqVy8aEfThdnqCX1LEzO3rkt23IMY_EBJ0Sjls-79DmhHCR4rF9vkXsrbJl_MTB_WjY13cnejqyUxQdVU-xMoCr2M7Mi4cu-KxCk-H1U3mSYAJHldC1LF1PkyBuZQ_5TVgFBHO6-ngwNwyghcQvO9TW4KQvbw03-NMqx2Ku5GVpPPYPqtzND6OeFjkMFQ6pVH298cLbT3-LIjeqcTOcZnTACVcwmhFWA"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start p-4 bg-white hover:bg-surface-gray border border-transparent hover:border-gray-150 rounded-xl transition-all duration-300 group">
                  {/* Thumbnail Image with Number Overlay */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden relative border border-gray-100 shadow-sm shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div> */}
                    <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-primary text-[#ffdfa0] flex items-center justify-center font-display-lg font-bold text-[10px] shadow-md border border-white/20">
                      {item.num}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline-md text-base text-primary mb-1 font-bold group-hover:text-[#D4A017] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "ISO 9001:2015",
                desc: "Quality management systems ensuring supply consistency and operational excellence.",
                icon: "verified_user",
                tag: "Verified Standard"
              },
              {
                title: "ISO 14001:2015",
                desc: "Environmental management systems certifying our commitment to sustainable trade.",
                icon: "eco",
                tag: "Verified Standard"
              },
              {
                title: "C-TPAT Certified",
                desc: "Customs-Trade Partnership Against Terrorism securing supply chain corridors.",
                icon: "security",
                tag: "Secure Supply Chain"
              },
              {
                title: "Sedex Member",
                desc: "Validated membership tracking ethical manufacture, safety, and fair labor practices.",
                icon: "factory",
                tag: "Ethical Sourcing"
              }
            ].map((card, idx) => (
              <div key={idx} className="gold-hover-card bg-white p-8 shadow-sm rounded-xl transition-all duration-300 group border border-gray-150 flex flex-col items-center text-center justify-between min-h-[300px]">
                <div className="flex flex-col items-center w-full">
                  <div className="w-14 h-14 rounded-full bg-primary/5 group-hover:bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] transition-all duration-300 mb-6 shrink-0">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>

                  <h4 className="font-headline-md text-base text-primary font-bold mb-2 group-hover:text-[#D4A017] transition-colors duration-300">
                    {card.title}
                  </h4>

                  <p className="font-body-md text-xs text-gray-500 leading-relaxed max-w-[200px]">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-[10px] font-bold text-[#D4A017] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm mr-1">check_circle</span> {card.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
