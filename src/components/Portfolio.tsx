import { Rocket, Zap, Link2, Shield } from "lucide-react";

const initiatives = [
  {
    icon: Rocket,
    gradient: "from-violet-500 to-purple-600",
    title: "API Gateway Modernization",
    description:
      "Led the migration to Gravitee API Gateway, modernizing our API management infrastructure for improved scalability, observability, and developer experience. This platform transformation positioned the organization for long-term growth and improved integration capabilities.",
    tags: ["Gravitee", "API Management", "Platform Migration", "Scalability"],
  },
  {
    icon: Zap,
    gradient: "from-pink-400 to-rose-500",
    title: "System Performance Optimization",
    description:
      "Spearheaded performance optimization initiative focusing on critical API endpoints. Achieved dramatic improvements through query optimization and multi-threaded architecture enhancements. Delivered measurable results in system response times and overall application performance.",
    tags: ["Performance Tuning", "Multi-threading", "SQL Optimization", "Architecture"],
  },
  {
    icon: Link2,
    gradient: "from-blue-400 to-cyan-400",
    title: "Partner Integration Platform",
    description:
      "Designed and implemented webhook integration capabilities enabling seamless connections with partner platforms. Developed comprehensive integration framework with documentation, improving partner ecosystem connectivity and reducing integration time for new partners.",
    tags: ["Webhooks", "REST APIs", "Integration", "Documentation"],
  },
  {
    icon: Shield,
    gradient: "from-emerald-400 to-teal-400",
    title: "Business Continuity & Resilience",
    description:
      "Orchestrated comprehensive BC/DR testing and planning initiatives to ensure enterprise-grade system reliability. Led cross-functional teams through disaster recovery validation, infrastructure failover testing, and operational readiness exercises maintaining high availability for mission-critical systems.",
    tags: ["BC/DR", "High Availability", "Load Testing", "Infrastructure"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="text-gradient">Initiatives</span>
          </h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto">
            Recent projects and technical initiatives at ABC Fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map(({ icon: Icon, gradient, title, description, tags }) => (
            <article
              key={title}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-light hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div
                className={`w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br ${gradient}`}
              >
                <Icon className="w-20 h-20 text-white opacity-90" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-text-dark mb-4">{title}</h3>
                <p className="text-[#1e293b] leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-bg-alt text-[#1e293b] px-3 py-1.5 rounded text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
