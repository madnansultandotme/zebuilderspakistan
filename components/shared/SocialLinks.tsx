import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/config/socials";

interface SocialLinksProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const iconSize = variant === "footer" ? 20 : 24;
  const iconClasses = variant === "footer" 
    ? "text-secondary-text hover:text-cyan-text transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 rounded"
    : "text-navy hover:text-cyan-text transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2 rounded";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className={iconClasses}
      >
        <FaInstagram size={iconSize} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on LinkedIn"
        className={iconClasses}
      >
        <FaLinkedin size={iconSize} />
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View our GitHub organization"
        className={iconClasses}
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className={iconClasses}
      >
        <FaWhatsapp size={iconSize} />
      </a>
    </div>
  );
}
