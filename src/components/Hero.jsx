'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FloatingSection from './FloatingSection'
import BookingModal from './BookingModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-[50vh] lg:min-h-screen bg-[#141414] overflow-hidden relative pt-28 lg:pt-32">
      <div className="flex flex-col justify-between grow">
        <section className="relative flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 mx-auto w-full max-w-7xl px-5 sm:px-10 xl:px-8 py-8 lg:py-0 lg:min-h-[calc(100vh-10rem)]">
          <div className="w-full lg:w-[48%] z-10 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-[2.75rem] font-extrabold leading-tight text-white uppercase tracking-tight">
              BUILD THE BODY.<br className="sm:hidden" /> <span className="text-[#8b1a1a]">BUILD THE MAN.</span>
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-[90%] mx-auto lg:w-full lg:mx-0 text-base md:text-xl lg:text-lg font-bold text-white leading-relaxed">
              Bodybuilding-based transformation for men over 35 who want to build muscle, get lean, and become stronger, confident men.
            </p>

            <p className="mt-3 sm:mt-4 w-full sm:w-[90%] mx-auto lg:w-full lg:mx-0 text-sm md:text-lg lg:text-base font-medium text-gray-300 leading-relaxed">
              No guesswork. No shortcuts. Just structured bodybuilding coaching built on real experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-[#8b1a1a] text-[#f4f2f2] text-sm sm:text-base md:text-lg font-extrabold shadow hover:bg-[#1a1a19] transition flex items-center justify-center gap-3 rounded-md uppercase tracking-wide"
              >
                Book Your Strategy Call
              </button>
              <button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#8b1a1a] text-[#8b1a1a] text-sm sm:text-base md:text-lg font-bold hover:bg-[#2B2929] hover:text-[#f4f2f2] transition rounded-md"
              >
                Read Client Stories
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] h-[420px] sm:h-[480px] lg:h-auto lg:aspect-[2/3] lg:max-h-[820px] overflow-hidden">
              <Image
                src="/home-page-01.jpeg"
                alt="Jehangir at the gym — Fit & Build"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-[center_18%] sm:object-[center_20%] lg:object-top"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <FloatingSection />
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

export default Hero
