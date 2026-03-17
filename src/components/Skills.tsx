import {
  Users,
  Building2,
  Zap,
  Shield,
  Handshake,
  TrendingUp,
} from "lucide-react";

const competencies = [
  {
    icon: Users,
    name: "Team Leadership & Development",
    description:
      "Leading multiple onshore and offshore engineering teams. Mentoring developers, fostering growth mindsets, and building collaborative team cultures aligned with organizational values.",
  },
  {
    icon: Building2,
    name: "System Architecture & Design",
    description:
      "Architecting scalable, reliable systems for mission-critical applications. Driving platform modernization initiatives and ensuring long-term technical sustainability.",
  },
  {
    icon: Zap,
    name: "Performance Optimization",
    description:
      "Identifying and resolving performance bottlenecks through query optimization, multi-threading, and architectural improvements. Delivering measurable system improvements.",
  },
  {
    icon: Shield,
    name: "Operational Excellence",
    description:
      "Ensuring business continuity through BC/DR planning, load testing, and proactive system monitoring. Maintaining high availability for enterprise systems.",
  },
  {
    icon: Handshake,
    name: "Cross-Functional Collaboration",
    description:
      "Partnering with Product, Support, Infrastructure, and stakeholders across the organization. Translating business needs into technical solutions.",
  },
  {
    icon: TrendingUp,
    name: "Strategic Planning & Execution",
    description:
      "Balancing short-term delivery with long-term technical vision. Managing roadmaps, prioritizing initiatives, and ensuring alignment with business objectives.",
  },
];

const techCategories = [
  {
    title: "Cloud & Infrastructure",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Backend & APIs",
    tags: ["Spring Boot", "Java", "Gravitee API Gateway", "REST APIs"],
  },
  {
    title: "Data & Performance",
    tags: ["Oracle", "SQL Optimization", "Multi-threading"],
  },
  {
    title: "Development Tools",
    tags: ["AI-Powered IDEs", "Git / GitHub", "Jenkins CI/CD", "Jira"],
  },
  {
    title: "Modern Practices",
    tags: ["AI Pair Programming", "Load Testing", "System Monitoring", "SOC Compliance"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-bg-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-text-light max-w-[700px] mx-auto">
            Combining technical depth with leadership excellence to deliver scalable, reliable
            systems
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-16">
          {/* Core Leadership */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md">
            <h3 className="text-2xl text-text-dark mb-4 flex items-center border-l-4 border-primary pl-4">
              Core Leadership Competencies
            </h3>
            <p className="text-text-light text-[1.0625rem] leading-relaxed mb-8 pb-6 border-b border-border-light">
              Building and scaling high-performing engineering teams while driving technical
              excellence and operational reliability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competencies.map(({ icon: Icon, name, description }) => (
                <div key={name} className="flex flex-col gap-4">
                  <Icon className="w-10 h-10 text-primary shrink-0" />
                  <h4 className="text-lg text-text-dark font-semibold mb-2">{name}</h4>
                  <p className="text-[#1e293b] text-[0.9375rem] leading-relaxed m-0">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md">
            <h3 className="text-xl text-text-dark mb-4 flex items-center border-l-4 border-secondary pl-4">
              Modern Technical Stack
            </h3>
            <p className="text-text-light text-base leading-relaxed mb-8">
              Hands-on experience with modern development tools and platforms enabling informed
              technical leadership
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map(({ title, tags }) => (
                <div key={title} className="flex flex-col gap-4">
                  <h4 className="text-sm text-text-dark font-semibold uppercase tracking-wider">
                    {title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-bg-alt text-[#1e293b] px-3.5 py-2 rounded-lg text-sm font-medium border border-border-light hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
