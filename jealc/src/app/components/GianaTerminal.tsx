'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GianaTerminalProps {
  onClose: () => void;
}

const GianaTerminal: React.FC<GianaTerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([
    'Initializing G.I.A.N.A...',
    'Connection established. Ready to assist.',
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom on new message
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `> ${input}`]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[80vh]">
        {/* Pulsating Glow Effect */}
        <div className="absolute inset-0 bg-yellow-400/20 rounded-xl blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-yellow-500/10 rounded-xl blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Main Terminal */}
        <div className="relative w-full h-full bg-[#0a0a0a] border border-yellow-400/20 rounded-xl shadow-lg overflow-hidden flex flex-col shadow-yellow-400/20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-yellow-400/20">
            <h2 className="text-yellow-400 font-mono text-lg">G.I.A.N.A. Terminal</h2>
            <button
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              [ close ]
            </button>
          </div>

          {/* Terminal Output */}
          <div
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm text-yellow-100 bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#111] scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-1">
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-yellow-400/10 p-3 bg-[#111] flex items-center gap-2">
            <span className="text-yellow-500 font-mono text-sm">~$</span>
            <input
              className="flex-1 bg-transparent text-yellow-100 font-mono text-sm focus:outline-none placeholder:text-yellow-400"
              placeholder="Ask Giana anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-colors text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GianaTerminal;