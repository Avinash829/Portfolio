import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiMessageCircle,
    FiArrowUp,
    FiChevronDown,
    FiAperture,
    FiX,
} from "react-icons/fi";
import ReactMarkdown from "react-markdown";

// Keep your exact resume context
const resumeContext = `
Avinash Pappala - Detailed Resume Context

CONTACT:
- Email: avinashpappala@gmail.com
- Phone: +91 6300768805
- LinkedIn: https://www.linkedin.com/in/avinashpappala/
- GitHub: https://github.com/Avinash829
- LeetCode: https://leetcode.com/u/avinash_829/
- CodeChef: https://www.codechef.com/users/avinash_829

---

EDUCATION:
- Bachelor of Technology (B.Tech) in Computer Science
- Vignan’s Institute of Information Technology
- Duration: 2023 – 2027
- CGPA: 9.22

---

EXPERIENCE:
Quality Assurance Intern – Scaler (Dec 2025 – Feb 2026) [Remote]
-Reviewed and validated AI training tasks to ensure accuracy and adherence to quality standards.
-Tested REST APIs to verify response correctness, edge cases, and integration reliability.
-Performed dataset quality audits to identify inconsistencies affecting model performance.
-Collaborated with QA and operations teams to improve review workflows and quality benchmarks.
Tools Used: Postman, REST APIs, Data Annotation Platforms, Git.

Full Stack Developer Intern – Willowave Platform Pvt. Ltd. (Sept 2025 – Dec 2025) [Remote]
- Work on building and integrating REST APIs for client applications.
- Implement LangChain-based AI features and optimize existing workflows.
- Collaborate on full stack development with focus on performance and seamless integration.
- Tools Used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, LangChain, Git.

Frontend Developer Intern – ZORO Innovations (June 2025 – July 2025) [Remote]
- Contributed to Campus Core, a campus management platform for students, faculty, and admins.
- Built the Student Dashboard for managing attendance, timetable, results, and feedback.
- Worked closely with backend and UI teams to integrate APIs and ensure smooth user experience.
- Tools Used: React.js, Tailwind CSS, Vite, Figma, Git, REST APIs.

---

PROJECTS:

1. Chatterly - Real-Time Chat Application
- Built a real-time chat application supporting one-on-one and group messaging.
- Integrated authentication, end-to-end encryption, and live updates via WebSockets.
- Developed a responsive UI with dynamic mobile and desktop views, WhatsApp-style.
- Tools Used: React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS.

2. Health AI Assistant
- Built an AI-powered assistant that analyzes health reports (PDFs) and provides both patient summaries and doctor-level insights.
- Integrated features like symptom detection, treatment suggestions, and a dynamic health chatbot.
- Completed full-stack development with Gemini AI integration for accurate medical interpretation.
- Tools Used: Python, Gemini AI, Streamlit.

3. SafeSeek
- Developed a real-time text classification tool to promote respectful communication using the Perspective API.
- Instantly labels user input as Positive, Negative (toxic), or Neutral based on sentiment analysis.
- Includes a downloadable Chrome extension that blocks websites when toxic input is detected.
- Tools Used: React, TypeScript, Perspective API, Python.

4. CampusConnect
• Built an AI-powered career platform for internships, coding practice, and interview preparation.
• Developed AI Interviewer using FastAPI to generate personalized role-based questions and feedback.
• Integrated live internship data and adaptive coding practice modules based on user difficulty choice.
• Tools Used: Next.js, FastAPI, React, Tailwind CSS, Python.

---

SKILLS:
- Languages: Python, JavaScript, Java, SQL, C
- Frameworks & Libraries: React.js, Node.js, Express.js, FastAPI, LangChain, LangGraph, Firebase, Tailwind CSS
- Developer Tools: Git, GitHub, VS Code, PyCharm, LangSmith
- Databases: MongoDB, MySQL

---

ACHIEVEMENTS:
- Achieved 2★ on CodeChef (highest rating: 1463), top 12% on LeetCode (highest rating: 1705).
- Solved 500+ problems across CodeChef, LeetCode, and GeeksforGeeks.
- GeeksforGeeks Campus Body lead.
`;

