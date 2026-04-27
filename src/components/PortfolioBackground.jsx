import React, { useRef, useEffect } from "react";

const PortfolioBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let particles = [];
        const particleCount = 40;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    z: Math.random() * 100 + 50,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    speedZ: (Math.random() - 0.5) * 0.1,
                    baseOpacity: Math.random() * 0.5 + 0.2,
                });
            }
        };

        resizeCanvas();
        createParticles();

        const handleResize = () => {
            resizeCanvas();
            // Don't recreate particles on every tiny resize, just let them float!
        };

        window.addEventListener("resize", handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            particles.forEach((p) => {
                // True 3D Perspective from the center of the screen
                const perspective = 1000 / (1000 + p.z);
                const x = centerX + (p.x - centerX) * perspective;
                const y = centerY + (p.y - centerY) * perspective;
                const size = p.size * perspective;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);

                ctx.fillStyle = `rgba(34, 197, 94, ${p.baseOpacity})`;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;
                p.z += p.speedZ;

                // Seamless looping
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                if (p.z < 25) p.z = 150;
                if (p.z > 150) p.z = 25;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // CRITICAL FIX: Changed z-[-1] to z-0 so it sits in front of the App's bg-black
            // but still behind your z-10 content!
            className="fixed inset-0 pointer-events-none z-0 bg-transparent"
        />
    );
};

export default PortfolioBackground;
