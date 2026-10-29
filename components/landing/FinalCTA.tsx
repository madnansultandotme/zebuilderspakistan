import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/shared/CTAButton";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-cyan/5 via-white to-navy/5 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-3xl pointer-events-none animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-3xl pointer-events-none animate-float-delayed" aria-hidden="true" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 155, 212, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(21, 155, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-12 leading-tight tracking-tight">
              YOUR NEXT BUILD STARTS HERE
            </h2>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div 
                className="glass-light p-6 md:p-8 card-hover group"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div 
                  className="w-12 h-12 bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <svg className="w-6 h-6 text-cyan-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-semibold text-navy">
                  Learn with others
                </p>
              </div>

              <div 
                className="glass-light p-6 md:p-8 card-hover group"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div 
                  className="w-12 h-12 bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <svg className="w-6 h-6 text-cyan-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-semibold text-navy">
                  Build something real
                </p>
              </div>

              <div 
                className="glass-light p-6 md:p-8 card-hover group"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div 
                  className="w-12 h-12 bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <svg className="w-6 h-6 text-cyan-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-semibold text-navy">
                  Contribute to open source
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-secondary-text mb-12 max-w-2xl mx-auto leading-relaxed">
              Become part of the next generation of student builders.
            </p>

            <div className="flex justify-center">
              <CTAButton
                variant="primary"
                href={siteConfig.membershipUrl || undefined}
                disabled={!siteConfig.membershipUrl}
                className="text-lg button-hover"
              >
                Join the Community
              </CTAButton>
            </div>

            {!siteConfig.membershipUrl && (
              <p className="text-sm text-secondary-text mt-4">
                Applications opening soon
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
