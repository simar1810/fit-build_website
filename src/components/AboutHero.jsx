"use client";
import React from "react";

const AboutHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-32 pb-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
        
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-[#f4f2f2] leading-tight">
                    About Jehangir
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                    A coach who lives the discipline he teaches — not someone who discovered fitness last year.
                </p>

      
                <div className="w-24 h-1 bg-[#C82909] mx-auto mb-16"></div>
                <div className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium space-y-6">
                    <p>
                        I am not here to motivate you.
                    </p>
                    <p>
                        I am here to guide you with structure, discipline, and experience.
                    </p>
                    <p className="text-white font-bold text-xl md:text-2xl mt-8">
                        I coach people who are serious about changing their bodies and health — not temporarily, but for life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
