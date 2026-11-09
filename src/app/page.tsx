import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import SkillsMatrix from "@/components/SkillsMatrix";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <SkillsMatrix />
      <Timeline />
      <Footer />
    </main>
  );
}
