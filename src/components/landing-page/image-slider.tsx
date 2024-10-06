"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const images = [
  "/images/slider1.webp",
  "/images/slider2.webp",
  "/images/slider3.webp",
  "/images/slider4.webp",
];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="w-full h-[600px] flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-imageIndex * 100}%)` }}
      >
        {images.map((url, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative rounded-xl"
          >
            <Image
              src={url}
              alt={`Slider ${idx + 1}`}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl" />
          </div>
        ))}
      </div>

      <div className="absolute flex items-center gap-2 bottom-5 left-1/2 transform -translate-x-1/2">
        <button onClick={showPrevImage} className="squish mx-10">
          <IconChevronLeft size={25} color="white" />
        </button>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`${
              imageIndex === idx
                ? "bg-white w-8 h-3 rounded-2xl"
                : "bg-transparent border border-white w-3 h-3 rounded-full mx-1"
            } squish`}
          />
        ))}
        <button onClick={showNextImage} className="squish mx-10">
          <IconChevronRight size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
