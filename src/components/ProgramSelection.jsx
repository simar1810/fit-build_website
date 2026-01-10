"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa";

const ProgramSelection = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                    <FaQuestionCircle className="text-[#C82909] text-5xl" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                    Not Sure Which Program Is Right for You?
                </h2>

                <p className="text-xl md:text-2xl font-medium text-gray-300 mb-10 leading-relaxed">
                    That’s exactly what the strategy call is for.
                </p>

                <div className="bg-[#2B2929] p-8 md:p-10 rounded-xl mb-12 shadow-xl border border-gray-700 max-w-2xl mx-auto text-left">
                    <h3 className="text-xl font-bold mb-6 text-[#f4f2f2] border-b border-gray-600 pb-2">
                        During the call, we discuss:
                    </h3>
                    <ul className="space-y-4 text-lg text-gray-300">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#C82909] rounded-full"></span>
                            Your current condition
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#C82909] rounded-full"></span>
                            Your goals
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#C82909] rounded-full"></span>
                            Your lifestyle and constraints
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#C82909] rounded-full"></span>
                            Your level of commitment
                        </li>
                    </ul>
                </div>

                <div className="text-lg text-gray-300 mb-12 leading-relaxed">
                    <p>
                        Based on that, I’ll recommend the most appropriate coaching path — or tell you honestly if this isn’t the right fit.
                    </p>
                </div>

                <Link href="/book" className="inline-block w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-5 bg-[#C82909] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide">
                        Book a Free Strategy Call <FaArrowRight />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ProgramSelection;
