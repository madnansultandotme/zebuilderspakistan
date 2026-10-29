import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/shared/FloatingSocials";
import { CTAButton } from "@/components/shared/CTAButton";
import { Users, Code2, GitBranch, MessageCircle, Calendar, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata = {
  title: `Community — ${siteConfig.name}`,
  description: "Join the Zeppelin Student Builders community and connect with student developers across Pakistan.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan/5 relative overflow-hidden">
          {/* Background blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <ScrollReveal>
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Community
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Join Pakistan's Fastest Growing Student Developer Community
              </h1>
              <p className="text-xl text-secondary-text leading-relaxed mb-8">
                Connect with motivated student builders, learn together, contribute to open source, 
                and grow your skills in a supportive environment.
              </p>
              <CTAButton variant="primary" href={siteConfig.membershipUrl} className="text-lg button-hover">
                Join Our WhatsApp Community
              </CTAButton>
            </ScrollReveal>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background blob */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                  What You Get
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Benefits of Joining
                </h2>
                <p className="text-lg text-secondary-text max-w-3xl mx-auto">
                  Being part of Zeppelin Student Builders opens doors to learning, collaboration, and growth opportunities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <ScrollReveal delay={0.1}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <Users size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Peer Learning</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Learn from fellow students, share knowledge, and grow together in a collaborative environment.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefit 2 */}
              <ScrollReveal delay={0.2}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <Code2 size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Hands-On Projects</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Work on real-world projects that help you build practical skills and a strong portfolio.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefit 3 */}
              <ScrollReveal delay={0.3}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <GitBranch size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Open Source Contributions</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Contribute to open source projects and gain experience working on collaborative codebases.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefit 4 */}
              <ScrollReveal delay={0.4}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <MessageCircle size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Mentorship</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Get guidance from experienced developers and senior students who've been where you are.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefit 5 */}
              <ScrollReveal delay={0.5}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <Calendar size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Community Events</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Participate in workshops, hackathons, and learning sessions organized by the community.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefit 6 */}
              <ScrollReveal delay={0.6}>
                <div 
                  className="glass-light p-8 card-hover"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    className="w-14 h-14 bg-cyan/10 flex items-center justify-center mb-6"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <BookOpen size={28} className="text-cyan-text" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Learning Resources</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Access curated learning materials, tutorials, and resources shared by the community.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Who Can Join
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Is This Community For You?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-xl font-bold text-navy mb-2">University Students</h3>
                <p className="text-secondary-text leading-relaxed">
                  Currently enrolled in any Pakistani university pursuing computer science, software engineering, 
                  or related fields.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-xl font-bold text-navy mb-2">Beginners Welcome</h3>
                <p className="text-secondary-text leading-relaxed">
                  Whether you're just starting your coding journey or have some experience, 
                  we welcome students at all skill levels.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-xl font-bold text-navy mb-2">Passionate Learners</h3>
                <p className="text-secondary-text leading-relaxed">
                  You're motivated to learn, willing to help others, and committed to improving your skills through building.
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan p-6 shadow-md">
                <h3 className="text-xl font-bold text-navy mb-2">Team Players</h3>
                <p className="text-secondary-text leading-relaxed">
                  You believe in collaboration over competition and want to grow together with a supportive community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Getting Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                How to Join the Community
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Join Our WhatsApp Community</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Click the "Join the Community" button and join our WhatsApp community group 
                    where all members connect and communicate.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Introduce Yourself</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Share a brief introduction about yourself - your name, university, what you're studying, 
                    and what you want to learn or build.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Start Engaging</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Participate in discussions, ask questions, share resources, and connect with other members. 
                    The more you engage, the more you'll learn and grow.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Build & Contribute</h3>
                  <p className="text-secondary-text leading-relaxed">
                    Start working on projects, contribute to open source, help other members, 
                    and share your learning journey with the community.
                  </p>
                </div>
              </div>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <CTAButton variant="primary" href={siteConfig.membershipUrl} className="text-lg button-hover">
                  Join Now
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
