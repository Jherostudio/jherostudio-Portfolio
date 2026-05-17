"use client";

import { useState, useEffect } from "react";

const logs = [
  "Initialising AI models...",
  "Firewall Active...",
  "Decrypting secure payload...",
  "Connecting to node 0x7A...",
  "Bypassing security protocols...",
  "Compiling local dependencies...",
  "System scan: SECURE",
  "Anomaly detected... resolving.",
];

export default function SystemLog() {
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);

  useEffect(() => {
    const addLog = () => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setCurrentLogs((prev) => {
        const newLogs = [...prev, `> ${randomLog}`];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
    };

    addLog();
    const interval = setInterval(addLog, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 font-mono text-xs text-neon-cyan/70 pointer-events-none opacity-80 mix-blend-screen hidden md:block">
      <div className="flex flex-col gap-1">
        {currentLogs.map((log, i) => (
          <div key={i} className="animate-pulse">
            {log}
          </div>
        ))}
        <div className="animate-pulse text-neon-purple">&gt; _</div>
      </div>
    </div>
  );
}
