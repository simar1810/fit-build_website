"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Transformations = () => {
  const transformations = [
    { id: 1, before: "/transformations/before1.png", after: "/transformations/after1.png" },
    { id: 2, before: "/transformations/before2.png", after: "/transformations/after2.png" },
    { id: 3, before: "/transformations/before3.png", after: "/transformations/after3.png" },
    { id: 4, before: "/transformations/before4.png", after: "/transformations/after4.png" },
    { id: 5, before: "/transformations/before5.png", after: "/transformations/after5.png" },
    { id: 6, before: "/transformations/before6.png", after: "/transformations/after6.png" },
    { id: 7, before: "/transformations/before7.png", after: "/transformations/after7.png" },
    { id: 8, before: "/transformations/before8.png", after: "/transformations/after8.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = transformations.length - visibleCards + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < totalSlides - 1 ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleCards, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section className="pt-6 md:pt-10 pb-24 px-4 sm:px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto relative">
        <p className="text-[#2B2929] font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          Wellness from Our Thriving Community
        </p>
        <p className="text-center text-sm sm:text-base md:text-lg text-[#404040] font-normal max-w-3xl mx-auto">
          Experience the best wellness transformations through our community-driven support and personal coaching
        </p>

        <div className="relative mt-10">
          <div className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10">
            <div className="absolute bg-[#2B2929] rounded-full w-10 h-10 md:w-14 md:h-14 -bottom-0.5 -right-0.5 z-0"></div>
          <button
            onClick={handlePrev}
            className="relative bg-white hover:bg-gray-100 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 ring-1 ring-[#3D3838] z-10"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#2B2929]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            </button>
          </div>
          <div className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10">
          <div className="absolute bg-[#2B2929] rounded-full w-10 h-10 md:w-14 md:h-14 -bottom-0.5 -right-0.5 z-0"></div>
          <button
            onClick={handleNext}
            className="relative bg-white hover:bg-gray-100 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 ring-1 ring-[#3D3838] z-10"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#2B2929]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {transformations.map((t) => (
                <div
                  key={t.id}
                  className={`shrink-0 w-full sm:w-1/3 px-3 rounded-3xl relative flex overflow-hidden`}
                >
                  <Image
                    src={t.before}
                    alt="before"
                    width={500}
                    height={500}
                    className="w-1/2 h-80 sm:h-96 md:h-112.5 object-cover"
                  />
                  <Image
                    src={t.after}
                    alt="after"
                    width={500}
                    height={500}
                    className="w-1/2 h-80 sm:h-96 md:h-112.5 object-cover"
                  />

                  <div className="absolute bg-[#2B2929] px-4 sm:px-6 md:px-8 py-2 sm:py-3 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 text-[#C82909] flex items-center justify-between gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm md:text-base rounded-lg">
                    <p className="font-extrabold">Before</p>
                    <div className="bg-white text-[#2B2929] px-2 py-1 rounded-lg">
                      <p className="text-[10px] sm:text-xs">Transformation</p>
                    </div>
                    <p className="font-extrabold">After</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mt-8 justify-center gap-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 h-2 bg-[#C82909]" : "w-3 h-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;