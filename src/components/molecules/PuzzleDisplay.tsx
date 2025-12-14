'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { useRef } from 'react';

export function PuzzleDisplay() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Física Ajustada: Movimento mais sutil e elegante
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div ref={ref} className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center pointer-events-none">
      <motion.div 
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Curva "Exo Ape"
        className="relative z-20 w-full h-full"
      >
        <Image
          src={ASSETS.hero.puzzleMain}
          alt={ASSETS.hero.alt}
          fill
          priority
          // AQUI ESTÁ A CORREÇÃO DA ELEGÂNCIA:
          // object-contain: Garante a proporção original (não estica).
          // object-center: Mantém o foco no centro.
          className="object-contain object-center drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
