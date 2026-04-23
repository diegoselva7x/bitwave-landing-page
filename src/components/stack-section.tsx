"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion-wrapper";

const stackItems = [
  {
    category: "Frontend",
    items: [
      { name: "Angular 21", url: "https://angular.dev/events/v21" },
      { name: "TailwindCSS", url: "https://tailwindcss.com" },
      { name: "PrimeNG", url: "https://primeng.org" },
      { name: "Google Maps SDK", url: "https://developers.google.com/maps" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java 21", url: "https://openjdk.org/projects/jdk/21/" },
      { name: "Spring Boot 3.4", url: "https://spring.io/projects/spring-boot" },
      { name: "Spring Security 6", url: "https://spring.io/projects/spring-security" },
      { name: "MapStruct", url: "https://mapstruct.org" },
    ],
  },
  {
    category: "Base de datos",
    items: [
      { name: "Docker", url: "https://www.docker.com" },
      { name: "PostgreSQL 16", url: "https://www.postgresql.org" },
      { name: "PostGIS", url: "https://postgis.net" },
      { name: "JSONB Snapshots", url: "https://www.postgresql.org/docs/current/datatype-json.html" },
    ],
  },
  {
    category: "IA & Datos",
    items: [
      { name: "Oracle Tribuo", url: "https://tribuo.org" },
      { name: "Open-Meteo API", url: "https://open-meteo.com" },
      { name: "ISRIC SoilGrids", url: "https://soilgrids.org" },
    ],
  },
  {
    category: "Infraestructura",
    items: [
      { name: "OAuth2 + JWT", url: "https://oauth.net/2/" },
      { name: "Virtual Threads", url: "https://openjdk.org/jeps/444" },
      { name: "PWA Offline", url: "https://web.dev/progressive-web-apps/" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", url: "https://git-scm.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Pencil AI", url: "https://www.pencil.dev/" },
      { name: "Postman", url: "https://www.postman.com" },
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="py-14 sm:py-16 relative">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#2563EB]/[0.03] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-10">
            <span className="text-xs font-medium text-[#38BDF8] uppercase tracking-[0.2em] mb-4 block">
              Tecnologias
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed font-light">
              Las herramientas y tecnologias que usamos para construir nuestros proyectos.
            </p>
          </div>
        </Reveal>

        {/* Stack grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {stackItems.map((stack) => (
            <StaggerItem key={stack.category}>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full">
                <h3 className="text-xs font-semibold text-[#38BDF8] uppercase tracking-[0.15em] mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-medium text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:text-white/90 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all duration-200 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
