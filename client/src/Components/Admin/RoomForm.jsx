import React, { useState, useEffect } from 'react';

export default function RoomForm({ initial = null, onCancel, onSave }) {
  const [form, setForm] = useState({ title: '', price: '', location: '', status: 'draft' });

  useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  function submit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="text-sm">Tiêu đề</label>
        <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="text-sm">Giá</label>
        <input value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="text-sm">Vị trí</label>
        <input value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="text-sm">Trạng thái</label>
        <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full border rounded px-3 py-2">
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-3 py-2 rounded bg-red-600">Huỷ</button>
        <button type="submit" className="px-3 py-2 rounded bg-blue-600 text-white">Lưu</button>
      </div>
    </form>
  );
}