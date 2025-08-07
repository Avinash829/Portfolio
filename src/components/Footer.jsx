import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Avinash Pappala. All rights reserved.
                </p>

                <div className="flex space-x-6 text-xl">
                    <a
                        href="mailto:avinashpappala@gmail.com"
                        className="hover:text-amber-400 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/Avinash829"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/avinashpappala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
