import { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import type { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden bg-bg">
        <Hero />
        <div className="section-gradient w-full">
          <Skills />
          <Experience />
        </div>
        <Projects onSelect={setSelectedProject} />
        <div className="section-gradient w-full">
          <Education />
          <Contact />
        </div>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
