"use client";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Qualification = () => {
    const forYou = [
        "You’re tired of guessing what to eat and how to train",
        "You want a clear structure you can follow long-term",
        "You respect discipline more than motivation",
        "You want fat loss, muscle, strength, and better health — not extremes",
    ];

    const notForYou = [
        "You’re looking for shortcuts or hacks",
        "You won’t follow instructions consistently",
        "You’re shopping only on price",
        "You want comfort instead of change",
    ];

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-20 px-6 md:px-20 ">
            <div className="mx-auto flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 ">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#f4f2f2] border-b-2 border-[#2B2929] pb-4">
                            This Coaching Is For You If:
                        </h3>
                        <ul className="space-y-6 ">
                            {forYou.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 ">
                                    <div className="mt-1 bg-green-900/30 p-1 rounded-full">
                                        <FaCheck className="text-green-500" size={18} />
                                    </div>
                                    <span className="text-lg text-gray-300 font-medium leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#bfbfb9] border-b-2 border-[#2B2929] pb-4 inline-block">
                            This Is NOT For You If:
                        </h3>
                        <ul className="space-y-6">
                            {notForYou.map((item, idx) => (
                                <li key={idx} className="flex items-start justify-left gap-4">
                                    <div className="mt-1 bg-red-900/30 p-1 rounded-full">
                                        <FaTimes className="text-red-500" size={18} />
                                    </div>
                                    <span className="text-lg text-gray-400 font-medium leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-gray-800 pt-10">
                    <p className="text-xl md:text-2xl font-bold text-white  mx-auto">
                        This coaching demands effort, honesty, and commitment — and delivers
                        results accordingly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
