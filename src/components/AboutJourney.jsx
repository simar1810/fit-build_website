"use client";
import React from "react";
import CoachPhoto from "./CoachPhoto";

const AboutJourney = () => {
    return (
        <section className="bg-[#141414] text-[#8b1a1a] py-20 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 leading-tight text-center text-white uppercase">
                    <span className="text-[#8b1a1a]">My Transformation</span> Started at 44
                </h2>

                <div className="text-lg md:text-xl font-medium space-y-8 leading-relaxed text-white">
                    <p>
                        My transformation did not begin at 18. It began at 44.
                    </p>

                    <CoachPhoto
                        src="/about-page-01.jpeg"
                        alt="Jehangir at the start of his transformation"
                        className="w-full max-w-xs mx-auto aspect-[2/5] sm:aspect-[3/5] rounded-xl bg-[#1a1a19]"
                        imageClassName="object-contain object-center"
                    />

                    <p>
                        I started overweight and out of shape.
                    </p>

                    <CoachPhoto
                        src="/about-page-02.jpeg"
                        alt="Jehangir at 44, at the beginning of his transformation"
                        className="w-full max-w-sm mx-auto aspect-[4/5] rounded-xl"
                        imageClassName="object-cover object-[center_20%]"
                    />

                    <p>
                        By 46, I had built a six-pack. At 48, I stepped on stage. I went on to compete at the national level — and I&apos;m still training and building my physique today at 56.
                    </p>

                    <CoachPhoto
                        src="/about-page-03.jpeg"
                        alt="Jehangir training at 56"
                        className="w-full max-w-md mx-auto max-lg:max-w-sm max-lg:aspect-[3/4] lg:aspect-[5/6] rounded-xl"
                        imageClassName="bg-[#141414] max-lg:object-cover max-lg:object-[50%_32%] lg:object-cover lg:object-[center_18%]"
                    />

                    <p>
                        Along the way, I&apos;ve experienced fat loss, muscle building, hypertrophy training, contest preparation, setbacks, plateaus and the physical and mental demands of transforming a mature body.
                    </p>

                    <div>
                        <p className="font-bold text-white text-xl md:text-2xl mb-2">
                            This is not <span className="text-[#8b1a1a]">theoretical knowledge.</span>
                        </p>
                        <p className="font-bold text-white text-xl md:text-2xl">
                            This is <span className="text-[#8b1a1a]">lived experience.</span>
                        </p>
                    </div>

                    <p className="text-white">
                        At 56, I continue to train and build. Not because I believe transformation has an expiry date — but because I believe a coach should embody the standards he expects from his clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutJourney;
