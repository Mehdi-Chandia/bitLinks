"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactMethods = [
        {
            icon: <FiMail className="text-2xl" />,
            title: "Email Us",
            info: "mehdi@bitlinks.com",
            description: "Send us an email anytime"
        },
        {
            icon: <FiMapPin className="text-2xl" />,
            title: "Our Location",
            info: "Remote First",
            description: "Working worldwide"
        },
        {
            icon: <FiPhone className="text-2xl" />,
            title: "Call Us",
            info: "+1 (555) 123-4567",
            description: "Mon-Fri from 9am-6pm"
        }
    ];

    const socialLinks = [
        {
            icon: <FiGithub className="text-xl" />,
            name: "GitHub",
            url: "https://github.com/Mehdi-Chandia",
            color: "hover:text-gray-700"
        },
        {
            icon: <FiLinkedin className="text-xl" />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/mehdi-chandia",
            color: "hover:text-blue-600"
        },
        {
            icon: <FiTwitter className="text-xl" />,
            name: "Twitter",
            url: "https://twitter.com/mehdichandia",
            color: "hover:text-blue-400"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-purple-800 mb-8">
                                Contact Information
                            </h2>

                            <div className="space-y-6 mb-8">
                                {contactMethods.map((method, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg">
                                                {method.title}
                                            </h3>
                                            <p className="text-purple-600 font-medium">
                                                {method.info}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {method.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`bg-purple-100 p-3 rounded-xl text-purple-600 transition-all duration-300 hover:bg-purple-200 ${social.color}`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-purple-800 mb-8">
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <FiSend className="text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}