import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const paraStyle = "text-lg sm:text-xl text-gray-400 leading-relaxed mb-8";

    return (
        <section
            id="about"
            className="min-h-screen py-24 px-6 lg:px-32 bg-black text-white mt-5"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-amber-400">
                    About Me
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={paraStyle}
                >
                    Hi, I'm <span className="text-amber-400 font-semibold">Avinash</span> – a curious and creative developer passionate about building engaging digital experiences.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={paraStyle}
                >
                    I enjoy crafting responsive UIs, diving into <span className="text-amber-400 font-semibold">Full-stack development</span>, and exploring <span className="text-amber-400 font-semibold">AI-powered solutions</span> that solve real-world problems.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={paraStyle}
                >
                    Through internships and hands-on projects, I constantly expand my skillset, learning new technologies, optimizing workflows, and creating seamless user experiences.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={paraStyle}
                >
                    I'm always excited to take on challenges, solve complex problems with code, and collaborate with others to build meaningful and impactful applications.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default About;
