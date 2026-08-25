"use client";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const AboutExpectations = () => {
    return (
        <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
            <div className=" mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <FaExclamationTriangle className="text-[#8b1a1a] text-4xl" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
                    Before working together, there is one thing you must understand:
                </h2>

                <div className="text-xl md:text-2xl font-bold space-y-2 mb-10">
                    <p>I am <span className="text-[#8b1a1a]">direct.</span></p>
                    <p>I am <span className="text-[#8b1a1a]">honest.</span></p>
                    <p>I do not <span className="text-[#8b1a1a]">sugarcoat feedback.</span></p>
                </div>

                <div className="bg-[#2B2929] p-8 rounded-lg shadow-lg text-left md:text-center space-y-6 text-lg font-medium text-white">
                    <p>If something is not working, I will say it.</p>
                    <p>If effort is lacking, I will point it out.</p>
                    <p>If expectations are unrealistic, I will correct them.</p>
                </div>

                <div className="mt-12">
                    <p className="text-2xl md:text-3xl font-black text-[#8b1a1a] uppercase tracking-wide">
                        This approach is not for everyone. It is for men who are prepared to take responsibility for their results.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutExpectations;
