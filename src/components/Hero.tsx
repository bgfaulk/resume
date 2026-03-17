import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-70px)] flex items-center relative overflow-hidden before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/2 before:h-full before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5 before:-z-10"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-md:text-center">
          <div>
            <p className="text-xl text-primary font-semibold mb-4">Hello, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Brian <span className="text-gradient">Faulk</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e293b] mb-8">
              Software Engineering Manager
            </h2>
            <p className="text-lg leading-relaxed text-text-light mb-8">
              Leading high-performing engineering teams to deliver scalable, reliable systems.
              15+ years of experience driving technical excellence, mentoring developers, and
              delivering mission-critical solutions. Specializing in full-stack development,
              API architecture, system performance optimization, and team leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-md:items-center">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all text-center"
              >
                Get In Touch
              </Link>
              <Link
                href="/#portfolio"
                className="inline-block px-6 py-3 font-semibold rounded-lg border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all text-center"
              >
                View Key Initiatives
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center max-md:order-first">
            <div className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square">
              <div
                className="w-full h-full rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-xl animate-morph"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
