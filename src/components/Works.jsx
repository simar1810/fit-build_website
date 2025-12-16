"use client";

import { useState, useEffect, useRef } from "react";

export default function Works() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Sign Up & Get Personalized Assessment",
      desc: "Tell us about your health goals, dietary preferences, and medical history.",
    },
    {
      id: "02",
      title: "Get Instant Access to Fit & Build",
      desc: "Once you sign up, you'll receive a direct login link to our app—no extra steps needed!",
    },
    {
      id: "03",
      title: "Follow Your Personalized Plan & Track Progress",
      desc: "Get science-backed meal plans, expert consultations, and real-time tracking.",
    },
    {
      id: "04",
      title: "Achieve a Healthier You!",
      desc: "Stay consistent with reminders, recipe recommendations, and expert advice.",
    },
  ];

  useEffect(() => {
    // Observe the entire section to trigger all cards simultaneously
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
      if (!sectionRef.current || !containerRef.current) return;

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
      const animationStart = sectionTop - windowHeight; // When section top reaches viewport top
      const animationEnd = sectionBottom - windowHeight; // When section bottom reaches viewport bottom
      const animationRange = animationEnd - animationStart;
      
      let progress = 0;
      
      if (viewportTop < animationStart) {
        progress = 0;
      } else if (viewportTop >= animationEnd || viewportBottom >= sectionBottom) {
        // Complete animation when entire section is visible
        progress = 1;
      } else {
        // Progress based on scroll position within animation range
        progress = animationRange > 0 ? (viewportTop - animationStart) / animationRange : 1;
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#E4DFD3]">
      <section
        ref={sectionRef}
        className="max-w-350 mx-auto bg-[#E4DFD3] py-16 px-6 md:px-20"
      >
        <div className="max-w-5xl mx-auto text-center mb-4 lg:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#212121]">
            How its Works
          </h2>
          <p className="text-[#363535] mt-2 text-lg md:text-xl font-semibold">
            Your concerns are our priority - we craft the perfect plan to fit your needs
          </p>
        </div>

        <div ref={containerRef} className="relative mx-w-[1100px] mx-auto">
          {/* Progress line background - starts from top */}
          <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-1 top-0 bottom-0 bg-[#C5C5C5] rounded-2xl overflow-hidden">
            {/* Animated progress fill - starts from top */}
            <div
              className="absolute top-0 left-0 w-full bg-[#3D3838] rounded-2xl transition-all duration-100 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            ></div>
          </div>

          <div className="space-y-4 relative">
            {steps.map((step, index) => {
              // Cards start stacked like a deck, then spread to their positions
              // Each card's progress is calculated based on its position in the sequence
              const totalCards = steps.length;
              // Cards animate faster - complete when section is fully visible
              const cardProgressStart = (index / totalCards) * 0.5; // Start at 50% of total progress
              const cardProgressEnd = ((index + 1) / totalCards) * 0.9; // Complete at 90% of total progress
              
              // Calculate how far along this card is in its animation
              let cardProgress = 0;
              if (scrollProgress >= cardProgressEnd) {
                cardProgress = 1; // Card is at final position
              } else if (scrollProgress >= cardProgressStart) {
                // Card is animating from deck to position
                const range = cardProgressEnd - cardProgressStart;
                cardProgress = range > 0 ? (scrollProgress - cardProgressStart) / range : 1;
              }
              
              // Easing function for smoother animation
              const easedProgress = cardProgress < 0.5 
                ? 2 * cardProgress * cardProgress 
                : 1 - Math.pow(-2 * cardProgress + 2, 2) / 2;
              
              // All cards start stacked at the first card's position
              // To stack them, we need to move each card UP by the spacing of previous cards
              // space-y-4 = 16px spacing, plus card height ~250px
              const cardSpacing = 16; // space-y-4 spacing
              const cardHeight = 250; // Approximate card height
              const totalSpacingPerCard = cardSpacing + cardHeight;
              
              // Stacked position: move up by cumulative spacing of previous cards
              const stackedOffset = index * totalSpacingPerCard; // How much to move up to stack
              const naturalOffset = 0; // Natural position (no offset needed)
              
              // Animate from stacked (negative translateY) to natural (0)
              const currentY = stackedOffset * (1 - easedProgress);
              
              // Opacity and scale for deck effect
              const opacity = Math.min(1, easedProgress * 1.1);
              const scale = 0.95 + (easedProgress * 0.05);
              
              // Checkpoint position for this card - gets darker as scroll progresses
              const checkpointProgress = index / (totalCards - 1 || 1);
              // Calculate darkness: starts darkening when scroll reaches this checkpoint's position
              const checkpointDarkness = Math.min(1, Math.max(0, 
                (scrollProgress - checkpointProgress * 0.4) / 0.6
              ));
              // Darker color based on scroll progress (from light gray #9E9A9A to dark #3D3838)
              const baseColor = { r: 158, g: 154, b: 154 }; // #9E9A9A
              const darkColor = { r: 61, g: 56, b: 56 }; // #3D3838
              const checkpointColor = `rgb(${
                Math.round(baseColor.r + (darkColor.r - baseColor.r) * checkpointDarkness)
              }, ${
                Math.round(baseColor.g + (darkColor.g - baseColor.g) * checkpointDarkness)
              }, ${
                Math.round(baseColor.b + (darkColor.b - baseColor.b) * checkpointDarkness)
              })`;
              
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                  style={{
                    opacity: opacity,
                    transform: `translateY(${-currentY}px) scale(${scale})`,
                    transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
                    zIndex: totalCards - index, // Top card in deck has higher z-index
                  }}
                >
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                    {/* Static checkpoint dot for each card - gets darker */}
                    <div
                      className="w-8 h-8 border-4 border-[#E4DFD3] rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: checkpointColor,
                        transform: checkpointDarkness > 0.3 ? "scale(1.1)" : "scale(1)",
                      }}
                    ></div>
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-800 transition-opacity duration-300 ${
                        index % 2 === 0 ? "left-32" : "right-32"
                      } ${isSectionVisible && easedProgress > 0.2 ? "opacity-100" : "opacity-50"}`}
                      style={{
                        WebkitTextStroke: "2px #9E9A9A",
                        color: "transparent",
                      }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Step card */}
                  <div className="relative w-full lg:w-lg lg:mb-8 xl:mb-0">
                    {/* Dark background shadow shape - hidden on small screens */}
                    <div
                      className={`absolute -bottom-2 md:-bottom-3.75 ${
                        index % 2 === 0 ? "left-0 md:-left-3.75" : "right-0 md:-right-3.75"
                      } px-40 w-full lg:w-auto lg:px-60 py-14 lg:py-16 bg-[#424242]`}
                    ></div>

                    <div
                      className={`relative bg-white p-6 border text-center lg:text-left
                        ${index % 2 === 0 ? "lg:pl-5" : "lg:pl-10"} 
                        mt-6 md:mt-12 lg:mt-0`}
                    >
                      <h3 className="text-sm sm:text-xl md:text-2xl lg:text-lg font-extrabold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-semibold text-sm sm:text-base xl:text-lg 2xl:text-base mt-2 lg:w-sm">
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
