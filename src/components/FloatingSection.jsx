import React from "react";

const FloatingSection = () => {
  const words = ["BODYBUILDING", "MUSCLE", "STRENGTH", "PHYSIQUE", "LEAN", "DISCIPLINE", "TRANSFORMATION", "CONFIDENCE", "MEN 35+", "BEYOND ORDINARY"];
  
  return (
    <div className="bg-[#8b1a1a] z-20 h-20 md:h-25 flex items-center w-full text-white font-extrabold overflow-hidden py-6">
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
