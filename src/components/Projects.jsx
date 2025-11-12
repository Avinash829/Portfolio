import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaAngleLeft,
    FaAngleRight,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

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
            x: dir === "right" ? 100 : -100,
            scale: 0.95,
        }),
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: (dir) => ({
            opacity: 0,
            x: dir === "right" ? -100 : 100,
            scale: 0.9,
            transition: { duration: 0.4, ease: "easeInOut" },
        }),
    };

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 md:px-12 bg-black text-white min-h-screen"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-400 mt-5"
            >
                Projects
            </motion.h2>

            <div className="relative flex justify-center w-full max-w-4xl mx-auto">
                <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition text-3xl z-10"
                >
                    <FaAngleLeft />
                </motion.button>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-full max-w-md border border-amber-400 mx-12"
                    >
                        <motion.img
                            src={currentProject.image}
                            alt={currentProject.name}
                            className="w-full h-44 sm:h-48 object-cover p-2 border border-amber-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white">
                                {currentProject.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-2">
                                {currentProject.tech}
                            </p>
                            <p className="text-sm text-gray-300 mb-4">
                                {currentProject.description}
                            </p>

                            <div className="flex justify-between gap-3 flex-wrap">
                                <a
                                    href={currentProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition"
                                >
                                    <FaGithub className="text-base" /> GitHub
                                </a>
                                <a
                                    href={currentProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded transition"
                                >
                                    <FaExternalLinkAlt className="text-base" />{" "}
                                    Live
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition text-3xl z-10"
                >
                    <FaAngleRight />
                </motion.button>
            </div>
        </section>
    );
};

export default Projects;
