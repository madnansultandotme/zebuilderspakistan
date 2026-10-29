import { SectionHeading } from "@/components/shared/SectionHeading";
import { Target, Eye } from "lucide-react";

export function PurposeVision() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHO WE ARE"
          heading="Our Purpose & Vision"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Purpose */}
          <div className="bg-white border-l-4 border-cyan p-8 md:p-12 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
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

          {/* Vision */}
          <div className="bg-white border-l-4 border-navy p-8 md:p-12 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
        </div>

        {/* Core Values */}
        <div className="mt-16 bg-cyan/5 border-2 border-cyan/20 p-8 md:p-12 text-center">
          <h4 className="text-cyan-text font-semibold mb-6 uppercase tracking-wide text-sm">
            What We Believe In
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-6 text-navy/70">
            <span className="text-base hover:text-cyan transition-colors cursor-default">Learning by Doing</span>
            <span className="text-navy/20">·</span>
            <span className="text-base hover:text-cyan transition-colors cursor-default">Collaboration Over Competition</span>
            <span className="text-navy/20">·</span>
            <span className="text-base hover:text-cyan transition-colors cursor-default">Open Source First</span>
            <span className="text-navy/20">·</span>
            <span className="text-base hover:text-cyan transition-colors cursor-default">Community Support</span>
            <span className="text-navy/20">·</span>
            <span className="text-base hover:text-cyan transition-colors cursor-default">Continuous Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
