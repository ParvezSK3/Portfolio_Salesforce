import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AboutSkillsBridge } from "@/components/AboutSkillsBridge";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AboutSkillsBridge />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
