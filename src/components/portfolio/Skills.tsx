const skills = [
  { name: "Manual Testing", level: 90 },
  { name: "API Testing", level: 85 },
  { name: "Automation Testing", level: 80 },
  { name: "Performance Testing", level: 75 },
  { name: "Software Testing Fundamentals", level: 92 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Skills</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name} className="glass rounded-2xl p-6 glow-hover">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-sm text-primary">{s.level}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="h-full rounded-full bg-gradient-primary shadow-glow transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
