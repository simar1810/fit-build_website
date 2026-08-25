"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BookingModal from "./BookingModal";

const ProgramsOverview = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const programs = [
        {
            title: "1:1 Bodybuilding Transformation Coaching",
            description:
                "Personalised bodybuilding training, nutrition and accountability for men over 35 who want to build muscle, get lean and develop an impressive physique — without following a generic program designed for someone else.",
            link: "/programs#transformation",
        },
        {
            title: "Advanced Bodybuilding & Physique Coaching",
            description:
                "For experienced trainees who already understand the basics and want a more advanced, structured approach to building muscle, improving proportions and developing their physique.",
            link: "/programs#advanced",
        },
        {
            title: "Contest Prep & Competitive Bodybuilding",
            description:
                "Selective coaching for experienced bodybuilders preparing to step on stage. This is a specialised service for athletes who are already committed to the demands of competitive bodybuilding.",
            link: "/programs#contest",
        },
    ];

    return (
        <section className="bg-[#0d0d0d] py-20 px-6 md:px-20 text-[#8b1a1a]">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center leading-tight text-white uppercase">
                    Bodybuilding & Physique Coaching
                </h2>
                <p className="text-lg md:text-xl text-gray-300 font-medium text-center max-w-3xl mx-auto mb-4 leading-relaxed">
                    Personalised bodybuilding-based coaching for men over 35 who want to build muscle, get lean and develop a stronger, more impressive body.
                </p>
                <p className="text-base md:text-lg text-gray-400 font-medium text-center max-w-3xl mx-auto mb-4 leading-relaxed">
                    No copy-paste programs. No generic plans. Your training, nutrition, recovery and progression are built around your body, goals, experience and lifestyle.
                </p>
                <p className="text-base md:text-lg text-white font-bold text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                    Every coaching path requires commitment, consistency and honesty.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-[#141414] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-[#2B2929]/10 group"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#C82909] transition-colors text-white">
                                    {program.title}
                                </h3>
                                <p className="text-white font-medium leading-relaxed mb-8">
                                    {program.description}
                                </p>
                            </div>

                            <Link
                                href={program.link}
                                className="inline-flex items-center gap-2 font-bold text-[#8b1a1a] hover:text-[#C82909] transition-colors uppercase tracking-wide text-sm"
                            >
                                View Program <FaArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-[#8b1a1a] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#a62207] hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-wide"
                    >
                        Book Your Strategy Call <FaArrowRight />
                    </button>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default ProgramsOverview;
