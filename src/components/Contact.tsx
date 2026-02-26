import { Mail, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Contact section */}
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p
            className="text-lg max-w-md mx-auto mb-14"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m open to new opportunities and collaborations. Whether you
            have a question or just want to say hello — reach out.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            {/* Email */}
            <a
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border text-left transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              <div
                className="p-2.5 rounded-xl"
                style={{ backgroundColor: "var(--bg-2)" }}
              >
                <Mail size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                  Email
                </p>
                <p className="text-sm font-medium">
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DylanWeagant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border text-left transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              <div
                className="p-2.5 rounded-xl"
                style={{ backgroundColor: "var(--bg-2)" }}
              >
                <Github size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                  GitHub
                </p>
                <p className="text-sm font-medium">DylanWeagant</p>
              </div>
            </a>

            {/* Location */}
            <div
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border text-left"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              <div
                className="p-2.5 rounded-xl"
                style={{ backgroundColor: "var(--bg-2)" }}
              >
                <MapPin size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                  Location
                </p>
                <p className="text-sm font-medium">Fort Recovery, OH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Dylan Weagant
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
