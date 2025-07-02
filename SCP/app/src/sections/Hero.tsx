"use client";

import React, { useState } from "react";
import { sendEmail } from "@/lib/resend";

// Validation function
const isValidName = (name: string): boolean => {
    return /^[a-zA-Z\- ]{2,}$/.test(name);
};

export default function Hero() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = (): boolean => {
        const newErrors = {
            firstName: isValidName(form.firstName)
                ? ""
                : "First name must be at least 2 characters (letters, hyphen or space only)",
            lastName: isValidName(form.lastName)
                ? ""
                : "Last name must be at least 2 characters (letters, hyphen or space only)",
        };

        setErrors(newErrors);
        return !newErrors.firstName && !newErrors.lastName;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await sendEmail({
                to: "contact@spcltd.net",
                from: "onboarding@resend.dev",
                subject: `New Demo Request from ${form.firstName} ${form.lastName}`,
                html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${form.firstName} ${form.lastName}</p>
         <p><strong>Company:</strong> ${form.lastName}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Message:</strong> I would like to request a demo of your AI solutions.</p>
      `,
            });

            setSubmitStatus({
                success: true,
                message: "Demo request submitted successfully!",
            });
            setForm({ firstName: "", lastName: "", email: "" });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: `Failed to submit request. Please try again. ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-8 bg-neutral-950 text-white">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-8 text-center max-w-2xl">
                Shaping the future with smart, purpose-driven AI tools—one
                prompt at a time.
            </h2>

            {submitStatus && (
                <div
                    className={`mb-4 p-3 rounded-md ${
                        submitStatus.success
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-neutral-900 shadow-lg rounded-lg p-6 sm:p-8 flex flex-col gap-4"
            >
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        value={form.firstName}
                        onChange={handleChange}
                        className={`border ${errors.firstName ? "border-red-500" : "border-gray-700"} bg-neutral-800 text-white rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                        disabled={isSubmitting}
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Company"
                        value={form.lastName}
                        onChange={handleChange}
                        className={`border ${errors.lastName ? "border-red-500" : "border-gray-700"} bg-neutral-800 text-white rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                        disabled={isSubmitting}
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.lastName}
                        </p>
                    )}
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-700 bg-neutral-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`border bg-lime-400 text-neutral-950 border-lime-400 rounded-full px-6 font-medium py-2 mt-2 hover:bg-gray-800 hover:font-bold hover:text-lime-400 transition ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-950"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        "Get Demo"
                    )}
                </button>
            </form>
        </section>
    );
}
