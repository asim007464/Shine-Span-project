import React, { useState } from "react";
import { MessageCircle, X, Send, Minus } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* --- Chat Window --- */}
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#448cff] p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-bold">Shine & Span Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors"
            >
              <Minus size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-[350px] p-4 overflow-y-auto bg-slate-50 space-y-4">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
              <p className="text-sm text-slate-700">
                Hi there! 👋 How can we help you with your cleaning service
                today?
              </p>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Support Bot
              </span>
            </div>
          </div>

          {/* Footer / Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#448cff] outline-none transition-all"
              />
              <button className="absolute right-2 p-2 text-[#448cff] hover:bg-blue-50 rounded-lg transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Floating Action Button --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-slate-800 rotate-90" : "bg-[#448cff] hover:scale-110"
        } text-white p-4 rounded-full shadow-2xl transition-all duration-300 group`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBox;
