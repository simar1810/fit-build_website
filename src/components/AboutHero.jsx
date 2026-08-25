"use client";
import React from "react";
import Image from "next/image";

const AboutHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-32 pb-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">

                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image
                        src="/Jehangir_sir.jpeg"
                        alt="Jehangir — Bodybuilding Coach"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-[#f4f2f2] leading-tight uppercase">
                    About Jehangir
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                    A bodybuilding coach who lives the discipline he teaches — and started his own transformation after 40.
                </p>

                <div className="w-24 h-1 bg-[#C82909] mx-auto mb-16"></div>
                <div className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium space-y-6">
                    <p>I am not here to motivate you.</p>
                    <p>I am here to guide you with structure, discipline and experience.</p>
                    <p className="text-white font-bold text-xl md:text-2xl mt-8">
                        I coach men over 35 who are serious about building their bodies — not temporarily, but for the long term.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
