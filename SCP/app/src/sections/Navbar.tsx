"use client";

import { useState } from "react";
import Image from "next/image";
import logoImage from "@/assets/images/spc.png";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Solutions", href: "#solutions" },
    { label: "Contacts", href: "#Contacts" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="sticky top-0 z-50 bg-black py-4 shadow border-b border-white/10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border border-white/15 rounded-full px-4 py-2">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src={logoImage}
                            alt="Logo"
                            width={45}
                            height={45}
                            className="h-9 w-auto"
                        />
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex gap-6 font-medium">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.label}
                                className="px-3 py-1 rounded hover:bg-gray-800 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Desktop buttons */}
                        <div className="hidden md:flex gap-2">
                            <Button variant="primary">FAQs</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-2 bg-white text-black shadow-lg rounded-lg p-4 animate-slide-down">
                        <nav className="flex flex-col space-y-4 font-medium">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="px-3 py-1 rounded hover:bg-gray-800 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="secondary">Log In</Button>
                            <Button variant="primary">FAQs</Button>
                        </nav>
                    </div>
                )}
            </div>
        </section>
    );
}
