

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { Power0 } from 'gsap/all';

// // --- MilkFlowDivider Component (The Fluid Animation Logic) ---
// // This component implements the detailed pure white milk wave animation.
// const MilkFlowDivider = ({ className = "" }) => {
//     const waveRef = useRef(null);

//     // GSAP Timeline for the continuous, left-to-right flow and vertical undulation
//     useEffect(() => {
//         const waveElement = waveRef.current;
//         if (waveElement) {
//             // 1. Continuous Horizontal Movement (Left-to-Right flow)
//             gsap.to(waveElement, {
//                 x: '+=1440', // Move 1440 units right (for seamless looping)
//                 duration: 10, // Slower duration for graceful, serene flow (as requested)
//                 ease: Power0.easeNone, // Linear movement for infinite continuity
//                 repeat: -1, 
//             });

//             // 2. Subtle Vertical Undulation (The wave pattern)
//             gsap.to(waveElement, {
//                 y: 5, // Subtle vertical movement for wave breathing
//                 duration: 7,
//                 ease: 'sine.inOut',
//                 yoyo: true,
//                 repeat: -1,
//                 delay: 0.8 
//             });
//         }
//     }, []);

//     // SVG Path: A complex repeating, low-amplitude sine wave shape
//     const MilkWavePath = (
//         // The viewBox is set high enough (1440x80) to allow for transformation/rotation
//         <svg 
//             ref={waveRef}
//             className="absolute top-0 left-[-1440px] w-[200%] h-full"
//             viewBox="0 0 1440 80" 
//             preserveAspectRatio="none"
//         >
//             {/* 3D HIGHLIGHT Layer: Faint reflection (#F5F5F5) */}
//             <path 
//                 fill="#F5F5F5" // Faint highlight
//                 opacity="0.6"
//                 // Adjusted path to sit higher and accommodate the wave height
//                 d="M0,58 C180,73 360,43 540,58 C720,73 900,43 1080,58 C1260,73 1440,43 1440,58 V80 H0 Z"
//             />
            
//             {/* Primary Milk Wave Layer (#FFFFFF) */}
//             <path 
//                 // Milk Liquid: Pure, opaque white (hex: #FFFFFF)
//                 fill="#FFFFFF" 
//                 // Subtle light gray shadow for 3D depth (#E0E0E0)
//                 stroke="#E0E0E0" 
//                 strokeWidth="1" 
//                 // Main low-amplitude wave path
//                 d="M0,50 C180,70 360,30 540,50 C720,70 900,30 1080,50 C1260,70 1440,30 1440,50 V80 H0 Z"
//             />
//         </svg>
//     );

//     // The component wrapper takes the background color from the parent (Footer)
//     // but applies the light blue background *behind* the wave only if needed.
//     // For the Footer, we'll rely on the Footer's background color to show through the transparent parts.
//     return (
//         <div 
//             className={`absolute top-0 left-0 w-full h-[80px] overflow-hidden ${className}`} 
//             // The Footer should be responsible for the dark background color.
//             // If the wave is at the TOP of the footer, the color *above* the wave should be the footer color.
//         >
//              <div 
//                  className="absolute top-0 left-0 w-full h-full" 
//                  // Setting the background *behind* the wave to the sky-blue color, 
//                  // which is exposed when the parent (Footer) has been rotated.
//                  style={{ backgroundColor: '#D0EFFF' }} 
//              >
//                 {MilkWavePath}
//              </div>
//         </div>
//     );
// };

// export default MilkFlowDivider;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { Power0 } from "gsap/all";

// // --- Smooth Infinite Flowing Milk Divider ---
// const MilkFlowDivider = ({ className = "" }) => {
//   const waveWrapRef = useRef(null);

//   useEffect(() => {
//     const waveWrap = waveWrapRef.current;
//     if (waveWrap) {
//       // Infinite continuous leftward movement for a 2x wide SVG container
//       gsap.to(waveWrap, {
//         xPercent: -50, // move half its width to left (since 200% total width)
//         duration: 12,
//         ease: Power0.easeNone,
//         repeat: -1, // infinite loop
//       });

//       // Gentle vertical breathing (wave undulation)
//       gsap.to(waveWrap, {
//         y: 5,
//         duration: 7,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: 0.8,
//       });
//     }
//   }, []);

//   // SVG Wave path repeated twice side-by-side for seamless looping
//   const WavePath = (
//     <>
//       <svg
//         viewBox="0 0 1440 80"
//         preserveAspectRatio="none"
//         className="w-[100%] h-full"
//       >
//         <path
//           fill="#F5F5F5"
//           opacity="0.6"
//           d="M0,58 C180,73 360,43 540,58 C720,73 900,43 1080,58 C1260,73 1440,43 1440,58 V80 H0 Z"
//         />
//         <path
//           fill="#FFFFFF"
//           stroke="#E0E0E0"
//           strokeWidth="0"
//           d="M0,50 C180,70 360,30 540,50 C720,70 900,30 1080,50 C1260,70 1440,30 1440,50 V80 H0 Z"
//         />
//       </svg>

