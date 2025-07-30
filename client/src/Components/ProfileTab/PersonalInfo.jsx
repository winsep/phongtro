import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        THÔNG TIN CÁ NHÂN
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra
        sao.
      </p>
      <form className="space-y-5">
        <div className="grid grid-cols-4 gap-4 items-center">
          <label className="col-span-1 text-sm text-gray-700">Họ tên</label>
          <input
            type="text"
            className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            value="Tran Quoc Thang"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <label className="col-span-1 text-sm text-gray-700">Giới tính</label>
          <select
            className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            defaultValue="Nam"
          >
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <label className="col-span-1 text-sm text-gray-700">Ngày sinh</label>
          <input
            type="date"
            className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <label className="col-span-1 text-sm text-gray-700">
            Số Căn cước công dân
          </label>
          <input
            type="text"
            className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            placeholder="Vui lòng nhập"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <label className="col-span-1 text-sm text-gray-700">Địa chỉ</label>
          <input
            type="text"
            className="col-span-3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0045A8]"
            placeholder="Vui lòng nhập"
          />
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="bg-[#0045A8] hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
