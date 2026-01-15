"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FinalCTA = () => {
    return (
        <section className="bg-[#1a1a19] py-24 px-6 md:px-20 text-[#f4f2f2] text-center">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                    If You’re Serious About Change, Let’s Talk.
                </h2>
                <p className="text-lg md:text-xl font-medium text-gray-300 mb-10 leading-relaxed">
                    This free strategy call is not a sales pitch. It’s a conversation to understand your goals, assess fit, and decide whether working together makes sense. Not everyone is accepted.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link href="/book" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-10 py-5 bg-[#C82909] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            Book Your Free Strategy Call <FaArrowRight />
                        </button>
                    </Link>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Come prepared to be honest about your habits, effort, and expectations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
