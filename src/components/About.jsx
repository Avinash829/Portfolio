import React from "react";
import { motion } from "framer-motion";

const About = () => {
    // Reusable styles for the green accents and glass cards
    const highlight = "text-green-400 font-semibold tracking-wide";
    const glassCard =
        "bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:border-green-500/50 transition-colors duration-300";

    return (
        <section
            id="about"
            className="relative min-h-screen py-24 px-6 lg:px-32 bg-transparent overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Professional Pillars Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        {/* Box 1: Leadership */}
                        <div className={glassCard}>
                            <h3 className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
                                Tech Lead
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                                GDG Oncampus
                            </p>
                        </div>

                        {/* Box 2: Competitive Programming (Stays) */}
                        <div className={`${glassCard} mt-8`}>
                            <h3 className="text-emerald-400 text-2xl sm:text-3xl font-bold mb-1">
                                Knight
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                                LeetCode
                            </p>
                        </div>
                        <div className={glassCard}>
                            <h3 className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
                                Scalable
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                                Systems Architecture
                            </p>
                        </div>

                        {/* Box 4: Stack (Stays) */}
                        <div className={`${glassCard} mt-8`}>
                            <h3 className="text-emerald-400 text-2xl sm:text-3xl font-bold mb-1">
                                Full-Stack
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                                Specialization
                            </p>
                        </div>
                    </div>
                    {/* Background glow for the grid */}
                    <div className="absolute inset-0 bg-green-500/10 blur-[100px] -z-10 rounded-full"></div>
                </motion.div>

                {/* Right Side: Narrative Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        About <span className="text-green-500">Me</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Hi, I'm{" "}
                            <span className={highlight}>Avinash Pappala</span> –
                            a Computer Science student and a technical leader
                            with a deep obsession for building scalable,
                            production-grade applications.
                        </p>

                        <p>
                            I specialize in the{" "}
                            <span className={highlight}>
                                MERN and FARM stacks
                            </span>
                            , focusing on high-performance backend architectures
                            and AI-integrated solutions. Whether it's optimizing
                            API response times or crafting intuitive UIs with{" "}
                            <span className={highlight}>Next.js</span>, I build
                            with precision.
                        </p>

                        <p>
                            Beyond development, I'm a{" "}
                            <span className={highlight}>LeetCode Knight</span>{" "}
                            (Top 5% globally) who thrives on solving complex
                            algorithmic challenges. My experience as a Technical
                            Lead at{" "}
                            <span className="text-white border-b border-green-500">
                                GDG Oncampus
                            </span>{" "}
                            has sharpened my ability to lead teams and deliver
                            impactful digital products.
                        </p>

                        <p className="italic text-gray-500 border-l-2 border-green-500/30 pl-4">
                            "Turning complex problems into clean, efficient, and
                            mesmerizing code."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