const TypingIndicator = () => (
    <div className="flex items-center gap-1.5 p-4 w-fit bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm backdrop-blur-md">
        {[0, 1, 2].map((dot) => (
            <motion.div
                key={dot}
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                animate={{ y: ["0%", "-60%", "0%"] }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: dot * 0.15,
                    ease: "easeInOut",
                }}
            />
        ))}
    </div>
);

const AvinashAssistant = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello. I am Avinash's AI Assistant. I can help you explore his skills, experience, and projects. What would you like to know?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setOpen((prev) => !prev);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const prompt = `
You are Avinash Pappala's personal AI Assistant embedded in his portfolio website.

Respond in clean Markdown format:
- Use short, easy-to-read paragraphs.
- Use bullet points where helpful.
- Bold important technical terms or achievements.
- Keep the tone highly professional, concise, and helpful.
- DO NOT use any emojis in your responses. 

Only answer questions related to his profile using the information below.

If unrelated, respond politely:
"I am Avinash's portfolio assistant. I am here to help you learn about his engineering background, skills, and professional experience. Is there anything specific from his resume you would like to know?"

${resumeContext}

User query: ${input}
`;

            const res = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
                { contents: [{ parts: [{ text: prompt }] }] },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
                    },
                }
            );

            const replyText =
                res?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "I am having trouble connecting right now. Please try again in a moment.";
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: replyText },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "There was an error connecting to the server. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end text-white">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[90vw] max-w-[400px] h-[550px] bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden border border-white/10"
                    >
                        {/* Clean & Minimal Header */}
                        <div className="bg-white/5 border-b border-white/10 px-5 py-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-green-500/10 rounded-xl text-green-400">
                                    <FiAperture size={20} />
                                </div>
                                <div>
                                    <h3 className="text-gray-100 font-semibold tracking-wide text-sm">
                                        Assistant
                                    </h3>
                                    <p className="text-gray-400 text-xs flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        Active
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <FiChevronDown size={18} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-4 space-y-5 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`px-5 py-3 rounded-2xl w-fit max-w-[85%] break-words text-[15px] leading-relaxed shadow-sm
                                        ${
                                            msg.sender === "user"
                                                ? "ml-auto bg-green-600 text-white rounded-br-sm"
                                                : "mr-auto bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm"
                                        }`}
                                >
                                    <ReactMarkdown
                                        components={{
                                            strong: ({ children }) => (
                                                <strong className="text-green-400 font-semibold">
                                                    {children}
                                                </strong>
                                            ),
                                            p: ({ children }) => (
                                                <p className="mb-2 last:mb-0">
                                                    {children}
                                                </p>
                                            ),
                                            li: ({ children }) => (
                                                <li className="ml-4 list-disc marker:text-green-500 mb-1">
                                                    {children}
                                                </li>
                                            ),
                                            a: ({ children, href }) => (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-green-400 underline underline-offset-2"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                </motion.div>
                            ))}
                            {loading && (
                                <div className="mr-auto w-1/2">
                                    <TypingIndicator />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Modern Input Area with Arrow Icon */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1.5 focus-within:border-green-500/50 focus-within:bg-black/60 transition-all duration-300">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && sendMessage()
                                    }
                                    className="flex-1 px-3 py-2 bg-transparent text-gray-100 outline-none text-[15px] placeholder:text-gray-500"
                                    placeholder="Message Assistant..."
                                />
                                <motion.button
                                    onClick={sendMessage}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={!input.trim() || loading}
                                    className="p-2.5 rounded-lg bg-green-500 text-black hover:bg-green-400 transition-colors disabled:opacity-50 disabled:bg-white/10 disabled:text-gray-500 disabled:cursor-not-allowed"
                                >
                                    <FiArrowUp size={20} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                onClick={toggleChat}
                className="group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] text-black bg-green-500 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(34,197,94,0.6)] hover:bg-green-400"
                aria-label="Toggle Interface"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {open ? (
                    <FiX size={24} className="text-black" />
                ) : (
                    <FiMessageCircle size={26} className="text-black" />
                )}
            </motion.button>
        </div>
    );
};

export default AvinashAssistant;
