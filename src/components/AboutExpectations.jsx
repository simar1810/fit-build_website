"use client";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const AboutExpectations = () => {
    return (
        <section className="bg-[#E4DFD3] text-[#2B2929] py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <FaExclamationTriangle className="text-[#C82909] text-4xl" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
                    Before working together, there is one thing you must understand:
                </h2>

                <div className="text-xl md:text-2xl font-bold space-y-2 mb-10">
                    <p>I am direct.</p>
                    <p>I am honest.</p>
                    <p>I do not sugarcoat feedback.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-left md:text-center space-y-6 text-lg font-medium text-gray-800">
                    <p>If something is not working, I will say it.</p>
                    <p>If effort is lacking, I will point it out.</p>
                    <p>If expectations are unrealistic, I will correct them.</p>
                </div>

                <div className="mt-12">
                    <p className="text-2xl md:text-3xl font-black text-[#C82909] uppercase tracking-wide">
                        This approach is not for everyone — but it works.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutExpectations;
