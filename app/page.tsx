import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import AnimatedBackground from "@/components/animated-background"

export const metadata: Metadata = {
  title: "Mariyam dev | Engr. X Dev",
  description: "Streamlining Engineering Workflows with Tailored Solutions &  Backend X A.I-focused developer with Intuitive expertise in front end.",
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
