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
        "Clear planning",
        "Honest feedback",
        "Consistent execution",
        "Long-term thinking"
    ];

    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 leading-tight text-center">
                    I coach because most people fail not due to lack of effort, but due to lack of structure and clarity.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="bg-gray-200 p-8 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-500">
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
                            My role is to remove confusion and replace it with:
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
                    <p className="text-xl md:text-2xl font-extrabold text-[#C82909] uppercase tracking-wide">
                        No gimmicks. No hype. No shortcuts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyCoach;
