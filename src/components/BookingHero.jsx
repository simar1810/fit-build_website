"use client";
import React from "react";

const BookingHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-56 pb-20 px-6 md:px-20 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Book a Free Strategy Call
                </h1>

                <div className="w-24 h-1 bg-[#C82909] mx-auto mb-10"></div>

                <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed max-w-3xl mx-auto">
                    This is not a sales call.
                    <br />
                    It’s a clarity and qualification conversation to decide whether working together makes sense.
                </p>
            </div>
        </section>
    );
};

export default BookingHero;
