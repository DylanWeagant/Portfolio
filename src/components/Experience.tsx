const jobs = [
  {
    company: "Celina Insurance Group",
    role: "Full Stack Developer Intern",
    period: "2019 – 2020",
    bullets: [
      "Designed and developed an enterprise web app with Angular (frontend) and ASP.NET Core (backend)",
      "Participated in all phases of the SDLC: requirements, design, development, and QA",
      "Collaborated with cross-functional teams to deliver features on schedule",
    ],
  },
  {
    company: "Celina Insurance Group",
    role: "Technical Support Intern",
    period: "2018 – 2019",
    bullets: [
      "Identified and implemented hardware and software solutions for internal users",
      "Diagnosed and repaired technical faults, reducing downtime across departments",
      "Provided end-user support and maintained technical documentation",
    ],
  },
];

const education = [
  {
    school: "Rasmussen College",
    degree: "Software Application Development",
    period: "2018 – 2020",
    notes: "C#, C++, Java, SQL, Microsoft Azure, cloud computing, systems integration",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <p
            className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Experience
          </p>
          <h2 className="text-4xl font-bold">Where I&apos;ve Worked</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work — spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="p-6 rounded-2xl border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-base">{job.role}</h3>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {job.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono shrink-0 mt-0.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education — 1 col */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Education
            </h3>

            {education.map((ed) => (
              <div
                key={ed.school}
                className="p-6 rounded-2xl border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                }}
              >
                <h4 className="font-semibold text-base">{ed.degree}</h4>
                <p
                  className="text-sm font-medium mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  {ed.school}
                </p>
                <p
                  className="text-xs font-mono mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {ed.period}
                </p>
                <p
                  className="text-sm mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {ed.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
