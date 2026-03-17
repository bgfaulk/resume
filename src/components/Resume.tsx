import { Briefcase, GraduationCap } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto">
            My educational background and professional experience
          </p>
        </div>

        <div className="max-w-[900px] mx-auto space-y-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <Briefcase className="w-10 h-10 text-primary shrink-0" />
              <h3 className="text-2xl text-text-dark m-0">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              {/* ABC Fitness - Manager */}
              <div className="relative mb-8 pb-8">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary border-[3px] border-white shadow-[0_0_0_3px_var(--color-primary)]" />
                <div className="bg-bg-alt p-6 rounded-xl hover:shadow-md hover:translate-x-2 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl text-text-dark mb-2">Software Engineering Manager</h4>
                      <p className="text-primary font-semibold m-0">ABC Fitness</p>
                    </div>
                    <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shrink-0 self-start">
                      June 2022 - Present
                    </span>
                  </div>
                  <p className="text-[#1e293b] leading-relaxed mb-4">
                    Lead multiple engineering teams (onshore and offshore) delivering
                    mission-critical systems for fitness operations nationwide. Drive technical
                    strategy, mentor engineers, and ensure operational excellence across all
                    initiatives.
                  </p>
                  <p className="text-[#1e293b] leading-relaxed mb-4">
                    <strong>Key Achievements:</strong>
                    <br />• Led major API Gateway platform migration, modernizing infrastructure
                    for improved scalability and observability
                    <br />• Dramatically improved system performance through query optimization
                    and multi-threaded architecture enhancements
                    <br />• Orchestrated business continuity and disaster recovery initiatives
                    ensuring enterprise-grade reliability
                    <br />• Successfully managed continuous delivery of production features while
                    maintaining system stability
                    <br />• Built and scaled global engineering team through strategic
                    recruitment and onboarding initiatives
                    <br />• Enhanced partner ecosystem through webhook integrations and API
                    improvements
                    <br />• Led SOC audit compliance efforts ensuring security and regulatory
                    standards
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Team Leadership", "API Architecture", "Performance Optimization", "BC/DR", "Mentoring", "System Design"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-white text-[#1e293b] px-3 py-1.5 rounded text-sm font-medium border border-border"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* ABC Fitness - Developer */}
              <div className="relative mb-8 pb-8">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary border-[3px] border-white shadow-[0_0_0_3px_var(--color-primary)]" />
                <div className="bg-bg-alt p-6 rounded-xl hover:shadow-md hover:translate-x-2 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl text-text-dark mb-2">Java/Web Developer</h4>
                      <p className="text-primary font-semibold m-0">ABC Fitness</p>
                    </div>
                    <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shrink-0 self-start">
                      April 2010 - June 2022
                    </span>
                  </div>
                  <p className="text-[#1e293b] leading-relaxed mb-4">
                    Senior developer responsible for designing and implementing scalable web
                    applications and backend services. Specialized in Java Spring framework,
                    RESTful API development, and system integrations.
                  </p>
                  <p className="text-[#1e293b] leading-relaxed mb-4">
                    <strong>Key Achievements:</strong>
                    <br />• Delivered consistent production releases driving product roadmap
                    initiatives for multiple teams
                    <br />• Led major client platform upgrades providing critical technical
                    support and knowledge transfer
                    <br />• Architected and implemented complex membership features including
                    reciprocity systems
                    <br />• Maintained and enhanced enterprise API suite supporting major fitness
                    industry clients
                    <br />• Mentored junior developers and guided new team members through
                    on-call rotation onboarding
                    <br />• Modernized legacy daemon systems through multi-threaded architecture
                    conversions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Framework", "REST APIs", "Oracle", "Multi-threading", "System Integration"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-white text-[#1e293b] px-3 py-1.5 rounded text-sm font-medium border border-border"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Prior work note */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary border-[3px] border-white shadow-[0_0_0_3px_var(--color-primary)]" />
                <div className="border border-dashed border-border p-4 text-center bg-transparent">
                  <p className="m-0 text-text-light text-[0.9375rem] italic">
                    Additional work history available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <GraduationCap className="w-10 h-10 text-primary shrink-0" />
              <h3 className="text-2xl text-text-dark m-0">Education</h3>
            </div>
            <div className="bg-bg-alt p-6 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <h4 className="text-xl text-text-dark mb-2">Degree in Information Technology</h4>
                <p className="text-primary font-semibold mb-2">Harding University</p>
                <p className="text-text-light m-0">4 Years Course</p>
              </div>
              <span className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shrink-0 self-start">
                May 2007
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
