import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the spirit of the Sakura. Ask me about varieties, care, or the history of Hanami.', timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
        // Focus input or scroll to bottom
        scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(input);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-modal-title"
    >
      <div className="w-full max-w-lg bg-deep-900 border border-sakura-900/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
        
        {/* Header */}
        <div className="bg-sakura-950/50 p-4 border-b border-sakura-900/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sakura-200">
            <Sparkles size={18} className="text-sakura-400" aria-hidden="true" />
            <h3 id="chat-modal-title" className="font-fraunces font-semibold text-lg">Sakura Spirit Guide</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sakura-400 rounded-full p-1"
            aria-label="Close chat"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-sakura-900 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-sakura-700 text-white rounded-br-none' 
                        : 'bg-gray-800/50 text-gray-100 border border-gray-700 rounded-bl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-gray-800/50 p-3 rounded-xl rounded-bl-none flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-sakura-400" aria-hidden="true" />
                        <span className="text-xs text-gray-400">Thinking...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-sakura-950/30 border-t border-sakura-900/30">
            <div className="relative">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Sakura care..."
                    aria-label="Message to Sakura Spirit"
                    className="w-full bg-gray-900/50 border border-sakura-900/30 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sakura-500 focus:border-sakura-500 placeholder-gray-500 transition-all"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    aria-label="Send message"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-sakura-600 hover:bg-sakura-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <Send size={16} aria-hidden="true" />
                </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-gray-500">Powered by Gemini 2.5 Flash</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;