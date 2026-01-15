"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AuthoritySnapshot = () => {
    return (
        <section className="bg-[#E4DFD3] text-[#2B2929] py-16 px-6 md:px-20">
            <div className=" mx-auto flex flex-col items-center gap-12">

                <div className="">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-center">
                        Why You’re in the Right Place
                    </h2>

                    <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed  mx-auto lg:mx-0 text-gray-800 text-center pb-10">
                        I’m not a coach who teaches theory. I coach from years of lived experience — training, competing, failing, learning, and refining what actually works.
                    </p>

                    <ul className="space-y-4 mb-10 inline-block text-left">
                            {[
                                "56-year-old competitive bodybuilder",
                                "National-level stage experience",
                                "Years of hands-on training and nutrition practice",
                                "Coached busy professionals, lifestyle clients, and competitive athletes",
                                "Health-first, blood-work-aware, no-nonsense approach"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-base md:text-lg font-semibold">
                                    <FaCheckCircle className="text-[#2B2929] mt-1 shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                    <div className="bg-[#2B2929] text-[#f4f2f2] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ">
                            <p className="text-lg md:text-xl font-bold italic">
                                "I don’t sell motivation. I build structure, discipline, and results."
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default AuthoritySnapshot;
