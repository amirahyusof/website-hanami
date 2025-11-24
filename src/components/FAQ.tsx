import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "When is the best time to see Cherry Blossoms in Japan?",
    answer: "The season varies by region. It typically begins in January in Okinawa, reaches Kyoto and Tokyo in late March to early April, and concludes in Hokkaido in early May. The 'peak bloom' (mankai) usually lasts only a week."
  },
  {
    question: "Can I grow a Sakura tree in a pot?",
    answer: "Yes! Varieties like the 'Bonsai Cherry' or 'Kojo-no-mai' are perfect for containers. They require a cold dormant period in winter and plenty of sunlight. Our AI Botanical Guide can provide specific care instructions for container gardening."
  },
  {
    question: "What does 'Hanami' mean?",
    answer: "'Hanami' literally means 'flower viewing'. It is the traditional Japanese custom of enjoying the transient beauty of flowers, specifically cherry blossoms. It often involves outdoor parties beneath the blooming trees."
  },
  {
    question: "Why do the petals fall so quickly?",
    answer: "Sakura are admired for their transience. The petals fall while still at the height of their beauty, symbolizing the ephemeral nature of life (mono no aware)—a reminder to cherish every moment."
  },
  {
    question: "How accurate is the Bloom Forecast?",
    answer: "Our forecast is based on historical averages and typical climate patterns. However, actual bloom times are heavily influenced by real-time weather conditions like temperature spikes or heavy rain."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-deep-950 border-t border-sakura-900/10 relative" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sakura-400 mb-3" aria-hidden="true">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Knowledge Base</span>
          </div>
          <h2 className="font-fraunces text-4xl md:text-5xl text-white mb-4">Curiosities of the Blossom</h2>
          <p className="text-gray-400">
            Common questions about the season, the trees, and the tradition.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'bg-white/[0.03] border-sakura-500/30 shadow-[0_0_20px_rgba(219,39,119,0.1)]' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 focus-visible:bg-white/[0.05] rounded-t-2xl"
                >
                  <span className={`font-fraunces text-lg transition-colors ${activeIndex === index ? 'text-sakura-100' : 'text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-sakura-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    aria-hidden="true"
                  />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
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

export default FAQ;