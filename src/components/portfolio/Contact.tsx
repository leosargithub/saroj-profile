import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Contact details will be added soon.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {[
              { icon: Mail, label: "Email", value: "To be added" },
              { icon: Github, label: "GitHub", value: "To be added" },
              { icon: Linkedin, label: "LinkedIn", value: "To be added" },
            ].map((c) => (
              <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-4 glow-hover">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong space-y-4 rounded-2xl p-6 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-1 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-16 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saroj Budhathoki — Crafted with attention to quality.
        </footer>
      </div>
    </section>
  );
}
