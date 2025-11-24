import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface BloomData {
  species: string;
  period: string;
  description: string;
  color: string;
  startCol: number; // For grid placement (1-12 grid based on weeks)
  span: number;
}

const speciesData: BloomData[] = [
  {
    species: "Kawazu-zakura",
    period: "Early Feb - Early Mar",
    description: "Known for early blooming and deep pink petals.",
    color: "bg-pink-600",
    startCol: 1,
    span: 3
  },
  {
    species: "Somei Yoshino",
    period: "Late Mar - Early Apr",
    description: "The classic, pale pink variety found in Tokyo.",
    color: "bg-pink-300",
    startCol: 5,
    span: 2
  },
  {
    species: "Shidarezakura",
    period: "Late Mar - Mid Apr",
    description: "Weeping cherry trees with cascading branches.",
    color: "bg-rose-400",
    startCol: 6,
    span: 3
  },
  {
    species: "Kanzan (Yaezakura)",
    period: "Mid Apr - Late Apr",
    description: "Double-blossom variety with rich color.",
    color: "bg-fuchsia-500",
    startCol: 8,
    span: 2
  },
  {
    species: "Kikuzakura",
    period: "Late Apr - Early May",
    description: "Chrysanthemum cherry with 100+ petals.",
    color: "bg-pink-700",
    startCol: 9,
    span: 3
  }
];

const BloomTimeline: React.FC = () => {
  const bgBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgBlobRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect relative to the section's position roughly
        bgBlobRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 border-t border-sakura-900/20 bg-deep-950 overflow-hidden" aria-label="Bloom Forecast">
      {/* Decorative Background Elements with Parallax */}
      <div 
        ref={bgBlobRef}
        className="absolute top-0 left-1/4 w-96 h-96 bg-sakura-900/10 rounded-full blur-[100px] pointer-events-none will-change-transform" 
        aria-hidden="true"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sakura-400 mb-3" aria-hidden="true">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Seasonal Tracker</span>
          </div>
          <h2 className="font-fraunces text-4xl md:text-5xl text-white mb-4">2025 Bloom Forecast</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Timing is everything in Hanami. Explore the projected flowering windows for Japan's most beloved varieties.
          </p>
        </ScrollReveal>

        {/* Desktop Timeline Visual */}
        <ScrollReveal delay={200} className="hidden md:block bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
          {/* Timeline Header (Months) */}
          <div className="grid grid-cols-12 gap-2 mb-6 text-center text-xs font-medium text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4" aria-hidden="true">
            <div className="col-span-3">February</div>
            <div className="col-span-4">March</div>
            <div className="col-span-4">April</div>
            <div className="col-span-1">May</div>
          </div>

          {/* Rows - Semantic List */}
          <ul className="space-y-6">
            {speciesData.map((item, index) => (
              <li key={index} className="group relative list-none">
                <div className="flex items-center mb-2">
                   <span className="w-32 text-sm font-semibold text-sakura-100">{item.species}</span>
                </div>
                {/* Bar Container */}
                <div className="h-12 w-full bg-white/[0.02] rounded-lg relative overflow-hidden grid grid-cols-12 gap-2" role="figure" aria-label={`Timeline for ${item.species}`}>
                   {/* The Bar */}
                   <div 
                      className={`absolute top-2 bottom-2 rounded-md ${item.color} shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.01]`}
                      style={{
                        gridColumnStart: item.startCol,
                        gridColumnEnd: `span ${item.span}`
                      }}
                   >
                      <div className="w-full h-full flex items-center px-3">
                        <span className="text-[10px] font-bold text-white/90 truncate">{item.period}</span>
                      </div>
                   </div>
                </div>
                
                {/* Hover Details */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-20 border border-sakura-900/50" role="tooltip">
                    {item.description}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-sakura-900/50"></div>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
             <div className="flex gap-4">
                <span className="flex items-center gap-1"><MapPin size={12} aria-hidden="true" /> Major Cities</span>
                <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> Projected Dates</span>
             </div>
             <span>*Forecast based on historical averages</span>
          </div>
        </ScrollReveal>

        {/* Mobile Card View */}
        <ul className="md:hidden space-y-4">
            {speciesData.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100} className="bg-white/[0.03] border border-white/5 p-5 rounded-xl hover:bg-white/[0.05] transition-colors list-none">
                    <li>
                      <div className="flex justify-between items-start mb-2">
                          <h3 className="font-fraunces text-lg text-sakura-100">{item.species}</h3>
                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase text-white/90 ${item.color}`}>
                              {item.period.split(' - ')[0]}
                          </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden" aria-hidden="true">
                          <div className={`h-full ${item.color} w-3/4 rounded-full`}></div>
                      </div>
                    </li>
                </ScrollReveal>
            ))}
        </ul>
        
      </div>
    </section>
  );
};

export default BloomTimeline;