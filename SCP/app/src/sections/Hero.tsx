"use client";

import React, { useState } from "react";

export default function Hero() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Demo request submitted!");
    };

    return (
        <section className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-8 bg-neutral-950 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center max-w-2xl">
                Shaping the future with smart, purpose-driven AI tools—one
                prompt at a time.
            </h1>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-neutral-900 shadow-lg rounded-lg p-6 sm:p-8 flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="border border-gray-700 bg-neutral-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="border border-gray-700 bg-neutral-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-700 bg-neutral-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="border bg-lime-400 text-neutral-950 border-lime-400rounded-full px-6 font-medium  rounded px-4 py-2 mt-2 hover:bg-blue-700 transition"
                >
                    Get Demo
                </button>
            </form>
        </section>
    );
}
