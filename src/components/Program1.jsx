"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program1 = () => {
    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20 border-b border-gray-200">
            <div className=" mx-auto">
                
                <div className="mb-12">
                    <span className="text-[#C82909] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 1
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center">
                        1:1 Body Transformation Coaching
                    </h2>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed ">
                        Men and women who want to lose fat, build lean muscle, improve strength, and regain confidence — without confusion or extreme methods.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            This is ideal if you:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Have tried multiple diets or workout plans with short-term results",
                                "Want structure that fits your work and family life",
                                "Are willing to follow a plan consistently",
                                "Want results that last, not rebound cycles"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-[#C82909] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            What This Coaching Includes:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Fully personalized training program",
                                "Fully personalized nutrition plan",
                                "Weekly check-ins and progress reviews",
                                "Continuous guidance and accountability",
                                "Adjustments based on real progress, not assumptions"
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
                            Results Clients Commonly Achieve:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Sustainable fat loss",
                                "Lean muscle development",
                                "Improved strength and energy",
                                "Better control over habits and routine",
                                "Increased confidence and self-discipline"
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
                                This program is not about motivation or quick fixes.
                                <br />
                                It is about structure, execution, and consistency.
                            </p>
                        </div>

                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#C82909] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for 1:1 Coaching
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program1;
