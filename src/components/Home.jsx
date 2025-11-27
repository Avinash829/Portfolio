import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 text-center "
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black text-green-400 border border-green-500 px-4 py-2 rounded-full mb-6 shadow-md flex items-center space-x-2 mt-10"
            >
                <FaStar className="text-yellow-400" />
                <span className="text-sm sm:text-base">
                    Welcome to my Portfolio
                </span>
            </motion.div>

            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
                I'm Avinash
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-green-500 text-xl sm:text-2xl md:text-3xl font-medium mb-8"
            >
                I am a{" "}
                <span className="text-white">
                    <Typewriter
                        words={[
                            "Full Stack Developer",
                            "Data Analyst",
                            "Competitive Programmer",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                    />
                </span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
            >
                <a
                    href="#contact"
                    className="border hover:border-amber-500 hover:text-amber-500 text-white px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
                >
                    Hire Me
                    {/* ✨ Shine Effect */}
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[100%] transition-all duration-700"></span>
                </a>

                <a
                    href="/Avinash_Pappala_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border hover:border-green-500 hover:text-green-500 px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base hover:cursor-pointer relative overflow-hidden group"
                >
                    My Resume
                    {/* ✨ Shine */}
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[100%] transition-all duration-700"></span>
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-6 text-xl sm:text-2xl text-white"
            >
                <a
                    href="https://github.com/Avinash829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/avinashpappala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:avinashpappala@gmail.com"
                    className="hover:text-green-400 transition"
                >
                    <FaEnvelope />
                </a>
            </motion.div>
        </section>
    );
};

export default Home;
