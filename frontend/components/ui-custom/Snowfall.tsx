'use client';

import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Snowfall: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            <Particles
                canvasClassName={isLoaded ? "visible" : "hidden"}
                id="snowfall"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: { color: "transparent" },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 80, density: { enable: true, area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" }, // Hình tròn như tuyết
                        opacity: {
                            value: { min: 0.3, max: 0.8 },
                            random: true,
                            animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
                        },
                        size: {
                            value: { min: 2, max: 4 },
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 10, // Tốc độ rơi nhẹ
                            direction: "bottom",
                            straight: false,
                            random: true,
                            outModes: { default: "out" },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Snowfall;
