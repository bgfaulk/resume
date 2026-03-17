import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Sites } from "@/components/Sites";

export const metadata = {
  title: "Sites I've Built | Brian Faulk",
  description: "Websites built by Brian Faulk: 501 Mowing, Taylor's Field Flower Farm, Faulkner County Democrats, Sentra HCM.",
};

export default function SitesPage() {
  return (
    <section className="py-16 md:py-24 bg-bg-alt min-h-[calc(100vh-140px)]">
      <div className="container-custom mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to resume
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sites I&apos;ve <span className="text-gradient">Built</span>
        </h1>
        <p className="text-lg text-text-light max-w-[600px]">
          Live websites I&apos;ve designed and built. Click through to visit each site.
        </p>
      </div>
      <Sites />
    </section>
  );
}
