"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Magnetic from "@/components/atoms/Magnetic";
import { ASSETS } from "@/lib/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Fundo (Imagem) - Zoom Out Lento
      tl.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // 2. Texto - Sobe Sólido
      tl.from(
        textRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.5"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-brand-primary flex items-center justify-center"
    >
      {/* === CAMADA 0: FUNDO === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* A Imagem */}
        <div ref={bgRef} className="absolute inset-0 w-full h-full">
          <Image
            src={ASSETS.hero.puzzleMain}
            alt={ASSETS.hero.alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Película Escura (Contraste) */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* === CAMADA 20: FRENTE (Texto Sólido) === */}
      <div className="relative z-20 container mx-auto px-6 pt-12 text-center text-white">
        <div ref={textRef}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-brand-accent mb-6 font-medium">
            Inteligência Comercial Híbrida
          </h2>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 drop-shadow-2xl text-white">
            CALCELEVE <br />
            <span className="text-gray-300">SYSTEMS</span>
          </h1>

          <p className="max-w-xl mx-auto text-gray-200 text-lg md:text-xl mb-12 leading-relaxed font-light">
            Onde a robustez dos dados encontra a fluidez da decisão.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Magnetic>
              <Link
                href="/dashboard"
                className="group relative px-8 py-4 bg-white text-brand-primary rounded-full overflow-hidden flex items-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                <span className="relative z-10 font-bold tracking-tight">
                  ACESSAR SISTEMA
                </span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            </Magnetic>

            <Magnetic>
              <button className="group px-8 py-4 border border-white/30 text-white rounded-full flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/40">
                  <Play
                    size={12}
                    className="fill-brand-accent text-brand-accent ml-0.5"
                  />
                </div>
                <span className="font-medium tracking-wide">Ver Demo</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
