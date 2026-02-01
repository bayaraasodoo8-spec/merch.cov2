
import React from 'react';
import Magnetic from './Magnetic';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-deep-black border-b-4 border-deep-black">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Magnetic strength={0.3}>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-neon-lime p-1 brutalist-border">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-display text-neon-lime tracking-tighter uppercase leading-none">MERCH.CORP</h2>
          </div>
        </Magnetic>
        <nav className="hidden lg:flex items-center gap-8">
          <Magnetic strength={0.2}><a className="text-white font-bold uppercase tracking-widest hover:text-neon-lime transition-colors" href="#">Products</a></Magnetic>
          <Magnetic strength={0.2}><a className="text-white font-bold uppercase tracking-widest hover:text-neon-lime transition-colors" href="#">Corporate Merch</a></Magnetic>
          <Magnetic strength={0.2}><a className="text-white font-bold uppercase tracking-widest hover:text-neon-lime transition-colors" href="#">Projects</a></Magnetic>
          <Magnetic strength={0.2}><a className="text-white font-bold uppercase tracking-widest hover:text-neon-lime transition-colors" href="#">About Us</a></Magnetic>
        </nav>
        <div className="flex items-center gap-4">
          <Magnetic strength={0.4}>
            <button className="bg-neon-lime text-deep-black brutalist-border brutalist-shadow-sm px-6 py-2 text-sm font-display uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Project Portal
            </button>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};

export default Header;
