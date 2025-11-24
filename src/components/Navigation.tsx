import React from 'react';
import { Menu, X } from 'lucide-react';
import SakuraPetal from './SakuraPetal';

interface NavigationProps {
  onChatOpen: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onChatOpen, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center" aria-label="Main Navigation">
      {/* Logo */}
      <a 
        href="#" 
        className="flex items-center gap-2 text-sakura-300 group cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 rounded-lg p-1"
        aria-label="Hanami Home"
      >
         <div className="relative">
           <div className="absolute inset-0 bg-sakura-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <SakuraPetal className="w-6 h-6 text-sakura-400 group-hover:text-sakura-200 transition-colors duration-500 transform group-hover:rotate-[15deg]" />
         </div>
         <span className="font-fraunces font-bold text-xl tracking-tight text-white group-hover:text-sakura-100 transition-colors">Hanami</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {['Varieties', 'Planting', 'Festivals'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative py-1 hover:text-sakura-300 transition-colors group outline-none focus-visible:text-sakura-300 focus-visible:ring-2 focus-visible:ring-sakura-400 rounded-md px-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sakura-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
          ))}
      </div>

      {/* Desktop Action */}
      <button 
          onClick={onChatOpen}
          className="hidden md:block px-4 py-2 text-xs font-semibold text-sakura-100 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-sakura-400/50 hover:text-white hover:shadow-[0_0_15px_-3px_rgba(244,114,182,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 focus-visible:bg-white/10"
          aria-label="Open AI Guide Chat"
      >
          Ask AI
      </button>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-gray-300 hover:text-white transition-colors relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 rounded-md p-1"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  );
};

export default Navigation;