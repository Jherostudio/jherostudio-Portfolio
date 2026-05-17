"use client";

import { motion } from "framer-motion";

export default function Cta({ language }: { language: "EN" | "ES" }) {
  return (
    <section id="cta" className="py-24 relative z-10 flex justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="cyber-border bg-absolute-black p-12 md:p-20 relative overflow-hidden group w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/10 to-transparent opacity-50 pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold text-smoke-white mb-6 uppercase tracking-wider relative z-10 drop-shadow-[0_0_15px_rgba(0,243,255,0.1)]">
          {language === "EN" ? "Ready to Upgrade Your" : "¿Listo para Mejorar tu"} <span className="text-neon-cyan">{language === "EN" ? "Architecture?" : "Arquitectura?"}</span>
        </h2>
        
        <p className="text-smoke-white/60 font-mono mb-12 max-w-2xl mx-auto relative z-10">
          {language === "EN" ? "Stop patching legacy systems. Let's build scalable, secure, and futuristic digital experiences from the ground up." : "Deja de parchear sistemas heredados. Construyamos experiencias digitales escalables, seguras y futuristas desde cero."}
        </p>
        
        <a href="mailto:contact@jherostudio.com" className="relative z-10 inline-block px-8 py-4 font-mono text-lg font-bold tracking-widest uppercase text-absolute-black bg-neon-cyan hover:bg-transparent hover:text-neon-cyan transition-all duration-300 group shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:shadow-[0_0_50px_rgba(0,243,255,1)] animate-pulse hover:animate-none border border-neon-cyan">
          <span className="flex items-center gap-3">
            <span className="opacity-50">[</span> {language === "EN" ? "START_PROJECT" : "INICIAR_PROYECTO"} <span className="opacity-50">]</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
