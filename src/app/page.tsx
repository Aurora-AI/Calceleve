"use client";

"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Garante registro dentro do hook para evitar erro de SSR
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Suavidade na animação atrelada ao scroll
      },
    });

    // 1. O quadrado cresce
    tl.fromTo(wrapper.current, 
      { width: "30vw", height: "40vh", borderRadius: "2rem", scale: 0.8 },
      { width: "100vw", height: "100vh", borderRadius: "0px", scale: 1, ease: "power1.inOut" },
      0
    );

    // 2. O texto sobe
    tl.to(text.current, { y: -200, opacity: 0, ease: "power1.in" }, 0);

  }, { scope: container });

  return (
    <main>
      {/* SEÇÃO HERO (250vh de altura para dar tempo de rolar) */}
      <section ref={container} className="relative h-[250vh] bg-white">
        
        {/* ELEMENTO STICKY (O palco que trava na tela) */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* TEXTO (Fica na frente) */}
          <h1 
            ref={text}
            className="z-20 relative text-[15vw] font-black leading-none text-black mix-blend-difference text-center"
          >
            CALCE<br/>LEVE
          </h1>

          {/* O QUADRADO QUE EXPANDE (Fica atrás) */}
          <div 
            ref={wrapper}
            className="absolute z-10 bg-gray-800 overflow-hidden shadow-2xl flex items-center justify-center"
          >
            {/* Tenta carregar a imagem, se falhar, fica cinza */}
            <img 
              src="/assets/hero/puzzle-render.png" 
              className="w-full h-full object-cover opacity-80"
              alt=""
            /> 
            {/* Fallback de texto se imagem quebrar */}
            <p className="text-white/20 font-bold absolute">IMAGEM AQUI</p>
          </div>

        </div>
      </section>

      {/* SEÇÃO DE CONTEÚDO (Para ter para onde rolar depois) */}
      <section className="h-screen bg-black flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">A Magia Aconteceu?</h2>
      </section>
    </main>
  );
}
