"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion-wrapper";

const BASE = process.env.__NEXT_ROUTER_BASEPATH || "";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={`${BASE}/images/hero-bg.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Cyan/teal tint to match sky feel */}
        <div className="absolute inset-0 bg-[#0C4A6E]/30 mix-blend-overlay" />
        {/* Dark overlay + bottom fade */}
        <div className="absolute inset-0 bg-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#0E3A5C]/10 to-[#050505]" />
        {/* Subtle animated glow */}
        <motion.div
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#38BDF8] blur-[150px]"
        />
        {/* Twinkling stars overlay */}
        <div className="hero-stars absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        {/* Badge */}
        <Reveal delay={0}>
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/[0.08] text-xs font-medium text-[#38BDF8] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Equipo de Desarrollo
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-6">
            Somos{" "}
            <span className="gradient-text">Bitwave</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Equipo de desarrollo de software especializado en soluciones
            tecnologicas de alto impacto. Transformamos ideas en productos reales.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#proyecto"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-[#050505] bg-[#38BDF8] rounded-xl hover:bg-[#0EA5E9] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-[#38BDF8]/20 hover:-translate-y-0.5"
            >
              Ver nuestro trabajo
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#equipo"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white/60 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white hover:border-white/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Conocer al equipo
            </a>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={0.5}>
          <div className="mt-14 flex flex-col items-center gap-2">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-[#38BDF8]" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
