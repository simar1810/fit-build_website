"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
// import { LuFacebook } from "react-icons/lu";


export default function Footer() {


  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/jehangir.bodybuilding/" },
    // { icon: LuFacebook, url: "https://www.facebook.com/profile.php?id=61558809396085" },
  ];


  return (
    <footer className="relative bg-[#E4DFD3] w-full  ">

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-around
       gap-10 md:gap-30 relative z-10 ">

        {/* Left Side - Logo */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <Image
            src="/logo-app.png"
            alt="Fit & Build"
            width={400}
            height={400}
            className="w-36 sm:w-44 lg:w-82"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col text-[#1a1a19] items-center md:items-start justify-center text-center md:text-left">
          <p className="text-lg sm:text-2xl font-bold mb-4">Contact us</p>

          <div className="flex items-center gap-3 mb-3 text-sm sm:text-base font-medium">
            <span className="text-[#E0492B]">✉</span>
            <a href="mailto:jehangirranderia@gmail.com" className="hover:text-[#E0492B] transition-colors">jehangirranderia@gmail.com</a>
          </div>

          <div className="flex items-center gap-3 mb-5 text-sm sm:text-base font-medium">
            <span className="text-[#E0492B]">📞</span>
            <span>+91 - 9821448048</span>
          </div>

          <div className="flex items-center justify-start gap-4 mb-6 text-[#1a1a19]">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <Icon
                key={i}
                size={22}
                className="cursor-pointer hover:scale-110 hover:text-[#E0492B] transition-all"
                onClick={() => window.open(url, "_blank")}
              />
            ))}
          </div>

          <p className="text-sm sm:text-base font-medium">
            Made with <span className="text-[#E0492B]">♥️</span> by <span className="font-bold md:text-2xl text-lg">WellnessZ</span> in India 🇮🇳
          </p>
        </div>
      </div>

      <div className="w-full bg-[#E0492B] px-6 sm:px-10 md:px-20 2xl:px-40 py-4 sm:py-5 mt-8 sm:mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white gap-2 lg:gap-0 relative z-10 text-xs sm:text-sm text-center sm:text-left">
        <p>Copyright © 2023 Mohi Lifestyle Solutions Pvt Ltd.</p>
        <p>
          All Rights Reserved |{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => window.open("/terms-and-conditions", "_blank")}
          >
            Terms and Conditions
          </span>{" "}
          |{" "}
          <span
            className="hover:underline cursor-pointer"
            onClick={() => window.open("/privacy-policy", "_blank")}
          >
            Privacy Policy
          </span>
        </p>
      </div>
    </footer>
  );
}
