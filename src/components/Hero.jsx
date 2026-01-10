import React from 'react'
import Image from 'next/image'
import FloatingSection from './FloatingSection'

const Hero = () => {
  return (
    <main className="flex flex-col min-h-[50vh] lg:min-h-screen text-[#3D3838] bg-[#D2CAB6] overflow-x-hidden relative pt-28 lg:pt-38">
      {/* <div>
          <Image src="/page_effect_bg.png" alt='paper_effect' width={500} height={500} className=' w-full h-full inset-0 z-10 fixed opacity-20'/>
        </div> */}
      <div
        className="flex flex-col justify-between grow bg-cover bg-center lg:pt-14 "
      // style={{ backgroundImage: "url('/bg-frame.png')" }}
      >
        <section className="relative max-w-275 flex flex-col grow px-5 sm:px-10 lg:px-20 xl:px-8 lg:flex-row items-center justify-start lg:justify-between mx-auto xl:w-full w-full py-12 lg:py-0">
          <div className="relative lg:absolute lg:-top-12 max-w-2xl mx-auto z-10 lg:pb-18 text-center lg:text-left xl:pb-28 2xl:pb-20 px-3 sm:px-0 mb-10 lg:mb-0">
            {/* <div className="relative flex justify-center lg:justify-start items-center mb-6 lg:mb-10 2xl:mb-12 mt-4 lg:mt-6">
              <Image
                src="/logo-app.png"
                alt="fit&build Logo"
                width={250}
                height={250}
                className="w-48 sm:w-64 md:w-[30vw] lg:w-40 lg:absolute lg:-left-5 lg:-top-12.5 xl:-left-7.5 xl:-top-17.5 xl:w-48 2xl:w-[12vw] 2xl:-top-20"
              />
            </div> */}



            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight text-[#2B2929]">
              Transform Your Body, Health & Confidence — <br />
              <span className="text-[#3D3838]">
                Guided by a Competitive Bodybuilding Coach
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-[90%] md:w-[90%] mx-auto lg:w-[90%] lg:mx-0 text-base md:text-xl lg:text-lg font-bold text-gray-800 leading-relaxed">
              Fat loss. Lean muscle. Strength.<br />
              No guesswork. No shortcuts. Just proven systems built on real experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#2B2929] text-[#f4f2f2] text-sm sm:text-base md:text-lg font-extrabold shadow hover:bg-[#1a1a19] transition flex items-center justify-center gap-3 rounded-md">
                Book a Free Strategy Call
              </button>
              <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#2B2929] text-[#2B2929] text-sm sm:text-base md:text-lg font-bold hover:bg-[#2B2929] hover:text-[#f4f2f2] transition rounded-md">
                See Real Transformations
              </button>
            </div>
          </div>

          <div className="flex justify-center items-end absolute lg:right-16 xl:right-0 lg:-bottom-17.5 xl:-bottom-22 2xl:-bottom-20">
            <Image
              src="/boy-rope.png"
              alt="Wellness Yoga"
              width={500}
              height={500}
              className="hidden lg:flex lg:w-sm xl:w-100 2xl:w-[30vw]"
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
    </main >
  )
}

export default Hero
