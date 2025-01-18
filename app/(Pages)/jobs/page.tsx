"use client";

import { useState } from "react";
import { ChatMessage } from "./components/ChatMessage";
import { ChatInput } from "./components/ChatInput";
import { getGeminiResponse } from "@/lib/gemini";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const page = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your personal health assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false,
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(text);
      const formattedResponse = response.replace(/\*\*/g, "").trim();

      const botResponse: Message = {
        id: messages.length + 2,
        text: formattedResponse,
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex h-screen">
      <div className="max-w-[50vw] w-full ">
        <div className="rounded-2xl shadow-lg mb-4 w-full">
          <div className="p-4">
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
      <div className="w-full bg-red-200/10 h-full ">
        <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              isBot={message.isBot}
              message={message.text}
            />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-full px-4 py-2">
                <div className="animate-pulse flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
