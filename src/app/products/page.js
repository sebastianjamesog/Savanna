"use client";

import { useState, useEffect } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("agriculture");
  const [sortOption, setSortOption] = useState("performance");

  useEffect(() => {
    // Reveal animations
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
  }, [activeCategory]);

  const categories = {
    agriculture: {
      title: "Agriculture & Farm Solutions",
      description: "Boosting yields, reducing manual labor costs, and modernizing operations across semi-arid and tropical agricultural estates.",
      products: [
        {
          name: "Industrial Tractors",
          badge: "Heavy Sourcing",
          image: "/images/products/industrial_tractor.png",
          specs: [
            { label: "Capacity", value: "Up to 15 Tons Pulling" },
            { label: "Drive Type", value: "Electric & Hydraulic" },
            { label: "Climate Rating", value: "Tropical-Climate Rated" },
          ],
        },
        {
          name: "Cane Loaders",
          badge: "Harvest Systems",
          image: "/images/products/cane_loader.png",
          specs: [
            { label: "Arm Reach", value: "Max 6.2 Meters" },
            { label: "Lift Capacity", value: "2,500 kg Grab Lift" },
            { label: "Use Case", value: "Sugar Estate Harvesting" },
          ],
        },
      ],
    },
    construction: {
      title: "Construction & Heavy Equipment",
      description: "Infrastructure-grade heavy plant machinery for earthmoving, quarrying, lifting, and civil projects in demanding regions.",
      products: [
        {
          name: "Excavators",
          badge: "Excavation",
          image: "/images/products/excavator.png",
          specs: [
            { label: "Operating Weight", value: "1.5t to 90t Range" },
            { label: "Grading Accuracy", value: "GPS-Ready Grade Control" },
            { label: "Spec Configuration", value: "High-Temp MEA Spec" },
          ],
        },
        {
          name: "Wheel Loaders",
          badge: "Quarrying",
          image: "/images/products/wheel_loader.png",
          specs: [
            { label: "Linkage Type", value: "Heavy Z-Bar Linkages" },
            { label: "Payload Limit", value: "Up to 8.5 Tons Payload" },
            { label: "Bucket Setup", value: "Multiple Configurations" },
          ],
        },
        {
          name: "Crawler Dozers",
          badge: "Grading & Clearing",
          image: "/images/products/crawler_dozer.png",
          specs: [
            { label: "Cabin Rating", value: "ROPS/FOPS-Certified" },
            { label: "Blade Options", value: "Semi-U / Straight / Angle" },
            { label: "Main Sourcing", value: "Road & Mine Site Prep" },
          ],
        },
        {
          name: "Injection Moulding",
          badge: "Industrial Presses",
          image: "/images/products/injection_moulding.png",
          specs: [
            { label: "Clamping Force", value: "90T to 3200T Capacity" },
            { label: "Efficiency", value: "Energy-Efficient Cycles" },
            { label: "Output Use", value: "Packaging, Plastics, FMCG" },
          ],
        },
      ],
    },
    vehicles: {
      title: "Vehicles & Transportation",
      description: "Commercial utility fleets, heavy cargo shipping transportation, and specialized medical and airport response vehicles.",
      products: [
        {
          name: "Toyota Hilux Pickup",
          badge: "Commercial Fleet",
          image: "/images/products/toyota_hilux.png",
          specs: [
            { label: "Platform Fit", value: "Toyota Hilux 4x4 Offroad" },
            { label: "Engine Type", value: "2.8L / 2.4L Heavy Diesel" },
            { label: "Service Support", value: "Proven Regional Network" },
          ],
        },
        {
          name: "Ambulances - Type A & C",
          badge: "Emergency Fleet",
          image: "/images/products/ambulance.png",
          specs: [
            { label: "Layout Spec", value: "WHO-Compliant Layout" },
            { label: "Equipment Level", value: "Advanced Life Support" },
            { label: "Lead Time", value: "Fast-Track Sourced Build" },
          ],
        },
        {
          name: "Fire Trucks & Tenders",
          badge: "Airport & Municipal",
          image: "/images/products/fire_truck.png",
          specs: [
            { label: "Standard Code", value: "NFPA & EN Compliant" },
            { label: "Pump Capacity", value: "Up to 6000 L/min Pump" },
            { label: "Setup Service", value: "Commission & Training Inc." },
          ],
        },
      ],
    },
    parts: {
      title: "Tyres & Spare Parts",
      description: "Heavy-duty OTR tires, OEM braking components, filtration packs, and certified agricultural spares.",
      products: [
        {
          name: "OTR & Commercial Tyres",
          badge: "Heavy Duty Tyres",
          image: "/images/products/otr_tyre.png",
          specs: [
            { label: "Tyre Classes", value: "OTR / Ag / Heavy Truck" },
            { label: "Tread Terrain", value: "All-Terrain & Off-Road" },
            { label: "Pricing Mode", value: "Volume-Based Sourcing" },
          ],
        },
        {
          name: "Brake & Suspension Parts",
          badge: "Chassis Parts",
          image: "/images/products/brake_parts.png",
          specs: [
            { label: "Fit Models", value: "Toyota / Isuzu / Mitsubishi" },
            { label: "Standards", value: "OEM & Premium Quality" },
            { label: "Logistics", value: "Rapid Dispatch Sourcing" },
          ],
        },
        {
          name: "Engine & Hydraulic Filters",
          badge: "Fleet Consumables",
          image: "/images/products/hydraulic_filter.png",
          specs: [
            { label: "Sourcing Fits", value: "Toyota / CAT / Komatsu" },
            { label: "Efficiency", value: "Sub-Micron Filtration" },
            { label: "Packaging", value: "Consolidated Fleet Packs" },
          ],
        },
      ],
    },
    chemicals: {
      title: "Chemicals & Raw Materials",
      description: "High-purity chemical compounds and processing raw materials sourced for paper, soap, and gold extraction manufacturing.",
      products: [
        {
          name: "Aluminium Sulphate",
          badge: "Water Coagulant",
          image: "/images/products/aluminium_sulphate.png",
          specs: [
            { label: "Purity Grade", value: "High-Purity Grade Solid" },
            { label: "Main Utility", value: "Water Purifying & Sizing" },
            { label: "Bags Spec", value: "Moisture-Resistant 50kg" },
          ],
        },
        {
          name: "Paraformaldehyde",
          badge: "Resin Synthesis",
          image: "/images/products/paraformaldehyde.png",
          specs: [
            { label: "Purity Assay", value: "91% & 96% Powder Prills" },
            { label: "Best Use", value: "Resin / Paint / Coating" },
            { label: "Safety Pack", value: "UN-Approved Hazard Pack" },
          ],
        },
        {
          name: "Caustic Soda Flakes",
          badge: "Industrial Alkali",
          image: "/images/products/caustic_soda.png",
          specs: [
            { label: "Concentration", value: "NaOH 99% Purity Flakes" },
            { label: "Industries", value: "Soap, Detergent & Mining" },
            { label: "Certification", value: "CE/UN Quality Approved" },
          ],
        },
      ],
    },
    medical: {
      title: "Medical & Lab Equipment",
      description: "CE and FDA certified diagnostics machinery, adjustable ICU hospital ward beds, and patient mobility systems.",
      products: [
        {
          name: "Diagnostic Equipment",
          badge: "Clinical Devices",
          image: "/images/products/diagnostic_equipment.png",
          specs: [
            { label: "Devices", value: "Ultrasound / ECG / Monitor" },
            { label: "Certification", value: "CE & FDA Quality Standard" },
            { label: "Service Sourcing", value: "Install, Calibration & Training" },
          ],
        },
        {
          name: "Hospital Beds & Furniture",
          badge: "Ward Furniture",
          image: "/images/products/hospital_bed.png",
          specs: [
            { label: "Bed Model", value: "Electric Adjustable ICU Bed" },
            { label: "Features", value: "Pressure Relief / Side Rails" },
            { label: "Order Minimum", value: "Single Ward to Full Fit-Out" },
          ],
        },
        {
          name: "Electric Wheelchairs",
          badge: "Patient Mobility",
          image: "/images/products/electric_wheelchair.png",
          specs: [
            { label: "Motor Drive", value: "Dual-Motor Electric Drive" },
            { label: "Battery Range", value: "Up to 25km Per Charge" },
            { label: "Target Scope", value: "Hospital & Rehab Center" },
          ],
        },
      ],
    },
    safety: {
      title: "Training & Safety",
      description: "Compliance safety helmets and protective wear, facility extinguishers, and medical emergency first aid simulator kits.",
      products: [
        {
          name: "PPE & Safety Wear",
          badge: "Site Safety PPE",
          image: "/images/products/ppe_safety_wear.png",
          specs: [
            { label: "Safety Standard", value: "EN / ISO / ANSI Certified" },
            { label: "Clothing Type", value: "Flame-Retardant / Hi-Vis" },
            { label: "Supply Basis", value: "Bulk Supply & Contracts" },
          ],
        },
        {
          name: "Fire Safety Equipment",
          badge: "Facility Safety",
          image: "/images/products/fire_safety_equipment.png",
          specs: [
            { label: "Fire Classes", value: "Class A / B / C Rated Solid" },
            { label: "Hardware", value: "Extinguishers & Hose Reels" },
            { label: "Approval Code", value: "Local Civil Defense Spec" },
          ],
        },
        {
          name: "Training Manikins",
          badge: "First Aid Training",
          image: "/images/products/training_manikin.png",
          specs: [
            { label: "Model Type", value: "CPR Training Manikins" },
            { label: "Focus", value: "Basic Life Support Training" },
            { label: "Accreditation", value: "Red Cross / AHA Compliant" },
          ],
        },
      ],
    },
  };

  const handleInquireClick = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  const sidebarLinks = [
    { id: "agriculture", name: "Agriculture Solutions" },
    { id: "construction", name: "Construction & Heavy Equipment" },
    { id: "vehicles", name: "Vehicles & Fleet" },
    { id: "parts", name: "Tyres & Spare Parts" },
    { id: "chemicals", name: "Chemicals & Materials" },
    { id: "medical", name: "Medical & Lab Equipment" },
    { id: "safety", name: "Training & Safety" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Header Section */}
      <header className="relative min-h-[300px] pt-32 pb-16 flex items-center bg-primary-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="High-resolution panoramic shot of modern industrial manufacturing plant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw9j1cYpjH8q_U68A2BWCWMvG9vaM9TcQVJAhIC5g9IXviRimN01o7rG1rVb4ORpEf2ewFWYKYW-PPQ9UCKor7sMJTo3B4D-ES5y6pXhYn03dMHYDT_UDKdZ-X5hMSmG_kzfc5hwtskfCAHKazURhg4boR6wNYmJgWy4UlAWJRqXQe6Fcs3_8mmMZcwb5CYF7d6iVYH1uip0YkITWTOSJzT0qDTFgUuPgl6XZe2ZJHw0Wm8VRh9sMIK0_Mga7-9hiuAY1Fh6rN36Q"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-page w-full">
          <div className="max-w-2xl">
            <span className="inline-block h-1.5 w-16 bg-[#D4A017] mb-6"></span>
            <h1 className="font-display-lg text-4xl lg:text-5xl text-white mb-4">
              Our Sourcing Catalogue
            </h1>
            <p className="font-body-lg text-sm md:text-base text-gray-300">
              Strategic procurement and deployment of world-class agricultural machinery, construction fleets, industrial chemicals, and medical devices.
            </p>
          </div>
        </div>
      </header>

      {/* Main Grid Catalog */}
      <main className="max-w-container-max mx-auto px-margin-page py-section-desktop w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="font-label-md text-xs uppercase text-primary border-b border-gray-200 pb-4 mb-6 font-bold tracking-wider">
                  Equipment Categories
                </h3>
                <nav className="space-y-2">
                  {sidebarLinks.map((link) => {
                    const isSelected = activeCategory === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => setActiveCategory(link.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 font-button text-xs uppercase tracking-wider ${
                          isSelected
                            ? "bg-primary text-white font-bold"
                            : "hover:bg-[#F7F8FA] text-gray-700 hover:text-primary"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className={`material-symbols-outlined text-xs ${isSelected ? "opacity-100 text-[#D4A017]" : "opacity-0"}`}>
                          arrow_forward_ios
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bespoke Box panel */}
              <div className="bg-primary-container p-8 text-white rounded-xl shadow-md border-l-4 border-[#D4A017]">
                <h4 className="font-headline-md text-xl mb-4 font-bold">Bespoke Sourcing</h4>
                <p className="font-body-md text-xs text-gray-300 mb-6 italic leading-relaxed">
                  "Engineering the infrastructure of tomorrow with precision-sourced industrial assets tailored to your exact specifications."
                </p>
                <button
                  onClick={handleInquireClick}
                  className="w-full border-2 border-[#ffdfa0] text-[#ffdfa0] py-3 font-button text-xs uppercase tracking-widest hover:bg-[#ffdfa0] hover:text-primary transition-all font-semibold"
                >
                  Consult an Expert
                </button>
              </div>
            </div>
          </aside>

          {/* Product Grid Content */}
          <section className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4 border-b border-gray-100 pb-6">
              <div>
                <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold">
                  {categories[activeCategory].title}
                </h2>
                <p className="text-gray-500 font-body-md text-xs mt-2 max-w-xl leading-relaxed">
                  {categories[activeCategory].description}
                </p>
              </div>
              
              <div className="flex border border-gray-200 rounded-full px-4 py-2 gap-4 items-center bg-white text-xs shrink-0 shadow-sm">
                <span className="font-label-md text-gray-500">SORT BY</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer focus:outline-none"
                >
                  <option value="performance">Performance Level</option>
                  <option value="alpha">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
              {categories[activeCategory].products.map((product, idx) => (
                <div
                  key={idx}
                  className="group product-card-hover bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-60 overflow-hidden bg-gray-50">
                      <img
                        className="product-image w-full h-full object-cover"
                        alt={product.name}
                        src={product.image}
                      />
                      <div className="absolute top-4 left-4 bg-primary text-[#ffdfa0] px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
                        {product.badge}
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-6">
                      <h3 className="font-headline-md text-lg text-primary mb-4 font-bold">
                        {product.name}
                      </h3>
                      <div className="space-y-2.5">
                        {product.specs.map((spec, specIdx) => (
                          <div
                            key={specIdx}
                            className="flex justify-between text-xs border-b border-gray-150 pb-2"
                          >
                            <span className="text-gray-500">{spec.label}</span>
                            <span className="font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={handleInquireClick}
                      className="w-full py-3 border border-primary hover:bg-primary hover:text-white text-primary font-button text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 font-semibold"
                    >
                      Inquire for Details
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>


          </section>

        </div>
      </main>
    </div>
  );
}

