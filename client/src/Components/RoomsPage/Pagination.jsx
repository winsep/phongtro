import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex gap-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-9 h-9 rounded-md text-sm transition-colors ${
            page === currentPage
              ? 'bg-[#0045A8] text-white'
              : 'bg-transparent text-black hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Tiếp theo */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 h-9 rounded-md text-sm bg-transparent hover:bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>

      {/* Cuối cùng */}
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 h-9 rounded-md text-sm bg-transparent hover:bg-gray-200 disabled:opacity-50"
      >
        Cuối cùng
      </button>
    </div>
  );
};

export default Pagination;
