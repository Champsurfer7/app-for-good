// app/components/Chatbot.tsx
"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Motivation Bot. Type 'help' or 'motivation' and I will reply!" }
  ]);
  const [input, setInput] = useState("");

  // A list of encouraging responses from Champ
  const botResponses = [
    "You are doing great, Champ! Keep going.",
    "Every step forward, no matter how small, is progress.",
    "Remember: The darkest nights produce the brightest stars.",
    "You are stronger than you think.",
    "Take a deep breath. You are exactly where you need to be.",
    "Keep building. Keep creating. You are making a difference."
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Bot picks a random encouraging response
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

    // Add bot's response after a tiny delay so it feels real
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: randomResponse }]);
    }, 500);

    setInput(""); // Clear input box
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* The Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 mb-4">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white font-bold text-center">
            Motivation Bot 💪
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-xl px-4 py-2 max-w-[80%] text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t border-gray-200 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700">
              Send
            </button>
          </form>
        </div>
      )}

      {/* The Floating Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition duration-300
text-white text-3xl"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}