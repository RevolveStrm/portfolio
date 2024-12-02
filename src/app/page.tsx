import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}
