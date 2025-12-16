"use client";

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const ReliablePartner = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const cards = [
    {
      image: "/img3.jpeg",
      title: "Muscle Building",
      desc: "Science-backed programs for mass and strength.",
    },
    {
      image: "/img2.png",
      title: "Contest Prep",
      desc: "Expert guidance for stage-ready physiques.",
    },
    {
      image: "/img1.jpg",
      title: "Athletic Physique",
      desc: "Sculpt your ideal aesthetic.",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress - animation completes when entire section is in view
      const viewportTop = scrollY;
      const viewportBottom = scrollY + windowHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Start animation when section top enters viewport
      // Complete animation when section bottom enters viewport (entire section visible)
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
    <div 
      ref={sectionRef}
      className='w-full h-auto 2xl:h-143.5 bg-linear-to-r from-[#1a1a19] to-[#5e5e5c] px-6 sm:px-10 md:px-20 lg:px-28 2xl:px-36 text-white flex flex-col 2xl:flex-row justify-center 2xl:justify-center items-center 2xl:items-start gap-10 2xl:gap-36 relative'>

      <div
        className="absolute inset-0 w-53 h-23 top-18 hidden 2xl:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 3px, transparent 5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      {/* <Image src='/leaf.png' alt='leaf1' width={100} height={100} className='absolute bottom-0 left-0 w-20 sm:w-24 lg:w-28 hidden 2xl:block' />
      <Image src='/Ellipse.png' alt='ellipse' width={500} height={500} className='absolute bottom-0 left-24 w-[31vw] hidden 2xl:block' />
      <Image src='/Ellipse1.png' alt='ellipse1' width={500} height={500} className='absolute bottom-0 left-24 rotate-6 w-[36vw] hidden 2xl:block' />
      <Image src='/Ellipse2.png' alt='ellipse2' width={500} height={500} className='absolute bottom-0 left-6 w-[39vw] hidden 2xl:block' /> */}

      {/* <Image src='/floral-logo-template2.png' alt='floral' width={500} height={500} className='absolute bottom-0 right-0 w-40 sm:w-44 md:w-48 lg:w-52' /> */}
      {/* <Image src='/floral-logo-template3.png' alt='floral' width={500} height={500} className='absolute top-0 left-10 sm:left-32 md:left-52 lg:left-64 w-56 sm:w-72 md:w-80 lg:w-96' /> */}
      
      {/* <div className="absolute bottom-48 left-22 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-white rounded-full shadow-md shadow-gray-700 hidden 2xl:block"></div>
      <div className="absolute bottom-60 left-[40vw] w-3 sm:w-4 h-3 sm:h-4 bg-[#ffffffce] rounded-full shadow-md shadow-gray-600 hidden 2xl:block"></div> */}

      {/* Left side (image) — hidden below xl */}
      <div className='w-full overflow-hidden z-10 hidden 2xl:flex 2xl:justify-center 2xl:items-end'>
        <Image src='/flex-body.png' alt='fitness-expert' width={500} height={500} className='w-sm h-fit overflow-hidden' />
      </div>

      {/* Right content */}
      <div className='flex flex-col items-center 2xl:items-start justify-center gap-6 sm:gap-8 py-10 2xl:py-14 text-center 2xl:text-left'>
        <div className='flex flex-col gap-3 sm:gap-4 px-4 sm:px-0'>
          <p className='font-extrabold text-[#bfbfb9] text-2xl sm:text-3xl md:text-4xl'>Your Partner in Building Excellence</p>  
          <p className='font-normal text-sm sm:text-base md:text-lg text-[#bfbfb9] max-w-[90%] mx-auto 2xl:mx-0 sm:max-w-[80%] 2xl:max-w-none'>
            Fit & Build provides the holistic approach to bodybuilding, muscle building, athletic physiques, contest prep, stage shows, and photo shoots.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row justify-center lg:justify-between 2xl:justify-start gap-5 sm:gap-4 items-center sm:items-start px-4 sm:px-0 relative'>
          {cards.map((card, index) => {
            const totalCards = cards.length;
            
            // Each card animates in sequence
            const cardProgressStart = (index / totalCards) * 0.5;
            const cardProgressEnd = ((index + 1) / totalCards) * 0.9;
            
            let cardProgress = 0;
            if (scrollProgress >= cardProgressEnd) {
              cardProgress = 1;
            } else if (scrollProgress >= cardProgressStart) {
              const range = cardProgressEnd - cardProgressStart;
              cardProgress = range > 0 ? (scrollProgress - cardProgressStart) / range : 1;
            }
            
            // Easing function
            const easedProgress = cardProgress < 0.5 
              ? 2 * cardProgress * cardProgress 
              : 1 - Math.pow(-2 * cardProgress + 2, 2) / 2;
            
            // Deck stacking: cards start centered with rotation and offset
            // Then spread horizontally to their natural positions
            // Since cards are in flex container, we use translateX to position them
            // When stacked: all cards at center (translateX to center them)
            // When spread: cards at natural flex positions (translateX = 0)
            
            // Calculate offset needed to center all cards when stacked
            // Middle card (index 1) stays at center, others move towards it
            const middleIndex = Math.floor(totalCards / 2);
            const cardWidth = 224; // sm:w-56 = 224px
            const cardGap = 16; // gap-4 = 16px
            const cardSpacing = cardWidth + cardGap;
            
            // Offset from center position
            const offsetFromCenter = (index - middleIndex) * cardSpacing;
            // When stacked, all cards should be at center (offset = 0)
            // When spread, cards are at natural positions (offset = offsetFromCenter)
            const currentX = offsetFromCenter * (1 - easedProgress);
            
            // Deck effect: rotation and slight vertical offset when stacked
            const maxRotation = 8; // degrees
            const maxYOffset = 10; // pixels
            const rotation = (1 - easedProgress) * maxRotation * (index % 2 === 0 ? 1 : -1);
            const yOffset = (1 - easedProgress) * maxYOffset * index;
            
            // Opacity and scale
            const opacity = Math.min(1, easedProgress * 1.1);
            const scale = 0.9 + (easedProgress * 0.1);
            
            return (
              <div
                key={index}
                className='w-full sm:w-56 relative'
                style={{
                  opacity: isSectionVisible ? opacity : 0,
                  transform: `translateX(${isSectionVisible ? currentX : 0}px) translateY(${isSectionVisible ? yOffset : 0}px) rotate(${isSectionVisible ? rotation : 0}deg) scale(${isSectionVisible ? scale : 0.9})`,
                  transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
                  zIndex: totalCards - index, // Top card in deck has higher z-index
                }}
              >
                <div className='w-full h-45 overflow-hidden'>
                  <Image src={card.image} alt={card.title} width={100} height={100} className="w-full" />
                </div>
                <div className='flex flex-col gap-1 py-5 sm:py-7 px-4 sm:px-5 bg-white text-black lg:text-left'>
                  <p className='font-bold text-xs sm:text-base'>{card.title}</p>
                  <p className='text-xs sm:text-sm font-normal'>{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ReliablePartner
