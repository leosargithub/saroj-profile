import { GraduationCap, Target, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Passionate about <span className="gradient-text">software quality</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6 glow-hover">
            <Sparkles className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Who I Am</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A QA Engineer with a strong foundation in software testing, dedicated to delivering
              flawless user experiences.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-hover">
            <Target className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">My Focus</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ensuring quality, reliability, and performance of applications through structured,
              detail-oriented testing practices.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-hover">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Education</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Bachelor of Computer Applications (BCA), Jaya Multiple Campus — 4-year program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
