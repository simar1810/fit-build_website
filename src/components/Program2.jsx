"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program2 = () => {
    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20 border-b border-gray-200">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <span className="text-[#C82909] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 2
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Health-First Fat Loss & Strength Coaching
                    </h2>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
                        Busy professionals dealing with excess weight, low energy, or lifestyle-related health concerns such as blood pressure, cholesterol, or insulin resistance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    {/* LEFT COLUMN */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            This is designed for people who:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Want fat loss without reckless dieting",
                                "Need a sustainable approach alongside work stress",
                                "Value long-term health as much as physical appearance",
                                "Want guidance that respects medical context"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-[#C82909] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mb-10">
                            <h3 className="text-xl font-bold mb-4">
                                What Makes This Program Different:
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                                Health is not ignored in pursuit of aesthetics.
                                <br />
                                Training and nutrition are structured with awareness of recovery, stress, and overall well-being.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            What This Coaching Includes:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Personalized training plan focused on strength and mobility",
                                "Nutrition planning aligned with lifestyle and health needs",
                                "Weekly progress tracking and accountability",
                                "Adjustments based on response and recovery"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-[#2B2929] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            Outcomes Clients Aim For:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Gradual, sustainable fat loss",
                                "Improved strength and stamina",
                                "Better energy levels",
                                "Improved lifestyle habits",
                                "Long-term adherence without burnout"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-green-600 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-[#E4DFD3] p-6 rounded-lg border-l-4 border-[#2B2929] mb-8">
                            <p className="font-bold text-[#2B2929] mb-2 uppercase text-sm tracking-wide">
                                Important Note:
                            </p>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                This is not medical treatment.
                                <br />
                                Clients are expected to coordinate with their doctors when required.
                            </p>
                        </div>

                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#C82909] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for Health-First Coaching
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program2;
