import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

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

Full Stack Developer Intern – Willowave Platform Pvt. Ltd. (Sept 2025 – Present) [Remote]
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

const AvinashAssistant = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setOpen((prev) => !prev);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
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
You are Avinash's AI Assistant. Only answer questions related to him using the information below. 
If user says hi, hello, bye, or gives feedback, respond politely and mention you are Avinash's Assistant. 
If asked anything unrelated, respond:
"I'm Avinash's assistant. I can only answer questions related to his professional background, skills, projects, achievements, and tech experience."

${resumeContext}

User question: ${input}`;

            const res = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
                    contents: [{ parts: [{ text: prompt }] }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
                    },
                }
            );

            const replyText =
                res?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Something went wrong.";
            const botMessage = { sender: "bot", text: replyText };
            setMessages((prev) => [...prev, botMessage]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Sorry, there was an error fetching a reply.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-mono fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <motion.button
                onClick={toggleChat}
                className={`p-4 rounded-full shadow-lg text-black transition-all 
                    ${
                        open
                            ? "bg-blue-400 hover:bg-blue-600"
                            : "bg-blue-400 hover:bg-blue-600"
                    }`}
                aria-label="Toggle Assistant"
                animate={{ y: [0, -20, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                <FaRobot />
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-3 w-[90vw] max-w-[400px] h-[500px] bg-zinc-900 rounded-xl shadow-2xl 
                                   flex flex-col overflow-hidden border border-blue-400"
                    >
                        <div className="bg-blue-500 text-black text-center font-bold py-2">
                            Avinash's Assistant 🤖
                        </div>

                        <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-2 rounded-lg w-fit break-words max-w-[85%] sm:max-w-[75%] 
                                        ${
                                            msg.sender === "user"
                                                ? "ml-auto bg-green-600 text-white"
                                                : "mr-auto bg-gray-700 text-gray-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            {loading && (
                                <div className="mr-auto bg-gray-700 text-gray-200 px-3 py-2 rounded-lg">
                                    Typing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-2 border-t border-gray-800 flex items-center bg-gray-950">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && sendMessage()
                                }
                                className="flex-1 px-3 py-3 rounded-l-md bg-gray-800 text-white outline-none text-sm"
                                placeholder="Ask about Avinash..."
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-blue-500 px-3 py-3 rounded-r-md text-black hover:bg-blue-400 transition"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AvinashAssistant;
