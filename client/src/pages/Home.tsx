import { useRef } from "react";
import Navigation from "@/components/nav/Navigation";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import { motion } from "framer-motion";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-header" />
      <Navigation
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-20 relative z-10"
      >
        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={projectsRef} className="mt-20">
          <Projects />
        </section>

        <section ref={contactRef} className="mt-20 mb-20">
          <Contact />
        </section>
      </motion.main>
    </div>
  );
}