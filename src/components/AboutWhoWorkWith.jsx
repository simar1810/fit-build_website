"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutWhoWorkWith = () => {
    const clients = [
        "Busy professionals who want fat loss, muscle, and confidence",
        "Individuals struggling with lifestyle-related health issues",
        "People who are tired of starting over repeatedly",
        "Serious trainees and competitive athletes"
    ];

    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
                    Who I Work With
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16 px-4">
                    {clients.map((client, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <FaCheckCircle className="text-[#2B2929] mt-1 shrink-0" size={24} />
                            <span className="text-lg md:text-xl font-medium text-gray-800">{client}</span>
                        </div>
                    ))}
                </div>

                <div className="inline-block bg-[#E4DFD3] px-8 py-4 rounded-lg">
                    <p className="text-xl md:text-2xl font-bold text-[#2B2929]">
                        What all successful clients have in common is not talent — it is commitment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutWhoWorkWith;
