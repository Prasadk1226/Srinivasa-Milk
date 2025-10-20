import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

// Deterministic drop positions/sizes for consistent layout + better perf
const DROPS = [
    { top: "18%", left: "12%", size: 12, delay: 0 },
    { top: "28%", left: "78%", size: 14, delay: 0.6 },
    { top: "50%", left: "60%", size: 10, delay: 1.1 },
    { top: "62%", left: "30%", size: 13, delay: 0.4 },
    { top: "75%", left: "85%", size: 11, delay: 0.9 },
];

// Inline SVG bottle so the page doesn't rely on external assets
const BottleSVG = ({ className = "w-36 sm:w-44" }) => (
    <svg
        className={className}
        viewBox="0 0 64 96"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="milkGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
        </defs>
        <rect x="18" y="6" width="28" height="10" rx="2" fill="#f59e0b" />
        <path d="M20 16c0 0-2 6-2 10s2 10 2 10v34a6 6 0 006 6h12a6 6 0 006-6V36c0 0 2-6 2-10s-2-10-2-10H20z" fill="url(#milkGrad)" stroke="#e5e7eb" />
        <circle cx="44" cy="76" r="4" fill="#fff" opacity="0.6" />
    </svg>
);

const NotFound = () => {
    const navigate = useNavigate();
    const shouldReduce = useReducedMotion();

    const bottleAnim = shouldReduce
        ? {}
        : { animate: { y: [0, -8, 0] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };

    const dropAnim = (delay = 0) =>
        shouldReduce
            ? {}
            : { animate: { y: [0, -8, 0] }, transition: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay } };

    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fffdfa] to-[#f2f7ff] overflow-hidden p-6">
            {/* Heading */}
            <motion.h1
                {...(!shouldReduce && { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } })}
                className="text-6xl sm:text-8xl font-extrabold text-[#ff6b00] drop-shadow-md"
                aria-hidden="true"
            >
                404
            </motion.h1>

            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-800 text-center max-w-xl">
                Oops — the milk spilled. This page couldn't be found.
            </h2>

            <p className="mt-3 text-gray-600 text-center max-w-lg">Try going back home or explore our shop for fresh dairy items.</p>

            {/* Decorative area */}
            <div className="relative mt-8 flex flex-col items-center gap-6">
                {/* Floating bottle */}
                <motion.div {...bottleAnim} aria-hidden="true" className="drop-shadow-xl">
                    <BottleSVG />
                </motion.div>

                {/* CTA buttons */}
                <div className="flex gap-3 mt-2">
                    <button
                        onClick={() => navigate('/')}
                        className="px-5 py-2 bg-[#ff6b00] text-white rounded-full font-medium shadow hover:bg-[#ff8429] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b00]"
                        aria-label="Go to home page"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/shop')}
                        className="px-5 py-2 border border-gray-200 rounded-full font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        aria-label="Browse shop"
                    >
                        Shop
                    </button>
                </div>
            </div>

            {/* Milk drops (deterministic) */}
            {DROPS.map((d, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full opacity-90"
                    style={{ width: d.size, height: d.size, top: d.top, left: d.left }}
                    {...dropAnim(d.delay)}
                    aria-hidden="true"
                />
            ))}

            {/* Waves at bottom */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 120" className="w-full h-28 md:h-36" preserveAspectRatio="none">
                    <path d="M0 40 C 180 100 360 0 540 20 C 720 40 900 80 1080 40 C 1260 0 1440 60 1440 60 L1440 120 L0 120 Z" fill="#ffffff" />
                    <path d="M0 60 C 200 120 400 20 600 60 C 800 100 1000 20 1200 60 C 1320 88 1440 40 1440 40 L1440 120 L0 120 Z" fill="#f8fafc" opacity="0.9" />
                </svg>
            </div>
        </main>
    );
};

export default NotFound;