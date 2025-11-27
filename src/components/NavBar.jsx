import React, { useEffect, useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav
            className="p-4 fixed w-full top-0 z-50 
            bg-black/60 backdrop-blur-lg 
            shadow-[0_0_20px_rgba(255,200,0,0.25)] 
            hover:shadow-[0_0_30px_rgba(255,210,0,0.45)] 
            transition-all duration-300"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center text-amber-400 text-2xl font-bold space-x-3">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="h-10 w-auto drop-shadow-[0_0_10px_rgba(255,200,0,0.4)]"
                    />
                    <span className="drop-shadow-[0_0_10px_rgba(255,200,0,0.4)]">
                        Avinash Pappala
                    </span>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-amber-400 focus:outline-none"
                    >
                        <svg
                            className="w-7 h-7 drop-shadow-[0_0_10px_rgba(255,200,0,0.4)]"
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
                <ul className="hidden md:flex space-x-10 mr-10">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setActiveSection(link.id)}
                                className="group relative flex items-center gap-2 
                                text-[16px] font-medium text-white 
                                hover:text-amber-400 transition-all duration-300"
                            >
                                {link.label}

                                <span
                                    className={`absolute bottom-[-5px] left-0 h-[2px] 
                                    bg-amber-400 rounded-full transition-all duration-300 w-0 
                                    group-hover:w-full ${
                                        activeSection === link.id
                                            ? "w-full"
                                            : ""
                                    }`}
                                ></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-3 text-white">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => {
                                        setActiveSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className="group relative flex items-center gap-2 
                                    text-[15px] font-medium 
                                    text-amber-300 hover:text-amber-400 
                                    transition-all duration-300"
                                >
                                    {link.label}

                                    <span
                                        className={`${
                                            activeSection === link.id
                                                ? "w-full"
                                                : "w-0"
                                        } absolute bottom-[-4px] left-0 h-[2px] 
                                        bg-amber-400 rounded-full 
                                        transition-all duration-300 group-hover:w-full`}
                                    ></span>
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
