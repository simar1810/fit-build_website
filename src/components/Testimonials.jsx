"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

const testimonials = [
    {
        name: "Behzad Sangha",
        excerpt:
            "He truly understood what my goal was and customised a training and diet plan as per my body, my fitness goals and what I wanted to achieve.",
        full: `Hi,
I am Behzad and I would like to share my experiential journey with Jehangir. I was always into fitness but somewhere with a job and other responsibilities, started neglecting my health and fitness. As a result when I used to look at myself in the mirror I said that this is not who or what I want to be or look.

That's when through Instagram I got in touch with Jehangir and my fitness n diet journey has never been the same after meeting him.

He truly understood what my goal was and customised a training and diet plan as per my body, my fitness goals and what I wanted to achieve. The diet given was very normal, nothing fancy, that all can follow. No fancy or exotic fruits, vegetables etc. Just plain wholesome home cooked food consisting of an adequate amount of proteins, carbs etc. that were specific and measured for achieving my ideal body weight/condition.

As I started my workouts I gradually started noticing a drop in my weight, strength n lifting power increasing in the gym week on week. People started noticing the transformation within my body before and after. It's been more than 3 months or so that Jehangir has been monitoring my daily and weekly progress and if I go wrong in my diet or workouts he immediately corrects the same.

So if you really wanna transform yourself, Jehangir is the person to go to. But that would only be possible if you are ready to put in the effort and time and commit to him 100%. He is the Sarthi. It's upto you to be Arjun and focus your goals just like the way Arjun focussed on the eye of the fish and by doing so you will definitely start seeing the changes and achieving your goals.

Cheers`,
    },
    {
        name: "Adil Khambata",
        excerpt:
            "Jehangir has provided a customised plan with a balanced diet and protein requirements in addition to the workout. This has not only helped me lose weight but also gain muscle mass and strength.",
        full: `I started off with Jehangir and that has turned out to be one of the best decision of my life.

I used to work out at the gym with trainers who would help you rectify a posture while doing a particular exercise, but that wasn't enough and a thought crossed to enrol with a personal trainer - but who? The trainers at the gym although are trained but they have a temporary engagement but i was looking for someone who would not only guide workouts but an holistic improvement towards lifestyle, diet, workouts and weight loss.

Jehangir has provided a customised plan with a balanced diet and protein requirements in addition to the workout. This has not only helped me lose weight but also gain muscle mass and strength to lift heavier than i use to.

I definitely recommend anyone who is looking to either lose weight, gain weight, get fitter stronger healthier or even compete to enrol with Jehangir because his personal transformation journey is not only awe inspiring but is an epitome of motivation…`,
    },
    {
        name: "Shivam Malhotra",
        excerpt:
            "In about six months, I lost around 18 kg, dropped roughly 4–5 inches off my waist, and significantly improved my strength and overall physique.",
        full: `Before starting with him around October 2024, I had already been training for about a year with another coach. I was consistent with "diet foods" but didn't truly understand calories, portion sizes, or how hard I actually needed to train. My motivation was also inconsistent because there wasn't much personal connection or accountability, and my bulk just made me gain more fat instead of getting in shape.

I decided to start with him largely from a gut feeling. Seeing someone who transformed himself after 40 and still trains seriously at 55 made me trust his experience and mindset. It felt real and sustainable.

What changed most after joining was discipline and clarity. He constantly emphasizes that results come from honest effort, but he communicates it in a very grounded and motivating way. My training became more structured, my nutrition more precise, and I finally understood how to measure and adjust properly.

In about six months, I lost around 18 kg, dropped roughly 4–5 inches off my waist, and significantly improved my strength and overall physique. My energy, routine, and consistency improved a lot, and people around me — even other trainers — started noticing the change. What surprised me most is that you can enjoy the discipline when the process is clear and the coach is supportive but honest.

I think his coaching is especially great for people who are serious about getting into proper shape or bodybuilding, and even more so for people in their late 30s–50s who want a sustainable transformation. He focuses heavily on mindset and accountability, which is what most people actually lack.

I would definitely recommend him. He's knowledgeable, very grounded, and not pushy or money-minded. If someone is willing to put in the work and wants real, measurable results with consistent guidance, he's a solid coach to work with.`,
    },
];

const TestimonialCard = ({ testimonial }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-[#2B2929] rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
                <FaQuoteLeft className="text-[#8b1a1a] text-2xl mb-5" />

                <p className="text-lg font-medium italic text-gray-300 leading-relaxed mb-4">
                    &ldquo;{testimonial.excerpt}&rdquo;
                </p>

                {expanded && (
                    <div className="mt-4 border-t border-gray-700 pt-5">
                        {testimonial.full.split("\n\n").map((para, i) => (
                            <p
                                key={i}
                                className="text-[15px] text-gray-400 leading-relaxed mb-4 last:mb-0"
                            >
                                {para}
                            </p>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-[#8b1a1a] text-sm font-bold mt-4 hover:text-[#e03a1a] transition-colors cursor-pointer"
                >
                    {expanded ? (
                        <>
                            Read Less <FaChevronUp className="text-xs" />
                        </>
                    ) : (
                        <>
                            Read Full Testimonial <FaChevronDown className="text-xs" />
                        </>
                    )}
                </button>
            </div>

            <div className="bg-[#222121] px-8 py-4 border-t border-gray-700">
                <p className="text-[#f4f2f2] font-bold tracking-wide">
                    {testimonial.name}
                </p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-[#1a1a19] py-24 px-6 md:px-20 text-[#f4f2f2]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center leading-tight">
                    What Clients Say
                </h2>
                <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    Real words from real clients. No edits. No exaggerations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <TestimonialCard key={index} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
