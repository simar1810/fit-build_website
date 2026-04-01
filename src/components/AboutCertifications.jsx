"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAward, FaTimes } from "react-icons/fa";

const certifications = [
    {
        title: "Certified Personal Trainer (CPT)",
        org: "International Sports Sciences Association (ISSA), USA",
        year: "2021",
        focus: "Exercise science, program design, biomechanics, and safe training methodologies.",
        image: "/certificates/cert-cpt.jpg",
    },
    {
        title: "Specialist in Sports Nutrition",
        org: "International Sports Sciences Association (ISSA), USA",
        year: "2021",
        focus: "Macronutrient planning, performance nutrition, supplementation strategy, and metabolic understanding.",
        image: "/certificates/cert-sports-nutrition.jpg",
    },
    {
        title: "Specialist in Bodybuilding",
        org: "International Sports Sciences Association (ISSA), USA",
        year: "2021",
        focus: "Hypertrophy principles, advanced training systems, contest preparation, and physique development.",
        image: "/certificates/cert-bodybuilding.jpg",
    },
    {
        title: "Elite Trainer Certification",
        org: "International Sports Sciences Association (ISSA), USA",
        year: "2021",
        focus: "Granted upon completion of multiple advanced certifications, reflecting comprehensive expertise across training, nutrition, and bodybuilding specialization.",
        image: "/certificates/cert-elite-trainer.jpg",
    },
];

const AboutCertifications = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <>
            <section className="bg-[#141414] text-white py-24 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <FaAward className="text-[#8b1a1a] text-3xl" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                            Certifications & Professional Education
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            While experience is built through decades of training and competition,
                            formal education strengthens structure and accountability.
                        </p>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
                            My coaching approach combines real-world bodybuilding experience with
                            globally recognized certifications from the{" "}
                            <span className="font-semibold text-[#8b1a1a]">
                                International Sports Sciences Association (ISSA), USA
                            </span>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {certifications.map((cert, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col sm:flex-row gap-6 bg-[#2B2929] border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                            >
                                <div
                                    className="sm:w-48 sm:min-w-[12rem] h-36 relative rounded overflow-hidden bg-gray-100 cursor-pointer group shrink-0"
                                    onClick={() => setLightbox(cert.image)}
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, 192px"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded">
                                            Click to enlarge
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-[#8b1a1a] font-semibold mb-1">
                                        {cert.org}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Year Issued: {cert.year}
                                    </p>
                                    <p className="text-white leading-relaxed">
                                        {cert.focus}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <div className="w-16 h-[2px] bg-[#8b1a1a] mx-auto mb-8" />
                        <p className="text-xl font-bold text-white mb-2">
                            Certifications provide structured knowledge.
                        </p>
                        <p className="text-xl font-bold text-white mb-6">
                            Experience provides judgment.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            My coaching integrates both — ensuring that every recommendation is
                            grounded in science and refined through decades of practical application.
                        </p>
                    </div>
                </div>
            </section>

            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-3xl hover:text-[#C82909] transition-colors z-10"
                        onClick={() => setLightbox(null)}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                    <div
                        className="relative w-full max-w-3xl max-h-[85vh] aspect-[4/3]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightbox}
                            alt="Certificate"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutCertifications;
