import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "QA Automation Demo Framework",
    desc: "Sample automation framework demonstrating page object model, reusable utilities, and reporting for end-to-end test coverage.",
    tags: ["Selenium", "Java", "TestNG"],
  },
  {
    title: "API Testing Practice Project",
    desc: "Collection of REST API test scenarios covering positive, negative, and schema validation cases with assertions.",
    tags: ["Postman", "Newman", "REST Assured"],
  },
  {
    title: "Performance Testing Lab",
    desc: "Demo load and stress test scripts simulating concurrent users to study response time and throughput patterns.",
    tags: ["JMeter", "K6", "Reports"],
  },
  {
    title: "Manual Test Suite Showcase",
    desc: "Structured manual test cases, traceability matrix, and detailed bug reports for a sample web application.",
    tags: ["Excel", "Jira", "TestRail"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Demo Projects</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Selected <span className="gradient-text">work</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="glass rounded-2xl p-7 glow-hover">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github className="h-4 w-4" />
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
