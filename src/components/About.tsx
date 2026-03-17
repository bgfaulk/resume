import { BarChart3, Briefcase, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-bg-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto">
            Learn more about my background and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-24 items-start">
          <div className="space-y-4">
            <p className="text-[1.0625rem] leading-relaxed text-[#1e293b]">
              I&apos;m a Software Engineering Manager with 15+ years of experience building and
              leading high-performing engineering teams. Currently at ABC Fitness, I manage multiple
              teams (both onshore and offshore) delivering mission-critical systems that power
              fitness operations nationwide.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-[#1e293b]">
              My journey began at Harding University with a degree in Information Technology,
              followed by roles at Acxiom Corporation and ABC Fitness. Over the years, I&apos;ve
              evolved from a hands-on developer to a technical leader who balances strategic vision
              with tactical execution.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-[#1e293b]">
              I specialize in building reliable, scalable systems with deep expertise in Java
              backend development, API architecture, and performance optimization. My work
              focuses on solving complex technical challenges — from dramatically improving
              system performance and leading critical platform modernizations to ensuring
              enterprise-grade reliability and business continuity.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-[#1e293b]">
              As a leader, I&apos;m passionate about mentoring engineers, fostering a growth
              mindset, and creating an environment where teams can do their best work. I believe
              in the &quot;One Team&quot; approach — collaborating across functions to deliver
              outcomes that benefit the entire organization.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            <div className="flex-1 min-w-[150px] bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-primary text-2xl font-semibold mb-2">15+ Years</h3>
              <p className="text-text-light text-sm m-0">Professional Experience</p>
            </div>
            <div className="flex-1 min-w-[150px] bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-primary text-2xl font-semibold mb-2">Full-Stack</h3>
              <p className="text-text-light text-sm m-0">Development Expertise</p>
            </div>
            <div className="flex-1 min-w-[150px] bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-primary text-2xl font-semibold mb-2">Focus</h3>
              <p className="text-text-light text-sm m-0">User Experience & Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
