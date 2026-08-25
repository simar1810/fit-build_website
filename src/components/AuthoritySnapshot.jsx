"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AuthoritySnapshot = () => {
    const bullets = [
        "Started my own transformation at 44",
        "Built a six-pack at 46",
        "Stepped on stage at 48",
        "National-level bodybuilding experience",
        "56-year-old competitive bodybuilder",
        "Years of hands-on bodybuilding, training and nutrition experience",
        "Specialised focus on men over 35",
        "Personalised, structured and accountability-driven coaching",
    ];

    return (
        <section className="bg-[#141414] text-white py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-center">
                    Why You&apos;re in the Right Place
                </h2>

                <p className="text-lg md:text-xl font-medium mb-4 leading-relaxed text-white text-center max-w-4xl mx-auto">
                    I&apos;m not a coach who teaches bodybuilding from theory alone. I&apos;ve lived the transformation myself — starting at 44, building a six-pack at 46, stepping on stage at 48, competing at the national level, and continuing to build my physique in my 50s.
                </p>
                <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed text-white text-center max-w-4xl mx-auto">
                    I coach men over 35 using the principles I&apos;ve learned through years of training, competition, coaching and real-world experience — adapted for the demands of a mature body and a demanding life.
                </p>

                <p className="text-center text-[#8b1a1a] font-extrabold text-sm md:text-base uppercase tracking-wide mb-10 max-w-3xl mx-auto">
                    Started at 44 · Six-pack at 46 · On stage at 48 · Nationals at 52 · Still building at 56
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-10 max-w-4xl mx-auto">
                    {bullets.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-base md:text-lg font-semibold">
                            <FaCheckCircle className="text-[#8b1a1a] mt-1 shrink-0" size={18} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-[#151414] text-[#8b1a1a] border border-[#8b1a1a]/50 p-6 md:p-8 rounded-xl max-w-3xl mx-auto text-center">
                    <p className="text-lg md:text-xl font-bold italic">
                        &ldquo;I don&apos;t sell motivation. I build structure, discipline, and results.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AuthoritySnapshot;
