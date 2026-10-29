"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/shared/CTAButton";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "About", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Dynamic Island Navigation */}
      <nav
        className={`hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Logo Circle */}
          <a 
            href="/" 
            className={`glass-light-solid flex items-center justify-center transition-all duration-300 hover:scale-105 card-hover group ${
              isScrolled ? "w-20 h-20 p-4" : "w-24 h-24 p-5"
            }`}
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            <Image
              src="/logos/light-bg-logo.png"
              alt={siteConfig.name}
              width={200}
              height={50}
              priority
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-12" : "h-14"
              }`}
            />
          </a>

          {/* Navigation Island */}
          <div 
            className="glass-light-solid flex items-center gap-1 px-2 py-2"
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-navy hover:bg-cyan/10 hover:text-cyan-text transition-all duration-200 font-medium px-5 py-2.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                {item.label}
              </a>
            ))}
            
            {/* CTA Button inside island */}
            <div className="ml-2 pl-2 border-l border-navy/10">
              <a
                href={siteConfig.membershipUrl}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-cyan text-white font-medium transition-all duration-200 hover:bg-cyan/90 hover:scale-105 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 shadow-lg hover:shadow-xl"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Traditional top bar */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "glass-light-solid shadow-lg" 
            : "glass-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <a href="/" className="flex items-center">
              <div 
                className="glass-light-solid p-2 flex items-center justify-center"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <Image
                  src="/logos/light-bg-logo.png"
                  alt={siteConfig.name}
                  width={120}
                  height={30}
                  priority
                  className="h-8 w-auto"
                />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="glass-light-solid text-navy hover:text-cyan transition-colors p-3"
              style={{ borderRadius: 'var(--radius-pill)' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="glass-light-solid border-t border-white/40 mx-4 mb-4 mt-2" style={{ borderRadius: 'var(--radius-lg)' }}>
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-navy hover:bg-cyan/10 hover:text-cyan-text transition-all font-medium py-3 px-4"
                  style={{ borderRadius: 'var(--radius-md)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={siteConfig.membershipUrl}
                  className="flex items-center justify-center w-full px-6 py-3 bg-cyan text-white font-medium transition-all duration-200 hover:bg-cyan/90 shadow-lg"
                  style={{ borderRadius: 'var(--radius-md)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
