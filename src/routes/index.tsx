import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/portfolio/BackgroundShapes";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saroj Budhathoki — QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Saroj Budhathoki — QA Engineer specializing in manual, API, automation, and performance testing.",
      },
      { property: "og:title", content: "Saroj Budhathoki — QA Engineer" },
      {
        property: "og:description",
        content: "Ensuring software quality through manual, API, automation, and performance testing.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <BackgroundShapes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
