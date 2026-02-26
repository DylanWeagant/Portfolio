import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start order-last md:order-first">
            <div className="relative">
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "var(--accent)" }}
              >
                <Image
                  src="/portrait_small1.jpg"
                  alt="Dylan Weagant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative offset block */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ backgroundColor: "var(--border)" }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              About Me
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              A developer who loves to build
            </h2>
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "var(--muted)" }}
            >
              I&apos;m Dylan Weagant — a Full Stack Developer based in Ohio with a
              passion for creating things, whether that&apos;s a polished UI, a
              powerful API, or a complete web application end to end.
            </p>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              I studied Software Application Development at Rasmussen College and
              gained real-world experience at Celina Insurance Group, where I
              built enterprise-grade web apps with Angular and ASP.NET Core across
              the full software development lifecycle.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "2+",  label: "Years Exp." },
                { value: "5+",  label: "Projects" },
                { value: ".NET", label: "& Angular" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
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
