import React, { useState, useEffect } from 'react';

export default function UserForm({ initial = null, onCancel, onSave }) {
  const [form, setForm] = useState({ name: '', email: '', role: 'user' });
  useEffect(() => { if (initial) setForm(initial); }, [initial]);
  function submit(e){ e.preventDefault(); onSave(form); }
  return (
    <form onSubmit={submit} className="space-y-3">
      <div><label className="text-sm">Name</label><input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full border rounded px-3 py-2"/></div>
      <div><label className="text-sm">Email</label><input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full border rounded px-3 py-2"/></div>
      <div><label className="text-sm">Role</label><select value={form.role} onChange={e=>setForm({...form, role: e.target.value})} className="w-full border rounded px-3 py-2"><option value="admin">Admin</option><option value="saler">Saler</option><option value="user">User</option></select></div>
      <div className="flex justify-end gap-2"><button type="button" onClick={onCancel} className="px-3 py-2 rounded bg-gray-100">Cancel</button><button className="px-3 py-2 rounded bg-indigo-600 text-white">Save</button></div>
    </form>
  );
}