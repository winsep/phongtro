import React, { useState } from 'react';
import BookingTable from '../../Components/Admin/BookingTable';

export default function Bookings(){
  const [items, setItems] = useState([
    { id:101, user:'Lan', room:'Phòng 1', date:'2025-08-10', status:'Chấp Thuận' },
    { id:102, user:'Minh', room:'Phòng 2', date:'2025-08-11', status:'Chấp Thuận' },
    { id:103, user:'Hoa', room:'Phòng 3', date:'2025-08-12', status:'Từ Chối' },
    { id:104, user:'Khanh', room:'Phòng 4', date:'2025-08-13', status:'Chấp Thuận' },
    { id:105, user:'Tung', room:'Phòng 5', date:'2025-08-14', status:'Chấp Thuận' },
    { id:106, user:'Hanh', room:'Phòng 6', date:'2025-08-15', status:'Từ Chối' },
    { id:107, user:'Duc', room:'Phòng 7', date:'2025-08-16', status:'Chấp Thuận' },
    { id:108, user:'Thao', room:'Phòng 8', date:'2025-08-17', status:'Chấp Thuận' },
  ]);
  function approve(id){ setItems(prev=>prev.map(x=>x.id===id?{...x,status:'Chấp Thuận'}:x)); }
  function reject(id){ setItems(prev=>prev.map(x=>x.id===id?{...x,status:'Từ Chối'}:x)); }
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Đặt Phòng</h1>
      <BookingTable items={items} onApprove={approve} onReject={reject} />
    </div>
  );
}