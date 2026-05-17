"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, ShieldAlert, Activity, Server, Lock } from "lucide-react";
import { useEffect, useState } from "react";

const EncryptedText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const chars = "!@#$%^&*()_+{}|:<>?~";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 text-[10px] md:text-xs font-mono border border-white/10 text-smoke-white/80 bg-white/5 whitespace-nowrap">
    {text}
  </span>
);

export default function Services({ language }: { language: "EN" | "ES" }) {
  return (
    <section className="py-20 relative z-10" id="capabilities">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono text-smoke-white uppercase mb-4 tracking-wider">
          <span className="text-neon-cyan mr-2">[ 01 //</span>{language === "EN" ? "CAPABILITIES_LOG" : "REGISTRO_DE_CAPACIDADES"}<span className="text-neon-cyan ml-2">]</span>
        </h2>
        <p className="text-smoke-white/60 font-mono text-sm md:text-base max-w-3xl mb-6">
          {language === "EN" ? "\"Scalable solutions where optimal code meets artificial intelligence and offensive architecture.\"" : "\"Soluciones escalables donde el código óptimo se encuentra con la inteligencia artificial y la arquitectura ofensiva.\""}
        </p>
        <div className="h-[1px] w-full bg-gradient-to-r from-neon-cyan/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* PILLAR_01: AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0b0b0c] border border-white/5 hover:border-neon-cyan/50 p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-500 flex flex-col h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col items-start gap-4 mb-6">
              <BrainCircuit className="w-10 h-10 text-neon-cyan drop-shadow-[0_0_10px_#00f3ff]" />
              <h3 className="text-lg font-bold text-smoke-white uppercase tracking-widest break-words">[ {language === "EN" ? "AI_INTEGRATION" : "INTEGRACIÓN_IA"} ]</h3>
            </div>
            <p className="text-smoke-white/70 font-mono text-sm leading-relaxed mb-8 flex-grow">
              {language === "EN" ? "Development and implementation of custom Language Models (LLMs) and automated agents. I don't just consume APIs; I design intelligent workflows that optimize operational processes and transform raw data into automated decisions." : "Desarrollo e implementación de modelos de lenguaje (LLMs) y agentes automatizados customizados. No solo consumo APIs; diseño flujos de trabajo inteligentes que optimizan procesos operativos y transforman datos crudos en decisiones automatizadas."}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1.5s_ease-in-out_infinite] transition-opacity duration-300">
              <Badge text="Prompt Engineering" />
              <Badge text="Agentic Workflows" />
              <Badge text="Automation Pipelines" />
              <Badge text="API Architecture" />
            </div>
          </div>
        </motion.div>

        {/* PILLAR_02: Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0b0b0c] border border-white/5 hover:border-smoke-white/50 p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 flex flex-col h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col items-start gap-4 mb-6">
              <Code2 className="w-10 h-10 text-smoke-white" />
              <h3 className="text-lg font-bold text-smoke-white uppercase tracking-widest break-words">[ {language === "EN" ? "SECURE_WEB_ARCHITECTURE" : "ARQUITECTURA_WEB_SEGURA"} ]</h3>
            </div>
            <p className="text-smoke-white/70 font-mono text-sm leading-relaxed mb-8 flex-grow">
              {language === "EN" ? "Design and development of high-speed web applications that are natively secure. I implement strict security policies (CSP), end-to-end data encryption, advanced multi-factor authentication (MFA), and deep data sanitization. Beautiful software must be, first and foremost, secure software." : "Diseño y desarrollo de aplicaciones web de alta velocidad que son nativamente seguras. Implemento políticas de seguridad estrictas (CSP), cifrado de datos de extremo a extremo, autenticación multifactor avanzada (MFA) y sanitización profunda de datos. El software hermoso debe ser, ante todo, software seguro."}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1.5s_ease-in-out_infinite] transition-opacity duration-300">
              <Badge text="Secure Coding" />
              <Badge text="Data Encryption" />
              <Badge text="CORS/CSP Policies" />
              <Badge text="OWASP Hardening" />
            </div>
          </div>
        </motion.div>

        {/* PILLAR_03: Cybersecurity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#0b0b0c] border border-white/5 hover:border-neon-purple/50 p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] transition-all duration-500 flex flex-col h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col items-start gap-4 mb-6">
              <ShieldAlert className="w-10 h-10 text-neon-purple drop-shadow-[0_0_10px_#b026ff]" />
              <h3 className="text-lg font-bold text-smoke-white uppercase tracking-widest group-hover:text-neon-purple transition-colors break-words">
                <EncryptedText text={language === "EN" ? "[ OFFENSIVE_SECURITY ]" : "[ SEGURIDAD_OFENSIVA ]"} />
              </h3>
            </div>
            <p className="text-smoke-white/70 font-mono text-sm leading-relaxed mb-8 flex-grow">
              {language === "EN" ? "Shielding digital assets from the first line of code. Vulnerability analysis, business logic audits in web/mobile applications, and risk mitigation to ensure software is not only fast and aesthetic, but impenetrable." : "Blindaje de activos digitales desde la primera línea de código. Análisis de vulnerabilidades, auditorías de lógica de negocio en aplicaciones web/móviles y mitigación de riesgos para asegurar que el software no solo sea rápido y estético, sino impenetrable."}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1.5s_ease-in-out_infinite] transition-opacity duration-300">
              <Badge text="OWASP Top 10" />
              <Badge text="Vuln Assessment" />
              <Badge text="SecOps" />
              <Badge text="Auth Protocols" />
            </div>
          </div>
        </motion.div>
        
        {/* Metrics Block / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          {/* Metric 1 */}
          <div className="bg-[#0b0b0c] border border-white/5 border-l-2 border-l-neon-cyan p-4 flex flex-col justify-center hover:bg-neon-cyan/5 transition-colors group">
            <div className="text-neon-cyan font-mono text-sm lg:text-base flex items-center gap-2 mb-2 group-hover:drop-shadow-[0_0_8px_#00f3ff] transition-all">
              <Activity className="w-4 h-4 animate-pulse" /> [ STATUS: 100% OPERATIONAL ]
            </div>
            <p className="text-smoke-white/50 font-mono text-xs">{language === "EN" ? "Clean code and testing guarantee." : "Garantía de código limpio y testing."}</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-[#0b0b0c] border border-white/5 border-l-2 border-l-smoke-white p-4 flex flex-col justify-center hover:bg-white/5 transition-colors group">
            <div className="text-smoke-white font-mono text-sm lg:text-base flex items-center gap-2 mb-2 group-hover:drop-shadow-[0_0_8px_#ffffff] transition-all">
              <Server className="w-4 h-4" /> [ DEPLOYMENTS: +15 APPS ]
            </div>
            <p className="text-smoke-white/50 font-mono text-xs">{language === "EN" ? "Real-world production experience." : "Experiencia real en producción."}</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-[#0b0b0c] border border-white/5 border-l-2 border-l-neon-purple p-4 flex flex-col justify-center hover:bg-neon-purple/5 transition-colors group">
            <div className="text-neon-purple font-mono text-sm lg:text-base flex items-center gap-2 mb-2 group-hover:drop-shadow-[0_0_8px_#b026ff] transition-all">
              <Lock className="w-4 h-4" /> [ SECURITY_CORE: HARDENED ]
            </div>
            <p className="text-smoke-white/50 font-mono text-xs">{language === "EN" ? "Security standard applied to every project." : "Estándar de seguridad aplicado a cada proyecto."}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
