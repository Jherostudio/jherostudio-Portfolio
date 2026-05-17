"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTensorflow, SiKalilinux, SiTailwindcss, SiNextdotjs, SiTypescript, SiMetasploit } from "react-icons/si";

export default function TechBento({ language }: { language: "EN" | "ES" }) {
  const techCategories = [
    {
      title: language === "EN" ? "Frontend & UI" : "Frontend y UI",
      span: "col-span-1 md:col-span-2",
      color: "hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
      items: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: language === "EN" ? "Backend & Core" : "Backend y Core",
      span: "col-span-1",
      color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ]
    },
    {
      title: "AI & Data",
      span: "col-span-1",
      color: "hover:shadow-[0_0_20px_rgba(176,38,255,0.15)]",
      items: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      ]
    },
    {
      title: language === "EN" ? "Cybersecurity" : "Ciberseguridad",
      span: "col-span-1 md:col-span-2",
      color: "hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
      items: [
        { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
        { name: "Metasploit", icon: SiMetasploit, color: "#2B5296" },
      ]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-mono text-smoke-white uppercase mb-4 tracking-wider">
          <span className="text-neon-cyan mr-2">_</span>{language === "EN" ? "Tech_Arsenal" : "Arsenal_Técnico"}
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-neon-purple/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`cyber-border bg-absolute-black p-8 group transition-all duration-300 ${category.span} ${category.color} flex flex-col`}
          >
            <h3 className="font-mono text-sm text-smoke-white/50 uppercase tracking-widest mb-6 group-hover:text-smoke-white/80 transition-colors">
              // {category.title}
            </h3>

            <div className="flex flex-wrap gap-8 mt-auto justify-center md:justify-start">
              {category.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-white/[0.03] cyber-border flex items-center justify-center group-hover:bg-white/[0.05] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: item.color }} />
                    <item.icon className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  </div>
                  <span className="font-mono text-xs text-smoke-white/60">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
