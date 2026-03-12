"use client";

import React, { useEffect, useRef } from "react";

export const HexagonGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const hexContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        const hexEl = hexContainerRef.current;
        if (!el || !hexEl) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            // Write directly to the DOM — bypasses React re-render entirely
            hexEl.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            hexEl.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        };

        const handleMouseLeave = () => {
            hexEl.style.setProperty("--mouse-x", "-9999px");
            hexEl.style.setProperty("--mouse-y", "-9999px");
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

            {/* The hexagon container uses CSS custom properties for the mouse-driven hover effect */}
            <div
                ref={hexContainerRef}
                className="hexagon-container"
                style={{ "--mouse-x": "-9999px", "--mouse-y": "-9999px" } as React.CSSProperties}
            >
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="hex-row">
                        {[...Array(60)].map((_, j) => (
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
