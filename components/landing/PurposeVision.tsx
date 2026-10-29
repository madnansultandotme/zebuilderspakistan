import { SectionHeading } from "@/components/shared/SectionHeading";
import { Target, Eye } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function PurposeVision() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="WHO WE ARE"
            heading="Our Purpose & Vision"
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Purpose */}
          <ScrollReveal delay={0.1}>
            <div 
              className="glass-light border-l-4 border-cyan p-8 md:p-12 card-hover"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 bg-cyan/10 flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <Target size={32} className="text-cyan-text" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy">Our Purpose</h3>
              </div>
              <p className="text-lg text-secondary-text leading-relaxed mb-4">
                To empower Pakistani university students with the skills, mentorship, and opportunities 
                needed to become world-class software developers.
              </p>
              <p className="text-lg text-secondary-text leading-relaxed">
                We bridge the gap between academic learning and industry requirements by fostering a 
                culture of practical building, collaborative learning, and open source contribution.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.2}>
            <div 
              className="glass-light border-l-4 border-navy p-8 md:p-12 card-hover"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 bg-navy/10 flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <Eye size={32} className="text-navy" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy">Our Vision</h3>
              </div>
              <p className="text-lg text-secondary-text leading-relaxed mb-4">
                To establish Pakistan as a hub of exceptional student developers who contribute 
                meaningfully to the global open source ecosystem.
              </p>
              <p className="text-lg text-secondary-text leading-relaxed">
                We envision a future where every motivated student has access to mentorship, 
                collaborative opportunities, and a supportive community that accelerates their 
                growth as developers.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal delay={0.3}>
          <div 
            className="mt-16 glass-light border-2 border-cyan/20 p-8 md:p-12 text-center"
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <h4 className="text-cyan-text font-semibold mb-6 uppercase tracking-wide text-sm">
              What We Believe In
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <span 
                className="text-sm md:text-base px-4 md:px-5 py-2 transition-all duration-300 cursor-default hover:text-cyan-text hover:bg-cyan/10 hover:scale-105 relative group"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/40 transition-all duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
                <span className="relative text-navy/70">Learning by Doing</span>
              </span>
              
              <span 
                className="text-sm md:text-base px-4 md:px-5 py-2 transition-all duration-300 cursor-default hover:text-cyan-text hover:bg-cyan/10 hover:scale-105 relative group"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/40 transition-all duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
                <span className="relative text-navy/70">Collaboration Over Competition</span>
              </span>
              
              <span 
                className="text-sm md:text-base px-4 md:px-5 py-2 transition-all duration-300 cursor-default hover:text-cyan-text hover:bg-cyan/10 hover:scale-105 relative group"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/40 transition-all duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
                <span className="relative text-navy/70">Open Source First</span>
              </span>
              
              <span 
                className="text-sm md:text-base px-4 md:px-5 py-2 transition-all duration-300 cursor-default hover:text-cyan-text hover:bg-cyan/10 hover:scale-105 relative group"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/40 transition-all duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
                <span className="relative text-navy/70">Community Support</span>
              </span>
              
              <span 
                className="text-sm md:text-base px-4 md:px-5 py-2 transition-all duration-300 cursor-default hover:text-cyan-text hover:bg-cyan/10 hover:scale-105 relative group"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/40 transition-all duration-300" style={{ borderRadius: 'var(--radius-pill)' }} />
                <span className="relative text-navy/70">Continuous Growth</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
