import { BackScroll } from "@/components/back-scroll";
import Certificates from "@/components/certificates";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <BackScroll />
    </main>
  );
}
