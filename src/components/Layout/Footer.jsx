import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MilkFlowDivider from '../UI/MilkFlowDivider'; // Assuming this component exists


// Framer Motion variants for letter staggering
const letterContainer = {
    rest: { transition: { staggerChildren: 0.02, staggerDirection: 1 } },
    hover: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
};

const letterItem = {
    rest: { y: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
    hover: { y: -2, opacity: 0.9, transition: { duration: 0.15, ease: 'easeIn' } }
};

function AnimatedLink({ to, children }) {
    const [active, setActive] = useState(false);
    const text = children.split('');

    return (
        <Link
            to={to}
            className="relative block w-full text-sm text-gray-300 focus:outline-none py-1 overflow-hidden group"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
        >
            <motion.span
                variants={letterContainer}
                initial="rest"
                animate={active ? 'hover' : 'rest'}
                className="hover:text-white transition-colors block whitespace-nowrap"
            >
                {/* Apply stagger to each letter */}
                {text.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterItem}
                        className="inline-block relative transition-transform duration-300 group-hover:text-accent"
                    >
                        {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for spaces */}
                    </motion.span>
                ))}
            </motion.span>
            
            {/* The animated underline has been removed here. */}
        </Link>
    );
}

// --- FRAMER MOTION BASE VARIANTS ---

const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

// --- FOOTER COMPONENT ---

const Footer = () => {
    const footerRef = useRef(null);
    const waveRef = useRef(null);
    const colsRef = useRef(null);

    // Dynamic Parallax Effect (Enhanced for smoothness)
    useEffect(() => {
        let raf = null;
        let targetX = 0;
        let targetY = 0;
        let currentX_wave = 0;
        let currentY_wave = 0;
        let currentX_cols = 0;
        let currentY_cols = 0;
        const ease = 0.1; // Smoothness factor

        const el = footerRef.current;
        if (!el) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            // Map mouse position from -0.5 to 0.5
            targetX = (e.clientX - rect.left) / rect.width - 0.5;
            targetY = (e.clientY - rect.top) / rect.height - 0.5;
        };
        
        const updateParallax = () => {
            // Apply easing/lerp for smooth movement
            currentX_wave += (targetX * 24 - currentX_wave) * ease; // Increased depth for wave (MilkFlowDivider)
            currentY_wave += (targetY * 12 - currentY_wave) * ease; 
            currentX_cols += (targetX * 8 - currentX_cols) * ease; // Slight increase for columns
            currentY_cols += (targetY * 4 - currentY_cols) * ease;

            if (waveRef.current) waveRef.current.style.transform = `translate(${currentX_wave}px, ${currentY_wave}px)`;
            if (colsRef.current) colsRef.current.style.transform = `translate(${currentX_cols}px, ${currentY_cols}px)`;

            raf = requestAnimationFrame(updateParallax);
        };
        
        const handleLeave = () => {
            // Target returns to zero
            targetX = 0;
            targetY = 0;
            // The raf loop will naturally ease the elements back to origin
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
        raf = requestAnimationFrame(updateParallax);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
            cancelAnimationFrame(raf);
        };
    }, []);

    // --- RENDER ---
    return (
        <footer ref={footerRef} className="relative overflow-hidden bg-gray-900 text-white">
            
            {/* Decorative milk divider flowing into footer (Strongest Parallax) */}
            <div ref={waveRef} className="absolute top-0 left-0 w-full -translate-y-1/2 z-10 pointer-events-none transition-transform duration-[4000ms] ease-out">
                <MilkFlowDivider className="w-full" />
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-6 pt-28 pb-8 relative z-20"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div ref={colsRef} className="grid md:grid-cols-3 gap-8 items-start text-left transform transition-transform duration-[4000ms] ease-out">
                    
                    {/* Column 1: Address */}
                    <motion.div variants={item} className="space-y-3">
                        <h4 className="text-xl font-semibold">Srinivasa Milk</h4>
                        <p className="text-sm text-gray-300">Srirangam Milk Products (P) Ltd.</p>
                        <p className="text-sm text-gray-300">No.5, 2nd Street, Sri Ayyappa Nagar, Kolathur, Chennai – 600099.</p>
                        <div className="mt-4 flex items-center gap-3">
                            <motion.a
                                href="mailto:srinivasamilk022018@gmail.com"
                                whileHover={{ scale: 1.02, x: 2 }}
                                className="text-sm text-accent hover:underline transition-colors block"
                            >
                                srinivasamilk022018@gmail.com
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Column 2: Contact (Enhanced "Back to Top" Button) */}
                    <motion.div variants={item} className="space-y-3">
                        <h4 className="text-xl font-semibold">Contact</h4>
                        <p className="text-sm text-gray-300">Email: <a className="text-accent hover:underline" href="mailto:srinivasamilk022018@gmail.com">srinivasamilk022018@gmail.com</a></p>
                        <p className="text-sm text-gray-300">Phone: <a className="text-accent hover:underline" href="tel:+917825812255">+91 78258 12255</a></p>
                        <div className="mt-4 flex items-center gap-3">
                            {/* Button Ripple/Pulse Effect */}
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="relative px-5 py-2.5 rounded-full bg-accent text-white text-sm shadow-xl overflow-hidden group"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span className="relative z-10">Back to Top</span>
                                {/* Ripple/Glow effect */}
                                <motion.span
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.2, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Column 3: Explore (Staggered Text Links) */}
                    <motion.div variants={item} className="space-y-3">
                        <h4 className="text-xl font-semibold">Explore</h4>
                        <div className="text-sm text-gray-300 space-y-2">
                            <AnimatedLink to="/about">About Us</AnimatedLink>
                            <AnimatedLink to="/products">Our Products</AnimatedLink>
                            <AnimatedLink to="/network">Distribution Network</AnimatedLink>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom Row */}
                <motion.div variants={item} className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-400">© {new Date().getFullYear()} Srinivasa Milk. All Rights Reserved.</div>

                    {/* Social Icons (Micro-interactions preserved) */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#"
                            className="text-gray-300 hover:text-white"
                            whileHover={{ scale: 1.15, rotate: 6 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="#"
                            className="text-gray-300 hover:text-white"
                            whileHover={{ scale: 1.15, rotate: -6 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;