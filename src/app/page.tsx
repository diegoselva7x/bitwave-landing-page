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
      {/* Global subtle stars — above content, no interaction */}
      <div className="fixed inset-0 pointer-events-none z-[40]" aria-hidden="true">
        <div className="global-stars-1 absolute inset-0" />
        <div className="global-stars-2 absolute inset-0" />
      </div>
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
