import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                {/* Copyright Text */}
                <p className="text-sm text-gray-500 tracking-wide">
                    © {new Date().getFullYear()} Avinash Pappala. All rights
                    reserved.
                </p>

                {/* Social Links */}
                <div className="flex space-x-8 text-xl">
                    <a
                        href="mailto:avinashpappala@gmail.com"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                        aria-label="Email"
                    >
                        <FiMail />
                    </a>
                    <a
                        href="https://github.com/Avinash829"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                        aria-label="GitHub"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/avinashpappala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
