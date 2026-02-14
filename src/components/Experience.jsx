import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Quality Assurance Intern",
        company: "Scaler",
        duration: "Dec 2025 – Feb 2026",
        points: [
            "Reviewed and validated AI training tasks to ensure accuracy and compliance with quality standards.",
            "Tested REST APIs to verify response accuracy, edge cases, and integration reliability.",
            "Collaborated with QA and operations teams to improve review workflows and quality benchmarks.",
        ],
    },
    {
        role: "Software Developer Intern",
        company: "WilloWave",
        duration: "Sep 2025 – Dec 2025",
        points: [
            "Migrated multiple React.js applications to Next.js, improving page load and rendering performance by 35%.",
            "Built AI-powered applications, intelligent agents, and dashboards to enhance user productivity.",
            "Optimized REST APIs, reducing average response times and improving system efficiency by 30%.",
            "Collaborated with cross-functional teams to deliver scalable production-ready features.",
        ],
    },
    {
        role: "Software Developer Intern",
        company: "ZORO Innovations",
        duration: "Jun 2025 – Jul 2025",
        points: [
            "Developed a comprehensive Student Dashboard for attendance, results, timetables, and feedback.",
            "Integrated frontend interfaces with REST APIs for real-time data interaction, improving UX by 40%.",
            "Built modular and reusable React components to enhance maintainability and scalability.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="bg-black text-white py-20 px-6">
            <h2 className="text-4xl font-bold text-center text-amber-400 mb-20">
                Experience
            </h2>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-800 transform -translate-x-1/2">
                    <motion.div
                        className="w-full bg-amber-400 origin-top"
                        style={{ height: "100%" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </div>

                {/* Timeline items */}
                <div className="space-y-20">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex ${
                                    isLeft ? "justify-start" : "justify-end"
                                }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-400 rounded-full border-4 border-black z-10" />

                                {/* Card */}
                                <div className="w-full md:w-[45%] bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-amber-400 transition">
                                    <h3 className="text-xl font-semibold text-amber-400">
                                        {exp.role}
                                    </h3>

                                    <p className="text-gray-300 mt-1">
                                        {exp.company}
                                    </p>

                                    <p className="text-sm text-gray-500 mb-3">
                                        {exp.duration}
                                    </p>

                                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                                        {exp.points.map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
