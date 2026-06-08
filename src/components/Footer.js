import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-[#D4A017] relative z-10">
      <div className="max-w-container-max mx-auto px-margin-page py-section-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 justify-between">
          
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="font-display-lg text-3xl font-bold uppercase tracking-wider block">
              Savanna Crest
            </Link>
            <p className="text-gray-400 font-body-md max-w-sm leading-relaxed">
              The premier industrial partner for global procurement, logistics, and supply solutions. Bridging gaps, building futures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 hover:border-[#D4A017] hover:text-[#D4A017] flex items-center justify-center transition-all duration-300">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 hover:border-[#D4A017] hover:text-[#D4A017] flex items-center justify-center transition-all duration-300">
                <span className="material-symbols-outlined text-sm">groups</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 hover:border-[#D4A017] hover:text-[#D4A017] flex items-center justify-center transition-all duration-300">
                <span className="material-symbols-outlined text-sm">campaign</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h5 className="text-[#D4A017] font-button text-xs uppercase tracking-widest font-semibold">
                Solutions
              </h5>
              <ul className="space-y-3 font-body-md text-sm text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Steel & Metals
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Renewables
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Chemicals
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#D4A017] font-button text-xs uppercase tracking-widest font-semibold">
                Company
              </h5>
              <ul className="space-y-3 font-body-md text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h5 className="text-[#D4A017] font-button text-xs uppercase tracking-widest font-semibold">
                Legal
              </h5>
              <ul className="space-y-3 font-body-md text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[#D4A017] font-button text-xs uppercase tracking-widest font-semibold">
              Contact
            </h5>
            <div className="font-body-md text-sm text-gray-400 space-y-3">
              <p className="font-semibold text-white">Global Headquarters</p>
              <p className="leading-relaxed">
                Premises No. 34812-001,<br />
                IFZA Business Park, DDP,<br />
                Dubai, UAE
              </p>
              <p className="flex items-center gap-2 pt-1">
                <span className="material-symbols-outlined text-base text-[#D4A017]">phone</span>
                <a href="tel:+971507984175" className="hover:text-white transition-colors">
                  +(971) 507-984-175
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#D4A017]">mail</span>
                <a href="mailto:contact@savannacrest.com" className="text-[#D4A017] hover:underline">
                  contact@savannacrest.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-body-md uppercase tracking-wider">
          <p>© 2026 Savanna Crest. Global Industrial Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <span>ISO 9001 Certified</span>
            <span>EcoVadis Gold</span>
            <span>C-TPAT Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
