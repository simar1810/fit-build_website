'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FloatingSection from './FloatingSection'
import BookingModal from './BookingModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-[50vh] lg:h-screen lg:max-h-screen bg-[#141414] overflow-hidden relative pt-28 lg:pt-38">
      {/* <div>
          <Image src="/page_effect_bg.png" alt='paper_effect' width={500} height={500} className=' w-full h-full inset-0 z-10 fixed opacity-20'/>
        </div> */}
      <div
        className="flex flex-col justify-between grow bg-cover bg-center  "
      // style={{ backgroundImage: "url('/bg-frame.png')" }}
      >
        <section className="relative  flex flex-col grow px-5 sm:px-10 lg:px-10 xl:px-8 lg:flex-row items-center justify-start lg:justify-between mx-auto xl:w-full w-full max-w-7xl py-12 lg:py-0">
          <div className="relative lg:absolute max-w-4xl  mx-auto lg:mx-0 z-10 lg:pb-18 text-center lg:text-left xl:pb-28 2xl:pb-20 sm:px-0 mb-10 lg:mb-0">

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
              Transform Your Body, Health & Confidence — <br />
              <span className="text-[#8b1a1a]">
                Guided by a Competitive Bodybuilding Coach
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-[90%] md:w-[90%] mx-auto lg:w-[90%] lg:mx-0 text-base md:text-xl lg:text-lg font-bold text-white leading-relaxed">
              Fat loss. Lean muscle. Strength.<br />
              No guesswork. No shortcuts. Just proven systems built on real experience.
            </p>

            <div className="mt-6 sm:mt-8 w-full sm:w-[90%] md:w-[90%] mx-auto lg:w-[90%] lg:mx-0 space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-extrabold text-[#8b1a1a] leading-tight">
                Build with Jehangir Strategy & Clarity Call — ₹1,999
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                (A focused 1-on-1 video session to assess your current situation, goals, identify what’s holding you back, and define the right path forward.)
              </p>
              <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed">
                The ₹1,999 fee ensures the call is reserved for individuals who are serious about making a meaningful transformation.
              </p>
              <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed">
                The ₹1,999 fee is fully adjusted against your coaching investment if you decide to work with me.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-[#8b1a1a] text-[#f4f2f2] text-sm sm:text-base md:text-lg font-extrabold shadow hover:bg-[#1a1a19] transition flex items-center justify-center gap-3 rounded-md"
              >
                Book Strategy & Clarity Call — ₹1,999
              </button>
              <button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#8b1a1a] text-[#8b1a1a] text-sm sm:text-base md:text-lg font-bold hover:bg-[#2B2929] hover:text-[#f4f2f2] transition rounded-md"
              >
                Read Client Stories
              </button>
            </div>
          </div>

          <div className="flex justify-center items-end absolute lg:right-6 xl:right-0 lg:-bottom-17.5 xl:-bottom-22 2xl:-bottom-20">
            <Image
              src="/boy-rope.png"
              alt="Wellness Yoga"
              width={500}
              height={500}
              className="hidden lg:flex lg:w-sm xl:w-100 "
            />
          </div>
        </section>
      </div>
      <div>
        <FloatingSection />
      </div>
      {/* <section className="text-[#faf6f6] py-5 px-5 sm:px-10 md:px-20 xl:px-8 max-w-275 w-full mx-auto">
        <div className="flex items-center justify-between gap-6 sm:gap-0 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">10,000</h3>
            <p className="text-[#faf6f6] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">Life Impacted</p>
          </div>
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">5000+</h3>
            <p className="text-[#faf6f6] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">Personalized Plan</p>
          </div>
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">99%</h3>
            <p className="text-[#faf6f6] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">User Satisfaction</p>
          </div>
        </div>
      </section> */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main >
  )
}

export default Hero
