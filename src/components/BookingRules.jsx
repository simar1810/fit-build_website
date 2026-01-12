"use client";
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

const BookingRules = () => {
    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20">
            <div className=" mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#F3F2EF] px-6 py-2 rounded-full mb-6">
                        <FaInfoCircle className="text-[#2B2929]" />
                        <span className="font-bold text-sm tracking-wide uppercase">Important</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                        Read This Before Booking
                    </h2>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                        This call is for individuals who are serious about changing their body, health, and habits — not for casual enquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-[#E4DFD3]/30 p-8 rounded-xl border border-[#E4DFD3]">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            During this call, we will:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Discuss your current condition and goals",
                                "Understand your lifestyle, challenges, and constraints",
                                "Assess whether my coaching approach is the right fit for you"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg font-medium text-gray-800">
                                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2.5 shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#1a1a19] text-[#f4f2f2] p-8 rounded-xl shadow-lg transform md:scale-105">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#C82909]">
                            <FaTimesCircle />
                            This call is not:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "A free coaching session",
                                "A place to collect tips or shortcuts",
                                "A guarantee of acceptance into coaching"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg font-medium text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-[#C82909] rounded-full mt-2.5 shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <p className="text-xl font-bold text-[#2B2929]">
                        If we’re not a good fit, I will tell you honestly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingRules;
