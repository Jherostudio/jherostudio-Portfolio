"use client";

import { motion } from "framer-motion";
import { User, Code, Shield } from "lucide-react";

export default function Bio({ language }: { language: "EN" | "ES" }) {
  return (
    <section id="bio" className="py-12 relative z-10">
      <div className="cyber-border bg-absolute-black/80 p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl -z-10 group-hover:bg-neon-cyan/10 transition-colors duration-700" />
        
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="hidden md:flex flex-col gap-4 text-neon-cyan/50">
            <User className="w-8 h-8" />
            <Code className="w-8 h-8" />
            <Shield className="w-8 h-8" />
          </div>
          
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-smoke-white mb-4 uppercase tracking-wide"
            >
              {language === "EN" ? "The " : "El "} <span className="text-neon-cyan">{language === "EN" ? "Human" : "Humano"}</span> {language === "EN" ? "Behind The Code" : "Detrás Del Código"}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 font-mono text-sm md:text-base text-smoke-white/70 leading-relaxed max-w-4xl"
            >
              <p>
                {language === "EN" ? "Aesthetics catch the eye, but reliable architecture sustains the business. I am a Senior Frontend Developer & Security Engineer bridging the gap between stunning visual interfaces and rock-solid system integrity." : "La estética atrapa el ojo, pero la arquitectura confiable sostiene el negocio. Soy un Desarrollador Frontend Senior e Ingeniero de Seguridad cerrando la brecha entre interfaces visuales impresionantes y una integridad de sistema sólida como una roca."}
              </p>
              <p>
                {language === "EN" ? "With proven market experience leading full-stack projects—such as the " : "Con experiencia comprobada en el mercado liderando proyectos full-stack—como la "} <strong className="text-neon-purple font-bold">Finova App</strong>{language === "EN" ? "—I specialize in building applications that not only look futuristic but are built to handle real-world scale, rigorous security testing, and dynamic user demands." : "—me especializo en construir aplicaciones que no solo se ven futuristas, sino que están construidas para manejar escala en el mundo real, pruebas rigurosas de seguridad y demandas dinámicas de los usuarios."}
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:ml-auto font-mono text-xs text-neon-cyan cyber-border p-4 bg-neon-cyan/5 mt-6 md:mt-0"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="animate-pulse">●</span>
              <span>{language === "EN" ? "STATUS: AVAILABLE FOR HIRE" : "ESTADO: DISPONIBLE PARA CONTRATAR"}</span>
            </div>
            <div>{language === "EN" ? "CLASS: SENIOR_DEVELOPER" : "CLASE: DESARROLLADOR_SENIOR"}</div>
            <div>{language === "EN" ? "BASE: REMOTE_NODE" : "BASE: NODO_REMOTO"}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
