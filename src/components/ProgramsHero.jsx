"use client";
import React from "react";

const ProgramsHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-32 pb-20 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Coaching Programs
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 leading-relaxed">
                    Structured, personalized coaching for people who want real, lasting change — not temporary motivation.
                </p>

                <div className="w-24 h-1 bg-[#C82909] mx-auto mb-12"></div>

                <div className="text-lg md:text-xl text-gray-200 leading-relaxed space-y-6 max-w-3xl mx-auto">
                    <p>
                        Every body is different. Every lifestyle is different.
                        <br />
                        That’s why all my coaching is personalized, structured, and built around long-term sustainability — not generic plans or one-size-fits-all templates.
                    </p>
                    <p className="font-bold text-[#f4f2f2]">
                        Below are the coaching programs I offer. Each one requires commitment, consistency, and honesty.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
