const rooms = [
  {
    id: 1,
    user_id: 5,
    title: "Phòng trọ trung tâm Quận 1",
    description: "Phòng sạch sẽ, đầy đủ tiện nghi, gần chợ và trường học.",
    price: 1500000,
    electricity_price: 3500,
    water_price: 100000,
    address_detail: "Số 25, ngõ 123",
    street_id: 1,
    google_map_link: "https://maps.google.com/?q=10.7769,106.7009",
    is_approved: true,
    status: "available",
    created_at: "2025-07-01T10:00:00Z",
    updated_at: "2025-07-20T14:30:00Z"
  },
  {
    id: 2,
    user_id: 6,
    title: "Phòng trọ giá rẻ Gò Vấp",
    description: "Nhà vệ sinh riêng, khu dân cư yên tĩnh.",
    price: 1200000,
    electricity_price: 3000,
    water_price: 80000,
    address_detail: "34/2",
    street_id: 3,
    google_map_link: "https://maps.google.com/?q=10.8384,106.6646",
    is_approved: true,
    status: "available",
    created_at: "2025-07-05T08:30:00Z",
    updated_at: "2025-07-25T09:45:00Z"
  },
  {
    id: 3,
    user_id: 7,
    title: "Phòng Cầu Giấy tiện nghi",
    description: "Gần các trường đại học, wifi miễn phí.",
    price: 2000000,
    electricity_price: 3500,
    water_price: 100000,
    address_detail: "Số 99",
    street_id: 4,
    google_map_link: "https://maps.google.com/?q=21.0373,105.7811",
    is_approved: true,
    status: "rented",
    created_at: "2025-07-10T08:00:00Z",
    updated_at: "2025-07-20T12:00:00Z"
  }
];

export default rooms;
