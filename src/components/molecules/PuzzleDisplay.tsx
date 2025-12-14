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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, scale }}
      // Z-Index controlado pelo pai (HeroSection)
      className="relative w-[90vw] max-w-[550px] aspect-[3/4] flex items-center justify-center pointer-events-none"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <Image
          src={ASSETS.hero.puzzleMain}
          alt={ASSETS.hero.alt}
          fill
          priority
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 90vw, 550px"
        />
      </motion.div>
    </motion.div>
  );
}
