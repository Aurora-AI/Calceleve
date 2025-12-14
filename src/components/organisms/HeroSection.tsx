'use client';

import { PuzzleDisplay } from '@/components/molecules/PuzzleDisplay';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Camada de Tipografia (Visualmente Atrás) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "-0.05em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] md:text-[22vw] leading-none font-black text-slate-900/10 whitespace-nowrap select-none"
        >
          CALCE LEVE
        </motion.h1>
      </div>

      {/* Camada do Puzzle (Visualmente à Frente) */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 mt-10 md:mt-0">
        <PuzzleDisplay />
      </div>

      {/* Indicador de Scroll (Minimalista) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 mix-blend-multiply"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400">Scroll</span>
        <div className="w-[1px] h-10 bg-slate-200">
          <motion.div 
            animate={{ height: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-slate-800"
          />
        </div>
      </motion.div>
    </section>
  );
}
