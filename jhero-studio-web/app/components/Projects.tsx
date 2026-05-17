"use client";

import { motion } from "framer-motion";

export default function Projects({ language }: { language: "EN" | "ES" }) {
  const projects = [
    {
      id: "01",
      title: "AI Nexus",
      desc: language === "EN" ? "A decentralized AI orchestration platform built on Next.js and TensorFlow." : "Una plataforma descentralizada de orquestación de IA construida en Next.js y TensorFlow.",
      status: "SECURE",
      tags: ["React", "Python", "GraphQL"]
    },
    {
      id: "02",
      title: "Finova App",
      desc: language === "EN" ? "High-performance financial dashboard with real-time WebSocket data streaming." : "Dashboard financiero de alto rendimiento con transmisión de datos WebSocket en tiempo real.",
      status: "ENCRYPTED",
      tags: ["Flutter", "Node.js", "WebSockets"]
    },
    {
      id: "03",
      title: "Cyber Shield",
      desc: language === "EN" ? "Automated vulnerability scanner and monitoring tool for enterprise networks." : "Escáner automatizado de vulnerabilidades y herramienta de monitoreo para redes empresariales.",
      status: "ACTIVE",
      tags: ["Go", "Docker", "Security"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-mono text-smoke-white uppercase mb-4 tracking-wider">
            <span className="text-neon-cyan mr-2">_</span>{language === "EN" ? "Archives" : "Archivos"}
          </h2>
          <div className="h-[1px] w-32 bg-neon-cyan/50" />
        </div>
        <div className="font-mono text-sm text-smoke-white/50 hidden md:block">
          {language === "EN" ? "TOTAL_RECORDS:" : "REGISTROS_TOTALES:"} {projects.length}
        </div>
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 cyber-border bg-absolute-black hover:bg-white/[0.02] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <span className="font-mono text-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity text-xl">
                {project.id}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-smoke-white uppercase tracking-wide group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <span className="text-neon-cyan/50 font-mono text-xs animate-pulse">
                  [{language === "EN" ? "SECURE" : "SEGURO"}]
                </span>
                <p className="text-smoke-white/50 font-mono text-sm mt-2">
                  {project.desc}
                </p>
              </div>
            </div>

            <div className={`font-mono text-xs px-3 py-1 cyber-border flex items-center gap-2 ${
              project.status === 'SECURE' ? 'text-neon-cyan border-neon-cyan/30' : 
              project.status === 'ENCRYPTED' ? 'text-neon-purple border-neon-purple/30' : 
              'text-smoke-white border-smoke-white/30'
            }`}>
              <span className="animate-pulse">●</span>
              [STATUS: {project.status}]
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
