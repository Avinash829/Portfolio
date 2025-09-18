import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        // you can initialize custom shapes or presets here
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 }, // stays behind content
                background: { color: '#000000' }, // black background
                fpsLimit: 60,
                particles: {
                    number: { value: 80, density: { enable: true, area: 800 } },
                    color: { value: '#ffffff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5, random: true },
                    size: { value: 2, random: true },
                    move: { enable: true, speed: 0.5, direction: 'none', outModes: { default: 'bounce' } }
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: 'repulse' } },
                    modes: { repulse: { distance: 100 } }
                },
                detectRetina: true
            }}
        />
    );
};

export default ParticlesBackground;
