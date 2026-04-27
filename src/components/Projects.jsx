import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiChevronLeft,
    FiChevronRight,
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

const projects = [
    {
        name: "CampusConnect",
        description:
            "An AI-powered career platform offering internships, coding practice, and interview preparation with real-time feedback.",
        tech: "Next.js, React, FastAPI, Python, Tailwind CSS, Render, Vercel",
        image: "/cc.png",
        github: "https://github.com/Avinash829/CampusConnect",
        live: "https://campusconnect829.vercel.app/",
    },
    {
        name: "Chatterly",
        description:
            "A real-time MERN chat app with Socket.io, modals, groups, and 1-on-1 chats.",
        tech: "MERN, Socket.io",
        image: "/chatterly.png",
        github: "https://github.com/Avinash829/Chatterly",
        live: "https://avinashchatterly.netlify.app/",
    },
    {
        name: "Health AI Assistant",
        description:
            "Health chatbot using Gemini AI & Streamlit for quick medical suggestions.",
        tech: "Python, Gemini AI, Streamlit",
        image: "/health-ai.png",
        github: "https://github.com/Avinash829/Health-AI-assistant",
        live: "https://healthbot829.streamlit.app/",
    },
    {
        name: "Flippy Bird",
        description: "Classic flappy bird clone with pixel graphics.",
        tech: "HTML, CSS, JS",
        image: "/flippybird.png",
        github: "https://github.com/Avinash829/flippybird",
        live: "https://avinash829.github.io/flippybird/",
    },
    {
        name: "SafeSeek",
        description: "Privacy-first AI search engine.",
        tech: "React, Flask",
        image: "/safeseek.png",
        github: "https://github.com/Avinash829/safeseek",
        live: "https://toxicsenses.netlify.app/",
    },
    {
        name: "Gemini Clone",
        description: "AI-based Chat UI clone powered by Gemini API.",
        tech: "React, Gemini AI",
        image: "/gemini-clone.png",
        github: "https://github.com/Avinash829/Avi_Gemini-Clone",
        live: "https://geminiai829.netlify.app/",
    },
    {
        name: "WeatherMate",
        description: "Minimal weather web app with live weather data.",
        tech: "HTML, CSS, JS",
        image: "/weather.png",
        github: "https://github.com/Avinash829/WeatherMate",
        live: "#",
    },
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");

    const handlePrev = () => {
        setDirection("left");
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const currentProject = projects[currentIndex];

    const cardVariants = {
        hidden: (dir) => ({
            opacity: 0,
            x: dir === "right" ? 50 : -50,
            scale: 0.95,
            filter: "blur(4px)",
        }),
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: (dir) => ({
            opacity: 0,
            x: dir === "right" ? -50 : 50,
            scale: 0.95,
            filter: "blur(4px)",
            transition: { duration: 0.4, ease: "easeIn" },
        }),
    };

    return (
        <section
            id="projects"
            className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            >
                Featured <span className="text-green-500">Work</span>
            </motion.h2>

            <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto">
                {/* DESKTOP Left Arrow (Hidden on Mobile) */}
                <motion.button
                    onClick={handlePrev}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden md:flex absolute left-0 lg:left-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/50 backdrop-blur-md transition-all z-20"
                >
                    <FiChevronLeft className="text-2xl lg:text-3xl" />
                </motion.button>

                {/* Project Card Container */}
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-green-500/30 transition-colors duration-500 w-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
                                <motion.img
                                    src={currentProject.image}
                                    alt={currentProject.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                {/* Floating Title */}
                                <div className="absolute bottom-4 left-4 sm:left-6 pr-4 sm:pr-6">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                                        {currentProject.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6 md:p-8">
                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {currentProject.tech
                                        .split(", ")
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 whitespace-nowrap"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>

                                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                                    {currentProject.description}
                                </p>

                                {/* Action Buttons - Stack on mobile, inline on sm+ */}
                                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                                    <a
                                        href={currentProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-2.5 px-5 rounded-lg transition-all duration-300"
                                    >
                                        <FiGithub className="text-lg" /> Source
                                        Code
                                    </a>
                                    <a
                                        href={currentProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-semibold bg-green-500 hover:bg-green-400 text-black py-2.5 px-5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                                    >
                                        <FiExternalLink className="text-lg" />{" "}
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* DESKTOP Right Arrow (Hidden on Mobile) */}
                <motion.button
                    onClick={handleNext}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden md:flex absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/50 backdrop-blur-md transition-all z-20"
                >
                    <FiChevronRight className="text-2xl lg:text-3xl" />
                </motion.button>

                {/* MOBILE Controls & Pagination */}
                <div className="flex md:hidden items-center justify-between w-full max-w-[280px] mt-8">
                    <motion.button
                        onClick={handlePrev}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-green-400 backdrop-blur-md"
                    >
                        <FiChevronLeft className="text-xl" />
                    </motion.button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2">
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    idx === currentIndex
                                        ? "w-6 sm:w-8 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                        : "w-2 bg-gray-600"
                                }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={handleNext}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-green-400 backdrop-blur-md"
                    >
                        <FiChevronRight className="text-xl" />
                    </motion.button>
                </div>

                {/* DESKTOP Pagination (Hidden on Mobile) */}
                <div className="hidden md:flex justify-center gap-2 mt-8">
                    {projects.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex
                                    ? "w-8 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                    : "w-2 bg-gray-600"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
