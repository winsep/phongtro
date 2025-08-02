export const rooms = [
  {
    id: 1,
    title: 'Kí Túc Xá Thiên Đàng - ngay sát bên trường HUIT',
    price: 650000,
    area: 18,
    address: 'Hà nội',
    type: 'Nhà trọ, phòng trọ',
    slug: "ki-tuc-xa-thien-dang-ngay-sat-ben-truong-huit",
    isHot: true,
    utilities: [1, 2, 4],
    surroundings: [1, 2, 3, 4, 5, 6],
    targets: [1, 2, 3, 4], // Đi học
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...",
  },
  {
    id: 2,
    title: 'Phòng đẹp đầy đủ tiện nghi Quận 10',
    price: 2500000,
    area: 30,
    address: 'Quận 10, Thành phố Hồ Chí Minh',
    type: 'Phòng cho thuê',
    isHot: false,
    utilities: [1, 2, 3, 4, 5],
    surroundings: [2, 3, 4],
    targets: [1, 2, 3, 4], // Đi làm, Cặp đôi
    slug: "phong-dep-day-du-tien-nghi-quan-10",
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.3703240972013!2d107.58621877497615!3d16.456775784280314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a147a7d5b6ef%3A0x5d979ce2bf59e050!2zNzAgTmd1eeG7hW4gSHXhu4csIFbEqW5oIE5pbmgsIEh14bq_LCBUaMOgbmggcGjhu5EgSHXhur8gNDkwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1754117274946!5m2!1svi!2s",
  },
  {
    id: 3,
    title: 'Phòng trọ giá rẻ gần ĐH Kinh Tế',
    price: 1200000,
    area: 15,
    address: 'Quận 5, Thành phố Hồ Chí Minh',
    type: 'Phòng trọ',
    isHot: false,
    utilities: [2, 3],
    surroundings: [1, 2],
    targets: [1, 2, 3, 4],
    slug: "phong-tro-gia-re-gan-dai-hoc-kinh-te",
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b8d3e0b',
      'https://images.unsplash.com/photo-1600585153924-6d7dc0b2b407',
      'https://images.unsplash.com/photo-1613482184215-4ebd98fdf16b'
    ],
  },
  {
    id: 4,
    title: 'Chung cư mini đầy đủ tiện nghi',
    price: 3500000,
    area: 45,
    address: 'Bình Thạnh, Thành phố Hồ Chí Minh',
    type: 'Chung cư mini',
    isHot: true,
    utilities: [1, 2, 3, 4, 5, 6],
    surroundings: [2, 4, 5],
    targetAudiences: [3, 4], // Gia đình, Cặp đôi
    slug: "chung-cu-mini-day-du-tien-nghi",
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a1f5e',
      'https://images.unsplash.com/photo-1600585154207-866a5c30a6ae',
      'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f'
    ],
  },
];

export const targetAudiences = [
  { id: 1, name: "Đi học" },
  { id: 2, name: "Đi làm" },
  { id: 3, name: "Gia đình" },
  { id: 4, name: "Cặp đôi" },
];