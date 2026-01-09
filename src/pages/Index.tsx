import Hero from "@/components/Hero";
import CoreCompetencies from "@/components/CoreCompetencies";
import FeaturedProjects from "@/components/FeaturedProjects";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <CoreCompetencies />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <Contact />
    </main>
  );
};

export default Index;
