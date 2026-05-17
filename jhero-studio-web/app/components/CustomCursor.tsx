"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      <motion.div
        className="relative flex items-center justify-center w-8 h-8"
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className={`absolute w-full h-[1px] bg-neon-cyan transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-40'}`} />
        <div className={`absolute h-full w-[1px] bg-neon-cyan transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-40'}`} />
        
        <div className={`absolute w-1 h-1 bg-smoke-white rounded-full transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
        
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
