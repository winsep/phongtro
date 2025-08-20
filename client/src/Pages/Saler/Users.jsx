import React, { useState } from 'react';
import UserForm from '../../Components/Saler/UserTable';

export default function SalerUsers(){
  const [users, setUsers] = useState([{ id:1, name:'Nguyen', email:'n@example.com', role:'admin' },
  { id:2, name:'Tran', email:'i@example.com', role:'user' },
  { id:3, name:'Le', email:'q@example.com', role:'user' },
  { id:4, name:'Pham', email:'g@example.com', role:'user' }
  ]);
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);

  function create(){ setEditing(null); setOpen(true);} 
  function save(u){ if(u.id) setUsers(prev=>prev.map(x=>x.id===u.id?u:x)); else { u.id=Date.now(); setUsers(prev=>[u,...prev]); } setOpen(false); }
  function makeSaler(id){ setUsers(prev=>prev.map(x=>x.id===id?{...x, role:'saler'}:x)); }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Người Dùng</h1>
        <button onClick={create} className="px-3 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Thêm Người Dùng</button></div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-l py-3">
            <tr>
              <th className=' py-3 text-center'>Tên</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Loại</th>
              <th className='text-center'>Hoạt Động</th>
              </tr>
              </thead>
              <tbody>
                {users.map(u=>(
                  <tr key={u.id} className="border-t">
                    <td className="py-2 text-center">{u.name}</td>
                    <td className='text-center'>{u.email}</td>
                    <td className='text-center'>{u.role}</td>
                    <td><div className="flex gap-2 justify-center py-3">
                          <button onClick={()=>{ setEditing(u); setOpen(true); }} className="px-2 py-1 bg-green-200 hover:bg-green-300">Chỉnh Sửa</button>
                          <button onClick={()=>makeSaler(u.id)} className="px-2 py-1 bg-amber-200 hover:bg-yellow-300">Cấp Seler</button>
                        </div>
                    </td>
                </tr>))}
              </tbody>
        </table>
      </div>
      {open && <div className="fixed inset-0 z-40 flex items-center justify-center"><div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)}></div><div className="relative bg-white dark:bg-gray-800 rounded p-4 w-full max-w-md"><UserForm initial={editing} onCancel={()=>setOpen(false)} onSave={save} /></div></div>}
    </div>
  );
}