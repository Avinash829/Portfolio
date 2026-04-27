/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef(null);
    const auraRef = useRef(null);
    const requestRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const delayed = useRef({ x: 0, y: 0 });

    const LERP_FACTOR = 0.15; // Speed of the core point
    const AURA_LERP = 0.08; // "Lag" speed of the aura

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smoothly move the Aura coordinates
            delayed.current.x +=
                (mouse.current.x - delayed.current.x) * AURA_LERP;
            delayed.current.y +=
                (mouse.current.y - delayed.current.y) * AURA_LERP;

            // 1. Update Core Point (Follows mouse immediately)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
            }

            // 2. Update Aura (Follows with the delayed LERP coordinates)
            if (auraRef.current) {
                auraRef.current.style.transform = `translate3d(${delayed.current.x}px, ${delayed.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <>
            {/* 1. THE CORE POINT - Solid Emerald */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-[10000] mix-blend-difference"
            >
                <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>

            {/* 2. THE AURA - Constant Glow */}
            <div
                ref={auraRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999]"
            >
                <div className="w-10 h-10 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-[1px]" />
            </div>
        </>
    );
}
