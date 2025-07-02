"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Contacts", href: "#contacts" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="sticky top-0 z-50 bg-black py-4 shadow border-b border-white/10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border border-white/15 rounded-full px-4 py-2">
                    <a href="#home" className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/spc.png"
                            alt="Logo"
                            width={45}
                            height={45}
                            className="h-9 w-auto"
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex gap-6 font-medium">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.label}
                                className="px-3 py-1 rounded hover:bg-lime-400 hover:text-black transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-2">
                            <a href="#solutions">
                                <Button variant="primary">FAQs</Button>
                            </a>
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

                {menuOpen && (
                    <div className="md:hidden mt-2 bg-neutral-950 text-white shadow-lg rounded-lg p-4 animate-slide-down">
                        <nav className="flex flex-col space-y-4 font-medium">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="px-3 py-1 rounded hover:bg-lime-400 hover:text-black transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#solutions"
                                onClick={() => setMenuOpen(false)}
                            >
                                <Button variant="primary">FAQs</Button>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </section>
    );
}
