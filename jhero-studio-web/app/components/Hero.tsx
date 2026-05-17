"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  onInitialize?: () => void;
  isInitialized?: boolean;
  language: "EN" | "ES";
}

export default function Hero({ onInitialize, isInitialized = false, language }: HeroProps) {
  const [text, setText] = useState("");
  const fullText = language === "EN" ? "AI • Development • Cybersecurity" : "IA • Desarrollo • Ciberseguridad";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isInitialized && (
        <motion.section 
          initial={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center text-center relative w-full overflow-hidden -mt-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="glitch-text text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-smoke-white via-neon-cyan/50 to-smoke-white mb-6 uppercase drop-shadow-[0_0_15px_rgba(0,243,255,0.2)]"
              data-text="Jhero Studio"
            >
              Jhero Studio
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-8 mb-4 md:mb-6"
          >
            <p className="text-xl md:text-2xl font-mono text-neon-cyan">
              {text}
              <span className="animate-pulse inline-block w-3 h-6 bg-neon-cyan ml-2 align-middle shadow-[0_0_10px_#00f3ff]"></span>
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-2 mb-12 text-smoke-white/60 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed px-4"
          >
            {language === "EN" ? "\"I transform complex ideas into secure interfaces and efficient AI models.\"" : "\"Transformo ideas complejas en interfaces seguras y modelos de IA eficientes.\""}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              if (onInitialize) onInitialize();
            }}
            className="laser-scan-button px-8 py-4 font-mono text-sm tracking-widest uppercase cyber-border bg-absolute-black hover:bg-neon-cyan/10 text-smoke-white transition-colors duration-300 group shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-neon-cyan opacity-50">[</span> 
              {language === "EN" ? "INITIALIZATION" : "INICIALIZACIÓN"}
              <span className="text-neon-cyan opacity-50">]</span>
            </span>
          </motion.button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
