import React, { useRef, useEffect } from "react";

const HeroParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let mouse = {
            x: null,
            y: null,
            radius: 60,
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;

                // CRITICAL FIX: Much smaller particle dots on mobile so the text stays sharp
                this.size = window.innerWidth < 768 ? 1.2 : 2;
                this.density = Math.random() * 20 + 1;
            }

            draw() {
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceX = dx / distance;
                        const forceY = dy / distance;

                        this.x -= forceX * 4;
                        this.y -= forceY * 4;
                    } else {
                        this.x += (this.baseX - this.x) * 0.05;
                        this.y += (this.baseY - this.y) * 0.05;
                    }
                } else {
                    this.x += (this.baseX - this.x) * 0.05;
                    this.y += (this.baseY - this.y) * 0.05;
                }

                this.draw();
            }
        }

        // Replace the generateTextParticles function inside HeroParticles.jsx
        const generateTextParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // FLUID FONT MATH: This guarantees the text will always fit on screen.
            // It scales perfectly with the width of the device, capping at 150px for desktop.
            const fontSize = Math.min(window.innerWidth * 0.13, 150);

            ctx.fillStyle = "white";
            ctx.font = `900 ${fontSize}px "Inter", "Segoe UI", sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Removed the aggressive mobile offset so it stays centered
            const yOffset = window.innerWidth < 768 ? -30 : -20;
            ctx.fillText(
                "Avinash",
                canvas.width / 2,
                canvas.height / 2 + yOffset
            );

            const textCoordinates = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            particles = [];

            // Keeps the dots small and sharp on mobile
            const step = window.innerWidth < 768 ? 3 : 6;

            for (let y = 0; y < textCoordinates.height; y += step) {
                for (let x = 0; x < textCoordinates.width; x += step) {
                    const index = (y * textCoordinates.width + x) * 4;

                    if (textCoordinates.data[index + 3] > 128) {
                        particles.push(new Particle(x, y));
                    }
                }
            }
        };
        generateTextParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateTextParticles();
        };

        // Added touch support so it reacts to phone screen dragging!
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleMouseLeave);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-auto"
        />
    );
};

export default HeroParticles;
