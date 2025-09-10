import React, { useEffect, useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="p-4 shadow-md fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center text-amber-400 text-2xl font-bold space-x-3">
                    <img src="/logo.png" alt="logo" className="h-10 w-auto" />
                    <span>Avinash Pappala</span>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-10 mr-10">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`text-white py-2 px-1 border-b-2 transition-colors duration-200 ${activeSection === link.id
                                    ? 'border-amber-400'
                                    : 'border-transparent hover:border-amber-400'
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-2 text-white">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`hover:text-gray-300 ${activeSection === link.id ? 'text-amber-400' : ''
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
