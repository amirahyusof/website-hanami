import React, { useState } from 'react';
import SakuraBackground from './components/SakuraBackground';
import ChatModal from './components/ChatModel';
import BloomTimeline from './components/BloomTimeline';
import PhotoGallery from './components/PhotoGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import HeroButton from './components/HeroButton';
import { Flower2, Wind, Info } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-deep-950 text-white selection:bg-sakura-900 selection:text-white overflow-x-hidden">
      
      <SakuraBackground />

      <Navigation 
        onChatOpen={() => setIsChatOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onChatOpen={() => setIsChatOpen(true)}
      />

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pt-12 pb-24 md:pt-20 md:pb-32">
        
        {/* Badge */}
        <ScrollReveal delay={100}>
          <div className="mb-8 md:mb-10 hover:scale-105 transition-transform cursor-default">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-sakura-800/50 bg-sakura-950/30 text-sakura-300 text-xs font-medium uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-sakura-500 mr-2 animate-pulse"></span>
                  Blooming Season 2025
              </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={300}>
            <h1 className="font-fraunces text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto text-transparent bg-clip-text bg-gradient-to-b from-white to-sakura-100 drop-shadow-xl">
            Eternal Beauty in <br className="hidden md:block" /> Every Petal
            </h1>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={500}>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium font-sans">
            Discover the ancient art of Hanami. Cultivate the serene elegance of Japanese Cherry Blossoms in your own sanctuary.
            </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={700}>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            
            <HeroButton onClick={() => setIsChatOpen(true)} />

            <button className="group px-8 py-3.5 rounded-full text-gray-400 font-medium border border-transparent hover:text-white transition-all duration-300 flex items-center gap-2">
                <Info className="w-4 h-4 group-hover:text-sakura-300 transition-colors" />
                <span>Learn about Species</span>
            </button>
            </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {[
                { icon: Flower2, title: "Diverse Varieties", desc: "From white Somei Yoshino to pink Kwanzan." },
                { icon: Wind, title: "Seasonal Care", desc: "Expert tips for spring blooms and winter dormancy." },
                { icon: Info, title: "Cultural History", desc: "The deep roots of Sakura in Japanese heritage." }
            ].map((item, i) => (
                <ScrollReveal key={i} delay={900 + (i * 100)}>
                    <div className="h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-sakura-500/30 transition-all duration-300 text-left group hover:-translate-y-2 hover:shadow-xl hover:shadow-sakura-900/10 cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-sakura-900/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sakura-900/30 transition-all duration-300">
                            <item.icon className="text-sakura-400 w-5 h-5 group-hover:text-sakura-300" />
                        </div>
                        <h3 className="text-sakura-100 font-fraunces font-semibold text-lg mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{item.desc}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>

      </main>

      {/* Content Sections */}
      <BloomTimeline />
      
      <PhotoGallery />

      <FAQ />
      
      <Footer />

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
