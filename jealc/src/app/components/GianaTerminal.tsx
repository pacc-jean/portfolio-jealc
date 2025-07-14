'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GianaTerminalProps {
  onClose: () => void;
}

interface Message {
  role: 'giana' | 'user' | 'system';
  content: string;
}

const GianaTerminal: React.FC<GianaTerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const BACKEND_URL = 'http://localhost:5000';

  // Scroll to bottom on message update
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  // Trigger /greet with loader sequence
  useEffect(() => {
    const initGiana = async () => {
      try {
        setMessages([{ role: 'system', content: '[initializing...]' }]);
        await new Promise(res => setTimeout(res, 700));
        setMessages([{ role: 'system', content: '[thinking...]' }]);
        await new Promise(res => setTimeout(res, 700));
        setMessages([{ role: 'system', content: '[typing...]' }]);
        await new Promise(res => setTimeout(res, 700));

        const greetRes = await fetch(`${BACKEND_URL}/greet`);
        const greetData = await greetRes.json();

        setMessages([{ role: 'giana', content: greetData.intro }]);
      } catch (err) {
        console.error(err);
        setMessages([{ role: 'system', content: 'Error connecting to G.I.A.N.A.' }]);
      }
    };

    initGiana();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');

    // First input: username
    if (!username) {
      setUsername(userMsg);
      setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

      try {
        const res = await fetch(`${BACKEND_URL}/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: userMsg })
        });
        const data = await res.json();
        setSessionId(data.session_id);
        await simulateTyping(data.message);
      } catch (err) {
        console.error(err);
        setMessages(prev => [...prev, { role: 'system', content: 'Failed to start session.' }]);
      }

      return;
    }

    // Normal chat message
    if (sessionId) {
      setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

      try {
        const res = await fetch(`${BACKEND_URL}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sessionId,
            content: userMsg
          })
        });
        const data = await res.json();
        await simulateTyping(data.reply);
      } catch (err) {
        console.error(err);
        setMessages(prev => [...prev, { role: 'system', content: 'G.I.A.N.A failed to respond.' }]);
      }
    }
  };

  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    setMessages(prev => [...prev, { role: 'system', content: '[typing...]' }]);
    await new Promise(res => setTimeout(res, 500));

    let typedText = '';
    for (let i = 0; i < text.length; i++) {
      typedText += text[i];
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'giana', content: typedText };
        return updated;
      });
      await new Promise(res => setTimeout(res, 15)); // Typing speed
    }

    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[80vh]">
        {/* Glow */}
        <div className="absolute inset-0 bg-yellow-400/20 rounded-xl blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-yellow-500/10 rounded-xl blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Terminal UI */}
        <div className="relative w-full h-full bg-[#0a0a0a] border border-yellow-400/20 rounded-xl shadow-lg overflow-hidden flex flex-col shadow-yellow-400/20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-yellow-400/20">
            <h2 className="text-yellow-400 font-mono text-lg">G.I.A.N.A</h2>
            <button onClick={onClose} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              [ close ]
            </button>
          </div>

          {/* Output */}
          <div
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#111] scroll-smooth space-y-1"
          >
            {messages.map((msg, idx) => {
              if (msg.role === 'user') {
                return (
                  <div key={idx}>
                    <span className="text-blue-600">{username}:</span>{' '}
                    <span className="text-green-600">{msg.content}</span>
                  </div>
                );
              } else if (msg.role === 'giana') {
                return (
                  <div key={idx}>
                    <span className="text-yellow-500">Giana:</span>{' '}
                    <span className="text-white">{msg.content}</span>
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="text-yellow-600 italic">
                    {msg.content}
                  </div>
                );
              }
            })}
          </div>

          {/* Input */}
          <div className="border-t border-yellow-400/10 p-3 bg-[#111] flex items-center gap-2">
            <span className="text-yellow-500 font-mono text-sm">~$</span>
            <input
              className="flex-1 bg-transparent text-yellow-100 font-mono text-sm focus:outline-none placeholder:text-yellow-400"
              placeholder={username ? 'Ask Giana anything...' : 'Enter your name'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping || messages.some(msg => msg.content.includes('Error'))}
            />
            <button
              onClick={handleSend}
              className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-colors text-sm"
              disabled={isTyping}
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
