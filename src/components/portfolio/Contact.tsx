import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_b7z9ihl";
const EMAILJS_TEMPLATE_ID = "template_tb3oay6";
const EMAILJS_PUBLIC_KEY = "DkuJw6ae59VNELIy2";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9863426464",
    href: "tel:+9779863426464",
  },
  {
    icon: Mail,
    label: "Email",
    value: "budhathokisaroj827@gmail.com",
    href: "mailto:budhathokisaroj827@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "saroj-budhathoki",
    href: "https://www.linkedin.com/in/saroj-budhathoki-b6935826b/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "leosargithub",
    href: "https://github.com/leosargithub",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind or want to talk QA? Reach out anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-4 glow-hover"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="truncate text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-strong space-y-4 rounded-2xl p-6 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-1 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
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
