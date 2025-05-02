
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hello! How can I help you with recycling today?", sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText("");

    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      const botResponses = [
        "You can find the nearest drop point by checking our map section.",
        "PET bottles earn you 50 points per kilogram.",
        "Yes, we accept electronics! They're worth 100 points per kilogram.",
        "Our collection hours are generally 9 AM to 6 PM, but it varies by location.",
        "You can redeem your points in the rewards section of our website."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass-card w-80 sm:w-96 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-recynest-dark text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <span className="font-semibold">Recynest Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="bg-white/80 h-80 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'user' 
                    ? 'bg-recynest-medium/20 ml-auto' 
                    : 'bg-recynest-dark text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-3 bg-white/90 border-t border-border flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about recycling..."
              className="flex-1 p-2 text-sm rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-recynest-medium"
            />
            <Button 
              type="submit" 
              className="rounded-full w-9 h-9 p-0 bg-recynest-dark hover:bg-recynest-dark/90 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </form>
        </div>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-recynest-dark hover:bg-recynest-dark/90 shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
