"use client";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Lost 13 kg in 12 weeks. This was the first plan I actually followed.",
            author: "Verified Client",
        },
        {
            quote: "Stronger, leaner, and healthier — without confusion.",
            author: "Verified Client",
        },
        {
            quote: "Straightforward coaching. No nonsense. Real results.",
            author: "Verified Client",
        },
    ];

    return (
        <section className="bg-[#1a1a19] py-20 px-6 md:px-20 text-[#f4f2f2]">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center leading-tight">
                    What Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-[#2B2929] p-8 rounded-lg relative flex flex-col items-center text-center shadow-lg hover:bg-[#3D3838] transition-colors duration-300"
                        >
                            <FaQuoteLeft className="text-[#C82909] text-3xl mb-6" />
                            <p className="text-lg md:text-xl font-medium italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-700 w-full">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                    {t.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
