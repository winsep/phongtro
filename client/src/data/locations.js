export const cities = [
  {
    id: 1,
    name: "Hồ Chí Minh",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z"
  },
  {
    id: 2,
    name: "Hà Nội",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z"
  }
];

export const districts = [
  { id: 1, city_id: 1, name: "Quận 1" },
  { id: 2, city_id: 1, name: "Quận Gò Vấp" },
  { id: 3, city_id: 2, name: "Quận Cầu Giấy" }
];

export const wards = [
  { id: 1, district_id: 1, name: "Phường Bến Nghé" },
  { id: 2, district_id: 1, name: "Phường Nguyễn Thái Bình" },
  { id: 3, district_id: 2, name: "Phường 8" },
  { id: 4, district_id: 3, name: "Phường Dịch Vọng" }
];

export const streets = [
  { id: 1, ward_id: 1, name: "Đường Đồng Khởi" },
  { id: 2, ward_id: 2, name: "Đường Hàm Nghi" },
  { id: 3, ward_id: 3, name: "Đường Lê Đức Thọ" },
  { id: 4, ward_id: 4, name: "Đường Cầu Giấy" }
];
