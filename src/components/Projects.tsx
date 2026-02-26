import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Calculator",
    description:
      "A fully functional calculator built with vanilla JavaScript. Supports basic arithmetic with a clean, responsive interface.",
    image: "/projects/project1.PNG",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DylanWeagant/Calculator",
  },
  {
    title: "Random Password Generator",
    description:
      "Generate secure, random passwords with customizable length and character sets — letters, numbers, and symbols.",
    image: "/projects/project2.PNG",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DylanWeagant/Random-Password-Generator",
  },
  {
    title: "To-Do List",
    description:
      "A task management app to add, complete, and remove tasks. Features local storage persistence across sessions.",
    image: "/projects/project3.PNG",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DylanWeagant/To-do-list",
  },
  {
    title: "Weight Converter",
    description:
      "Convert between weight units quickly and accurately. Supports both metric and imperial measurement systems.",
    image: "/projects/project4.PNG",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DylanWeagant/Weight-Converter",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <p
            className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Projects
          </p>
          <h2 className="text-4xl font-bold">Things I&apos;ve Built</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              {/* Screenshot */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ backgroundColor: "var(--bg-2)" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-mono"
                      style={{
                        backgroundColor: "var(--bg-2)",
                        color: "var(--accent)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover-accent"
                  style={{ color: "var(--muted)" }}
                >
                  <Github size={14} />
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
