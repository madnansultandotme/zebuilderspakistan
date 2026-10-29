import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CommunityIntro() {
  return (
    <section id="community" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              eyebrow="THE ZEBUILDERS NETWORK"
              heading="Connecting student builders across Pakistan"
              align="center"
              className="mb-12"
            />
          </ScrollReveal>

          <div className="space-y-8 text-center">
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-navy leading-relaxed">
                We believe students grow fastest when they move beyond tutorials and start building,
                contributing, collaborating, and learning from one another.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div 
                className="glass-light border-l-4 border-cyan p-8 md:p-12 text-left"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  More than a student community.
                </p>
                <p className="text-lg md:text-xl text-secondary-text leading-relaxed">
                  A place where students move beyond tutorials and start building things that matter.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
