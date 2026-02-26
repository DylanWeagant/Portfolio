const categories: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["C#", "ASP.NET Core", "Java", "C++", "Node.js"],
  },
  {
    label: "Database",
    skills: ["SQL", "SQL Server"],
  },
  {
    label: "Tools & Cloud",
    skills: ["Git", "GitHub", "Microsoft Azure", "Visual Studio", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2 className="text-4xl font-bold">Tech I Work With</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--muted)" }}
              >
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      backgroundColor: "var(--card)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
