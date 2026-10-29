"use client";

import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/shared/CTAButton";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 155, 212, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(21, 155, 212, 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Network Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#159BD4", stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: "#159BD4", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#159BD4", stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <line
            x1="10%"
            y1="20%"
            x2="40%"
            y2="35%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <line
            x1="60%"
            y1="25%"
            x2="85%"
            y2="40%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <line
            x1="40%"
            y1="70%"
            x2="70%"
            y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
          />
        </svg>

        {/* Floating Nodes */}
        <div
          className="absolute w-2 h-2 bg-cyan rounded-full"
          style={{
            top: "20%",
            left: "10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-3 h-3 bg-cyan/60 rounded-full"
          style={{
            top: "35%",
            left: "40%",
            animation: "float 8s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan rounded-full"
          style={{
            top: "25%",
            right: "15%",
            animation: "float 7s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute w-3 h-3 bg-cyan/60 rounded-full"
          style={{
            bottom: "30%",
            left: "40%",
            animation: "float 9s ease-in-out infinite 0.5s",
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan rounded-full"
          style={{
            bottom: "40%",
            right: "30%",
            animation: "float 7.5s ease-in-out infinite 1.5s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logos/dark-bg-logo.png"
              alt={siteConfig.name}
              width={400}
              height={100}
              priority
              className="h-16 w-auto sm:h-20 md:h-24 mb-8"
            />
          </div>

          {/* Positioning Statement */}
          <p className="text-cyan text-xl md:text-2xl font-semibold mb-4 tracking-wide uppercase">
            {siteConfig.positioning}
          </p>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {siteConfig.tagline}
          </h2>

          {/* Supporting Statement */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            {siteConfig.supportingStatement}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl leading-relaxed">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton
              variant="primary"
              href={siteConfig.membershipUrl || undefined}
              disabled={!siteConfig.membershipUrl}
              className="text-lg"
            >
              Join the Community
            </CTAButton>
            <CTAButton
              variant="outline"
              href="#about"
              className="text-lg border-white text-white hover:bg-white hover:text-navy"
              showArrow
            >
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
