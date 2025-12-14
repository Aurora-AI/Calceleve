"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // 1. Registra o Plugin
    gsap.registerPlugin(ScrollTrigger);

    // 2. Inicializa o Lenis (Rolagem Suave)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // 3. Sincronia Crítica: Lenis -> ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Loop de Animação (Ticker)
    // Isso garante que o GSAP e o Lenis rodem no mesmo ritmo
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desativa a correção de lag do GSAP para evitar tremidas
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <div id="smooth-wrapper">{children}</div>;
}
