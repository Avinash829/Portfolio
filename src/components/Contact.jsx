import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiSend,
    FiCheckCircle,
} from "react-icons/fi";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const sideFade = (dir = "left") => ({
    hidden: { opacity: 0, x: dir === "left" ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
});

const Contact = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_3xxnpwo",
                "template_htyvhvh",
                form.current,
                "YKOensNfl_7C0QiUe"
            )
            .then(() => {
                setIsSubmitting(false);
                setError(false);
                form.current.reset();
                setFormValues({ name: "", email: "", title: "", message: "" });
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 5000);
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                setIsSubmitting(false);
                setError(true);
            });
    };

    const inputClasses =
        "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300";

    return (
        <section
            id="contact"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-transparent min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* Success Toast Notification */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-green-500/10 border border-green-500/30 backdrop-blur-xl text-green-400 px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                    >
                        <FiCheckCircle className="text-xl" />
                        <span className="font-medium">
                            Message transmitted successfully.
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            >
                Let's <span className="text-green-500">Connect</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto w-full">
                {/* Left Side: Contact Info Cards */}
                <motion.div
                    variants={sideFade("right")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Initialize a conversation
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Whether you have a question, a project proposal, or
                            just want to network, my inbox is always open. I'll
                            try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a
                            href="mailto:avinashpappala@gmail.com"
                            className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                                <FiMail className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                    Email
                                </p>
                                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                    avinashpappala@gmail.com
                                </p>
                            </div>
                        </a>

                        <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300">
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                                <FiPhone className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                    Phone
                                </p>
                                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                    +91 6300768805
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <a
                                href="https://github.com/Avinash829"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300"
                            >
                                <FiGithub className="text-2xl text-gray-400 group-hover:text-green-400 transition-colors" />
                                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="https://linkedin.com/in/avinashpappala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300"
                            >
                                <FiLinkedin className="text-2xl text-gray-400 group-hover:text-green-400 transition-colors" />
                                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Glassmorphism Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    variants={sideFade("left")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col space-y-5 bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden group"
                >
                    {/* Subtle inner hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <motion.div variants={fadeUp}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={formValues.name}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formValues.email}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Subject"
                            required
                            value={formValues.title}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <textarea
                            name="message"
                            placeholder="Your Message..."
                            required
                            rows="5"
                            value={formValues.message}
                            onChange={handleChange}
                            className={`${inputClasses} resize-none`}
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn relative flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                    >
                        <span className="relative z-10">
                            {isSubmitting ? "Transmitting..." : "Send Message"}
                        </span>
                        <FiSend
                            className={`relative z-10 text-lg transition-transform duration-300 ${
                                isSubmitting
                                    ? "translate-x-12 opacity-0"
                                    : "group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                            }`}
                        />

                        {/* Button liquid hover effect */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                    </motion.button>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-sm text-center mt-2"
                        >
                            Failed to connect to the server. Please try again.
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
