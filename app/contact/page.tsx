import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/shared/FloatingSocials";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/socials";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata = {
  title: `Contact Us — ${siteConfig.name}`,
  description: "Get in touch with Zeppelin Student Builders. Connect with us on social media or join our community.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan/5 relative overflow-hidden">
          {/* Background blob */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <ScrollReveal>
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Let's Connect
              </h1>
              <p className="text-xl text-secondary-text leading-relaxed">
                Have questions? Want to collaborate? Looking to join the community? 
                We'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background blob */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp Community */}
              <ScrollReveal delay={0.1}>
                <div 
                  className="glass-light p-8 text-center card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-16 h-16 bg-cyan/10 flex items-center justify-center mx-auto mb-6"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <MessageCircle size={32} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Join Our Community</h3>
                  <p className="text-secondary-text mb-6">
                    The fastest way to connect with us is through our WhatsApp community
                  </p>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium transition-all duration-200 hover:bg-[#20BA5A] button-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <FaWhatsapp size={20} />
                    Join WhatsApp
                  </a>
                </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={0.2}>
                <div 
                  className="glass-light p-8 text-center card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-16 h-16 bg-cyan/10 flex items-center justify-center mx-auto mb-6"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <Mail size={32} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Email Us</h3>
                  <p className="text-secondary-text mb-6">
                    For official inquiries and partnership opportunities
                  </p>
                  <a
                    href="mailto:hello@zebuilderspakistan.tech"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-medium transition-all duration-200 hover:bg-navy/90 button-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <Mail size={20} />
                    Send Email
                  </a>
                </div>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal delay={0.3}>
                <div 
                  className="glass-light p-8 text-center card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-16 h-16 bg-cyan/10 flex items-center justify-center mx-auto mb-6"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <MapPin size={32} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Our Reach</h3>
                  <p className="text-secondary-text mb-6">
                    A national community connecting students across Pakistan
                  </p>
                  <p className="text-navy font-semibold">Pakistan-wide</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Social Media */}
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                  Follow Us on Social Media
                </h2>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-light w-16 h-16 flex items-center justify-center card-hover hover:bg-[#E4405F] hover:text-white transition-all text-navy focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-light w-16 h-16 flex items-center justify-center card-hover hover:bg-[#0077B5] hover:text-white transition-all text-navy focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-light w-16 h-16 flex items-center justify-center card-hover hover:bg-[#333333] hover:text-white transition-all text-navy focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-light w-16 h-16 flex items-center justify-center card-hover hover:bg-[#25D366] hover:text-white transition-all text-navy focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <FaWhatsapp size={28} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-2">
                  How do I join the community?
                </h3>
                <p className="text-secondary-text">
                  Simply click the "Join the Community" button on our website or homepage to join our WhatsApp community. 
                  It's completely free and open to all university students in Pakistan.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-2">
                  Is there a membership fee?
                </h3>
                <p className="text-secondary-text">
                  No, Zeppelin Student Builders is completely free for all students. We believe in making quality 
                  learning and community access available to everyone.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-2">
                  Do I need to be an experienced developer to join?
                </h3>
                <p className="text-secondary-text">
                  Not at all! We welcome students at all skill levels - from complete beginners to experienced developers. 
                  Everyone has something to learn and something to teach.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-2">
                  Can I contribute to community projects?
                </h3>
                <p className="text-secondary-text">
                  Yes! We encourage all members to contribute to community projects and open source initiatives. 
                  It's a great way to learn and build your portfolio.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-2">
                  How can I stay updated with community activities?
                </h3>
                <p className="text-secondary-text">
                  By joining our WhatsApp community and following us on social media (Instagram, LinkedIn, GitHub), 
                  you'll receive all updates about events, projects, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
