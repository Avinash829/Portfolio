import React from "react";
import { motion } from "framer-motion";
import {
    FaPython, FaJsSquare, FaDatabase, FaNodeJs,
    FaReact, FaGitAlt, FaGithub, FaJava,
} from "react-icons/fa";
import {
    SiMysql, SiMongodb, SiExpress, SiFirebase,
    SiPycharm, SiC, SiTailwindcss, SiLangchain,
    SiBootstrap, SiNextdotjs,
} from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-green-300" /> },
    { name: "C", icon: <SiC className="text-blue-300" /> },

    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "LangChain", icon: <SiLangchain className="text-yellow-400" /> },
    { name: "LangGraph", icon: <TbTopologyStar3 className="text-purple-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },

    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "PyCharm", icon: <SiPycharm className="text-green-400" /> },
    { name: "LangSmith", icon: <BiNetworkChart className="text-pink-400" /> },

    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
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
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-20 bg-black text-white pt-28">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold mb-12 text-amber-400"
                >
                    My Skills
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group flex flex-col items-center justify-center p-5 sm:p-6 bg-gray-900 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300 hover:border border-amber-400"
                        >
                            <div className="text-4xl sm:text-5xl mb-2">{skill.icon}</div>
                            <p className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-amber-400 transition-colors duration-300">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
