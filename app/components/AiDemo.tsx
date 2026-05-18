"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Send, Loader2, Zap } from "lucide-react";

export default function AiDemo({ language }: { language: "EN" | "ES" }) {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ sentiment: string; summary: string; keywords: string[] } | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    setResult(null);

    // Leer variables de entorno
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    try {
      if (!apiKey) {
        // FALLBACK: Si no hay llave, evitamos que la app se rompa y usamos la simulación
        console.warn("[System]: NEXT_PUBLIC_GEMINI_API_KEY no está definida. Activando simulación local (Fallback Mode).");
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const isPositive = input.toLowerCase().includes("good") || input.toLowerCase().includes("great") || input.toLowerCase().includes("amazing") || input.toLowerCase().includes("secure");
        const isNegative = input.toLowerCase().includes("bad") || input.toLowerCase().includes("error") || input.toLowerCase().includes("hack") || input.toLowerCase().includes("vulnerable");
        
        const words = input.split(" ").filter(w => w.length > 4);
        const keywords = Array.from(new Set(words)).slice(0, 3);
        
        setResult({
          sentiment: isPositive ? "POSITIVE (0.89)" : isNegative ? "NEGATIVE (0.75)" : "NEUTRAL (0.50)",
          summary: `[Fallback Mode]: The text is a ${input.length} char sequence discussing [${keywords.join(", ") || "general topics"}].`,
          keywords: keywords.length > 0 ? keywords : ["data", "input", "system"]
        });
      } else {
        // PRODUCCIÓN: Llamado real a la API de Gemini
        console.log(`[System]: Conectando de forma segura a Gemini API`);
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: "Eres el motor de PLN subyacente de JHERO STUDIO. Analiza el siguiente texto y devuelve estrictamente un objeto JSON con tres campos: sentimiento (ej: POSITIVE, NEGATIVE, NEUTRAL), palabrasClave (un array de strings) y resumen (una sola frase técnica e impactante)" }]
            },
            contents: [
              { parts: [{ text: input }] }
            ],
            generationConfig: {
              responseMimeType: "application/json"
            }
          })
        });

        if (!response.ok) {
          throw new Error("NEURAL_LINK_FAILED");
        }

        const data = await response.json();
        const jsonString = data.candidates[0].content.parts[0].text;
        const parsedResult = JSON.parse(jsonString);
        
        setResult({
          sentiment: parsedResult.sentimiento || "AUTHORIZED (0.99)",
          summary: parsedResult.resumen || "[Live API Mode]: Text analyzed successfully via secure endpoint.",
          keywords: parsedResult.palabrasClave || ["api", "connected", "verified"]
        });
      }
    } catch (error) {
      console.error("[System Error]: Fallo en el análisis de IA:", error);
      setResult({
        sentiment: "[ERROR: NEURAL_LINK_FAILED]",
        summary: language === "EN" ? "The connection to the main processing core has been interrupted." : "La conexión con el núcleo de procesamiento principal ha sido interrumpida.",
        keywords: ["neural_link", "failed", "offline"]
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-mono text-smoke-white uppercase mb-4 tracking-wider">
            <span className="text-neon-purple mr-2">_</span>{language === "EN" ? "AI_Core_Demo" : "Demo_Núcleo_IA"}
          </h2>
          <div className="h-[1px] w-48 bg-gradient-to-r from-neon-purple/50 to-transparent" />
        </div>
        <div className="hidden md:flex items-center gap-2 text-neon-purple font-mono text-sm border border-neon-purple/30 px-3 py-1 rounded-sm bg-neon-purple/5">
          <Cpu className="w-4 h-4" />
          <span>NLP_MODULE_ACTIVE</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-border bg-absolute-black/60 p-6 flex flex-col h-full"
        >
          <div className="mb-4 text-smoke-white/70 font-mono text-sm">
            <p className="mb-2">{language === "EN" ? "Test the simulated NLP Engine." : "Prueba el motor de PNL simulado."}</p>
            <p className="text-xs text-smoke-white/40">{language === "EN" ? "Input any text to analyze sentiment, extract keywords, and generate a micro-summary." : "Ingresa cualquier texto para analizar el sentimiento, extraer palabras clave y generar un micro-resumen."}</p>
          </div>
          
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === "EN" ? "Initialize data stream here..." : "Inicializa el flujo de datos aquí..."}
            className="flex-1 w-full bg-white/[0.02] border border-white/10 rounded-sm p-4 text-smoke-white font-mono text-sm resize-none focus:outline-none focus:border-neon-purple/50 transition-colors mb-4 min-h-[150px] cursor-text"
          />
          
          <button
            onClick={handleAnalyze}
            disabled={isProcessing || !input.trim()}
            className="flex items-center justify-center gap-2 bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple border border-neon-purple/50 py-3 px-6 font-mono text-sm uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isProcessing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
            {isProcessing ? (language === "EN" ? "Processing..." : "Procesando...") : (language === "EN" ? "Run Analysis" : "Ejecutar Análisis")}
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-border bg-absolute-black/60 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="font-mono text-neon-purple uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4" /> {language === "EN" ? "Output Console" : "Consola de Salida"}
          </h3>

          <div className="font-mono text-sm space-y-6">
            {!result && !isProcessing && (
              <div className="text-smoke-white/30 h-full flex items-center justify-center min-h-[200px] border border-dashed border-white/10">
                {language === "EN" ? "Awaiting input data..." : "Esperando datos de entrada..."}
              </div>
            )}
            
            {isProcessing && (
              <div className="text-neon-purple h-full flex flex-col items-center justify-center min-h-[200px] gap-4">
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-neon-purple"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                </div>
                <span className="animate-pulse">{language === "EN" ? "Processing data..." : "Procesando datos..."}</span>
              </div>
            )}

            {result && !isProcessing && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-smoke-white/80"
              >
                <div>
                  <div className="text-xs text-smoke-white/40 mb-1">SENTIMENT_ANALYSIS</div>
                  <div className={`px-3 py-2 border ${result.sentiment.includes('POSITIVE') ? 'border-green-500/30 text-green-400 bg-green-500/5' : result.sentiment.includes('NEGATIVE') ? 'border-red-500/30 text-red-400 bg-red-500/5' : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5'}`}>
                    {result.sentiment}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-smoke-white/40 mb-1">EXTRACTED_KEYWORDS</div>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((kw, i) => (
                      <span key={i} className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-smoke-white/40 mb-1">AUTO_SUMMARY</div>
                  <div className="p-3 bg-white/5 border border-white/10 leading-relaxed">
                    {result.summary}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
