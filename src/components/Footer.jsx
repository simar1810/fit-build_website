"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    goal: "",
  });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/sanrajwellness/?next=%2F&hl=en" },
    { icon: LuFacebook, url: "https://www.facebook.com/profile.php?id=61558809396085" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, goal } = formData;
    if (!name || (!email && !phoneNumber)) {
      toast.error("Please fill in name and either email or phone number.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          goal,
          isCallPermission: true,
          frontEndClient: "Sanraj_Wellness",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      toast.success("Thank you! Your details have been submitted.");
      setFormData({ name: "", email: "", phoneNumber: "", goal: "" });
    } catch (err) {
      toast.error(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="relative bg-gradient-to-b from-[#BBD63C] via-[#03311bd8] to-[#067a42] w-full pb-2 rounded-t-xl">
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar />
      <div className="mx-6 sm:mx-10 md:mx-20 2xl:mx-40 py-10 sm:py-14 lg:py-16 relative z-10">
        <h1 className="mb-8 sm:mb-10 text-[#212121] text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-tight">
          Let’s Know You Better!
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-10"
        >
          {[
            { label: "Name", type: "text", placeholder: "Enter your name", name: "name" },
            { label: "Phone", type: "tel", placeholder: "Enter your phone number", name: "phoneNumber" },
            { label: "Email", type: "email", placeholder: "Enter your email", name: "email" },
            { label: "What is your goal", type: "text", placeholder: "Enter your goal", name: "goal" },
          ].map(({ label, type, placeholder, name }, i) => (
            <div key={i}>
              <label className="text-base sm:text-lg font-semibold text-[#2E2D2D]">
                {label}
              </label>
              <input
                name={name}
                value={formData[name]}
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                className="bg-white rounded-md w-full px-4 py-2 sm:py-3 mt-2 sm:mt-3 text-sm sm:text-base"
              />
            </div>
          ))}
        </form>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className={`px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-full text-white font-semibold text-base sm:text-lg bg-[#424242] shadow-md shadow-gray-600 transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>

      {/* Lower section remains same */}
      <div className="mx-6 sm:mx-10 md:mx-20 2xl:mx-40 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0 relative z-10">
        <div className="border-[1px] border-[#FFFFFF6B] absolute md:left-1/2 md:-translate-x-1/2 md:h-full hidden md:block"></div>

        <div className="text-white flex flex-col justify-start items-center md:items-start text-center md:text-left max-w-3xl md:w-2xs lg:w-xl relative">
          <Image
            src="/client-assets/swc_logo.png"
            alt="footer-left"
            width={400}
            height={400}
            className="w-36 sm:w-44 lg:w-52"
          />
          <p className="font-medium mt-4 sm:mt-5 md:mt-0 text-sm sm:text-base xl:text-lg leading-relaxed text-center md:text-left max-w-sm lg:max-w-md xl:max-w-lg">
            At Sanraj Wellness, we believe in empowering every individual to live a balanced,
            healthy, and fulfilled life. Through expert guidance, nutrition, and a supportive
            community, we help you achieve lasting transformation—inside and out.
          </p>
        </div>

        <div className="flex flex-col text-white items-center md:items-start justify-center text-center md:text-left">
          <p className="text-base sm:text-lg font-bold mb-3 md:mb-5">Contact Us</p>
          <p className="mb-2 md:mb-4 text-sm sm:text-base">
            <span className="font-bold">Email</span> : szalte111@gmail.com
          </p>
          <p className="mb-3 md:mb-5 text-sm sm:text-base">
            <span className="font-bold">Mobile No.</span> : +91 - 8888099399
          </p>
          <div className="flex items-center justify-start gap-3 mb-4 md:mb-6">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <Icon
                key={i}
                size={22}
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open(url, "_blank")}
              />
            ))}
          </div>
          <p className="text-sm sm:text-base">
            Made with ♥️ by <span className="font-bold">WellnessZ</span> in India
          </p>
        </div>
      </div>

      <div className="mx-6 sm:mx-10 md:mx-20 2xl:mx-40 py-4 sm:py-5 border-t-2 border-[#FFFFFF6B] mt-8 sm:mt-10 flex flex-col lg:flex-row items-center justify-between text-white gap-2 lg:gap-0 relative z-10 text-xs sm:text-sm lg:text-base text-center sm:text-left">
        <p>Copyright © 2023 Mohi Lifestyle Solutions Pvt Ltd.</p>
        <p>
          All Rights Reserved |{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => window.open("/terms-and-conditions", "_blank")}
          >
            Terms & Conditions
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
