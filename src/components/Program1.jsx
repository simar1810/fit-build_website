"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program1 = () => {
    return (
        <section id="transformation" className="bg-[#141414] text-[#2B2929] py-20 px-6 md:px-20 border-b border-gray-200">
            <div className=" mx-auto">
                
                <div className="mb-12">
                    <span className="text-[#8b1a1a] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 1
                    </span>
                    <h2 className="text-3xl sm:text-4xl text-white md:text-5xl font-extrabold leading-tight mb-6 text-center uppercase">
                        <span className="text-[#8b1a1a]">1:1</span> Bodybuilding Transformation Coaching
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed ">
                        For men over 35 who already train — or have trained before — and want to build muscle, get lean and develop an impressive body through structured bodybuilding.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                
                    <div>
                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            This is ideal if you:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "You already train but aren't getting the physique you want.",
                                "You want to build noticeable muscle.",
                                "You want to get lean without sacrificing muscle.",
                                "You want structured bodybuilding programming.",
                                "You need your training and nutrition adapted to your age, lifestyle and recovery.",
                                "You are ready to take your transformation seriously.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#C82909] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            What This Coaching Includes:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Personalised bodybuilding training program",
                                "Personalised nutrition strategy",
                                "Training and nutrition adjustments based on progress",
                                "Weekly check-ins",
                                "Progress tracking",
                                "Accountability and direct coaching support",
                                "Recovery and lifestyle guidance",
                                "Ongoing program optimisation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#8b1a1a] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            Results You Can Work Toward:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "More muscle",
                                "Lower body fat",
                                "Improved muscularity and proportions",
                                "Greater strength",
                                "Better training performance",
                                "Greater confidence",
                                "A body you are genuinely proud of",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-green-600 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        
                        <div className="bg-[#E4DFD3] p-6 rounded-lg border-l-4 border-[#2B2929] mb-4">
                            <p className="font-bold text-[#8b1a1a] mb-2 uppercase text-sm tracking-wide">
                                Important Note:
                            </p>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                This is not about quick fixes or motivation. It is about structured bodybuilding, intelligent nutrition, consistent execution and long-term progress.
                            </p>
                        </div>
                        <p className="text-gray-400 font-medium mb-8">
                            You do not need to compete. The goal is to use bodybuilding principles to build an exceptional body for your life.
                        </p>

                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#8b1a1a] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for 1:1 Bodybuilding Coaching
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program1;
