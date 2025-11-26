"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        "The best URL Shortener in the market",
        "Fast, Simple, and Reliable",
        "Shorten URLs in Seconds",
        "No Login Required",
        "Free Forever"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const currentTitle = titles[loopNum % titles.length];

            if (!isDeleting) {
                // Typing phase
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.substring(0, displayText.length + 1));
                    setTypingSpeed(150);
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting phase
                if (displayText.length > 0) {
                    setDisplayText(currentTitle.substring(0, displayText.length - 1));
                    setTypingSpeed(100);
                } else {
                    // Move to next title
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                    setTypingSpeed(150);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

    return (
        <main className="bg-purple-100 min-h-screen flex items-center justify-center">
            <section className="grid md:grid-cols-2 grid-cols-1 w-full max-w-6xl mx-auto items-center">
                {/* Left Section (Text + Buttons) */}
                <div className="flex flex-col items-center md:items-start justify-center gap-6 p-8 md:p-12 text-center md:text-left">
                    {/* Animated Title */}
                    <div className="min-h-[120px] md:min-h-[144px] flex items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </div>

                    {/* Static Description */}
                    <div className="min-h-[80px] flex items-center">
                        <p className="text-gray-700 max-w-lg text-lg">
                            We are the most straightforward URL shortener in the world — no login required,
                            no tracking — just short links, fast and easy.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
                        <Link href="/shorten">
                            <button className="bg-purple-500 text-white shadow-lg px-8 py-3 rounded-lg font-bold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                                Try Now
                            </button>
                        </Link>
                        <Link href="https://github.com/Mehdi-Chandia" target="_blank">
                            <button className="bg-purple-500 text-white shadow-lg px-8 py-3 rounded-lg font-bold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                                Github
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
                    <Image
                        src="/vector.jpg"
                        alt="Vector illustration"
                        width={500}
                        height={400}
                        className="object-contain mix-blend-darken animate-float"
                        priority
                    />
                </div>
            </section>

            {/* Add custom animation for floating effect */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </main>
    );
}