
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateAIResponse, ChatMessage } from "@/utils/apiService";
import { toast } from "@/components/ui/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! How can I help you with recycling today?", sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { text: inputText, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsWaiting(true);

    try {
      if (!apiKey) {
        setShowApiKeyInput(true);
        setIsWaiting(false);
        return;
      }

      // Get AI response
      const aiResponse = await generateAIResponse([...messages, userMessage], apiKey);
      setMessages(prev => [...prev, { text: aiResponse, sender: 'bot' }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI",
        variant: "destructive",
      });
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsWaiting(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const keyInput = form.elements.namedItem('apiKey') as HTMLInputElement;
    
    if (keyInput?.value) {
      setApiKey(keyInput.value);
      setShowApiKeyInput(false);
      toast({
        title: "Success",
        description: "API key saved! You can now chat with the AI assistant.",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="glass-card w-80 sm:w-96 rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg bg-white/70 border border-white/30"
          >
            <div className="glass-dark p-4 flex justify-between items-center rounded-t-2xl border-none">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <span className="font-semibold">Recynest Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div 
              ref={messagesContainerRef}
              className="bg-white/40 h-80 overflow-y-auto p-4 flex flex-col gap-4"
            >
              {showApiKeyInput ? (
                <div className="glass-morphism rounded-xl p-4 my-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Bot size={16} className="text-recynest-dark" />
                    <span>OpenAI API Key Required</span>
                  </h3>
                  <p className="text-sm mb-3">Please enter your OpenAI API key to chat with the AI assistant.</p>
                  <form onSubmit={handleApiKeySubmit} className="space-y-2">
                    <input
                      type="password"
                      name="apiKey"
                      placeholder="sk-..."
                      className="w-full p-2 text-sm rounded-md border border-white/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium"
                    />
                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-recynest-dark hover:bg-recynest-dark/90 text-white text-sm py-1"
                      >
                        Save Key
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-recynest-dark underline">OpenAI</a>
                    </p>
                  </form>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[80%] p-3 rounded-xl ${
                        message.sender === 'user' 
                          ? 'bg-recynest-medium/20 ml-auto backdrop-blur-sm' 
                          : 'bg-recynest-dark text-white'
                      }`}
                    >
                      {message.text}
                    </motion.div>
                  ))}
                  
                  {isWaiting && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-recynest-dark text-white p-3 rounded-xl max-w-[80%] flex items-center gap-2"
                    >
                      <span className="flex gap-1">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
                          className="h-2 w-2 bg-white rounded-full inline-block"
                        ></motion.span>
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, times: [0, 0.5, 1] }}
                          className="h-2 w-2 bg-white rounded-full inline-block"
                        ></motion.span>
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, times: [0, 0.5, 1] }}
                          className="h-2 w-2 bg-white rounded-full inline-block"
                        ></motion.span>
                      </span>
                      <span className="text-sm">Thinking...</span>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="p-3 glass-morphism rounded-b-2xl border-t border-white/20 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about recycling..."
                disabled={isWaiting || showApiKeyInput}
                className="flex-1 p-2 text-sm rounded-full border border-white/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium disabled:opacity-50"
              />
              <Button 
                type="submit" 
                disabled={isWaiting || showApiKeyInput}
                className="rounded-full w-9 h-9 p-0 glass-dark flex items-center justify-center disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full glass-dark shadow-lg flex items-center justify-center"
            >
              <MessageCircle size={24} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
