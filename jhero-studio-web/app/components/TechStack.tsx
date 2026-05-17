"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Server, Cpu, Globe, Cloud, Code, Lock } from "lucide-react";

const tech = [
  { name: "React", icon: Globe, color: "#61DAFB" },
  { name: "Next.js", icon: Terminal, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: Code, color: "#38B2AC" },
  { name: "TypeScript", icon: Code, color: "#3178C6" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "CyberSec", icon: Lock, color: "#00f3ff" },
  { name: "AI_Models", icon: Cpu, color: "#b026ff" },
];

export default function TechStack() {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl md:text-2xl font-mono text-smoke-white/70 uppercase mb-4 tracking-wider text-center">
          <span className="text-neon-cyan mr-2">&gt;</span>Tech_Stack_Modules
        </h2>
      </motion.div>

      <div className="relative flex overflow-hidden w-full cyber-border bg-absolute-black py-8 group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-16 px-8">
          {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <item.icon
                className="w-8 h-8 transition-colors duration-300"
                style={{ color: item.color }}
              />
              <span className="font-mono text-xl tracking-widest uppercase transition-colors duration-300" style={{ color: item.color }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade out edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-absolute-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-absolute-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
