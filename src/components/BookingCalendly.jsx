"use client";
import React from "react";
import { useState, useEffect } from "react";



import { useSearchParams } from "next/navigation";
import { InlineWidget } from "react-calendly";
import BookingModal from "./BookingModal";

const BookingCalendly = () => {
    const searchParams = useSearchParams();
    const isPaid = searchParams.get("paid") === "true";
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1a1a19] text-[#f4f2f2] py-24 px-6 md:px-20 text-center">
            <div className=" mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                    Book Your Strategy Call Below
                </h2>

                <p className="text-gray-400 text-sm md:text-base font-medium mb-10 max-w-2xl mx-auto">
                    Please ensure you are in a quiet environment and can focus during the call.
                    <br />
                    Reschedules without notice may result in cancellation.
                </p>

                <div className="w-full min-h-[700px] mb-16 relative">
                    <div className={!isPaid ? "blur-md pointer-events-none select-none" : ""}>
                        <InlineWidget
                            url={`https://calendly.com/${process.env.NEXT_PUBLIC_CALENDLY_LINK}/30min`}
                            styles={{ height: "700px", width: "100%" }}
                        />
                    </div>

                    {!isPaid && (
                        <div className="absolute inset-0 flex items-start justify-center pt-32 z-10">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-10 py-4 bg-[#C82909] text-white text-lg font-bold rounded-md shadow-lg hover:bg-[#a02006] transition-all transform hover:-translate-y-1"
                            >
                                Book a Free Strategy Call
                            </button>
                        </div>
                    )}
                </div>

                <div className=" mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-[#E4DFD3] mb-4">
                        Coaching works only when effort meets structure.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400">
                        If you’re ready to take responsibility for your results, this call is the first step.
                    </p>
                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default BookingCalendly;
