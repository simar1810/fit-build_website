"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BookingModal from "./BookingModal";

const AboutFinalCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className=" mx-auto max-w-4xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight uppercase">
                    Ready to Build Your Body?
                </h2>

                <div className="text-lg md:text-xl font-medium text-gray-300 mb-8 leading-relaxed space-y-4">
                    <p>
                        The Strategy Call is a paid 1:1 assessment for men over 35 who are serious about transforming their bodies through bodybuilding.
                    </p>
                    <p className="text-2xl font-extrabold text-[#8b1a1a]">Strategy Call — ₹1,999</p>
                    <p>
                        The ₹1,999 fee is fully adjustable against your coaching fees if you decide to proceed with a coaching program.
                    </p>
                    <p>
                        If I believe my coaching is the right fit, I&apos;ll explain the appropriate next step. If I believe another approach would serve you better, I&apos;ll tell you honestly.
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
                        Come prepared to be truthful about your habits, effort, and expectations.
                    </p>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AboutFinalCTA;
