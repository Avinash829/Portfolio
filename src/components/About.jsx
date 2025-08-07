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
                    Hey, I'm <span className="text-amber-400 font-semibold">Avinash</span> - a curious and creative developer passionate about turning ideas into meaningful digital experiences.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={paraStyle}
                >
                    I specialize in building clean, responsive UIs and enjoy diving into full-stack development - crafting apps that work smoothly and look great across all devices.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={paraStyle}
                >
                    During my internship at <span className="text-amber-400">ZORO Innovations</span>, I gained real-world experience building scalable features and collaborating across teams to deliver polished, user-friendly interfaces.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={paraStyle}
                >
                    I'm always excited to take on new challenges, solve real-world problems with code, and collaborate with others to build something impactful.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default About;
