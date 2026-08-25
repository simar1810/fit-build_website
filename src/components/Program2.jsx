"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Program2 = () => {
    return (
        <section id="advanced" className="bg-[#0d0d0d] text-[#2B2929] py-20 px-6 md:px-20 border-b border-gray-200">
            <div className=" mx-auto">
                <div className="mb-12">
                    <span className="text-[#C82909] font-bold tracking-wider uppercase text-sm md:text-base mb-2 block">
                        Program 2
                    </span>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center uppercase">
                        <span className="text-[#8b1a1a]">Advanced</span> Bodybuilding & Physique Coaching
                    </h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed">
                        For experienced trainees who already understand the basics and want a more advanced, structured approach to building muscle, improving proportions and developing their physique.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    <div>
                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            This is ideal if you:
                        </h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "You have several years of consistent training experience.",
                                "You already understand basic nutrition and training.",
                                "Your progress has slowed or plateaued.",
                                "You want more advanced programming and progression.",
                                "You want to bring up specific weak body parts.",
                                "You are serious about long-term physique development.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#8b1a1a] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl text-white font-bold mb-6 border-b border-gray-200 pb-2">
                            What This Coaching Includes:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Advanced hypertrophy programming",
                                "Exercise selection and execution strategy",
                                "Volume and intensity management",
                                "Phase-based nutrition",
                                "Body-composition management",
                                "Weak-point development",
                                "Recovery management",
                                "Detailed progress tracking and adjustments",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <FaCheck className="text-[#8b1a1a] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-end">
                        <Link href="/book" className="block w-full">
                            <button className="w-full py-4 bg-[#8b1a1a] text-white text-lg font-bold rounded hover:bg-[#a62207] transition-all shadow-md uppercase tracking-wide">
                                Apply for Advanced Coaching
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program2;
