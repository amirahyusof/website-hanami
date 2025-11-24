import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SakuraPetal from './SakuraPetal';

interface HeroButtonProps {
  onClick: () => void;
  className?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button 
        onClick={onClick}
        aria-label="Start Botanical Guide"
        className={`group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#160b10] border border-sakura-900/30 text-gray-200 font-medium transition-all duration-300 hover:border-sakura-500/50 hover:bg-[#1f0f16] hover:text-white hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 focus-visible:border-sakura-500 ${className}`}
    >
        {/* Gradient Glow behind button */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-gradient-to-r from-sakura-500 via-purple-500 to-sakura-500 blur-xl transition-opacity duration-500" aria-hidden="true" />
        
        <div className="relative flex items-center justify-center w-6 h-6" aria-hidden="true">
            {/* Animated Petal */}
            <SakuraPetal className="w-5 h-5 text-sakura-500 group-hover:animate-spin-slow group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-700" />
            
            {/* Sparkles that appear on hover */}
            <Sparkles className="absolute w-3 h-3 text-white opacity-0 group-hover:opacity-100 -top-1 -right-1 animate-pulse" />
        </div>
        
        <span className="relative tracking-wide">Start Botanical Guide</span>
        
        <div className="w-px h-4 bg-white/10 mx-1" aria-hidden="true" />
        
        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden="true" />
    </button>
  );
};

export default HeroButton;