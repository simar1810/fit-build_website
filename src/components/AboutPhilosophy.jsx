"use client";
import React from "react";
import { FaLayerGroup, FaBolt, FaRunning } from "react-icons/fa";

const AboutPhilosophy = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                   
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
                            My Coaching Philosophy is Simple.
                        </h2>
                        <div className="w-20 h-1 bg-[#C82909] mb-8"></div>
                        <p className="text-xl font-medium text-gray-300 leading-relaxed mb-8">
                            I don’t chase trends. I don’t promise unrealistic timelines. I don’t sell comfort.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            I build systems that clients can follow — even with busy schedules, work stress, travel, and family responsibilities.
                        </p>
                    </div>

                   
                    <div className="lg:w-1/2 space-y-6">
                        <div className="bg-[#2B2929] p-6 rounded-lg border-l-4 border-[#C82909] flex items-center gap-6">
                            <div className="bg-[#1a1a19] p-3 rounded-full shrink-0">
                                <FaBolt className="text-[#f4f2f2]" size={24} />
                            </div>
                            <p className="text-xl md:text-2xl font-bold">
                                Discipline beats motivation.
                            </p>
                        </div>
                        <div className="bg-[#2B2929] p-6 rounded-lg border-l-4 border-[#f4f2f2] flex items-center gap-6">
                            <div className="bg-[#1a1a19] p-3 rounded-full shrink-0">
                                <FaLayerGroup className="text-[#f4f2f2]" size={24} />
                            </div>
                            <p className="text-xl md:text-2xl font-bold">
                                Structure beats guesswork.
                            </p>
                        </div>
                        <div className="bg-[#2B2929] p-6 rounded-lg border-l-4 border-[#C82909] flex items-center gap-6">
                            <div className="bg-[#1a1a19] p-3 rounded-full shrink-0">
                                <FaRunning className="text-[#f4f2f2]" size={24} />
                            </div>
                            <p className="text-xl md:text-2xl font-bold">
                                Consistency beats intensity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPhilosophy;
