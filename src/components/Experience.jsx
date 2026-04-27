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
        <section
            id="experience"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-transparent min-h-screen overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 sm:mb-24 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            >
                Professional <span className="text-green-500">Journey</span>
            </motion.h2>

            <div className="relative max-w-5xl mx-auto">
                {/* The Vertical Timeline Line */}
                {/* Positioned on the left for mobile, dead center for desktop */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
                    <motion.div
                        className="w-full bg-gradient-to-b from-green-400 to-emerald-600 origin-top"
                        style={{ height: "100%" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    />
                </div>

                {/* Timeline Cards */}
                <div className="space-y-12 sm:space-y-16">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-50px" }}
                                // Responsive flex layout:
                                // Mobile: always row (dot left, card right)
                                // Desktop: alternate row and row-reverse
                                className={`relative flex items-center justify-end md:justify-between w-full ${
                                    isLeft
                                        ? "md:flex-row-reverse"
                                        : "md:flex-row"
                                }`}
                            >
                                {/* Glowing Node Indicator */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 transform -translate-x-1/2 flex items-center justify-center z-20">
                                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] relative">
                                        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
                                    </div>
                                </div>

                                {/* Empty spacer div to push card to the correct side on Desktop */}
                                <div className="hidden md:block md:w-[45%]" />

                                {/* Glassmorphism Experience Card */}
                                <div className="w-[calc(100%-3rem)] md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-green-500/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                                        {exp.role}
                                    </h3>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 sm:gap-0">
                                        <p className="text-lg font-medium text-emerald-400">
                                            {exp.company}
                                        </p>
                                        <span className="inline-block text-xs font-semibold text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/5 whitespace-nowrap w-fit">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    {/* Tech-styled bullet points */}
                                    <ul className="space-y-3">
                                        {exp.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start text-gray-400 text-sm sm:text-base leading-relaxed"
                                            >
                                                <span className="mt-1 mr-3 text-green-500 text-xs flex-shrink-0">
                                                    ▹
                                                </span>
                                                <span className="group-hover:text-gray-300 transition-colors duration-300">
                                                    {point}
                                                </span>
                                            </li>
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
