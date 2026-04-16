import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Capstone from "@/components/sections/Capstone";
import GraduationBook from "@/components/sections/GraduationBook";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Capstone />
      <GraduationBook />
      <Contact />
    </>
  );
}
