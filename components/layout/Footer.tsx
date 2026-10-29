import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/shared/SocialLinks";
import Image from "next/image";

export function Footer() {
  // Use a static year value to avoid prerendering issues
  const currentYear = 2026;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logos/dark-bg-logo.png"
                alt={siteConfig.name}
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-cyan-text text-sm font-medium mb-3 tracking-wide">
              Learning · Mentorship · Open Source
            </p>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Building the next generation of developers through learning, mentorship, and open source.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <SocialLinks variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="text-gray-400 text-sm">
            A <span className="text-cyan-text font-medium">{siteConfig.organization}</span> initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
