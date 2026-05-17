"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

interface NavbarProps {
  language: "EN" | "ES";
  toggleLanguage: () => void;
}

export default function Navbar({ language, toggleLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: language === "EN" ? "About" : "Perfil", href: "#bio" },
    { name: language === "EN" ? "Capabilities" : "Capacidades", href: "#capabilities" },
    { name: language === "EN" ? "Terminal" : "Terminal", href: "#terminal" },
    { name: language === "EN" ? "Archives" : "Archivos", href: "#projects" }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-absolute-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6 pointer-events-auto"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-neon-cyan font-bold tracking-widest uppercase font-mono text-xl drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
          Jhero<span className="text-smoke-white">.OS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-smoke-white/60 hover:text-neon-cyan transition-colors"
            >
              <span className="text-neon-cyan/50 mr-1">//</span> {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 cyber-border px-3 py-1.5 bg-white/5 hover:bg-neon-cyan/10 hover:border-neon-cyan hover:text-neon-cyan transition-colors text-smoke-white/80 font-mono text-xs cursor-pointer group"
        >
          <Globe className="w-4 h-4 group-hover:animate-pulse" />
          <span>[{language}]</span>
        </button>
      </div>
    </motion.nav>
  );
}
