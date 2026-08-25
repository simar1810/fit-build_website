"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import BookingModal from "./BookingModal";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-md border-b border-black/5 py-2"
                    : "bg-white border-b border-black/5 py-3"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center gap-4">
                <Link href="/" className="hover:opacity-95 transition-opacity shrink-0" aria-label="Fit & Build home">
                    <BrandLogo />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                                pathname === link.href
                                    ? "text-[#8b1a1a]"
                                    : "text-[#2b2929]/70 hover:text-[#1a1a19]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-5 py-2.5 font-bold text-sm tracking-wide rounded-md transition-all shadow-md bg-[#8b1a1a] text-white hover:bg-[#a02006] uppercase"
                    >
                        Book Your Strategy Call
                    </button>
                </div>

                <button
                    className="md:hidden text-2xl p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <FaBars className="text-[#1a1a19]" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8">
                    <button
                        className="absolute top-6 right-6 text-[#1a1a19] text-3xl"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>

                    <BrandLogo className="mb-4" size="large" />

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold ${
                                pathname === link.href ? "text-[#8b1a1a]" : "text-[#2b2929] hover:text-[#8b1a1a]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="px-8 py-3 bg-[#8b1a1a] text-white text-lg font-bold rounded-md uppercase"
                    >
                        Book Your Strategy Call
                    </button>
                </div>
            )}
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
};

export default Navbar;
