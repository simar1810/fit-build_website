"use client";
import React from "react";

const BookingProcess = () => {
    return (
        <section className="bg-white text-[#2B2929] py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center leading-tight">
                    What Happens Next
                </h2>

                <div className="space-y-8 relative">
                    <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-[#E4DFD3] -z-10"></div>

                    {[
                        "You complete the qualification form honestly",
                        "You book a call at a time you can attend without distractions",
                        "We speak for clarity, alignment, and expectations",
                        "If suitable, I explain the coaching options and next steps"
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-start gap-6">
                            <div className="bg-[#2B2929] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                                {idx + 1}
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingProcess;
