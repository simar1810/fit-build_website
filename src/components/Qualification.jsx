"use client";
import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import BookingModal from "./BookingModal";

const Qualification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const forYou = [
        "You're a man over 35 who already trains — or has trained before.",
        "You want to build muscle, not simply lose weight.",
        "You want to get lean while preserving and building muscle.",
        "You want a structured bodybuilding approach rather than another generic workout or diet plan.",
        "You want to understand how to train and eat effectively as you get older.",
        "You are willing to train consistently, follow your nutrition plan and track your progress.",
        "You want to look substantially different 6–12 months from now.",
        "You are serious about building a body you are genuinely proud of.",
    ];

    const notForYou = [
        "You're looking for a quick-fix weight-loss program.",
        "You want a generic workout or diet PDF.",
        "You constantly change programs because you get bored.",
        "You want results without consistent execution.",
        "You are unwilling to track your training, nutrition and progress.",
        "You expect motivation to do the work for you.",
        "You're looking for shortcuts instead of a structured process.",
        "You're not prepared to make your transformation a priority.",
    ];

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-20 px-6 md:px-20 ">
            <div className="mx-auto flex flex-col items-center justify-center max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#f4f2f2] border-b-2 border-[#2B2929] pb-4">
                            This Coaching Is For You If:
                        </h3>
                        <ul className="space-y-6 ">
                            {forYou.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 ">
                                    <div className="mt-1 bg-green-900/30 p-1 rounded-full">
                                        <FaCheck className="text-green-500" size={18} />
                                    </div>
                                    <span className="text-lg text-gray-300 font-medium leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#bfbfb9] border-b-2 border-[#2B2929] pb-4 inline-block">
                            This Is NOT For You If:
                        </h3>
                        <ul className="space-y-6">
                            {notForYou.map((item, idx) => (
                                <li key={idx} className="flex items-start justify-start gap-4">
                                    <div className="mt-1 bg-red-900/30 p-1 rounded-full">
                                        <FaTimes className="text-red-500" size={18} />
                                    </div>
                                    <span className="text-lg text-gray-400 font-medium leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-gray-800 pt-10 flex flex-col items-center gap-4">
                    <p className="text-xl md:text-2xl font-bold text-white mx-auto max-w-3xl">
                        This coaching demands effort, honesty, consistency and commitment. If you&apos;re prepared to do the work, I&apos;ll provide the structure, guidance and accountability.
                    </p>
                    <p className="text-lg text-gray-300 font-medium">
                        You don&apos;t need to be a competitive bodybuilder. You need to be serious about building your body.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 px-10 py-4 bg-[#8b1a1a] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                    >
                        Book Your Strategy Call
                    </button>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Qualification;
