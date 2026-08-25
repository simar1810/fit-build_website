"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program3 = () => {
    return (
        <section id="contest" className="bg-[#141414] text-white py-20 px-6 md:px-20 border-b border-gray-200">
            <div className=" mx-auto">
              
                <div className="mb-12">
                    <span className="text-[#8b1a1a] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 3
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center uppercase">
                        Contest Prep & Competitive Bodybuilding
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed">
                        Selective coaching for experienced bodybuilders preparing to step on stage. This is a specialised service for athletes who are already committed to the demands of competitive bodybuilding.
                    </p>
                    <p className="mt-4 font-bold text-[#8b1a1a] text-xl uppercase tracking-wide">
                        This program is not for beginners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                  
                    <div>
                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            Eligibility Requirements:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Established training history",
                                "Strong baseline physique",
                                "High consistency and discipline",
                                "Willingness to follow structured phases",
                                "Ability to execute precise nutrition and training requirements",
                                "Mental resilience required for competitive preparation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#8b1a1a] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mb-10">
                            <p className="text-lg font-bold text-white border-l-4 border-[#8b1a1a] pl-4">
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
                                "Periodised training",
                                "Phase-based nutrition",
                                "Conditioning strategy",
                                "Progress monitoring",
                                "Peak-phase planning",
                                "Ongoing adjustments",
                                "Competition-specific guidance",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#8b1a1a] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        
                        <div className="bg-[#E4DFD3] p-6 rounded-lg border-l-4 border-[#2B2929] mb-8">
                            <p className="font-bold text-[#8b1a1a] mb-2 uppercase text-sm tracking-wide">
                                Expectations:
                            </p>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                This is a demanding process. It requires precision, patience, consistency and full compliance.
                            </p>
                        </div>

                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#8b1a1a] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for Contest Prep
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program3;
