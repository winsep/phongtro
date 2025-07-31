import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Tách path thành mảng các phần
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Hàm chuyển slug thành tiếng Việt (tuỳ chỉnh theo nhu cầu)
  const formatName = (slug) => {
    const mapping = {
      "": "Trang chủ",
      "nha-tro": "Nhà trọ",
      "phong-tro": "Phòng trọ",
      "chi-tiet": "Chi tiết",
      "lien-he": "Liên hệ",
      // thêm route khác nếu cần
    };

    return (
      mapping[slug] ||
      slug.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    );
  };

  return (
    <nav className="text-sm mb-4 mx-20 my-10">
      <ol className="list-reset flex text-gray-500">
        <li>
          <Link
            to="/"
            className="text-[#0045A8] font-semibold hover:text-orange-500 hover:no-underline no-underline"
          >
            Trang chủ
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={to}>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li>
                {isLast ? (
                  <span className="text-gray-500">{formatName(value)}</span>
                ) : (
                  <Link to={to} className="text-orange-500 hover:underline">
                    {formatName(value)}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
