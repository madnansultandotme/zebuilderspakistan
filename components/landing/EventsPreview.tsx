import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Code, Presentation, GitPullRequest, Coffee, Zap } from "lucide-react";

const eventTypes = [
  {
    icon: Zap,
    title: "Hackathons",
    description: "Build projects in intense, collaborative coding sessions",
  },
  {
    icon: Presentation,
    title: "Workshops",
    description: "Learn new technologies and frameworks hands-on",
  },
  {
    icon: GitPullRequest,
    title: "Open Source Sprints",
    description: "Contribute to real open source projects together",
  },
  {
    icon: Coffee,
    title: "Developer Meetups",
    description: "Network with peers and share knowledge",
  },
  {
    icon: Code,
    title: "Learning Sessions",
    description: "Deep dives into programming concepts and best practices",
  },
];

export function EventsPreview() {
  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading="Learn. Build. Participate."
          align="center"
          className="mb-16"
        />

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 border-2 border-gray-200 hover:border-cyan hover:shadow-lg transition-all group"
            >
              <event.icon
                size={40}
                className="text-cyan mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}

          {/* Placeholder Card */}
          <div className="bg-white p-6 border-2 border-dashed border-cyan flex items-center justify-center">
            <div className="text-center">
              <p className="text-cyan font-semibold mb-2">And more...</p>
              <p className="text-sm text-secondary-text">
                Community-driven activities and events
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton variant="secondary" href="#events" showArrow>
            Explore Events
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