//       {/* Duplicate for seamless loop */}
//       <svg
//         viewBox="0 0 1440 80"
//         preserveAspectRatio="none"
//         className="w-[100%] h-full"
//       >
//         <path
//           fill="#F5F5F5"
//           opacity="0"
//           d="M0,58 C180,73 360,43 540,58 C720,73 900,43 1080,58 C1260,73 1440,43 1440,58 V80 H0 Z"
//         />
//         <path
//           fill="#FFFFFF"
//           stroke="#E0E0E0"
//           strokeWidth="0"
//           d="M0,50 C180,70 360,30 540,50 C720,70 900,30 1080,50 C1260,70 1440,30 1440,50 V80 H0 Z"
//         />
//       </svg>
//     </>
//   );

//   return (
//     <div
//       className={`absolute top-0 left-0 w-full h-[80px] overflow-hidden ${className}`}
//     >
//       {/* Subtle background color to blend with header or footer */}
//       <div
//         className="absolute top-0 left-0 w-full h-full"
//         style={{ backgroundColor: "#D0EFFF" }}
//       >
//         <div
//           ref={waveWrapRef}
//           className="absolute top-0 left-0 flex w-[200%] h-full"
//         >
//           {WavePath}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MilkFlowDivider;




import React, { useRef } from "react";
// Removed GSAP imports to fix the "Could not resolve" errors.

// Define keyframes using a CSS string, which we will inject into the style tag or use directly if using a tool like emotion/styled-components (but here we'll assume Tailwind's utility class mapping is best)
const waveKeyframes = `
  @keyframes slide-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes breathe-y {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }
`;

// --- Smooth Infinite Flowing Milk Divider ---
const MilkFlowDivider = ({ className = "" }) => {
  // We no longer need the ref for GSAP, but keep it for potential future uses or debugging
  const waveWrapRef = useRef(null);

  // Define the width of a single viewport's wave path
  const WAVE_WIDTH = 1440; 

  // Single SVG containing two copies of the wave path for seamless looping
  const WavePath = (
    <svg
      // ViewBox is set to 2x the wave width (2880) to accommodate both copies
      viewBox={`0 0 ${WAVE_WIDTH * 2} 80`}
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      {/* Wave Layer 1 (Subtle Gray Background Layer) */}
      <g className="wave-layer-1">
        {/* Copy 1 */}
        <path
          fill="#F5F5F5"
          opacity="0.6"
          d="M0,58 C180,73 360,43 540,58 C720,73 900,43 1080,58 C1260,73 1440,43 1440,58 V80 H0 Z"
        />
        {/* Copy 2 - Shifted by one wave width (1440) */}
        <path
          fill="#F5F5F5"
          opacity="0.6"
          transform={`translate(${WAVE_WIDTH}, 0)`}
          d="M0,58 C180,73 360,43 540,58 C720,73 900,43 1080,58 C1260,73 1440,43 1440,58 V80 H0 Z"
        />
      </g>

      {/* Wave Layer 2 (Opaque White Foreground Layer) */}
      <g className="wave-layer-2">
        {/* Copy 1 */}
        <path
          fill="#FFFFFF"
          stroke="#E0E0E0"
          strokeWidth="0"
          d="M0,50 C180,70 360,30 540,50 C720,70 900,30 1080,50 C1260,70 1440,30 1440,50 V80 H0 Z"
        />
        {/* Copy 2 - Shifted by one wave width (1440) */}
        <path
          fill="#FFFFFF"
          stroke="#E0E0E0"
          strokeWidth="0"
          transform={`translate(${WAVE_WIDTH}, 0)`}
          d="M0,50 C180,70 360,30 540,50 C720,70 900,30 1080,50 C1260,70 1440,30 1440,50 V80 H0 Z"
        />
      </g>
    </svg>
  );

  return (
    <>
      {/* 1. Injecting CSS Keyframes via a style tag for the animations */}
      <style>{waveKeyframes}</style>

      <div
        className={`absolute top-0 left-0 w-full h-[80px] overflow-hidden ${className}`}
      >
        {/* Subtle background color for the area behind the waves */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: "#D0EFFF" }}
        >
          {/* 2. Applying CSS Animations to the wrapper */}
          <div
            ref={waveWrapRef}
            className="absolute top-0 left-0 w-[200%] h-full"
            style={{
              animation: "slide-left 12s linear infinite, breathe-y 7s ease-in-out infinite alternate 0.8s",
              willChange: 'transform' // Performance hint
            }}
          >
            {WavePath}
          </div>
        </div>
      </div>
    </>
  );
};

export default MilkFlowDivider;
