import About from "@/components/sections/about";
import Divider from "@/components/divider";
import Introduction from "@/components/sections/introduction";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Competencies from "@/components/sections/competencies";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Introduction />
      <Divider />
      <About />
      <Divider />
      <Competencies />
    
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </main>
  )
}
