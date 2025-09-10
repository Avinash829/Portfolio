import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiVite,
    SiFigma,
    SiLangchain,
} from "react-icons/si";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Willowave Platform Pvt. Ltd.",
        duration: "Sept 2025 – Present",
        type: "Remote",
        description: [
            "Work on building and integrating REST APIs for client applications.",
            "Implement LangChain-based AI features and optimize existing workflows.",
            "Collaborate on full stack development with focus on performance and seamless integration.",
        ],
        tools: [
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "LangChain", icon: <SiLangchain className="text-yellow-400" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        ],
    },
    {
        role: "Frontend Developer Intern",
        company: "ZORO Innovations",
        duration: "June 2025 – July 2025",
        type: "Remote",
        description: [
            "Contributed to Campus Core, a campus management platform for students, faculty, and admins.",
            "Built the Student Dashboard for managing attendance, timetable, results, and feedback.",
            "Worked closely with backend and UI teams to integrate APIs and ensure smooth user experience.",
        ],
        tools: [
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Vite", icon: <SiVite className="text-purple-400" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        ],
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-16 px-4 sm:px-6 lg:px-20 bg-black text-white pt-28"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold mb-12 text-amber-400"
                >
                    Experience
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="p-6 bg-gray-900 rounded-xl shadow-md hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-amber-400 text-left"
                        >
                            <h3 className="text-xl font-semibold text-amber-400 mb-1">
                                {exp.role}
                            </h3>
                            <p className="text-gray-300 mb-2">
                                {exp.company} ({exp.duration}) –{" "}
                                <span className="italic">{exp.type}</span>
                            </p>
                            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-3 mt-2">
                                {exp.tools.map((tool, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg shadow hover:shadow-lg transition"
                                    >
                                        <span className="text-xl">{tool.icon}</span>
                                        <span className="text-sm text-gray-300">
                                            {tool.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
