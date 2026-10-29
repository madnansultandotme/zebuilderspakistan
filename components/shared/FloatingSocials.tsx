"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/config/socials";

export function FloatingSocials() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="w-12 h-12 flex items-center justify-center text-navy transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 relative overflow-hidden group shadow-lg"
        style={{ 
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-[#E4405F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
        <FaInstagram size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on LinkedIn"
        className="w-12 h-12 flex items-center justify-center text-navy transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 relative overflow-hidden group shadow-lg"
        style={{ 
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-[#0077B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
        <FaLinkedin size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View our GitHub organization"
        className="w-12 h-12 flex items-center justify-center text-navy transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 relative overflow-hidden group shadow-lg"
        style={{ 
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-[#333333] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
        <FaGithub size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className="w-12 h-12 flex items-center justify-center text-navy transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 relative overflow-hidden group shadow-lg"
        style={{ 
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
        <FaWhatsapp size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
      </a>
    </div>
  );
}
