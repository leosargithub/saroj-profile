import {
  ClipboardCheck,
  Network,
  Bot,
  Gauge,
  FileText,
  Bug,
  type LucideIcon,
} from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ClipboardCheck, title: "Manual Testing", desc: "Test case execution and thorough UI validation across flows." },
  { icon: Network, title: "API Testing", desc: "Endpoint testing and validation using Postman and structured suites." },
  { icon: Bot, title: "Automation Setup", desc: "Building basic automation framework structure for scalable testing." },
  { icon: Gauge, title: "Performance Testing", desc: "Load behavior analysis to ensure apps stay responsive at scale." },
  { icon: FileText, title: "Test Case Design", desc: "Structured QA documentation, scenarios, and traceability matrices." },
  { icon: Bug, title: "Bug Reporting", desc: "Clear defect documentation, reproduction steps, and tracking." },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            What I <span className="gradient-text">offer</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="glass group rounded-2xl p-6 glow-hover">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
