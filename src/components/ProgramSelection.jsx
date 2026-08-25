"use client";
import React, { useState } from "react";
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa";
import BookingModal from "./BookingModal";

const ProgramSelection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <div className="flex justify-center mb-6">
                    <FaQuestionCircle className="text-[#8b1a1a] text-5xl" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight uppercase">
                    Not Sure Which Coaching Path Is Right for You?
                </h2>

                <p className="text-xl md:text-2xl font-medium text-gray-300 mb-10 leading-relaxed">
                    That&apos;s exactly what the Strategy Call is designed to determine.
                </p>

                <div className="bg-[#2B2929] p-8 md:p-10 rounded-xl mb-12 shadow-xl border border-gray-700 max-w-2xl mx-auto text-left">
                    <h3 className="text-xl font-bold mb-6 text-[#f4f2f2] border-b border-gray-600 pb-2">
                        During the call, we discuss:
                    </h3>
                    <ul className="space-y-4 text-lg text-gray-300">
                        {[
                            "Your current physique and training status",
                            "Your bodybuilding and transformation goals",
                            "Your training history",
                            "Your nutrition and lifestyle",
                            "Your biggest obstacles",
                            "Your level of commitment",
                            "The most appropriate coaching path for you",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#8b1a1a] rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        If I believe my coaching is the right fit, I&apos;ll explain the appropriate next step. If I believe another approach would serve you better — or that we aren&apos;t the right fit — I&apos;ll tell you honestly.
                    </p>
                </div>

                <div className="inline-block w-full sm:w-auto">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto px-10 py-5 bg-[#8b1a1a] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
                    >
                        Book Your Strategy Call <FaArrowRight />
                    </button>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default ProgramSelection;
