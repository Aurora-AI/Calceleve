'use client';

import { PuzzleDisplay } from '@/components/molecules/PuzzleDisplay';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] bg-[#FDFDFD] flex flex-col items-center justify-center overflow-hidden">
      
      {/* CAMADA 1: PUZZLE (FUNDO/MEIO) */}
      {/* Z-Index 10: Fica atrás do texto, mas à frente do background branco */}
      <div className="relative z-10 w-full flex items-center justify-center">
         <PuzzleDisplay />
      </div>

      {/* CAMADA 2: TIPOGRAFIA (FRENTE - GLASS EFFECT) */}
      {/* Z-Index 20: Fica NA FRENTE da cabeça */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          // AQUI ESTÁ A MÁGICA DO "BLUR ESCURO/TRANSPARENTE":
          // text-slate-900/80: Cor escura semi-transparente.
          // mix-blend-overlay: Faz o texto se fundir com a imagem atrás, criando contraste.
          // blur-[1px]: Um leve desfoque nas bordas para integrar.
          className="text-[18vw] xl:text-[22vw] font-black text-slate-900/80 leading-none whitespace-nowrap mix-blend-overlay blur-[0.5px]"
        >
          CALCE LEVE
        </motion.h1>
      </div>

      {/* CAMADA 3: SCROLL INDICATOR (UI) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-semibold">Scroll para Explorar</span>
        <div className="w-[1px] h-10 bg-slate-200 overflow-hidden">
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
