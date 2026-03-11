"use client";

import React, { useEffect, useState } from "react";

export const HexagonGrid = () => {
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {/* Very dark base fill */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />

            {/* The hexagon "revealed by cursor" layer */}
            <div
                className="hexagon-container"
                style={{
                    '--mouse-x': `${mousePos.x}px`,
                    '--mouse-y': `${mousePos.y}px`,
                } as React.CSSProperties}
            >
                {[...Array(18)].map((_, i) => (
                    <div key={i} className="hex-row">
                        {[...Array(28)].map((_, j) => (
                            <div key={j} className="hexagon" />
                        ))}
                    </div>
                ))}
            </div>

            {/* Edge vignettes — smooth fade-out near edges */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                    radial-gradient(ellipse at 50% 0%, transparent 60%, #0a0a0f 100%),
                    radial-gradient(ellipse at 50% 100%, transparent 60%, #0a0a0f 100%),
                    radial-gradient(ellipse at 0% 50%, transparent 60%, #0a0a0f 100%),
                    radial-gradient(ellipse at 100% 50%, transparent 60%, #0a0a0f 100%)
                `
            }} />
        </div>
    );
};
