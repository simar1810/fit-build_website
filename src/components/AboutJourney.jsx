"use client";
import React from "react";

const AboutJourney = () => {
    return (
        <section className="bg-[#141414] text-[#8b1a1a] py-20 px-6 md:px-20">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 leading-tight text-center text-white">
                    <span className="text-[#8b1a1a]">My Journey</span> in Fitness Spans Over 12 Years
                </h2>

                <div className="text-lg md:text-xl font-medium space-y-8 leading-relaxed text-white ">
                    <p>
                        I have trained consistently, competed on stage, faced setbacks, refined methods, and learned firsthand what works — and what doesn’t. I have experienced fat gain, fat loss, muscle building, contest preparation, and the physical and mental demands that come with each phase.
                    </p>

                    <div>
                        <p className="font-bold text-white text-xl md:text-2xl mb-2">
                            This is not <span className="text-[#8b1a1a]">theoretical knowledge.</span>
                        </p>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            This is <span className="text-[#8b1a1a]">lived experience.</span>
                        </p>
                    </div>

                    <p className="text-white">
                        At 56, I continue to train and compete — not to impress anyone, but because I believe a coach must embody the standards he expects from his clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutJourney;
