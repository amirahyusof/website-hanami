import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onChatOpen: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onChatOpen }) => {
  return (
    <div 
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-deep-950/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
    >
        {['Varieties', 'Planting', 'Festivals'].map((item, idx) => (
          <a 
            key={item}
            href="#"
            className="font-fraunces text-3xl text-gray-300 hover:text-sakura-300 transition-colors transform hover:scale-105 outline-none focus:text-sakura-300 focus:scale-105"
            onClick={onClose}
            style={{ transitionDelay: `${idx * 50}ms` }}
            tabIndex={isOpen ? 0 : -1}
          >
            {item}
          </a>
        ))}
        <button 
           onClick={() => { onChatOpen(); onClose(); }}
           className="mt-8 px-8 py-3 rounded-full bg-sakura-600 text-white font-medium shadow-[0_0_20px_rgba(219,39,119,0.4)] outline-none focus:ring-4 focus:ring-sakura-800"
           tabIndex={isOpen ? 0 : -1}
        >
           Ask AI Guide
        </button>
    </div>
  );
};

export default MobileMenu;