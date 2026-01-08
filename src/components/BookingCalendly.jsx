"use client";
import React, { useEffect } from "react";

const BookingCalendly = () => {

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                    Book Your Strategy Call Below
                </h2>

                <p className="text-gray-400 text-sm md:text-base font-medium mb-10 max-w-2xl mx-auto">
                    Please ensure you are in a quiet environment and can focus during the call.
                    <br />
                    Reschedules without notice may result in cancellation.
                </p>

                <div className="w-full min-h-[600px] bg-white rounded-lg flex items-center justify-center text-[#2B2929] mb-16">
                    <div className="text-center p-10">
                        <p className="text-xl font-bold mb-4">[Calendly Embed Here]</p>
                        <p className="text-gray-600">
                            Please insert your Calendly inline embed code or component here.
                            <br />
                            Example: <code>&lt;InlineWidget url="https://calendly.com/your-link" /&gt;</code>
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-[#E4DFD3] mb-4">
                        Coaching works only when effort meets structure.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400">
                        If you’re ready to take responsibility for your results, this call is the first step.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendly;
