import React from 'react';

const AccountInfo = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        THÔNG TIN TÀI KHOẢN
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Quản lý và cập nhật thông tin tài khoản trên Trọ Mới
      </p>
      <form className="space-y-5">
        {/* Số điện thoại */}
        <div className="flex items-center gap-4">
          <label className="w-1/4 text-sm text-gray-700">Số điện thoại</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            placeholder="Nhập số điện thoại của bạn"
            readOnly
          />
          <button
            type="button"
            className="bg-[#0045A8] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800"
          >
            Cập nhật
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <label className="w-1/4 text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            placeholder="Nhập email của bạn"
          />
          <button
            type="button"
            className="bg-[#0045A8] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800"
          >
            Cập nhật
          </button>
        </div>

        {/* Mật khẩu */}
        <div className="flex items-center gap-4">
          <label className="w-1/4 text-sm text-gray-700">Mật khẩu</label>
          <input
            type="password"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            placeholder="Nhập mật khẩu mới nếu muốn thay đổi"
          />
          <button
            type="button"
            className="bg-[#0045A8] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800"
          >
            Đổi mật khẩu
          </button>
        </div>

        {/* Trạng thái tài khoản */}
        <div className="flex items-center gap-4">
          <label className="w-1/4 text-sm text-gray-700">Trạng thái tài khoản</label>
        </div>
      </form>
    </>
  );
};

export default AccountInfo;
