import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import PortfolioBackground from "./PortfolioBackground";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sideFade = (dir = "left") => ({
    hidden: { opacity: 0, x: dir === "left" ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
});

const Contact = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3xxnpwo",
                "template_htyvhvh",
                form.current,
                "YKOensNfl_7C0QiUe"
            )
            .then(() => {
                setSent(true);
                setError(false);
                form.current.reset();
                setFormValues({ name: "", email: "", title: "", message: "" });
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 5000);
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                setError(true);
                setSent(false);
            });
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 md:px-12 bg-black text-white relative">
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md"
                >
                    Thank you! Your message has been received successfully.
                </motion.div>
            )}
            <PortfolioBackground />
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-400"
            >
                Contact Me
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
                {/* Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    variants={sideFade("left")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-5 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-md border border-amber-400 w-full"
                >
                    <motion.div variants={fadeUp}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formValues.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-amber-50 text-white bg-transparent focus:border-amber-400 focus:outline-none"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formValues.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-amber-50 text-white bg-transparent focus:border-amber-400 focus:outline-none"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Subject"
                            required
                            value={formValues.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-amber-50 text-white bg-transparent focus:border-amber-400 focus:outline-none"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows="5"
                            value={formValues.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-amber-50 text-white bg-transparent focus:border-amber-400 focus:outline-none"
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded transition"
                    >
                        Send Message
                    </motion.button>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400"
                        >
                            Failed to send message. Please try again.
                        </motion.p>
                    )}
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    variants={sideFade("right")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-6 text-gray-300 text-base sm:text-lg w-full"
                >
                    <p>
                        Feel free to reach out for collaborations, projects, or just to connect!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-amber-400" />
                            <a href="mailto:avinashpappala@gmail.com" className="hover:text-amber-400 transition">
                                avinashpappala@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-amber-400" />
                            <span>+91 6300768805</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-amber-400" />
                            <a
                                href="https://github.com/Avinash829"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 transition"
                            >
                                Avinash829
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaLinkedin className="text-amber-400" />
                            <a
                                href="https://linkedin.com/in/avinashpappala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 transition"
                            >
                                Avinash Pappala
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
