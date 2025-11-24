import React, { useRef, useEffect } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
    title: "Morning Dew",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    title: "Kyoto Streets",
    span: "col-span-1 md:col-span-1 md:row-span-2" // Tall image
  },
  {
    url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80",
    title: "Pale Sky",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1542051841857-5f906991dd76?auto=format&fit=crop&w=800&q=80",
    title: "Mountain Bloom",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1621131188437-1f0f5c5f93d6?auto=format&fit=crop&w=800&q=80",
    title: "Night Illumination",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=800&q=80",
    title: "Petal Storm",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1508554272692-713214561d38?auto=format&fit=crop&w=800&q=80",
    title: "Riverside Walk",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1531329231559-486714628c2d?auto=format&fit=crop&w=800&q=80",
    title: "Macro Details",
    span: "col-span-1 row-span-1"
  }
];

const PhotoGallery: React.FC = () => {
  const bgLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgLightRef.current) {
        const scrollY = window.scrollY;
        // Move light leak slightly slower than scroll for depth
        bgLightRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 px-6 bg-deep-900 relative overflow-hidden" aria-label="Photo Gallery">
      {/* Decorative light leak with Parallax */}
      <div 
        ref={bgLightRef}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-sakura-500/5 rounded-full blur-[120px] pointer-events-none will-change-transform" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sakura-400 mb-3" aria-hidden="true">
                <Camera className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">Visual Journey</span>
            </div>
            <h2 className="font-fraunces text-4xl md:text-5xl text-white mb-4">Captured Moments</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Glimpses of ephemeral beauty from across Japan.
            </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, index) => (
            <ScrollReveal 
                key={index} 
                delay={index * 80} // Slightly faster stagger
                direction='none' // Scale effect only
                className={`relative group overflow-hidden rounded-2xl ${photo.span}`}
            >
              <div 
                className="block w-full h-full relative outline-none focus-visible:ring-4 focus-visible:ring-sakura-400 rounded-2xl cursor-pointer"
                tabIndex={0}
                role="figure"
                aria-label={`Photo of ${photo.title}`}
              >
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 group-focus-visible:bg-gray-900/0 transition-colors z-10" />
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 group-focus-visible:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-white font-fraunces text-lg translate-y-4 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-500">{photo.title}</h3>
                  <div className="flex items-center gap-2 text-sakura-300 text-xs mt-1 translate-y-4 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-500 delay-75" aria-hidden="true">
                      <Maximize2 size={12} />
                      <span>View Fullsize</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;