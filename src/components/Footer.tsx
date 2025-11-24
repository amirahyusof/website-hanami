import React from 'react';
import { Github, Twitter, Instagram, ArrowUp } from 'lucide-react';
import SakuraPetal from './SakuraPetal';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-sakura-900/20 pt-16 pb-12 px-6 mt-24">
       {/* Floating Back to Top Button - Positioned at the top border center */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button 
             onClick={scrollToTop}
             className="flex items-center justify-center w-12 h-12 rounded-full bg-deep-950 border border-sakura-900/30 text-sakura-500 hover:text-sakura-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all animate-float z-10 outline-none focus-visible:ring-2 focus-visible:ring-sakura-400"
             aria-label="Scroll to top"
          >
              <ArrowUp size={20} aria-hidden="true" />
          </button>
       </div>

       <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-sakura-300 mb-2 group cursor-default">
                <SakuraPetal className="w-6 h-6 text-sakura-500 group-hover:rotate-12 transition-transform duration-500" />
                <span className="font-fraunces font-bold text-lg tracking-tight text-white">Hanami</span>
            </div>
            <p className="text-xs text-gray-500">
               &copy; 2025 Hanami Project. <br className="md:hidden"/>Crafted with serenity.
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex gap-8 text-sm font-medium text-gray-400">
             <a href="#" className="hover:text-sakura-300 transition-colors outline-none focus-visible:text-sakura-300 focus-visible:ring-2 focus-visible:ring-sakura-400 rounded p-1">Privacy</a>
             <a href="#" className="hover:text-sakura-300 transition-colors outline-none focus-visible:text-sakura-300 focus-visible:ring-2 focus-visible:ring-sakura-400 rounded p-1">Terms</a>
             <a href="#" className="hover:text-sakura-300 transition-colors outline-none focus-visible:text-sakura-300 focus-visible:ring-2 focus-visible:ring-sakura-400 rounded p-1">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
             <div className="flex gap-4">
                {[
                  { Icon: Github, label: "GitHub" }, 
                  { Icon: Twitter, label: "Twitter" }, 
                  { Icon: Instagram, label: "Instagram" }
                ].map(({ Icon, label }, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="text-gray-600 hover:text-sakura-400 transition-colors outline-none focus-visible:text-sakura-400 focus-visible:scale-110"
                      aria-label={label}
                    >
                        <Icon size={18} aria-hidden="true" />
                    </a>
                ))}
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;