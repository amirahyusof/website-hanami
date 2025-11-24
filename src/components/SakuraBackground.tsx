import React, { useEffect, useState, useRef } from 'react';
import { PetalConfig } from '../types';

const SakuraBackground: React.FC = () => {
  const [petals, setPetals] = useState<PetalConfig[]>([]);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newPetals: PetalConfig[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      delay: `-${Math.random() * 20}s`,
      opacity: 0.3 + Math.random() * 0.5,
      size: 10 + Math.random() * 15,
    }));
    setPetals(newPetals);

    const handleScroll = () => {
      if (blob1Ref.current && blob2Ref.current) {
        const scrollY = window.scrollY;
        // Move blobs at different speeds to create depth
        blob1Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        blob2Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep gradient mesh with Parallax */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-sakura-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse will-change-transform" 
      />
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen will-change-transform" 
      />
      
      {/* Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-10%]"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animation: `fall ${petal.animationDuration} linear infinite, sway 3s ease-in-out infinite alternate`,
            animationDelay: petal.delay,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-sakura-400/60 w-full h-full transform rotate-45">
            <path d="M12 2C12 2 14 8 18 10C22 12 22 14 18 18C14 22 12 22 12 22C12 22 10 22 6 18C2 14 2 12 6 10C10 8 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraBackground;