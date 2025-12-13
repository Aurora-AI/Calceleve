import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-multiply pointer-events-none">
      {/* Logo Container */}
      <div className="relative w-40 h-12 pointer-events-auto">
        <Image 
          src={ASSETS.brand.logoFull} 
          alt={ASSETS.brand.alt} 
          fill
          className="object-contain object-left"
        />
      </div>
      
      {/* Menu Actions */}
      <div className="flex gap-6 pointer-events-auto">
        <button className="text-sm font-medium uppercase tracking-widest hover:text-slate-600 transition-colors">
          Menu
        </button>
        <button className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg">
          Dashboard
        </button>
      </div>
    </nav>
  );
}
