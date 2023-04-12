import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://gundam-factory.net/en/images//tour/img_02.jpg",
      title: "Gundam2",
    },
    {
      url: "https://gundam-factory.net/en/images//tour/img_03.jpg",
      title: "Gundam3",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5856239415d5db5111f74d82/1615086861808-B35KXFDACYHQBCBYJHMG/Screenshot+%2818%29.png?format=1500w",
      title: "Gundam1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              className="text-2xl cursor-pointer"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
