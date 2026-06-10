"use client";

import { useState, useEffect } from "react";
import InteractiveMap from "@/components/InteractiveMap";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "general",
    subject: "",
    message: ""
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
  };

  const offices = [
    {
      city: "Dubai HQ (Global Logistics Hub)",
      address: "Premises No. 34812-001, IFZA Business Park, DDP, Dubai, UAE",
      phone: "+(971) 507-984-175",
      phoneHref: "tel:+971507984175",
      email: "contact@savannacrest.com",
      emailHref: "mailto:contact@savannacrest.com",
      icon: "hub"
    },
    {
      city: "Riyadh Terminal",
      address: "Al Malaz District, Riyadh, Kingdom of Saudi Arabia",
      phone: "+(966) 114-789-234",
      phoneHref: "tel:+966114789234",
      email: "riyadh@savannacrest.com",
      emailHref: "mailto:riyadh@savannacrest.com",
      icon: "corporate_fare"
    },
    {
      city: "Nairobi Terminal",
      address: "Mombasa Road, Industrial Area, Nairobi, Kenya",
      phone: "+(254) 203-456-789",
      phoneHref: "tel:+254203456789",
      email: "nairobi@savannacrest.com",
      emailHref: "mailto:nairobi@savannacrest.com",
      icon: "warehouse"
    },
    {
      city: "Johannesburg Terminal",
      address: "Kempton Park, Johannesburg, South Africa",
      phone: "+(27) 119-786-543",
      phoneHref: "tel:+27119786543",
      email: "joburg@savannacrest.com",
      emailHref: "mailto:joburg@savannacrest.com",
      icon: "local_shipping"
    },
    {
      city: "Lagos Terminal",
      address: "Apapa Port Complex, Apapa, Lagos, Nigeria",
      phone: "+(234) 123-456-7890",
      phoneHref: "tel:+2341234567890",
      email: "lagos@savannacrest.com",
      emailHref: "mailto:lagos@savannacrest.com",
      icon: "sailing"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[350px] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80"
            alt="Corporate skyscraper steel glass reflections"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABh7aNtsPsYf1KbfXhKYWxNRkCrA1o1tBoG5QE0RMMOGn0p7nOXx_hxPv_RSQjO9xtXOZ0jGKMFsu9-X1G-7c9jiUHcwRW9UW_s4NFYHvhanLEeXSziizsyeJMOcUBLMIPGDUK65Cm0HkIS0W_sMR7TaFQOVNnf-w6nYjyFttoCCUAKDJO0TO51UKASe0NqYn6uh6XldcSVZZPTp-2npOSq6O6wNOXLZqqLmBWlqbJfGlyhSyXifMHDLZjHCYetmVMxrIo3Vobv_I"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page text-center w-full">
          <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.3em] mb-4 block font-semibold">
            Get in Touch
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Contact Our Procurement Experts
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Connect with our logistics, sourcing, and trade finance divisions to scale your corporate operations.
          </p>
        </div>
      </section>

      {/* Main Grid: Form and Contacts */}
      <section className="py-section-desktop max-w-container-max mx-auto px-margin-page w-full reveal-on-scroll reveal-element">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sourcing Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#D4A017]"></div>
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-[#D4A017]/15 rounded-full flex items-center justify-center text-[#D4A017]">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h3 className="font-display-lg text-2xl text-primary font-bold">Inquiry Successfully Sent</h3>
                <p className="font-body-md text-sm text-gray-500 max-w-md leading-relaxed">
                  Thank you for reaching out. A dedicated sourcing manager from our Dubai Global headquarters will review your specifications and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-primary text-white px-8 py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary-container transition-all cursor-pointer font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold mb-3">
                    Submit Sourcing Request
                  </h2>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Provide your project specifications or query. Our engineering team will compile compatibility and supply options.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Corporate Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Savanna Corp"
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Selection */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Sourcing Sector
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary cursor-pointer"
                    >
                      <option value="general">General Sourcing / Logistics</option>
                      <option value="construction">Construction &amp; Heavy Equipment</option>
                      <option value="agriculture">Agriculture &amp; Farm Solutions</option>
                      <option value="manufacturing">Industrial &amp; Manufacturing</option>
                      <option value="automotive">Automotive &amp; Fleet Vehicles</option>
                      <option value="chemicals">Chemicals &amp; Raw Materials</option>
                      <option value="medical">Medical &amp; Lab Systems</option>
                      <option value="safety">Training &amp; Site Safety PPE</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Steel Sourcing Quote"
                      className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label className="font-label-md text-xs text-primary uppercase tracking-wider font-semibold">
                    Inquiry Details / Scope of Work *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="List required parts, volumes, technical specifications, compliance standards, and desired shipping incoterms (FOB, CIF, DDP)..."
                    className="border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4A017] transition-all bg-[#F7F8FA] text-primary resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#D4A017] hover:bg-[#b38612] text-white py-4 font-button text-xs uppercase tracking-widest font-semibold transition-all shadow-lg cursor-pointer"
                >
                  Send Sourcing Inquiry
                </button>
              </form>
            )}
          </div>
          
          {/* Procurement Advisor Column */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-150 rounded-2xl shadow-xl overflow-hidden relative flex flex-col justify-between">
              {/* Header Image */}
              <div className="relative h-44 bg-[#001536] overflow-hidden">
                <img 
                  src="/images/advisor_banner_bg.png" 
                  alt="Sourcing office banner" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
              </div>
              
              {/* Profile Image & Status (Overlapping) */}
              <div className="relative px-8 pb-8 -mt-16 flex flex-col items-center sm:items-start">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg relative bg-white shrink-0">
                  <img 
                    src="/images/executive_agent.png" 
                    alt="Sarah Jenkins - Senior Procurement Advisor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" title="Advisor Online"></div>
                </div>
                
                {/* Advisor Info */}
                <div className="mt-4 space-y-2.5 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="py-0.5 px-2.5 bg-primary/10 text-primary text-[9px] uppercase font-bold tracking-wider rounded-full">
                      Dubai HQ Desk
                    </span>
                    <span className="py-0.5 px-2.5 bg-emerald-50 text-emerald-700 text-[9px] uppercase font-bold tracking-wider rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online Now
                    </span>
                  </div>
                  
                  <h3 className="font-display-lg text-2xl text-primary font-bold">
                    Sarah Jenkins
                  </h3>
                  <p className="font-label-md text-xs text-[#D4A017] uppercase tracking-wider font-semibold">
                    Senior Procurement Advisor
                  </p>
                  <p className="font-body-md text-xs text-gray-500 leading-relaxed">
                    Dedicated support for international shipping, volume-based contract negotiations, custom specifications clearance, and trade compliance audits.
                  </p>
                </div>

                {/* Direct Contacts */}
                <div className="w-full mt-6 pt-6 border-t border-gray-150 space-y-3">
                  <a 
                    href="tel:+971507984175"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-[#D4A017] hover:bg-surface-gray transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/5 group-hover:bg-[#D4A017]/10 flex items-center justify-center text-primary group-hover:text-[#D4A017] transition-colors">
                      <span className="material-symbols-outlined text-base">phone</span>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">Direct Hotline</p>
                      <p className="text-xs text-primary font-bold">+(971) 507-984-175</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:contact@savannacrest.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-[#D4A017] hover:bg-surface-gray transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/5 group-hover:bg-[#D4A017]/10 flex items-center justify-center text-primary group-hover:text-[#D4A017] transition-colors">
                      <span className="material-symbols-outlined text-base">mail</span>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">Corporate Email</p>
                      <p className="text-xs text-primary font-bold">contact@savannacrest.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8 w-full">
                <a 
                  href="https://wa.me/971507984175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#D4A017] hover:bg-[#b38612] text-white font-button text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg rounded-lg"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Start WhatsApp Session
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Terminal Hubs Grid Section */}
      <section className="py-section-desktop bg-surface-gray border-t border-gray-200 reveal-on-scroll reveal-element">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] block font-semibold">
              Regional Presence
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold">
              Our Global Terminal Hubs
            </h2>
            <p className="font-body-md text-xs text-gray-500 leading-relaxed">
              Connect directly with our local procurement officers and trade representatives to manage operations on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 border border-gray-150 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-[#ffdfa0] shrink-0">
                    <span className="material-symbols-outlined text-xl">{office.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline-md text-lg text-primary font-bold group-hover:text-[#D4A017] transition-colors">
                      {office.city}
                    </h4>
                    <p className="font-body-md text-xs text-gray-500 leading-relaxed min-h-[40px]">
                      {office.address}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 mt-6 text-xs font-semibold">
                  <a 
                    href={office.phoneHref}
                    className="flex items-center gap-2 text-primary hover:text-[#D4A017] transition-colors"
                  >
                    <span className="material-symbols-outlined text-base text-[#D4A017]">phone</span>
                    {office.phone}
                  </a>
                  <a 
                    href={office.emailHref}
                    className="flex items-center gap-2 text-[#D4A017] hover:underline"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Sourcing Network Map Section */}
      <section className="py-section-desktop bg-primary text-white overflow-hidden reveal-on-scroll reveal-element border-t-4 border-[#D4A017]">
        <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-2 space-y-6">
            <span className="font-label-md text-xs text-[#D4A017] uppercase tracking-[0.2em] block font-semibold">
              Global Logistics
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl leading-tight text-white font-bold">
              Our Sourcing Footprint
            </h2>
            <p className="font-body-lg text-xs text-gray-300 leading-relaxed">
              We monitor cargo and trace connections from major manufacturers to your staging sites, integrating air, sea, and land logistics.
            </p>
            <div className="space-y-4 pt-4 text-xs">
              <div className="p-4 border-l-2 border-[#D4A017] bg-primary-container rounded-r-lg">
                <h4 className="font-button text-xs uppercase text-[#ffdfa0] mb-1 font-bold">
                  Dubai HQ Gateway
                </h4>
                <p className="font-body-md text-xs text-gray-400">
                  Managing international supply chain transactions and custom documentation audits.
                </p>
              </div>
              <div className="p-4 border-l-2 border-transparent hover:border-[#D4A017] hover:bg-white/5 transition-all duration-300 rounded-r-lg">
                <h4 className="font-button text-xs uppercase text-white mb-1 font-bold">
                  African Logistics Terminals
                </h4>
                <p className="font-body-md text-xs text-gray-400">
                  On-site handling, customs broker clearance, and regional distribution networks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <InteractiveMap />
          </div>
        </div>
      </section>
    </div>
  );
}
