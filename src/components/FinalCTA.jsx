"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BookingModal from "./BookingModal";

const FinalCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1a1a19] py-24 px-6 md:px-20 text-[#f4f2f2] text-center">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-[#8b1a1a]">
                    Build with Jehangir Strategy & Clarity Call — ₹1,999
                </h2>

                <div className="text-lg md:text-xl font-medium text-gray-300 mb-10 leading-relaxed space-y-4">
                    <p>
                        (A focused 1-on-1 video session to assess your current situation, goals, identify what’s holding you back, and define the right path forward.)
                    </p>
                    <p>
                        The ₹1,999 fee ensures the call is reserved for individuals who are serious about making a meaningful transformation.
                    </p>
                    <p>
                        The ₹1,999 fee is fully adjusted against your coaching investment if you decide to work with me.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto px-10 py-5 bg-[#8b1a1a] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        Book Strategy & Clarity Call — ₹1,999 <FaArrowRight />
                    </button>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Come prepared to be honest about your habits, effort, and expectations.
                    </p>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default FinalCTA;
