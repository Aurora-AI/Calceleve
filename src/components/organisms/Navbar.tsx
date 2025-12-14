import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-multiply pointer-events-none">
      <div className="relative w-48 h-14 pointer-events-auto">
        <Image 
          src={ASSETS.brand.logoFull} 
          alt={ASSETS.brand.alt} 
          fill
          className="object-contain object-left"
        />
      </div>
      
      <div className="flex gap-8 pointer-events-auto items-center">
        <button className="text-xs font-bold uppercase tracking-[0.2em] hover:text-slate-600 transition-colors">
          Menu
        </button>
        <button className="px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all hover:scale-105 shadow-xl">
          Dashboard
        </button>
      </div>
    </nav>
  );
}
