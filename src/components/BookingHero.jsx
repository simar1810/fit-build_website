"use client";
import React from "react";

const BookingHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-56 pb-20 px-6 md:px-20 text-center">
            <div className=" mx-auto max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight uppercase">
                    Book Your Strategy Call
                </h1>

                <div className="w-24 h-1 bg-[#8b1a1a] mx-auto mb-10"></div>

                <p className="text-2xl font-extrabold text-[#8b1a1a] mb-6">
                    Strategy Call — ₹1,999
                </p>

                <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed">
                    This is a paid 1:1 assessment — not a sales call.
                    <br />
                    We assess your physique, goals, training history and whether my bodybuilding coaching is the right fit for you.
                </p>

                <p className="mt-6 text-base md:text-lg text-gray-400 font-medium">
                    The ₹1,999 Strategy Call fee is fully adjustable against your coaching fees if you decide to proceed with a coaching program.
                </p>
            </div>
        </section>
    );
};

export default BookingHero;
