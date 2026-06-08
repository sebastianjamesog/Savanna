"use client";

import { useState, useEffect } from "react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    industry: "Industrial & Manufacturing",
    category: "Manufacturing Systems",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        industry: "Industrial & Manufacturing",
        category: "Manufacturing Systems",
        message: "",
      });
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden rounded-xl border-t-8 border-[#D4A017] animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="p-8 md:p-10">
          {!isSubmitted ? (
            <>
              <h2 className="font-display-lg text-2xl md:text-3xl text-primary mb-2">
                Request a Quotation
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Partner with Savanna Crest. Fill out the form below and our procurement team will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300"
                    />
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col">
                    <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Company Name
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Engineering"
                      className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="flex flex-col col-span-1 sm:col-span-2">
                    <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Corporate Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. vance@apexeng.com"
                      className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Industry Dropdown */}
                  <div className="flex flex-col">
                    <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Industry Sector
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300"
                    >
                      <option>Construction & Infrastructure</option>
                      <option>Agriculture & Farming</option>
                      <option>Industrial & Manufacturing</option>
                      <option>Automotive & Commercial Vehicles</option>
                      <option>Chemicals & Raw Materials</option>
                      <option>Medical & Healthcare</option>
                      <option>Safety & Protection</option>
                    </select>
                  </div>

                  {/* Product Category Dropdown */}
                  <div className="flex flex-col">
                    <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Product Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300"
                    >
                      <option>Agricultural Equipment</option>
                      <option>Construction Machinery</option>
                      <option>Industrial Equipment</option>
                      <option>Commercial Vehicles</option>
                      <option>Chemicals & Materials</option>
                      <option>Medical Systems</option>
                      <option>Safety Protection</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col">
                  <label className="font-label-md text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Requirements Summary
                  </label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe specific products, quantities, certifications, or logistical terms required..."
                    className="py-2.5 px-3 bg-[#F7F8FA] border-b-2 border-transparent focus:border-primary focus:outline-none text-primary transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4A017] hover:bg-[#b38612] text-white font-button py-4 text-center uppercase tracking-widest transition-all duration-300 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                      Processing Request...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#F7F8FA] rounded-full flex items-center justify-center mx-auto text-[#D4A017]">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="font-display-lg text-2xl md:text-3xl text-primary">
                Request Submitted
              </h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                Thank you for your interest. A Savanna Crest global procurement officer has been assigned to your request and will follow up shortly with pricing and lead times.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-button uppercase tracking-wider transition-all"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
