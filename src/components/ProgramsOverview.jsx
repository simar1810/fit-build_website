"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ProgramsOverview = () => {
    const programs = [
        {
            title: "1:1 Body Transformation Coaching",
            description:
                "Personalized training and nutrition for fat loss, lean muscle, strength, and confidence — built around your lifestyle, not against it.",
            link: "/programs#transformation",
        },
        {
            title: "Health-First Fat Loss & Strength Coaching",
            description:
                "For professionals dealing with weight, energy issues, or lifestyle health concerns who want sustainable change without reckless methods.",
            link: "/programs#health",
        },
        {
            title: "Contest Prep & Advanced Physique Coaching",
            description:
                "Structured, periodized coaching for serious trainees and competitive athletes only. Acceptance is selective.",
            link: "/programs#contest",
        },
    ];

    return (
        <section className="bg-[#E4DFD3] py-20 px-6 md:px-20 text-[#2B2929]">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center leading-tight">
                    Coaching Programs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-[#2B2929]/10 group"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#C82909] transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-700 font-medium leading-relaxed mb-8">
                                    {program.description}
                                </p>
                            </div>

                            <Link
                                href={program.link}
                                className="inline-flex items-center gap-2 font-bold text-[#2B2929] hover:text-[#C82909] transition-colors uppercase tracking-wide text-sm"
                            >
                                View Program <FaArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsOverview;
