"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-purple-700 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="font-bold text-xl">
                        <Link href="/">BitLinks</Link>
                    </div>

                    {/* Hamburger menu (mobile only) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-2xl focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Nav links (desktop) */}
                    <ul className="hidden md:flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/shorten">Shorten</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li className="flex gap-3">
                            <Link href="/shorten">
                                <button className="bg-purple-500 hover:bg-purple-600 shadow-lg px-4 py-1 rounded-lg font-bold transition">
                                    Try Now
                                </button>
                            </Link>
                            <Link href="https://github.com/Mehdi-Chandia">
                                <button className="bg-purple-500 hover:bg-purple-600 shadow-lg px-4 py-1 rounded-lg font-bold transition">
                                    Github
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-purple-800">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/shorten" onClick={() => setIsOpen(false)}>Shorten</Link></li>
                        <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                        <li className="flex flex-col gap-3 w-full px-6">
                            <Link href="/shorten" onClick={() => setIsOpen(false)}>
                                <button className="bg-purple-500 hover:bg-purple-600 shadow-lg w-full py-2 rounded-lg font-bold transition">
                                    Try Now
                                </button>
                            </Link>
                            <Link href="https://github.com" onClick={() => setIsOpen(false)}>
                                <button className="bg-purple-500 hover:bg-purple-600 shadow-lg w-full py-2 rounded-lg font-bold transition">
                                    Github
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
