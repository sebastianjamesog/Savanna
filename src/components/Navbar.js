"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll status immediately on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const handleQuoteClick = () => {
    // Dispatch custom event to open the quote request modal
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  // Determine navbar styling based on scroll state and current path
  // If we're on subpages, maybe we want it solid white always, or transparent over subpage heroes?
  // Let's make it scroll-sensitive on all pages because all pages have dark hero headers in the mockups!
  const isScrolledOrOpen = scrolled || mobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-24 md:h-28 flex items-center ${isScrolledOrOpen
        ? "bg-white shadow-md border-b-2 border-[#D4A017] text-primary"
        : "bg-transparent text-white"
        }`}
    >
      <div className="max-w-container-max mx-auto px-margin-page w-full flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center py-1 relative h-20 md:h-24 w-[143px] md:w-[171px]">
          {/* Light Logo */}
          <img
            src="/logo-cropped.jpeg"
            alt="Savanna Crest Logo"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${isScrolledOrOpen ? "opacity-100" : "opacity-0"
              }`}
          />
          {/* Dark Logo */}
          <img
            src="/logo-dark-cropped.png"
            alt="Savanna Crest Logo"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${isScrolledOrOpen ? "opacity-0" : "opacity-100"
              }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-button text-xs uppercase tracking-widest transition-colors py-1 border-b-2 ${isActive
                  ? "border-[#D4A017] text-[#D4A017] font-bold"
                  : "border-transparent hover:text-[#D4A017]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleQuoteClick}
            className="hidden sm:inline-block bg-[#D4A017] text-white font-button px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-[#b38612] transition-all transform active:scale-95"
          >
            Request a Quote
          </button>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-current focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-24 z-40 bg-white border-t border-gray-100 md:hidden transition-all duration-300 flex flex-col ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-button text-sm uppercase tracking-wider py-3 px-4 border-l-4 ${isActive
                  ? "border-[#D4A017] bg-[#F7F8FA] text-[#D4A017] font-semibold"
                  : "border-transparent text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={handleQuoteClick}
            className="w-full mt-4 bg-[#D4A017] text-white font-button py-4 text-center uppercase tracking-widest hover:bg-[#b38612] transition-all"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
