import { SectionHeading } from "@/components/shared/SectionHeading";

export function CommunityIntro() {
  return (
    <section id="community" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="THE ZEBUILDERS NETWORK"
            heading="Connecting student builders across Pakistan"
            align="center"
            className="mb-12"
          />

          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-navy leading-relaxed">
              We believe students grow fastest when they move beyond tutorials and start building,
              contributing, collaborating, and learning from one another.
            </p>

            <div className="bg-light-bg border-l-4 border-cyan p-8 md:p-12 text-left">
              <p className="text-2xl md:text-3xl font-bold text-navy mb-4">
                More than a student community.
              </p>
              <p className="text-lg md:text-xl text-secondary-text leading-relaxed">
                A place where students move beyond tutorials and start building things that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
