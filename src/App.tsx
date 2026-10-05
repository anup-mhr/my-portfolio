import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import type { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
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
    </>
  );
}
