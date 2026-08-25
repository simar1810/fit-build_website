"use client";
import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const AboutWhyCoach = () => {
    const overwhelmed = [
        "Conflicting information",
        "Generic plans",
        "Short-term thinking",
        "Unrealistic expectations"
    ];

    const clarity = [
        "Clear bodybuilding programming",
        "Personalised nutrition",
        "Honest feedback",
        "Consistent execution",
        "Long-term thinking"
    ];

    return (
        <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-center uppercase">
                    Why I Coach
                </h2>
                <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                    Most men don&apos;t need another random workout or another diet. They need a clear system they can actually execute.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="bg-gray-200 p-8 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-500 uppercase">
                            They are overwhelmed by:
                        </h3>
                        <ul className="space-y-4">
                            {overwhelmed.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                                    <FaTimes className="text-red-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

            
                    <div className="bg-[#2B2929] text-white p-8 rounded-xl border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-[#E4DFD3]">
                            My role is to replace confusion with:
                        </h3>
                        <ul className="space-y-4">
                            {clarity.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                                    <FaCheck className="text-green-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-xl md:text-2xl font-extrabold text-[#8b1a1a] uppercase tracking-wide">
                        No gimmicks. No hype. No shortcuts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyCoach;
