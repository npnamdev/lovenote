'use client';

import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadHeartShape } from "tsparticles-shape-heart"; // Import hình trái tim

const FallingHearts = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
        await loadHeartShape(engine); // Load hình trái tim
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <Particles
                canvasClassName={isLoaded ? "z-10 visible" : "z-10 hidden"}
                className="z-10"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: { color: "" },
                    fpsLimit: 120,
                    particles: {
                        number: { value: 30 }, // Số lượng trái tim
                        color: { value: ["#ff4d6d", "#ff758f", "#ff99ac"] }, // Màu sắc trái tim
                        shape: { type: "heart" }, // Hình trái tim
                        opacity: { value: { min: 0.7, max: 1 }, random: true },
                        size: { value: { min: 2, max: 9 }, random: true }, // Kích thước trái tim
                        move: {
                            enable: true,
                            speed: 5, // Tốc độ rơi nhẹ nhàng hơn
                            direction: "bottom",
                            straight: false,
                            random: true,
                            outModes: { default: "out" }, // Biến mất khi chạm đáy màn hình
                        },
                        // rotate: {
                        //     value: { min: 0, max: 360 }, // Góc xoay ngẫu nhiên
                        //     animation: {
                        //         enable: true,
                        //         speed: 10, // Tốc độ xoay
                        //         sync: false, // Xoay không đồng bộ giữa các hạt
                        //     },
                        // },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default FallingHearts;
