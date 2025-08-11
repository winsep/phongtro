import React, { useState } from 'react';
import RoomForm from '../../Components/Admin/RoomForm';

export default function Rooms(){
  const [rooms, setRooms] = useState([
    { id:1, title:'Phòng 1', price:'2,500,000', location:'Quận 1', status:'Duyệt' },
    { id:2, title:'Phòng 2', price:'3,000,000', location:'Quận 3', status:'Chưa Duyệt' },
  ]);
  const [editing, setEditing] = useState(null);
  const [isOpen, setOpen] = useState(false);

  function create(){ setEditing(null); setOpen(true); }
  function save(room){ if(room.id){ setRooms(r=>r.map(x=>x.id===room.id?room:x)); } else { room.id=Date.now(); setRooms(r=>[room,...r]); } setOpen(false); }
  function approve(id){ setRooms(r=>r.map(x=>x.id===id?{...x,status:'Duyệt'}:x)); }
  function remove(id){ if(!confirm('Xoá?'))return; setRooms(r=>r.filter(x=>x.id!==id)); }

  return (
    <div>
      <div className="space-y-4 flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Quản lý phòng</h1>
        <div className="flex gap-2"><button onClick={create} className="px-3 py-2 bg-indigo-600 text-white rounded">Tạo phòng</button></div>
      </div>

      <div className="bg-white  rounded-xl p-4 border border-gray-100 shadow-sm ">
       <table className="w-full text-sm">
  <thead className="text-l ">
    <tr>
      <th className="text-center">Tiêu Đề</th>
      <th className="text-center">Giá</th>
      <th className="text-center">Vị Trí</th>
      <th className="text-center">Trạng Thái</th>
      <th className="text-center">Hoạt Động</th>
    </tr>
  </thead>
  <tbody>
    {rooms.map(r=> (
      <tr key={r.id} className="border-t">
        <td className="py-4 text-center">{r.title}</td>
        <td className="text-center">{r.price}</td>
        <td className="text-center">{r.location}</td>
        <td className="text-center">{r.status}</td>
        <td className="py-2 text-center">
          <div className="flex gap-2 justify-center">
            <button onClick={()=>{ setEditing(r); setOpen(true); }} className="px-2 py-1 bg-yellow-100">Chỉnh Sửa</button>
            <button onClick={()=>approve(r.id)} className="px-2 py-1 bg-green-100">Duyệt</button>
            <button onClick={()=>remove(r.id)} className="px-2 py-1 bg-red-100">Xoá</button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>

      {isOpen && <div className="fixed inset-0 z-40 flex items-center justify-center"><div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)}></div><div className="relative bg-white  rounded p-4 w-full max-w-lg"><RoomForm initial={editing} onCancel={()=>setOpen(false)} onSave={save} /></div></div>}
    </div>
  );
}
