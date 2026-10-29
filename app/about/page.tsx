import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/shared/FloatingSocials";
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `About Us — ${siteConfig.name}`,
  description: "Learn about Zeppelin Student Builders, our mission, vision, and the values that drive our community.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Building the Future of Student Development in Pakistan
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed">
              Zeppelin Student Builders is a national community initiative by Zeppelin Labs, 
              dedicated to empowering university students across Pakistan to become world-class developers.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white border-l-4 border-cyan p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target size={36} className="text-cyan-text" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
                </div>
                <p className="text-lg text-secondary-text leading-relaxed mb-4">
                  To empower Pakistani university students with the skills, mentorship, and 
                  opportunities needed to become world-class software developers.
                </p>
                <p className="text-lg text-secondary-text leading-relaxed">
                  We bridge the gap between academic learning and industry requirements by 
                  fostering a culture of practical building, collaborative learning, and 
                  open source contribution.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border-l-4 border-navy p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye size={36} className="text-navy" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">Our Vision</h2>
                </div>
                <p className="text-lg text-secondary-text leading-relaxed mb-4">
                  To establish Pakistan as a hub of exceptional student developers who 
                  contribute meaningfully to the global open source ecosystem.
                </p>
                <p className="text-lg text-secondary-text leading-relaxed">
                  We envision a future where every motivated student has access to mentorship, 
                  collaborative opportunities, and a supportive community that accelerates 
                  their growth as developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-secondary-text max-w-3xl mx-auto">
                Our community is built on principles that foster growth, collaboration, and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Lightbulb size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Learning by Doing</h3>
                <p className="text-secondary-text leading-relaxed">
                  We believe in hands-on learning through building real projects and solving actual problems.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Users size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Collaboration Over Competition</h3>
                <p className="text-secondary-text leading-relaxed">
                  We grow together by sharing knowledge, helping peers, and celebrating collective success.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Heart size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Open Source First</h3>
                <p className="text-secondary-text leading-relaxed">
                  We contribute to and build open source projects that benefit the wider developer community.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Users size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Community Support</h3>
                <p className="text-secondary-text leading-relaxed">
                  We create a welcoming environment where everyone can learn, ask questions, and grow.
                </p>
              </div>

              {/* Value 5 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Rocket size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Continuous Growth</h3>
                <p className="text-secondary-text leading-relaxed">
                  We embrace challenges, learn from failures, and constantly push ourselves to improve.
                </p>
              </div>

              {/* Value 6 */}
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-cyan transition-all group">
                <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Target size={28} className="text-cyan-text" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Quality & Excellence</h3>
                <p className="text-secondary-text leading-relaxed">
                  We strive for excellence in everything we build and encourage best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cyan-text text-sm font-semibold uppercase tracking-wide mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                How It All Started
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-secondary-text leading-relaxed mb-6">
                Zeppelin Student Builders was founded by <strong className="text-navy">Zeppelin Labs</strong> with 
                a vision to transform how university students in Pakistan learn software development. We recognized 
                a significant gap between what students learn in classrooms and what the industry demands.
              </p>

              <p className="text-lg text-secondary-text leading-relaxed mb-6">
                Most students graduate with theoretical knowledge but lack practical experience in building 
                real-world applications, working with modern tools, and collaborating with other developers. 
                This gap often leaves them unprepared for their first jobs or unable to contribute to meaningful projects.
              </p>

              <p className="text-lg text-secondary-text leading-relaxed mb-6">
                We created Zeppelin Student Builders to address these challenges by providing a platform where 
                students can learn by building, receive mentorship from experienced developers, contribute to 
                open source projects, and connect with like-minded peers across universities.
              </p>

              <p className="text-lg text-secondary-text leading-relaxed">
                Today, we're building a national community of student developers who are passionate about 
                learning, building, and contributing to the global tech ecosystem. We're just getting started, 
                and we invite you to be part of this journey.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
