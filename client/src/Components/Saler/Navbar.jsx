import React from 'react';

export default function Navbar({ onCreateRoom }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Admin</h2>
        <div className="text-sm text-gray-500">Quản lý phòng trọ</div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onCreateRoom} className="px-3 py-2 bg-indigo-600 text-white rounded">Tạo phòng mới</button>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">AD</div>
      </div>
    </header>
  );
}