import { Code2, GitBranch, Users, Lightbulb } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="group bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}
