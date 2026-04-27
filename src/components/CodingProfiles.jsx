import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import {
    FiExternalLink,
    FiTrendingUp,
    FiAward,
    FiCode,
    FiRefreshCw,
} from "react-icons/fi";

const CodingProfiles = () => {
    // State to hold our live data, initialized with your "Personal Bests" as fallbacks
    const [stats, setStats] = useState({
        leetcode: { rating: "1882", rank: "Top 5%", loading: true },
        codechef: { rating: "1465", problems: "500+", loading: true },
    });

    useEffect(() => {
        const fetchLiveStats = async () => {
            try {
                // 1. Fetch LeetCode Data (Using Alfa LeetCode API)
                const lcResponse = await axios.get(
                    "https://alfa-leetcode-api.onrender.com/avinash_829"
                );

                // 2. Fetch CodeChef Data (Using a community CodeChef API)
                const ccResponse = await axios.get(
                    "https://codechef-api.vercel.app/handle/avinash_829"
                );

                setStats((prev) => ({
                    leetcode: {
                        rating: "1882", // Keeping your max rating static as it's an achievement
                        rank: lcResponse.data.ranking
                            ? `Global Rank: ${lcResponse.data.ranking}`
                            : prev.leetcode.rank,
                        loading: false,
                    },
                    codechef: {
                        rating:
                            ccResponse.data.currentRating ||
                            prev.codechef.rating,
                        problems: ccResponse.data.fullySolved
                            ? `${ccResponse.data.fullySolved} Solved`
                            : prev.codechef.problems,
                        loading: false,
                    },
                }));
            } catch (error) {
                console.error(
                    "Failed to fetch live stats. Using fallbacks.",
                    error
                );
                // If APIs fail, gracefully stop loading and use the hardcoded fallbacks
                setStats((prev) => ({
                    leetcode: { ...prev.leetcode, loading: false },
                    codechef: { ...prev.codechef, loading: false },
                }));
            }
        };

        fetchLiveStats();
    }, []);

    // Merge live state into your UI array with upgraded Icon Backgrounds
    const profiles = [
        {
            platform: "LeetCode",
            username: "@avinash_829",
            link: "https://leetcode.com/u/avinash_829/",
            icon: <SiLeetcode size={28} className="text-[#FFA116]" />,
            iconBg: "bg-[#FFA116]/10 border border-[#FFA116]/30 shadow-[0_0_15px_rgba(255,161,22,0.15)]",
            badge: "Knight",
            loading: stats.leetcode.loading,
            stats: [
                {
                    label: "Max Rating",
                    value: stats.leetcode.rating,
                    icon: <FiTrendingUp />,
                },
                {
                    label: "Standing",
                    value: stats.leetcode.rank,
                    icon: <FiAward />,
                },
            ],
        },
        {
            platform: "CodeChef",
            username: "@avinash_829",
            link: "https://www.codechef.com/users/avinash_829",
            icon: <SiCodechef size={28} className="text-[#F5F5F5]" />, // White icon for contrast
            iconBg: "bg-[#5B4638]/80 border border-[#5B4638] shadow-[0_0_15px_rgba(91,70,56,0.4)]",
            badge: "2★ Coder",
            loading: stats.codechef.loading,
            stats: [
                {
                    label: "Current Rating",
                    value: stats.codechef.rating,
                    icon: <FiTrendingUp />,
                },
                {
                    label: "Problems",
                    value: stats.codechef.problems,
                    icon: <FiCode />,
                },
            ],
        },
    ];

    return (
        <section
            id="profiles"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-transparent min-h-[70vh] flex flex-col justify-center overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            >
                Coding <span className="text-green-500">Profiles</span>
            </motion.h2>

            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {profiles.map((profile, index) => (
                    <motion.a
                        key={index}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-green-500/40 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="flex items-center gap-5">
                                {/* Premium Icon Wrapper */}
                                <div
                                    className={`flex items-center justify-center w-14 h-14 rounded-xl ${profile.iconBg} backdrop-blur-md group-hover:scale-110 transition-transform duration-500`}
                                >
                                    {profile.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                                        {profile.platform}
                                        {profile.loading && (
                                            <FiRefreshCw className="text-green-500 animate-spin text-sm" />
                                        )}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {profile.username}
                                    </p>
                                </div>
                            </div>
                            <FiExternalLink className="text-gray-500 group-hover:text-green-400 text-xl transition-colors" />
                        </div>

                        <div className="mb-8 relative z-10">
                            <span className="inline-block px-4 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 text-lg font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                {profile.badge}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 relative z-10 border-t border-white/10 pt-6">
                            {profile.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider font-medium">
                                        {stat.icon}
                                        {stat.label}
                                    </div>
                                    <div className="text-gray-200 font-semibold text-lg group-hover:text-white transition-colors">
                                        {profile.loading ? (
                                            <span className="inline-block w-12 h-5 bg-white/10 animate-pulse rounded" />
                                        ) : (
                                            stat.value
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default CodingProfiles;
