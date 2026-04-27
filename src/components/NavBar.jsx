import React, { useEffect, useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        // 1. Widen the hitbox: Triggers when the section is in the top 20% to 60% of the viewport.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        // 2. Fallback for the absolute bottom of the page (fixes the "Contact" section bug)
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50;
            if (isBottom) {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "profiles", label: "Profiles" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav
            className="p-4 fixed w-full top-0 z-50 
            bg-black/40 backdrop-blur-md border-b border-white/5
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            transition-all duration-300"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center text-green-400 text-2xl font-bold tracking-tighter space-x-2">
                    <span
                        className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Avinash Pappala
                    </span>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-green-400 focus:outline-none p-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setActiveSection(link.id)}
                                className={`group relative py-2 text-[15px] font-medium tracking-wide transition-all duration-300 ${
                                    activeSection === link.id
                                        ? "text-green-400"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {link.label}

                                {/* Underline Glow Effect */}
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500 ${
                                        activeSection === link.id
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                    }`}
                                ></span>

                                {/* Subtle Bloom Effect on active link */}
                                {activeSection === link.id && (
                                    <span className="absolute inset-0 bg-green-500/10 blur-xl -z-10 rounded-full scale-150 animate-pulse"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-8 animate-slide-fade">
                    <ul className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => {
                                        setActiveSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-semibold tracking-tight transition-colors ${
                                        activeSection === link.id
                                            ? "text-green-400"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
