"use client";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const BookingCriteria = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    
                    <div>
                        <h2 className="text-3xl font-extrabold mb-8 text-green-500 uppercase tracking-wide">
                            This Call Is For You If:
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "You’re ready to commit to a structured coaching process",
                                "You want clarity instead of confusion",
                                "You’re willing to follow instructions consistently",
                                "You value long-term results over quick fixes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-xl">
                                    <FaCheck className="text-green-500 mt-1 shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold mb-8 text-[#C82909] uppercase tracking-wide">
                            Please Do NOT Book If:
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "You’re looking for motivation or validation",
                                "You’re not prepared to invest time, effort, and discipline",
                                "You want the cheapest option available",
                                "You’re unwilling to be honest about your habits"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-xl text-gray-400">
                                    <FaTimes className="text-[#C82909] mt-1 shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-2xl font-bold text-gray-300 italic">
                        This saves both of us time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingCriteria;
