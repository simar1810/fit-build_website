"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
    {
        id: "01",
        title: "Assess",
        desc: "We assess your physique, training history, lifestyle, nutrition, goals, recovery and relevant health context before building your plan.",
    },
    {
        id: "02",
        title: "Build",
        desc: "Your personalised bodybuilding training and nutrition strategy is built around your body, experience, goals and lifestyle.",
    },
    {
        id: "03",
        title: "Execute",
        desc: "You train, eat and recover according to the plan. Consistency is not optional.",
    },
    {
        id: "04",
        title: "Track & Adjust",
        desc: "Your training performance, body composition, compliance and recovery are monitored so the plan can evolve according to your actual response.",
    },
    {
        id: "05",
        title: "Transform",
        desc: "Build muscle. Get lean. Become stronger. Develop a body — and a level of confidence — that reflects the work you put in.",
    },
];

function ProcessStep({ step, index, isLast }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`flex gap-5 md:gap-8 transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="flex flex-col items-center shrink-0">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#8b1a1a] flex items-center justify-center text-white font-extrabold text-xs md:text-sm shadow-lg shadow-[#8b1a1a]/20">
                    {step.id}
                </div>
                {!isLast && (
                    <div className="w-px flex-1 min-h-[48px] md:min-h-[64px] bg-gradient-to-b from-[#8b1a1a]/80 to-[#3D3838] mt-2" />
                )}
            </div>

            <div className="bg-[#1a1a19] border border-[#3D3838] rounded-xl p-6 md:p-8 mb-6 md:mb-8 flex-1 hover:border-[#8b1a1a]/40 transition-colors">
                <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 md:mb-3 uppercase tracking-wide">
                    {step.title}
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed">
                    {step.desc}
                </p>
            </div>
        </div>
    );
}

export default function Process() {
    return (
        <section className="bg-[#141414] py-20 px-6 md:px-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        A <span className="text-[#8b1a1a]">Simple, Structured</span> Process That Works
                    </h2>
                    <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        No copy-paste plans. No generic advice. Every decision has a reason.
                    </p>
                </div>

                <div className="relative">
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={step.id}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
