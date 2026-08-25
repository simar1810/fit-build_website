"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BookingModal from "./BookingModal";

const FinalCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1a1a19] py-24 px-6 md:px-20 text-[#f4f2f2] text-center">
            <div className=" mx-auto max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight uppercase">
                    Ready to Build Your Body?
                </h2>
                <div className="text-lg md:text-xl font-medium text-gray-300 mb-6 leading-relaxed space-y-4">
                    <p>
                        If you&apos;re a man over 35 who is serious about building muscle, getting lean and developing a stronger, more confident version of yourself, the first step is a Strategy Call.
                    </p>
                    <p>
                        This is a paid 1:1 assessment where we look at where you are, where you want to go, and whether my coaching is the right fit for you.
                    </p>
                </div>

                <div className="mb-8 space-y-2">
                    <p className="text-2xl font-extrabold text-[#8b1a1a]">Strategy Call — ₹1,999</p>
                    <p className="text-base text-gray-400">
                        The ₹1,999 Strategy Call fee is fully adjustable against your coaching fees if you decide to proceed with a coaching program.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto px-10 py-5 bg-[#8b1a1a] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
                    >
                        Book Your Strategy Call <FaArrowRight />
                    </button>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Come prepared to be honest about your habits, effort and expectations.
                    </p>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default FinalCTA;
