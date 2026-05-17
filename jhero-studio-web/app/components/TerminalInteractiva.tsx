"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CommandRecord {
  command: string;
  response: React.ReactNode;
}

export default function TerminalInteractiva({ language }: { language: "EN" | "ES" }) {
  const [input, setInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      command: "",
      response: (
        <div className="text-emerald-400">
          <p>{language === "EN" ? "Initializing JHERO_OS kernel..." : "Inicializando kernel JHERO_OS..."}</p>
          <p>{language === "EN" ? "System loaded. Type" : "Sistema cargado. Escribe"} <span className="text-neon-cyan">'help'</span> {language === "EN" ? "to see available commands." : "para ver los comandos disponibles."}</p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="text-neon-cyan">
            <p>{language === "EN" ? "AVAILABLE COMMANDS:" : "COMANDOS DISPONIBLES:"}</p>
            <ul className="list-none ml-4 mt-2 space-y-1">
              <li><span className="text-emerald-400 w-20 inline-block">help</span>     - {language === "EN" ? "Display this manual" : "Muestra este manual"}</li>
              <li><span className="text-emerald-400 w-20 inline-block">projects</span> - {language === "EN" ? "View secured archives & deployments" : "Ver archivos y despliegues seguros"}</li>
              <li><span className="text-emerald-400 w-20 inline-block">skills</span>   - {language === "EN" ? "List technical capabilities" : "Listar capacidades técnicas"}</li>
              <li><span className="text-emerald-400 w-20 inline-block">clear</span>    - {language === "EN" ? "Wipe terminal output" : "Limpiar salida de la terminal"}</li>
            </ul>
          </div>
        );
        break;
      case "skills":
        response = (
          <div className="text-emerald-400">
            <p className="text-neon-cyan mb-2">&gt;&gt; LOADING CAPABILITIES MATRIX...</p>
            <p>[+] FRONTEND: React, Next.js, Framer Motion, TailwindCSS</p>
            <p>[+] BACKEND : Node.js, Express, Firebase, Supabase</p>
            <p>[+] AI/ML   : Prompt Engineering, Agentic Workflows (LLMs)</p>
            <p>[+] SECURITY: Vulnerability Assessment, SecOps, OWASP</p>
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="text-emerald-400">
            <p className="text-neon-cyan mb-2">&gt;&gt; FETCHING ARCHIVES...</p>
            <p>[1] Finova App - Financial dashboard (Status: Active)</p>
            <p>[2] Project Nexus - AI Integration platform (Status: Classified)</p>
            <p>[3] System Override - Security auditing tool (Status: Deployed)</p>
            <p className="mt-2 text-smoke-white/50">Run <span className="text-neon-cyan">projects --details</span> for more info.</p>
          </div>
        );
        break;
      case "projects --details":
        response = <span className="text-red-500">Access denied. Requires level 4 clearance. This incident will be reported.</span>;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
      case "su":
        response = <span className="text-red-500">Permission denied. You do not have root privileges.</span>;
        break;
      case "sudo hack":
      case "sudo root":
        setIsAdmin(true);
        // Clean terminal immediately on admin access
        response = (
          <div className="text-red-500 animate-pulse mt-4">
            <pre className="text-[10px] md:text-sm font-mono leading-tight mb-4">
{`    ___   _____________   __________  _____
   /   | / ____/ ____/ | / /_  __/ / / /   |
  / /| |/ /   / /   /  |/ / / / / / / / /| |
 / ___ / /___/ /___/ /|  / / / / /_/ / ___ |
/_/  |_\____/\____/_/ |_/ /_/  \____/_/  |_|`}
            </pre>
            <p className="font-bold text-base md:text-lg mb-2">[ACCESS GRANTED] Welcome, Administrator. Initializing Deep Scan....</p>
            <p className="text-smoke-white mt-4">
              <span className="text-red-500 mr-2">&gt;&gt;</span> Classified Project Exposed:{" "}
              <a href="mailto:contact@jhero.studio" className="text-white underline hover:text-red-400 font-bold ml-2">
                INITIATE DIRECT CONTACT
              </a>
            </p>
          </div>
        );
        // Overwrite history completely instead of appending
        setHistory([{ command: input, response }]);
        setInput("");
        return;
      case "":
        response = "";
        break;
      default:
        response = <span className="text-red-400">bash: {cmd}: command not found. Type 'help' for available commands.</span>;
    }

    setHistory((prev) => [...prev, { command: input, response }]);
    setInput("");
  };

  return (
    <section className="py-20 relative z-10" id="terminal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono text-smoke-white uppercase mb-4 tracking-wider">
          <span className="text-neon-cyan mr-2">[ 02 //</span>{language === "EN" ? "INTERACTIVE_SHELL" : "CONSOLA_INTERACTIVA"}<span className="text-neon-cyan ml-2">]</span>
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-neon-cyan/50 to-transparent" />
      </motion.div>

      <div 
        className={`border p-4 md:p-6 h-[450px] flex flex-col font-mono text-sm md:text-base transition-all duration-500 rounded-sm cursor-text ${
          isAdmin
            ? "bg-[#1a0505] border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]"
            : "bg-[#0b0b0c] border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.05)] hover:shadow-[0_0_40px_rgba(0,243,255,0.1)]"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
          </div>
          <span className={`text-xs font-mono select-none ${isAdmin ? "text-red-500/80" : "text-white/40"}`}>
            {isAdmin ? "root@jhero-os:~#" : "root@jhero-os:~"}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-4 pr-2">
          {history.map((record, i) => (
            <div key={i} className="opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
              {record.command && (
                <div className="flex gap-3 mb-1">
                  <span className={`select-none ${isAdmin ? "text-red-500" : "text-neon-cyan"}`}>
                    {isAdmin ? "root@jhero-os:~#" : "guest@jhero:~$"}
                  </span>
                  <span className="text-smoke-white">{record.command}</span>
                </div>
              )}
              <div className="ml-0 md:ml-4 break-words">{record.response}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleCommand} className="mt-4 flex gap-3 items-center border-t border-white/5 pt-4">
          <span className={`select-none animate-pulse ${isAdmin ? "text-red-500" : "text-neon-cyan"}`}>
            {isAdmin ? "root@jhero-os:~#" : "guest@jhero:~$"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 bg-transparent border-none outline-none text-smoke-white focus:ring-0 p-0 placeholder-white/20 ${isAdmin ? "caret-red-500" : "caret-neon-cyan"}`}
            spellCheck="false"
            autoComplete="off"
            autoFocus
          />
        </form>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
