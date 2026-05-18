"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function Stats({ language }: { language: "EN" | "ES" }) {
  const stats = [
    { label: language === "EN" ? "Deployed Projects" : "Proyectos Desplegados", value: 42, prefix: "", suffix: "+" },
    { label: language === "EN" ? "Lines of Code" : "Líneas de Código", value: 150000, prefix: ">", suffix: "" },
    { label: language === "EN" ? "Vulnerabilities Patched" : "Vulnerabilidades Resueltas", value: 312, prefix: "", suffix: "" },
  ];

  return (
    <section className="py-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="cyber-border bg-absolute-black/50 p-6 flex flex-col items-center justify-center text-center group hover:bg-neon-cyan/5 transition-colors duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-smoke-white mb-2 font-mono group-hover:text-neon-cyan transition-colors drop-shadow-[0_0_10px_rgba(0,243,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              <span className="text-neon-purple/70 text-2xl mr-1">{stat.prefix}</span>
              <Counter value={stat.value} />
              <span className="text-neon-cyan/70 text-2xl ml-1">{stat.suffix}</span>
            </div>
            <div className="font-mono text-sm text-smoke-white/60 uppercase tracking-widest mt-2 group-hover:text-smoke-white/90 transition-colors">
              {stat.label}
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon-cyan transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon-cyan transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
