import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
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
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
          YOUR NEXT BUILD STARTS HERE
        </h2>

        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-navy/80">
            Learn with others.
          </p>
          <p className="text-xl md:text-2xl text-navy/80">
            Build something real.
          </p>
          <p className="text-xl md:text-2xl text-navy/80">
            Contribute to open source.
          </p>
        </div>

        <p className="text-lg md:text-xl text-secondary-text mb-12 max-w-2xl mx-auto leading-relaxed">
          Become part of the next generation of student builders.
        </p>

        <CTAButton
          variant="primary"
          href={siteConfig.membershipUrl || undefined}
          disabled={!siteConfig.membershipUrl}
          className="text-lg"
        >
          Join the Community
        </CTAButton>

        {!siteConfig.membershipUrl && (
          <p className="text-sm text-secondary-text mt-4">
            Applications opening soon
          </p>
        )}
      </div>
    </section>
  );
}
