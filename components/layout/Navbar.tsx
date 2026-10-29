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
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logos/light-bg-logo.png"
              alt={siteConfig.name}
              width={200}
              height={50}
              priority
              className="h-10 w-auto md:h-12 lg:h-14"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-navy hover:text-cyan transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CTAButton
              variant="primary"
              href={siteConfig.membershipUrl}
              className="text-sm py-3 px-6"
            >
              Join the Community
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy hover:text-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-navy hover:text-cyan transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <CTAButton
                variant="primary"
                href={siteConfig.membershipUrl}
                className="w-full"
              >
                Join the Community
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
