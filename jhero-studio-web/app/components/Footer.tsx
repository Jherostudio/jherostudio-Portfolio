"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer({ language }: { language: "EN" | "ES" }) {
  return (
    <footer className="border-t border-white/10 bg-absolute-black py-12 relative z-10 w-full mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold text-smoke-white tracking-tighter uppercase mb-2 drop-shadow-[0_0_10px_rgba(0,243,255,0.2)]">
              Jhero Studio
            </h2>
            <p className="text-smoke-white/50 font-mono text-xs">
              © {new Date().getFullYear()} JHERO STUDIO. {language === "EN" ? "SECURE_NODE_ACTIVE." : "NODO_SEGURO_ACTIVO."}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Jherostudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-smoke-white/50 hover:text-neon-cyan transition-colors hover:scale-110 duration-300"
                title="GitHub Repository"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-smoke-white/50 hover:text-neon-purple transition-colors hover:scale-110 duration-300"
                title="Professional Network"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-smoke-white/50 hover:text-red-500 transition-colors hover:scale-110 duration-300"
                title="Motivational Creator Channel"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contact@jherostudio.com" 
                className="text-smoke-white/50 hover:text-neon-cyan transition-colors hover:scale-110 duration-300"
                title="Initiate Secure Connection"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-2 text-[10px] md:text-xs font-mono text-emerald-400">
              <span className="bg-emerald-500/10 border border-emerald-500/30 px-2 py-1">[ SSL: ACTIVE ]</span>
              <span className="bg-emerald-500/10 border border-emerald-500/30 px-2 py-1">[ HEADERS: HARDENED ]</span>
              <span className="bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 animate-pulse">[ EXPLOITS DETECTED: 0 ]</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
