'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

const GianaChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hide pulse after initial attention-grabbing period
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
    setShowPulse(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 left-8 z-50">
        {/* Pulse Ring Animation */}
        {showPulse && (
          <div className="absolute inset-0 animate-ping">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30"></div>
          </div>
        )}
        
        {/* Glow Effect */}
        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-xl transition-all duration-300 ${
            isHovered ? 'opacity-40 scale-110' : ''
          }`}
        ></div>
        
        {/* Main Button */}
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
          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Icon Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <MessageCircle 
              size={24} 
              className={`
                text-gray-900 transition-all duration-300
                ${isHovered ? 'scale-110' : ''}
                ${isPressed ? 'scale-90' : ''}
              `}
            />
          </div>
          
          {/* Sparkle Effect */}
          <div className={`absolute -top-1 -right-1 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
            <Sparkles 
              size={12} 
              className="text-yellow-200 animate-pulse" 
            />
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-yellow-400/20 shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 px-6 py-4 border-b border-yellow-400/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <MessageCircle size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Chat with Giana</h3>
                    <p className="text-sm text-gray-400">AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
                >
                  <X size={16} className="text-gray-300" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="text-center text-gray-300">
                <div className="mb-4">
                  <Sparkles size={32} className="text-yellow-400 mx-auto mb-2 animate-pulse" />
                </div>
                <p className="text-lg font-medium mb-2">Coming Soon!</p>
                <p className="text-sm text-gray-400">
                  The chat functionality is being developed. 
                  <br />
                  Stay tuned for an amazing conversational experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GianaChatButton;