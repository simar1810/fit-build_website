"use client";

import { useState, useEffect, useRef } from "react";

export default function Process() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const steps = [
        {
            id: "01",
            title: "Deep Assessment",
            desc: "Detailed assessment of lifestyle, training history, goals, mood, and health context to build your foundation.",
        },
        {
            id: "02",
            title: "Personalized Planning",
            desc: "Fully personalized training and nutrition planning built around your life, not against it.",
        },
        {
            id: "03",
            title: "Continuous Accountability",
            desc: "Weekly check-ins and direct support to keep you consistent and on track.",
        },
        {
            id: "04",
            title: "Data-Driven Adjustments",
            desc: "adjustments based on real progress, biofeedback, and results — no guesswork.",
        },
        {
            id: "05",
            title: "Sustainable Transformation",
            desc: "Build habits and results that last a lifetime, long after the coaching ends.",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;


            const viewportTop = scrollY;
            const viewportBottom = scrollY + windowHeight;
            const sectionBottom = sectionTop + sectionHeight;


            const animationStart = sectionTop - windowHeight;
            const animationEnd = sectionBottom - windowHeight;
            const animationRange = animationEnd - animationStart;

            let progress = 0;

            if (viewportTop < animationStart) {
                progress = 0;
            } else if (viewportTop >= animationEnd || viewportBottom >= sectionBottom) {
               
                progress = 1;
            } else {
                progress = animationRange > 0 ? (viewportTop - animationStart) / animationRange : 1;
                progress = Math.max(0, Math.min(1, progress));
            }

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#E4DFD3]">
            <section
                ref={sectionRef}
                className="max-w-350 mx-auto bg-[#E4DFD3] py-20 px-6 md:px-20"
            >
                <div className=" mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2929] leading-tight mb-6">
                        A Simple, Structured Process That Works
                    </h2>
                    <p className="text-[#3D3838] text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        No copy-paste plans. No generic advice. Every decision has a reason.
                    </p>
                </div>

                <div ref={containerRef} className="relative mx-w-[1100px] mx-auto pb-20">
                    <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-1 top-0 bottom-0 bg-[#C5C5C5] rounded-2xl overflow-hidden">
                        <div
                            className="absolute top-0 left-0 w-full bg-[#3D3838] rounded-2xl transition-all duration-100 ease-out"
                            style={{
                                height: `${scrollProgress * 100}%`,
                            }}
                        ></div>
                    </div>

                    <div className="space-y-12 lg:space-y-4 relative">
                        {steps.map((step, index) => {
                            const totalCards = steps.length;
                            const cardProgressStart = (index / totalCards) * 0.5;
                            const cardProgressEnd = ((index + 1) / totalCards) * 0.9;

                            let cardProgress = 0;
                            if (scrollProgress >= cardProgressEnd) {
                                cardProgress = 1;
                            } else if (scrollProgress >= cardProgressStart) {
                                const range = cardProgressEnd - cardProgressStart;
                                cardProgress = range > 0 ? (scrollProgress - cardProgressStart) / range : 1;
                            }

                            const easedProgress = cardProgress < 0.5
                                ? 2 * cardProgress * cardProgress
                                : 1 - Math.pow(-2 * cardProgress + 2, 2) / 2;

                            const cardSpacing = 16;
                            const cardHeight = 250;
                            const totalSpacingPerCard = cardSpacing + cardHeight;

                            const stackedOffset = index * totalSpacingPerCard;
                            const currentY = stackedOffset * (1 - easedProgress);

                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
                            const opacity = isMobile ? 1 : Math.min(1, easedProgress * 1.1);
                            const scale = isMobile ? 1 : 0.95 + (easedProgress * 0.05);

                            const checkpointProgress = index / (totalCards - 1 || 1);
                            const checkpointDarkness = Math.min(1, Math.max(0,
                                (scrollProgress - checkpointProgress * 0.4) / 0.6
                            ));
                            const baseColor = { r: 158, g: 154, b: 154 };
                            const darkColor = { r: 61, g: 56, b: 56 }; // #3D3838
                            const checkpointColor = `rgb(${Math.round(baseColor.r + (darkColor.r - baseColor.r) * checkpointDarkness)
                                }, ${Math.round(baseColor.g + (darkColor.g - baseColor.g) * checkpointDarkness)
                                }, ${Math.round(baseColor.b + (darkColor.b - baseColor.b) * checkpointDarkness)
                                })`;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                                        }`}
                                    style={{
                                        ...(typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
                                            opacity: opacity,
                                            transform: `translateY(${-currentY}px) scale(${scale})`,
                                            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
                                            zIndex: totalCards - index,
                                        } : {})
                                    }}
                                >
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                                        <div
                                            className="w-8 h-8 border-4 border-[#E4DFD3] rounded-full transition-all duration-300 bg-[#E4DFD3]"
                                            style={{
                                                backgroundColor: checkpointColor,
                                                transform: checkpointDarkness > 0.3 ? "scale(1.1)" : "scale(1)",
                                            }}
                                        ></div>
                                        <span
                                            className={`absolute top-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-800 transition-opacity duration-300 ${index % 2 === 0 ? "left-32" : "right-32"
                                                } ${easedProgress > 0.2 ? "opacity-100" : "opacity-30"}`}
                                            style={{
                                                WebkitTextStroke: "2px #9E9A9A",
                                                color: "transparent",
                                            }}
                                        >
                                            {step.id}
                                        </span>
                                    </div>

                                    <div className="relative w-full lg:w-lg">
                                        <div
                                            className={`hidden lg:block absolute -bottom-3 ${index % 2 === 0 ? "-left-3" : "-right-3"
                                                } w-full h-full bg-[#2B2929] rounded-lg`}
                                        ></div>

                                        <div
                                            className={`relative bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-100
                        ${index % 2 === 0 ? "text-left" : "text-left"} 
                       `}
                                        >
                                            <div className="flex items-center gap-4 mb-4 lg:hidden">
                                                <span className="text-3xl font-black text-[#E4DFD3] mix-blend-multiply">{step.id}</span>
                                                <div className="h-px bg-gray-200 grow"></div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-[#2B2929] mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
