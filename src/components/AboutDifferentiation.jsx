"use client";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const AboutDifferentiation = () => {
    const precisionPoints = [
        "Personalized",
        "Structured",
        "Adjusted based on real feedback",
        "Built for sustainability"
    ];

    const antiPoints = [
        "I don’t copy-paste programs.",
        "I don’t hand out generic diets.",
        "I don’t disappear after onboarding."
    ];

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
               
                <div className="md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
                        What sets my coaching apart is not complexity — it is precision.
                    </h2>

                    <div className="space-y-6 mb-12">
                        <p className="text-xl font-bold text-[#f4f2f2] border-b border-gray-700 pb-2">
                            Every plan is:
                        </p>
                        <ul className="space-y-4">
                            {precisionPoints.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-lg text-gray-300">
                                    <FaCheck className="text-[#C82909]" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        {antiPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-gray-400">
                                <FaTimes className="text-gray-600" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="bg-[#2B2929] p-10 rounded-full w-80 h-80 flex items-center justify-center text-center shadow-2xl border-4 border-[#C82909]/20">
                        <p className="text-2xl md:text-3xl font-extrabold italic leading-snug">
                            "Coaching is a process, not a transaction."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDifferentiation;
