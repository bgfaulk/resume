import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-bg-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-text-light max-w-[600px] mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg text-text-dark mb-2">Email</h3>
              <a
                href="mailto:briangray42@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                briangray42@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg text-text-dark mb-2">Location</h3>
              <p className="text-[#1e293b] m-0 leading-relaxed">Greenbrier, Arkansas</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-white p-12 rounded-xl shadow-sm text-center w-full">
              <h3 className="text-2xl text-text-dark mb-4">Ready to collaborate?</h3>
              <p className="text-[#1e293b] leading-relaxed mb-8">
                Feel free to reach out via email. I&apos;m always interested in hearing about new
                projects, opportunities, and ways to collaborate.
              </p>
              <a
                href="mailto:briangray42@gmail.com"
                className="inline-block px-8 py-4 font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all text-lg"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
