import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiStar } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import HeroParticles from "./HeroParticles";

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent selection:bg-green-500/30"
        >
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <HeroParticles />
                <div className="absolute top-[-5%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-500/10 blur-[100px] sm:blur-[120px] rounded-full opacity-50 pointer-events-none" />
                <div className="absolute bottom-[10%] right-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-600/10 blur-[90px] sm:blur-[100px] rounded-full opacity-40 pointer-events-none" />
            </div>

            {/* --- FOREGROUND CONTENT --- */}
            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-10 w-full max-w-6xl px-4 sm:px-6 flex flex-col items-center pointer-events-none" // pointer-events-none lets mouse reach the canvas
            >
                {/* 1. Welcome Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 sm:mb-8 pointer-events-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                        <FiStar className="text-green-400 text-[10px] sm:text-xs animate-pulse fill-green-400/20" />
                        <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300">
                            Welcome to my Space
                        </span>
                    </div>
                </motion.div>

                {/* 2. Spacer for Canvas Text - Scales dynamically */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative w-full h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px]"
                />

                {/* 3. Dynamic Roles - INCREASED MARGIN TOP */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 sm:mt-12 mb-10 sm:mb-12 pointer-events-auto text-center"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-white tracking-tight">
                        I am a{" "}
                        <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            <Typewriter
                                words={[
                                    "Software Engineer",
                                    "Full-Stack Developer",
                                    "Competitive Programmer",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* 4. Action & Socials */}
                <div className="flex flex-col items-center gap-6 sm:gap-8 pointer-events-auto">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact"
                        className="group relative px-8 sm:px-10 py-3 sm:py-3.5 bg-white text-black font-black uppercase tracking-widest text-[11px] sm:text-xs rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                            Hire Me
                        </span>
                        <div className="absolute inset-0 bg-green-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </motion.a>

                    <div className="flex gap-6 sm:gap-8">
                        {[
                            {
                                icon: <FiGithub />,
                                link: "https://github.com/Avinash829",
                                aria: "GitHub Profile",
                            },
                            {
                                icon: <FiLinkedin />,
                                link: "https://linkedin.com/in/avinashpappala",
                                aria: "LinkedIn Profile",
                            },
                            {
                                icon: <FiMail />,
                                link: "mailto:avinashpappala@gmail.com",
                                aria: "Email Contact",
                            },
                        ].map((soc, i) => (
                            <motion.a
                                key={i}
                                href={soc.link}
                                target={
                                    soc.link.startsWith("mailto")
                                        ? "_self"
                                        : "_blank"
                                }
                                rel="noopener noreferrer"
                                aria-label={soc.aria}
                                whileHover={{ y: -5 }}
                                className="text-xl sm:text-2xl text-gray-500 hover:text-green-400 transition-colors duration-300 drop-shadow-sm hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                            >
                                {soc.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Subtle Animated Scroll Arrow */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className="w-4 sm:w-5 h-7 sm:h-8 rounded-full border-2 border-white/20 flex justify-center p-1"
                >
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
