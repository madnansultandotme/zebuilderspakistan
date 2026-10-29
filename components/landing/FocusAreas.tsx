import { Code2, GitBranch, Users, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const focusAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Learn by Building",
    description: "Work on practical projects and develop real engineering skills.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Open Source",
    description: "Collaborate, contribute, and work on public projects.",
  },
  {
    number: "03",
    icon: Users,
    title: "Community",
    description: "Connect with motivated developers across universities.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Mentorship",
    description: "Learn from peers, mentors, and experienced builders.",
  },
];

export function FocusAreas() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan/5 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {focusAreas.map((area, index) => (
            <ScrollReveal key={area.number} delay={index * 0.1}>
              <div
                className="group glass-light p-8 card-hover"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-cyan/20 group-hover:text-cyan/40 transition-colors">
                      {area.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <area.icon
                        size={32}
                        className="text-cyan-text group-hover:scale-110 transition-transform"
                      />
                      <h3 className="text-2xl font-bold text-navy">{area.title}</h3>
                    </div>
                    <p className="text-secondary-text leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
