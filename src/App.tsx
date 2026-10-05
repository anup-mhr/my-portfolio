import { useRef, useState } from "react";
import { useSiteAnimations } from "./hooks/useSiteAnimations";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import ScrollExtras from "./components/ScrollExtras";
import type { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  useSiteAnimations(rootRef);

  return (
    <div ref={rootRef}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollExtras />
      <Navbar />
      <main id="main" className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects onSelect={setSelectedProject} />
        <Education />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
