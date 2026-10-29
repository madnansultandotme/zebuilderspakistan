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
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-white hover:bg-[#E4405F] transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on LinkedIn"
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-white hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View our GitHub organization"
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-white hover:bg-[#333333] transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
      >
        <FaGithub size={20} />
      </a>
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-white hover:bg-[#25D366] transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}
