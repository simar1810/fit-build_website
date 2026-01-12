"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AboutFinalCTA = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                    If This Approach Resonates With You, Let’s Talk.
                </h2>

                <div className="text-lg md:text-xl font-medium text-gray-300 mb-12 leading-relaxed space-y-4">
                    <p>
                        The strategy call is a conversation to understand your goals, lifestyle, and commitment.
                    </p>
                    <p>
                        If we are the right fit, I’ll explain the next steps.
                        <br />
                        If not, I’ll tell you honestly.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Link href="/book" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-10 py-5 bg-[#C82909] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            Book a Free Strategy Call <FaArrowRight />
                        </button>
                    </Link>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Come prepared to be truthful about your habits, effort, and expectations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutFinalCTA;
