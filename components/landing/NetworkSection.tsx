"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";

export function NetworkSection() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR NETWORK"
          heading="Building across universities."
          className="mb-4"
        />
        <p className="text-xl text-secondary-text text-center mb-16 max-w-2xl mx-auto">
          Local chapters. Shared knowledge. National impact.
        </p>

        {/* Network Visualization */}
        <div className="relative h-64 md:h-96 max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-cyan rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">Ze</div>
                  <div className="text-xs md:text-sm font-medium text-white">Builders</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-cyan rounded-full animate-ping opacity-20" />
            </div>
          </div>

          {/* University Nodes - Positioned around the center */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="relative group">
                  {/* Connection Line */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: Math.abs(x) * 2,
                      height: Math.abs(y) * 2,
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    <line
                      x1="50%"
                      y1="50%"
                      x2={x > 0 ? "0%" : "100%"}
                      y2={y > 0 ? "0%" : "100%"}
                      stroke="rgba(21, 155, 212, 0.15)"
                      strokeWidth="2"
                      className="group-hover:stroke-cyan/40 transition-all"
                    />
                  </svg>

                  {/* Node */}
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-cyan/20 border-2 border-cyan rounded-full group-hover:bg-cyan group-hover:scale-125 transition-all shadow-md" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
