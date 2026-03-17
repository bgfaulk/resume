import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";

const SITES = [
  {
    name: "501 Mowing",
    url: "https://501mowing.com",
    description: "Robotic lawn care, Conway AR",
  },
  {
    name: "Taylor's Field Flower Farm",
    url: "https://taylorsfieldflowerfarm.com",
    description: "Seasonal flowers, Central Arkansas",
  },
  {
    name: "Faulkner County Democrats",
    url: "https://www.faulknercountydemocrats.com/",
    description: "Local party site",
  },
  {
    name: "Sentra HCM",
    url: "https://www.sentrahcm.com/",
    description: "HR, Payroll & People Solutions",
  },
];

export function Sites() {
  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SITES.map((site) => (
          <article
            key={site.url}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-light hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <div className="w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
              <Globe className="w-16 h-16 text-white opacity-90" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-text-dark mb-2">{site.name}</h3>
              <p className="text-text-light text-sm mb-4">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Visit site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
