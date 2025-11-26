"use client";
import React from "react";
import { FiUsers, FiZap, FiLock, FiGlobe } from "react-icons/fi";

export default function About() {
    const features = [
        {
            icon: <FiZap className="text-3xl" />,
            title: "Lightning Fast",
            description: "Shorten URLs instantly with our optimized infrastructure that ensures minimal latency."
        },
        {
            icon: <FiLock className="text-3xl" />,
            title: "Secure & Private",
            description: "No tracking, no ads, no data selling. Your privacy is our top priority."
        },
        {
            icon: <FiUsers className="text-3xl" />,
            title: "User-Friendly",
            description: "Simple interface that requires no technical knowledge. Shorten links in one click."
        },
        {
            icon: <FiGlobe className="text-3xl" />,
            title: "Global Reach",
            description: "Accessible worldwide with 99.9% uptime and reliable performance."
        }
    ];

    const stats = [
        { number: "100K+", label: "Links Shortened" },
        { number: "50+", label: "Countries Served" },
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Available" }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6">
                        About BitLinks
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing the way people share links by making it faster,
                        simpler, and more secure than ever before.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
                        Why Choose BitLinks?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                                <div className="text-purple-600 mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-purple-800 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At BitLinks, we believe that sharing links should be effortless and secure.
                                We're committed to providing a URL shortening service that puts users first.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Founded with the vision of simplifying digital communication,
                                we continue to innovate and improve our platform to serve you better.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-purple-100 leading-relaxed">
                                To create a world where sharing digital content is instant,
                                secure, and accessible to everyone, everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}