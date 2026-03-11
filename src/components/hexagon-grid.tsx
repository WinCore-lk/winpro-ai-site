"use client";

import React, { useEffect, useState, useRef } from "react";

export const HexagonGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const handleMouseLeave = () => {
            setMousePos({ x: -9999, y: -9999 });
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        
        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {/* Dark base fill for the hero section background */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />

            {/* The hexagon container uses CSS variables to track the mouse position for the mask/hover effects */}
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

            {/* Fade out near edges for smoothness */}
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
