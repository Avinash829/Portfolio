import React from "react";
import { motion } from "framer-motion";
import {
    FaPython,
    FaJsSquare,
    FaDatabase,
    FaNodeJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaJava,
} from "react-icons/fa";
import {
    SiMysql,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiPycharm,
    SiC,
    SiTailwindcss,
    SiLangchain,
    SiBootstrap,
    SiNextdotjs,
} from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

// Skills Array (Colors will now always be visible!)
const skills = [
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-300" /> },
    { name: "C", icon: <SiC className="text-blue-500" /> },

    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },

    { name: "LangChain", icon: <SiLangchain className="text-green-400" /> },
    {
        name: "LangGraph",
        icon: <TbTopologyStar3 className="text-emerald-400" />,
    },
    { name: "LangSmith", icon: <BiNetworkChart className="text-green-300" /> },

    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },

    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },

    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "PyCharm", icon: <SiPycharm className="text-green-500" /> },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative min-h-screen py-24 px-6 lg:px-20 bg-transparent overflow-hidden"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Technical <span className="text-green-500">Arsenal</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            // Enhanced Default State: Added shadow-md, brighter borders, and a faint green tint
                            className="group relative flex flex-col items-center justify-center p-6 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden cursor-none shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-green-500/50 hover:bg-green-500/5 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:-translate-y-2"
                        >
                            {/* Inner Green Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon: Always visible, pops even more on hover */}
                            <div className="relative z-10 text-4xl sm:text-5xl mb-4 opacity-90 drop-shadow-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                {skill.icon}
                            </div>

                            {/* Text: Brighter default gray, turns stark white on hover */}
                            <p className="relative z-10 text-sm sm:text-base font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-500">
                                {skill.name}
                            </p>

                            {/* Subtle active indicator dot that appears on hover */}
                            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
