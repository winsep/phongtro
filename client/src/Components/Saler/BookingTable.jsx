import React from 'react';

export default function BookingTable({ items, onApprove, onReject }){
  return (
    <div className='bg-white overflow-auto rounded-xl p-4 border border-gray-200 shadow-sm'>
      <table className='w-full text-sm'>
        <thead className='text-l '>
          <tr>
            <th className=' pb-3 text-center'>Id</th>
            <th className='text-center'>Người Dùng</th>
            <th className='text-center'>Phòng</th>
            <th className='text-center'>Ngày</th>
            <th className='text-center'>Trạng Thái</th>
            <th className='text-center'>Hoạt Động</th>
            </tr>
        </thead>
        <tbody>
          {items.map(b=> (
            <tr key={b.id} className='border-t '>
              <td className='text-center'>{b.id}</td>
              <td className='text-center'>{b.user}</td>
              <td className='text-center'>{b.room}</td>
              <td className='text-center'>{b.date}</td>
              <td className='text-center'>{b.status}</td>
                <td className='py-3'>
                  <div className='flex gap-2 justify-center'>
                  <button onClick={()=>onApprove(b.id)} className='px-2 py-1 bg-green-100'>Chấp Thuận</button>
                  <button onClick={()=>onReject(b.id)} className='px-2 py-1 bg-red-100'>Từ Chối</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}