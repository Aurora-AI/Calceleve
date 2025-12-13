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

  // Física "Exo Ape": Parallax suave e leve rotação
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative w-full h-[80vh] flex items-center justify-center pointer-events-none">
      <motion.div 
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} // Curva de Bezier "Luxury"
        className="relative z-20 w-[85vw] md:w-[600px] aspect-[3/4]"
      >
        <Image
          src={ASSETS.hero.puzzleMain}
          alt={ASSETS.hero.alt}
          fill
          priority
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </motion.div>
    </div>
  );
}
