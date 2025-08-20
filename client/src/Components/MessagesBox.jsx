import React, { useState, useEffect, useRef } from "react";

export default function MessagesBox({ roomId, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, from: "user", text: "Xin chào, còn phòng không?" },
    { id: 2, from: "admin", text: "Còn nha, bạn cần mấy người?,", },
    { id: 3, from: "user", text: "Mình cần phòng cho 2 người." },
    { id: 4, from: "admin", text: "Phòng 1 có giá 500k/đêm, bạn có muốn đặt không?" },
    { id: 5, from: "user", text: "Được, mình đặt phòng 1 nhé." },
    { id: 6, from: "admin", text: "Cảm ơn bạn đã đặt phòng! Chúng tôi sẽ liên hệ sớm nhất." },
  ]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle send message
  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "admin", text: text.trim() },
    ]);
    setText("");
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-indigo-600 text-white rounded-t-lg">
        <h2 className="font-semibold">Chat với khách</h2>
        <button
          onClick={onClose}
          className="hover:bg-indigo-500 px-2 py-1 rounded"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 bg-gray-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-3 flex ${
              m.from === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            {m.from !== "admin" && (
              <img
                src="https://i.pravatar.cc/30?u=user"
                alt="user"
                className="w-8 h-8 rounded-full mr-2 self-end"
              />
            )}

            <div
              className={`px-4 py-2 rounded-lg shadow text-sm max-w-xs break-words ${
                m.from === "admin"
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 border rounded-bl-none"
              }`}
            >
              {m.text}
            </div>

            {m.from === "admin" && (
              <img
                src="https://i.pravatar.cc/30?u=admin"
                alt="admin"
                className="w-8 h-8 rounded-full ml-2 self-end"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2 bg-white rounded-b-lg">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Gửi tin nhắn..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
        >
          Gửi
        </button>
      </div>
    </div>
  );
}
