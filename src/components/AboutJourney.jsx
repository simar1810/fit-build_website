"use client";
import React from "react";

const AboutJourney = () => {
    return (
        <section className="bg-[#E4DFD3] text-[#2B2929] py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
                    My Journey in Fitness Spans Over 12 Years
                </h2>

                <div className="text-lg md:text-xl font-medium space-y-8 leading-relaxed text-gray-800">
                    <p>
                        I have trained consistently, competed on stage, faced setbacks, refined methods, and learned firsthand what works — and what doesn’t. I have experienced fat gain, fat loss, muscle building, contest preparation, and the physical and mental demands that come with each phase.
                    </p>

                    <div>
                        <p className="font-bold text-[#2B2929] text-xl md:text-2xl mb-2">
                            This is not theoretical knowledge.
                        </p>
                        <p className="font-bold text-[#2B2929] text-xl md:text-2xl">
                            This is lived experience.
                        </p>
                    </div>

                    <p>
                        At 56, I continue to train and compete — not to impress anyone, but because I believe a coach must embody the standards he expects from his clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutJourney;
