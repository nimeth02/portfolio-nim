import ModernNavbar from "@/components/ModernNavbar";
import Hero from "@/components/Hero";
import ModernAbout from "@/components/ModernAbout";
import ModernProjects from "@/components/ModernProjects";
import ModernSkills from "@/components/ModernSkills";
import ModernContact from "@/components/ModernContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <Hero />
      <ModernAbout />
      <ModernProjects />
      <ModernSkills />
      <ModernContact />
      <Footer />
    </div>
  )
}
