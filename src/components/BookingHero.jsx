"use client";
import React from "react";

const BookingHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-56 pb-20 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Build with Jehangir
                    <br />
                    <span className="text-[#8b1a1a]">Strategy & Clarity Call</span>
                    <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl">— ₹1,999</span>
                </h1>

                <div className="w-24 h-1 bg-[#8b1a1a] mx-auto mb-10"></div>

                <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed max-w-3xl mx-auto mb-8">
                    A focused 1-on-1 video session to assess your current situation, goals, identify what’s holding you back, and define the right path forward.
                </p>

                <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg text-gray-400 font-medium leading-relaxed">
                    <p>
                        The ₹1,999 fee ensures the call is reserved for individuals who are serious about making a meaningful transformation.
                    </p>
                    <p>
                        The ₹1,999 fee is fully adjusted against your coaching investment if you decide to work with me.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingHero;
