"use client";

import Image from "next/image";
import gmail from "@/assets/images/gmail.png";
import phone from "@/assets/images/phone.png";
import address from "@/assets/images/address.png";
import logo from "@/assets/images/spc.png";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-gray-300 py-10 px-6">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
                <div>
                    <h2 className="text-xl font-semibold mb-6 text-white">
                        Contact Us
                    </h2>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <Image
                                src={gmail}
                                alt="Email"
                                width={20}
                                height={20}
                            />
                            <a
                                href="mailto:info@example.com"
                                className="hover:text-lime-400 transition"
                            >
                                info@example.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image
                                src={phone}
                                alt="Phone"
                                width={20}
                                height={20}
                            />
                            <a
                                href="tel:+1234567890"
                                className="hover:text-lime-400 transition"
                            >
                                +1 (234) 567-890
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image
                                src={address}
                                alt="Address"
                                width={20}
                                height={20}
                            />
                            <span>123 Main St, Anytown, USA</span>
                        </li>
                    </ul>
                </div>
                <div className="text-sm text-left">
                    <h2 className="text-xl font-semibold text-white mb-5">
                        Legal
                    </h2>
                    <div className="flex flex-col gap-1 space-y-2 text-sm">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-400 transition-all duration-200"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-lime-400 transition-all duration-200"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 border-t border-gray-700 mt-5 pt-4 flex justify-center">
                <p className="flex items-center text-lime-300 text-xs gap-2">
                    <Image src={logo} alt="Logo" width={30} height={30} />
                    &copy; {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
