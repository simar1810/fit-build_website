"use client";
import React from "react";

const ProgramsHero = () => {
    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] pt-32 pb-20 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight uppercase">
                    Bodybuilding & Physique Coaching
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-3xl mx-auto">
                    Personalised bodybuilding-based coaching for men over 35 who want to build muscle, get lean and develop a stronger, more impressive body.
                </p>

                <div className="w-24 h-1 bg-[#C82909] mx-auto mb-12"></div>

                <div className="text-lg md:text-xl text-gray-200 leading-relaxed space-y-6 max-w-3xl mx-auto">
                    <p>
                        Every body is different. Every training history is different. Every lifestyle is different.
                    </p>
                    <p>
                        That&apos;s why every coaching plan is personalised around your body, training experience, goals, recovery and lifestyle — not copied from a template.
                    </p>
                    <p className="font-bold text-[#f4f2f2]">
                        Choose the level of bodybuilding coaching that matches your experience, goals and commitment. Every program requires consistency, honesty and execution.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
