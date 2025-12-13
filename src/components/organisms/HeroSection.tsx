'use client';

import { PuzzleDisplay } from '@/components/molecules/PuzzleDisplay';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#FDFDFD] flex flex-col items-center pt-20 overflow-hidden">
      
      {/* Camada de Tipografia (Fica visualmente atrás da cabeça em telas grandes) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center select-none">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="text-[15vw] leading-none font-bold tracking-tighter text-slate-900/10 whitespace-nowrap"
        >
          CALCE LEVE
        </motion.h1>
      </div>

      {/* Camada do Puzzle */}
      <div className="z-20 w-full max-w-7xl mx-auto px-4">
        <PuzzleDisplay />
      </div>

      {/* Camada de Rodapé / Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium">Scroll para Explorar</span>
        <div className="w-[1px] h-12 bg-slate-200 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
