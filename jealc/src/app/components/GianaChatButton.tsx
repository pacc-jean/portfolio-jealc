'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the terminal
const GianaTerminal = dynamic(() => import('./GianaTerminal'), { ssr: false });

const GianaChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
    setShowPulse(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 left-8 z-50">
        {showPulse && (
          <div className="absolute inset-0 animate-ping">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30"></div>
          </div>
        )}

        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-xl transition-all duration-300 ${
            isHovered ? 'opacity-40 scale-110' : ''
          }`}
        ></div>

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          className={`
            relative w-16 h-16 rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-600
            hover:from-yellow-300 hover:to-yellow-500
            active:from-yellow-500 active:to-yellow-700
            shadow-2xl hover:shadow-yellow-500/25
            transition-all duration-300 ease-out
            border-2 border-yellow-400/20 hover:border-yellow-400/40
            backdrop-blur-sm
            group
            ${isPressed ? 'scale-95' : isHovered ? 'scale-105' : 'scale-100'}
            ${isHovered ? 'rotate-12' : ''}
          `}
          aria-label="Open chat"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <MessageCircle 
              size={24} 
              className={`text-gray-900 transition-all duration-300 ${
                isHovered ? 'scale-110' : ''
              } ${isPressed ? 'scale-90' : ''}`}
            />
          </div>

          <div className={`absolute -top-1 -right-1 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
            <Sparkles size={12} className="text-yellow-200 animate-pulse" />
          </div>
        </button>

        {/* Tooltip */}
        <div className={`
          absolute left-20 top-1/2 transform -translate-y-1/2
          bg-gray-900 text-white px-3 py-2 rounded-lg
          shadow-xl border border-yellow-400/20
          whitespace-nowrap text-sm font-medium
          transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
        `}>
          Chat with Giana
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[80vh] bg-[#0a0a0a] border border-yellow-400/20 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <GianaTerminal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default GianaChatButton;