import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ProjectSection } from "@/components/project-section";
import { TeamSection } from "@/components/team-section";
import { ValuesSection } from "@/components/values-section";
import { StackSection } from "@/components/stack-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative noise-overlay overflow-x-hidden">
      <Navbar />
      <Hero />
      <MissionSection />
      <ProjectSection />
      <TeamSection />
      <ValuesSection />
      <StackSection />
      <Footer />
    </main>
  );
}
