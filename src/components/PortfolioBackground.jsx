import React, { useRef, useEffect } from "react";

const PortfolioBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const hueRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        for (let i = 0; i < 25; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 100 + 50,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                speedZ: (Math.random() - 0.5) * 0.1,
                opacity: Math.random() * 0.6 + 0.3,
                colorOffset: Math.random() * 360,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            hueRef.current = (hueRef.current + 1.5) % 360;

            particles.forEach((p) => {
                const perspective = 1000 / (1000 + p.z);
                const x = p.x * perspective;
                const y = p.y * perspective;
                const size = p.size * perspective;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);

                // 🎉 DISCO COLOR EFFECT
                const hue = (hueRef.current + p.colorOffset) % 360;
                ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${p.opacity})`;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;
                p.z += p.speedZ;

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
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default PortfolioBackground;
