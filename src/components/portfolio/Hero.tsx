import profile from "@/assets/profile.jpg";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for QA opportunities
          </span>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Saroj <span className="gradient-text">Budhathoki</span>
          </h1>
          <p className="text-xl font-medium text-foreground/90">QA Engineer</p>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Ensuring software quality through manual, API, automation, and performance testing.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground glow-hover"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary blur-3xl opacity-60 animate-pulse-glow" />
            <div className="glass-strong rounded-full p-2 animate-pulse-glow">
              <img
                src={profile}
                alt="Saroj Budhathoki, QA Engineer"
                width={384}
                height={384}
                className="h-72 w-72 rounded-full object-cover md:h-96 md:w-96"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 glass rounded-2xl px-4 py-3 shadow-glass">
              <p className="text-xs text-muted-foreground">Specialized in</p>
              <p className="text-sm font-semibold gradient-text">Quality Assurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
