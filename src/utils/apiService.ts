
// API service for handling external API requests

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export const generateAIResponse = async (
  messages: ChatMessage[], 
  apiKey: string
): Promise<string> => {
  try {
    // Format messages for OpenAI API
    const formattedMessages = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    // Add a system message for context
    const systemMessage = {
      role: 'system',
      content: 'You are a helpful recycling assistant for Recynest. Provide concise, accurate information about recycling practices, drop points, rewards, and environmental impact. Keep responses friendly and under 150 words.'
    };

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',  // Using a more affordable and fast model
        messages: [systemMessage, ...formattedMessages],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
