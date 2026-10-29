import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/config/socials";

interface SocialLinksProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const iconSize = variant === "footer" ? 20 : 24;
  const iconClasses = variant === "footer" 
    ? "text-secondary-text hover:text-cyan transition-colors duration-200"
    : "text-navy hover:text-cyan transition-colors duration-200";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={iconClasses}
      >
        <FaInstagram size={iconSize} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconClasses}
      >
        <FaLinkedin size={iconSize} />
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={iconClasses}
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Community"
        className={iconClasses}
      >
        <FaWhatsapp size={iconSize} />
      </a>
    </div>
  );
}
