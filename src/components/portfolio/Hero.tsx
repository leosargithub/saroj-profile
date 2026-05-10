import profile from "@/assets/profile.jpg";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 md:grid-cols-2 md:items-center">
        {/* LEFT — Intro */}
        <div className="animate-fade-up space-y-6">
          <p className="text-sm text-muted-foreground">Hello, I'm Saroj Budhathoki</p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            <span className="block">QA Engineer,</span>
            <span className="block">Test Automation,</span>
            <span className="relative inline-block">
              <span className="gradient-text">Quality Driven</span>
              <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-primary opacity-80" />
            </span>
          </h1>

          <p className="max-w-md pt-2 text-base leading-relaxed text-muted-foreground">
            Ensuring software quality through manual, API, automation, and performance testing.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground glow-hover"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* RIGHT — Portrait card */}
        <div
          className="relative animate-fade-up flex justify-center md:justify-end"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative w-full max-w-md">
            {/* Outer glass panel */}
            <div className="glass-strong relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] p-6">
              {/* Inner glow gradient backdrop */}
              <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/30 to-primary/10" />

              {/* Floating accent dots */}
              <span className="absolute left-8 top-10 h-3 w-3 rounded-full bg-primary shadow-glow" />
              <span className="absolute right-10 top-16 h-2 w-2 rounded-full bg-accent/80" />
              <span className="absolute bottom-10 right-8 h-3 w-3 rounded-full bg-primary/70 animate-float" />
              <span className="absolute bottom-20 left-10 h-1.5 w-1.5 rounded-full bg-foreground/40" />

              {/* Decorative arcs */}
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full opacity-30"
                viewBox="0 0 400 500"
                fill="none"
              >
                <circle cx="60" cy="380" r="80" stroke="currentColor" className="text-primary" strokeWidth="1.5" />
                <circle cx="340" cy="120" r="50" stroke="currentColor" className="text-accent" strokeWidth="1.5" />
              </svg>

              {/* Portrait */}
              <img
                src={profile}
                alt="Saroj Budhathoki, QA Engineer"
                width={500}
                height={625}
                className="absolute inset-x-0 bottom-0 mx-auto h-[92%] w-[92%] rounded-[1.75rem] object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <div className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 shadow-glass">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Specialized in</p>
              <p className="text-sm font-semibold gradient-text">Quality Assurance</p>
            </div>
            <div className="glass absolute -right-3 top-8 hidden rounded-full px-4 py-2 shadow-glass sm:block">
              <p className="text-xs font-medium">
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
                Open to work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
