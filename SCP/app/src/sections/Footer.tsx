"use client";

import Image from "next/image";

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
                                src="/assets/images/gmail.png"
                                alt="Email"
                                width={20}
                                height={20}
                            />
                            <a
                                href="mailto: contact@spcltd.net"
                                className="hover:text-lime-400 transition"
                            >
                                contact@spcltd.net
                            </a>
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
                    <Image
                        src="/assets/images/spc.png"
                        alt="spc"
                        width={20}
                        height={20}
                    />
                    &copy; {new Date().getFullYear()} ShorePointCapital. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
