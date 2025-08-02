import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const RoomGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const visibleImages = images.slice(0, 4);
  const hiddenCount = images.length - 4;

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {visibleImages.map((img, i) => {
          // Nếu là ảnh thứ 4 và còn ảnh ẩn phía sau
          if (i === 3 && hiddenCount > 0) {
            return (
              <div
                key={i}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img}
                  alt={`Ảnh ${i + 1}`}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl bg-black/40">
                  +{hiddenCount}
                </div>
              </div>
            );
          }

          // Các ảnh bình thường
          return (
            <div
              key={i}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`Ảnh ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </>
  );
};

export default RoomGallery;
