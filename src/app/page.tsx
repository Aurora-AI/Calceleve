import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      {/* Espaço para conteúdo futuro (Dashboard Preview) */}
      <div className="h-screen w-full bg-slate-50 relative z-10 flex items-center justify-center">
        <p className="text-slate-300 font-medium tracking-widest">DADOS SENSÍVEIS ABAIXO</p>
      </div>
    </main>
  );
}
