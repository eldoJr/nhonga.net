import { useState } from 'react';
import { Send, Minus, RotateCcw, ArrowRight, ExternalLink } from 'lucide-react';
import logo from '/src/assets/icons/logo.svg';
import botIcon from '/src/assets/icons/bot.png';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: { label: string; icon?: 'arrow' | 'external' }[];
}

interface NhongaAIProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NhongaAI = ({ isOpen, onClose }: NhongaAIProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bem-vindo ao assistente nhonga.net. Estou aqui para ajudá-lo a encontrar oportunidades e informações.',
      isBot: true,
      timestamp: new Date(),
      options: [
        { label: 'Preciso de ajuda', icon: 'arrow' },
        { label: 'Tenho uma pergunta sobre empregos', icon: 'arrow' },
        { label: 'Procuro algo específico', icon: 'external' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [showAIInfo, setShowAIInfo] = useState(false);

  const handleRestart = () => {
    setMessages([{
      id: '1',
      text: 'Bem-vindo ao assistente nhonga.net. Estou aqui para ajudá-lo a encontrar oportunidades e informações.',
      isBot: true,
      timestamp: new Date(),
      options: [
        { label: 'Preciso de ajuda', icon: 'arrow' },
        { label: 'Tenho uma pergunta sobre empregos', icon: 'arrow' },
        { label: 'Procuro algo específico', icon: 'external' }
      ]
    }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-6 w-96 h-[500px] bg-gradient-to-b from-white via-gray-50 to-white dark:from-nhonga-950 dark:via-nhonga-900 dark:to-nhonga-950 rounded-lg shadow-xl shadow-green-500/20 flex flex-col z-50 border border-green-400/30 dark:border-green-500/30">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-nhonga-800 rounded-t-lg">
            <img src={logo} alt="NhongaAI" className="w-6 h-6" />
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAIInfo(!showAIInfo)}
                className="px-2 py-1 text-[10px] font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent border border-purple-500 hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                AI
              </button>
              <button onClick={handleRestart} className="text-gray-500 hover:text-gray-700 dark:text-nhonga-300 dark:hover:text-nhonga-150" title="Restart chat">
                <RotateCcw size={16} />
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-nhonga-300 dark:hover:text-nhonga-150" title="Minimize">
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* AI Info */}
          {showAIInfo && (
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-gray-200 dark:border-nhonga-800">
              <p className="text-xs font-semibold text-gray-800 dark:text-nhonga-150 mb-1">Powered by Nhonga AI</p>
              <p className="text-[10px] text-gray-600 dark:text-nhonga-300">Nhonga AI is an AI-powered assistant that helps you find opportunities, answer questions, and navigate the nhonga.net platform efficiently.</p>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 relative">
            {/* Gradient overlay from input border to middle */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-nhonga-300/40 via-nhonga-400/20 to-transparent dark:from-nhonga-600/20 dark:via-nhonga-700/10 pointer-events-none"></div>
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className={`flex gap-2 ${msg.isBot ? '' : 'justify-end'}`}>
                  {msg.isBot && (
                    <img src={botIcon} alt="AI" className="w-5 h-5 flex-shrink-0" />
                  )}
                  <div className={`max-w-[80%] p-2 text-xs ${
                    msg.isBot 
                      ? 'bg-gray-100 dark:bg-nhonga-900 text-gray-800 dark:text-nhonga-150' 
                      : 'bg-nhonga-500 text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>

                {/* Options */}
                {msg.options && (
                  <div className="ml-6 space-y-1.5">
                    {msg.options.map((option, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center justify-between p-2 bg-gray-50 dark:bg-nhonga-900 hover:bg-gray-100 dark:hover:bg-nhonga-850 text-left text-xs text-gray-800 dark:text-nhonga-150 transition-colors border border-gray-200 dark:border-nhonga-800"
                      >
                        <span className="font-medium">{option.label}</span>
                        {option.icon === 'arrow' ? (
                          <ArrowRight size={14} className="text-nhonga-500" />
                        ) : (
                          <ExternalLink size={14} className="text-nhonga-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {msg.isBot && (
                  <p className="text-[10px] text-gray-500 dark:text-nhonga-400 ml-6">
                    Ou, digite uma pergunta como "quais são as vagas disponíveis?"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-nhonga-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite algo..."
                className="flex-1 px-3 py-1.5 bg-gray-100 dark:bg-nhonga-900 border border-gray-200 dark:border-nhonga-800 text-xs text-gray-800 dark:text-nhonga-150 placeholder:text-gray-500 dark:placeholder:text-nhonga-400 focus:outline-none focus:border-nhonga-500"
              />
              <button
                onClick={handleSend}
                className="p-1.5 bg-nhonga-500 hover:bg-nhonga-600 text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
