import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const resumeContext = `
Avinash Pappala - Detailed Resume Context

SUMMARY:
I am a Computer Science undergraduate with strong problem-solving skills and a growing portfolio in full-stack development. My experience spans both frontend and backend technologies, with a particular interest in building scalable and responsive applications. I’ve completed a frontend internship, led technical projects, and actively participate in competitive programming communities.

---

EDUCATION:
- Bachelor of Technology (B.Tech) in Computer Science
- Vignan’s Institute of Information Technology
- Duration: 2023 – 2027
- CGPA: 9.22

---

TECHNOLOGIES:
- Languages: Python, Java, JavaScript, SQL, C
- Frameworks/Tools: React.js, Node.js, Express.js, Firebase, Power BI
- Developer Tools: Git, GitHub, Visual Studio Code, PyCharm
- Databases: MySQL, MongoDB

---

EXPERIENCE:

Frontend Developer Intern at ZORO Innovations (June 2025 – July 2025) [Remote]
- Contributed to the development of Campus Core, a comprehensive campus management platform.
- Built the Student Dashboard that enables students to manage attendance, view timetables, check results, and provide feedback.
- Translated Figma designs into responsive, mobile-first UIs using React.js and Tailwind CSS.
- Collaborated with backend and UI/UX teams to integrate APIs and ensure smooth user experience.
- Tools used: React.js, Tailwind CSS, Vite, Figma, Git, REST APIs

---

PROJECTS:

1. Chatterly - Real-Time Chat Application
- Description: A fully functional real-time messaging platform allowing both one-on-one and group conversations.
- Features:
  - Authentication and secure login system
  - End-to-end message encryption
  - Live messaging using WebSockets
  - Responsive design that adapts to mobile and desktop devices, styled similar to WhatsApp
- Tech Stack: React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS

2. Health AI Assistant
- Description: An AI-powered health assistant that reads and interprets medical reports in PDF format.
- Features:
  - Extracts health insights and symptoms from uploaded reports
  - Provides both patient-friendly summaries and doctor-level technical analysis
  - Includes a dynamic chatbot interface for health-related Q&A
  - Integrated with Gemini AI for medical-grade interpretation
- Tech Stack: Python, Gemini AI, Streamlit

3. SafeSeek
- Description: A Chrome extension and web app that promotes respectful communication by filtering out toxic text.
- Features:
  - Real-time sentiment analysis of user input
  - Labels content as Positive, Neutral, or Negative (toxic)
  - Chrome extension blocks websites when toxic input is detected
  - Promotes digital well-being by encouraging respectful language
- Tech Stack: React, TypeScript, Perspective API, Python

---

ACHIEVEMENTS:
- 2★ coder on CodeChef with a peak rating of 1463
- Ranked in the top 20% on LeetCode with a peak rating of 1626
- Solved over 500 competitive programming problems
- Campus Body Lead for GeeksforGeeks

---

CERTIFICATIONS:
- React for Frontend Development – CodeChef
- Python for Data Science – IBM (via EdX)

---

PROFILES:
- GitHub: https://github.com/Avinash829
- LeetCode: https://leetcode.com/u/avinash_829/
- CodeChef: https://www.codechef.com/users/avinash_829
- LinkedIn: https://www.linkedin.com/in/avinashpappala/

---

This detailed context file is structured to support chatbot question-answering about my technical skills, project experience, tools used, and achievements.
`;



const AvinashAssistant = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setOpen(prev => !prev);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const prompt = `
You are Avinash's AI Assistant. Only answer questions related to him using the information below. If user wishes you like hi, hello, bye, good response, bad response etc.. respond politely and inform him that you are Avinash's Assistant ,If asked anything unrelated, respond:
"I'm Avinash's assistant. I can only answer questions related to his professional background, skills, projects, achievements, and tech experience."

${resumeContext}

User question: ${input}`;

            const res = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
                {
                    contents: [{ parts: [{ text: prompt }] }]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
                    }
                }
            );

            const replyText = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Something went wrong.';
            const botMessage = { sender: 'bot', text: replyText };
            setMessages(prev => [...prev, botMessage]);
        } catch {
            setMessages(prev => [
                ...prev,
                { sender: 'bot', text: 'Sorry, there was an error fetching a reply.' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-mono fixed bottom-6 right-6 z-50 flex flex-col items-end">

            <button
                onClick={toggleChat}
                className={`p-4 rounded-full shadow-lg text-black transition-all 
                    ${open ? 'bg-red-400 hover:bg-red-500' : 'bg-amber-400 hover:bg-yellow-500'}`}
                aria-label="Toggle Assistant"
            >
                <FaRobot />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-3 w-[90vw] max-w-[400px] h-[500px] bg-zinc-900 rounded-xl shadow-2xl 
                                   flex flex-col overflow-hidden border border-amber-400"
                    >
                        <div className="bg-amber-500 text-black text-center font-bold py-2">
                            Avinash's Assistant 🤖
                        </div>

                        <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-2 rounded-lg w-fit break-words max-w-[85%] sm:max-w-[75%] 
                                        ${msg.sender === 'user'
                                            ? 'ml-auto bg-green-600 text-white'
                                            : 'mr-auto bg-gray-700 text-gray-200'
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
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                                className="flex-1 px-3 py-3 rounded-l-md bg-gray-800 text-white outline-none text-sm"
                                placeholder="Ask about Avinash..."
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-amber-500 px-3 py-3 rounded-r-md text-black hover:bg-amber-400 transition"
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
