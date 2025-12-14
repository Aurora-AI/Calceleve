"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeroScroll() {
  const container = useRef<HTMLDivElement>(null);
  const puzzleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(
        textRef.current,
        {
          scale: 15,
          opacity: 0,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        puzzleRef.current,
        {
          y: -100,
          opacity: 0,
          ease: "power1.in",
        },
        0,
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative h-[250vh] w-full bg-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div
          ref={puzzleRef}
          className="absolute top-12 left-8 z-20 w-48 overflow-hidden rounded-lg bg-gray-100 shadow-2xl md:top-20 md:left-20 md:w-80"
        >
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
          <img
            src="/assets/hero/puzzle-render.png"
            alt="Calceleve Puzzle"
            className="relative z-10 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        <h1
          ref={textRef}
          className="relative z-10 select-none text-center text-[12vw] font-black leading-none tracking-tighter text-black mix-blend-difference"
        >
          CALCE
          <br />
          LEVE
        </h1>

        <div className="absolute bottom-12 right-12 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          Visual Intelligence v1.0
        </div>
      </div>
    </section>
  );
}
