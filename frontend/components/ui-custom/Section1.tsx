'use client';

import * as React from 'react';
import Image from 'next/image';

interface BannerSlide {
  imageUrl: string;
  alt?: string;
}

interface Section1Props {
  slides: BannerSlide[];
  title: string; // Tiêu đề chính: Anh Tú & Thu Ngần
  invitation: {
    weddingInviteText: string;
    saturdayTime: string;
    saturdayDate: string;
    sundayTime: string;
    sundayDate: string;
    ceremonyText: string;
  };
  autoplay?: number;
}

export const Section1: React.FC<Section1Props> = ({
  slides,
  title,
  invitation,
  autoplay = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoplay);

    return () => clearInterval(interval);
  }, [slides.length, autoplay]);

  return (
    <div className="relative w-full overflow-hidden ">
      {/* Slider track */}
      <div
        className="flex transition-transform duration-700 ease-in-out rounded-none"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={slide.imageUrl}
              alt={slide.alt || `Slide ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-none"
            />
          </div>
        ))}
      </div>

      {/* Overlay tiêu đề */}
      <div className="absolute inset-0 flex flex-col text-center text-white">
        <h1 className="font-photograph text-white text-[38px] mt-[60px]">{title}</h1>
      </div>

      {/* Overlay thông tin tiệc */}
      <div className="absolute bottom-5 right-6 text-white text-[20px] font-philosopher text-center">
        <p>{invitation.weddingInviteText}</p>
        <div className="w-4/5 h-[2px] bg-white my-2 mx-auto"></div>
        <p>{invitation.saturdayTime}</p>
        <p>{invitation.saturdayDate}</p>
        <div className="w-4/5 h-[2px] bg-white my-2 mx-auto"></div>
        <p>{invitation.ceremonyText}</p>
        <p>{invitation.sundayTime}</p>
        <p>{invitation.sundayDate}</p>
      </div>
    </div>
  );
};

export default Section1;
