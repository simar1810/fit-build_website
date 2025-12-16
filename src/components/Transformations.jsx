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
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(transformations.length - visibleCards + 1, 1);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < transformations.length - visibleCards ? prev + 1 : 0
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [visibleCards, transformations.length]);

  return (
    <section className="pt-6 md:pt-10 pb-24 px-4 sm:px-10 md:px-20 bg-linear-tr from-[#E4DFD3] to-white">
      <div className="max-w-300 mx-auto relative">
        <p className="text-[#2B2929] font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          Wellness from Our Thriving Community
        </p>
        <p className="text-center text-sm sm:text-base md:text-lg text-[#404040] font-normal max-w-225 mx-auto">
          Experience the best wellness transformations through our community-driven support and personal coaching
        </p>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {transformations.map((t) => (
                <div
                  key={t.id}
                  className={`rounded-3xl relative flex overflow-hidden shrink-0 ${
                    visibleCards === 1
                      ? "w-full"
                      : visibleCards === 2
                      ? "w-[calc(50%-16px)]"
                      : "w-[calc(33.333%-21px)]"
                  }`}
                >
                  <Image
                    src={t.before}
                    alt="before"
                    width={500}
                    height={500}
                    className="w-1/2 h-80 sm:h-72 md:h-100 object-cover"
                  />
                  <Image
                    src={t.after}
                    alt="after"
                    width={500}
                    height={500}
                    className="w-1/2 h-80 sm:h-72 md:h-100 object-cover"
                  />

                 
                  <div className="absolute bg-[#2B2929] px-4 sm:px-6 md:px-8 py-2 sm:py-3 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 text-[#C82909] flex items-center justify-between gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm md:text-base">
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

        {/* Dots always visible */}
        <div className="hidden md:flex mt-8 justify-center gap-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 h-2 bg-[#C82909]" : "w-3 h-2 bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
