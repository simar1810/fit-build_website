"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import BookingModal from "./BookingModal";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Change background after scrolling 20px
            setScrolled(currentScrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Booking", href: "/book" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1a1a19] shadow-lg py-1" : "bg-transparent py-2"
                }`}
        >
            <div className=" mx-auto px-6 md:px-10 flex justify-between lg:justify-around items-center">
                <Link href="/">

                    <div className={`relative transition-all duration-300 w-24`}>
                        <Image
                            src="/logo-app.png"
                            alt="Fit & Build"
                            width={160}
                            height={50}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-wider transition-colors ${pathname === link.href
                                ? "text-[#C82909]"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2.5 font-bold text-sm tracking-wide rounded-md transition-all shadow-lg bg-[#C82909] text-white hover:bg-[#a02006]"
                    >
                        Book a Call
                    </button>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="text-white" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-[#1a1a19] z-50 flex flex-col items-center justify-center space-y-8">
                    <button
                        className="absolute top-6 right-6 text-white text-3xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-[#bfbfb9] hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="px-8 py-3 bg-[#C82909] text-white text-lg font-bold rounded-md"
                    >
                        Book a Call
                    </button>
                </div>
            )}
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
};

export default Navbar;
