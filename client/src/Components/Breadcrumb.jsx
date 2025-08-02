import React from "react";
import { Link, useLocation } from "react-router-dom";
import { rooms } from "../data/rooms"; // giả sử bạn import được danh sách phòng

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Nếu là route chi tiết phòng thì lấy tên
  const getRoomTitle = (slug) => {
    const room = rooms.find((r) => r.slug === slug);
    return room ? room.title : slug;
  };

  const formatName = (slug, index) => {
    const mapping = {
      "": "Trang chủ",
      "rooms": "Danh sách phòng",
      "lien-he": "Liên hệ",
      // thêm route khác nếu cần
    };

    if (mapping[slug]) return mapping[slug];

    // Nếu là phần cuối cùng của đường dẫn và sau /rooms/..., hiển thị tên phòng
    if (pathnames[index - 1] === "rooms") {
      return getRoomTitle(slug);
    }

    // Mặc định: chuyển slug sang chữ cái đầu viết hoa
    return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
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
                  <span className="text-gray-500">
                    {formatName(value, index)}
                  </span>
                ) : (
                  <Link to={to} className="text-orange-500 hover:underline">
                    {formatName(value, index)}
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
