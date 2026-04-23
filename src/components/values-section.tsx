"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion-wrapper";

const values = [
  {
    number: "01",
    title: "Compromiso",
    description: "Cumplimos lo que prometemos y acompanamos a nuestros clientes en cada etapa del proyecto.",
  },
  {
    number: "02",
    title: "Innovacion",
    description: "Buscamos constantemente nuevas tecnologias y mejores formas de crear soluciones eficientes.",
  },
  {
    number: "03",
    title: "Honestidad",
    description: "Actuamos con transparencia en nuestras decisiones, procesos y comunicacion.",
  },
  {
    number: "04",
    title: "Etica",
    description: "Desarrollamos software responsable, seguro y alineado con buenas practicas profesionales.",
  },
];

export function ValuesSection() {
  return (
    <section id="valores" className="py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-10">
            <span className="text-xs font-medium text-[#38BDF8] uppercase tracking-[0.2em] mb-4 block">
              Valores
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              Lo que nos define
            </h2>
          </div>
        </Reveal>

        {/* Values list */}
        <StaggerContainer className="space-y-0" staggerDelay={0.1}>
          {values.map((value, i) => (
            <StaggerItem key={value.number}>
              <div className={`group flex items-start gap-8 py-10 ${i !== values.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                <span className="text-4xl font-black text-white/[0.06] group-hover:text-[#38BDF8]/20 transition-colors duration-500 shrink-0 tabular-nums">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed max-w-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
