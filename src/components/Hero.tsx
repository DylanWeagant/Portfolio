import { Github, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />

      {/* Accent glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.06 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
        <p
          className="font-mono text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--accent)" }}
        >
          Full Stack Developer
        </p>

        <h1 className="text-7xl sm:text-8xl md:text-[9rem] font-bold tracking-tighter leading-none mb-8">
          <span style={{ color: "var(--text)" }}>Dylan</span>
          <br />
          <span style={{ color: "var(--muted)", opacity: 0.45 }}>Weagant</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I build fast, modern web applications with a passion for clean code,
          great UX, and scalable architecture.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-80"
            style={{ backgroundColor: "var(--accent)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-sm font-semibold border transition-colors duration-150 hover-border-accent"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Get in Touch
          </a>
        </div>

        <a
          href="https://github.com/DylanWeagant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover-accent"
          style={{ color: "var(--muted)" }}
        >
          <Github size={16} />
          <span>github.com/DylanWeagant</span>
        </a>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
          scroll
        </span>
        <ArrowDown size={14} className="animate-bounce opacity-60" />
      </div>
    </section>
  );
}
