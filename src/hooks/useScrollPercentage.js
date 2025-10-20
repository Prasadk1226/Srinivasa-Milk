import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate the scroll percentage relative to a specific element.
 * Useful for triggering animations based on scroll position near the target.
 * * @param {React.RefObject} targetRef - A ref pointing to the element (e.g., the Footer).
 * @returns {number} The percentage (0 to 100) of scroll coverage near the target.
 */
const useScrollPercentage = (targetRef) => {
    const [scrollPct, setScrollPct] = useState(0);

    useEffect(() => {
        const calculateScroll = () => {
            if (!targetRef.current) return;

            const target = targetRef.current;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Get the position of the element relative to the viewport
            const { top: targetTop, height: targetHeight } = target.getBoundingClientRect();

            // We want the animation to start when the footer is approaching the bottom of the viewport.
            // Start area: When the target element's top is 150% of the viewport height away from the top.
            // End area: When the target element is fully visible (targetTop = windowHeight).
            
            // This defines the window where the animation is active
            const startScrollPoint = target.offsetTop - windowHeight * 1.5;
            const endScrollPoint = target.offsetTop - windowHeight * 0.5;

            // Calculate the actual scroll distance covered in this window
            let scrollDistance = scrollY - startScrollPoint;
            let totalRange = endScrollPoint - startScrollPoint;

            if (scrollDistance < 0) {
                setScrollPct(0);
            } else if (scrollDistance > totalRange) {
                setScrollPct(100);
            } else {
                setScrollPct((scrollDistance / totalRange) * 100);
            }
        };

        window.addEventListener('scroll', calculateScroll);
        calculateScroll(); // Initial check

        return () => window.removeEventListener('scroll', calculateScroll);
    }, [targetRef]);

    return scrollPct;
};

export default useScrollPercentage;
