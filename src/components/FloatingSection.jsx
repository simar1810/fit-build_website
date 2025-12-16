import React from "react";

const FloatingSection = () => {
  const words = ["Transformation", "Strength", "Discipline", "Physique", "Longevity", "Vitality", "Endurance", "Wellness", "Balance", "Energy"];
  
  return (
    <div className="bg-[#C82909] z-20 h-20 md:h-25 flex items-center w-full text-white font-extrabold overflow-hidden py-6">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
      <div className="flex animate-scroll">
        <div className="flex whitespace-nowrap gap-10 text-2xl md:text-4xl">
          {words.map((word, i) => (
            <span key={`first-${i}`}>{word}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap gap-10 text-2xl md:text-4xl ml-10">
          {words.map((word, i) => (
            <span key={`second-${i}`}>{word}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap gap-10 text-2xl md:text-4xl ml-10">
          {words.map((word, i) => (
            <span key={`third-${i}`}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingSection;