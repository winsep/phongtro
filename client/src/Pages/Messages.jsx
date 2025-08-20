import React, { useState } from "react";
import MessagesBox from "../Components/MessagesBox";
import Header from "../Components/Header";

export default function Messages() {
  const [openChat, setOpenChat] = useState(null);

  const rooms = [
    { id: 1, user: "An", preview: "Còn phòng không?" },
    { id: 2, user: "Binh", preview: "Giá thế nào?" },
    { id: 3, user: "Chi", preview: "Cho mình đặt phòng nhé!" },
  ];

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-4 h-[96vh] max-h-[96vh]">
     <Header />
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-white border-r shadow-sm flex flex-col rounded-xl border-gray-200 mt-18 ">
        <h3 className="font-semibold px-4 py-3 border-b bg-gray-50 ">
          Các cuộc trò chuyện
        </h3>
        <ul className="flex-1 overflow-auto">
          {rooms.map((r) => (
            <li
              key={r.id}
              onClick={() => setOpenChat(r.id)}
              className={`p-3 border-b cursor-pointer hover:bg-indigo-50 transition 
                ${openChat === r.id ? "bg-indigo-100" : ""}`}
            >
              <div className="font-medium">{r.user}</div>
              <div className="text-xs text-gray-500 truncate">{r.preview}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat content */}
      <div className="lg:col-span-3 bg-white h-[90vh] max-h-[96vh]  flex flex-col rounded-xl shadow-sm mt-18">
        {openChat ? (
          <MessagesBox
            roomId={openChat}
            onClose={() => setOpenChat(null)}
          />
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            Chọn một cuộc trò chuyện để bắt đầu
          </div>
        )}
      </div>
    </div>
  );
}
