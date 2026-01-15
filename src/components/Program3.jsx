"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program3 = () => {
    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20 border-b border-gray-200">
            <div className=" mx-auto">
              
                <div className="mb-12">
                    <span className="text-[#C82909] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 3
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center">
                        Contest Prep & Advanced Physique Coaching
                    </h2>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        Experienced trainees and competitive athletes preparing for physique, bodybuilding, or transformation categories.
                    </p>
                    <p className="mt-4 font-bold text-[#C82909] text-xl uppercase tracking-wide">
                        This program is not for beginners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                  
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            Eligibility Requirements:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Solid training base",
                                "High discipline and consistency",
                                "Willingness to follow structured phases",
                                "Mental resilience under pressure"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-[#C82909] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mb-10">
                            <p className="text-lg font-bold text-[#2B2929] border-l-4 border-[#2B2929] pl-4">
                                Acceptance into this program is selective.
                            </p>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">
                            What This Coaching Includes:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Periodized training structure",
                                "Phase-based nutrition planning",
                                "Conditioning and peak-phase strategy",
                                "Continuous monitoring and adjustments",
                                "Mental and strategic preparation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <FaCheck className="text-[#2B2929] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        
                        <div className="bg-[#E4DFD3] p-6 rounded-lg border-l-4 border-[#2B2929] mb-8">
                            <p className="font-bold text-[#2B2929] mb-2 uppercase text-sm tracking-wide">
                                Expectations:
                            </p>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                This is a demanding process.
                                <br />
                                It requires precision, patience, and full compliance.
                            </p>
                        </div>

                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#C82909] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for Contest Prep Coaching
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program3;
