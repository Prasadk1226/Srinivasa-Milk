// src/pages/Home/MilkCarousel.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import CircularGallery from '../../components/UI/CircularGallery';
import defaultImage from '../../assets/images/default image.png';

const milkProducts = [
  // IMPORTANT: Added a 'slug' for clean routing
  { image: '', name: 'Fresh Milk', volume: '1L', price: '₹50', slug: 'fresh-milk' },
  { image: '', name: 'Organic Milk', volume: '500ml', price: '₹30', slug: 'organic-milk' },
  { image: '', name: 'Toned Milk', volume: '1L', price: '₹45', slug: 'toned-milk' },
  { image: '', name: 'Full Cream Milk', volume: '500ml', price: '₹35', slug: 'full-cream-milk' },
  { image: '', name: 'Flavored Milk', volume: '250ml', price: '₹25', slug: 'flavored-milk' },
  { image: '', name: 'Flavored Milk 2', volume: '250ml', price: '₹25', slug: 'flavored-milk-2' },
];

const MilkCircularCarousel = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [bend, setBend] = useState(7);
  const [, setActiveIndex] = useState(0);

  // Update bend on resize for responsiveness
  useEffect(() => {
    const updateBend = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBend(5);
      else if (width >= 768) setBend(3);
      else setBend(1);
    };
    updateBend();
    window.addEventListener('resize', updateBend);
    return () => window.removeEventListener('resize', updateBend);
  }, []);

  // Prepare gallery items with fallback for missing images
  // We use the original milkProducts array in the click handler, 
  // but CircularGallery still needs the 'image' and 'text' structure.

  const galleryItems = milkProducts.map((p) => ({
    image: p.image || defaultImage,
    text: p.name,
    volume: p.volume, // Additional data for display (if used in future)
    price: p.price,   // Additional data for display (if used in future)
  }));
  
  // New click handler to navigate to the product detail page
  const handleItemClick = (index) => {
    const clickedProduct = milkProducts[index];
    // Navigate to /product/fresh-milk, /product/organic-milk, etc.
    navigate(`/product/${clickedProduct.slug}`); 
  };

  return (
    <div className="w-full relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <div className="w-full h-full"> 
        <CircularGallery
          items={galleryItems}
          bend={bend}
          textColor="#222"
          borderRadius={0}
          font="bold 20px sans-serif" 
          scrollEase={0.02}
          onActiveIndexChange={(idx) => setActiveIndex(idx)}
          onItemClick={handleItemClick} // Pass the navigation handler
        />
      </div>
    </div>
  );
};

export default MilkCircularCarousel;



// ******************************************ABOVE IS THE CLEAN DESIGN**************************************


// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import milkFlow from "../../assets/images/milk-flow.svg?url";

// const MaximalistMilkCarousel = ({ products }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const dropletRefs = useRef([]);

//   // Auto-play
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Card animation
//   useEffect(() => {
//     cardRefs.current.forEach((card, i) => {
//       const offset = i - activeIndex;
//       const scale = offset === 0 ? 1.4 : Math.max(0.7, 1 - Math.abs(offset) * 0.3);
//       const rotateY = offset * 25; // 3D rotation
//       const x = offset * 180;
//       const zIndex = offset === 0 ? 20 : 10;
//       gsap.to(card, {
//         x,
//         scale,
//         rotateY,
//         zIndex,
//         duration: 0.8,
//         ease: "power3.out",
//         boxShadow: offset === 0 ? "0 0 40px #49f, 0 0 80px #0ff" : "0 4px 12px #0002",
//       });
//     });
//   }, [activeIndex]);

//   // Droplets & milk flow
//   useEffect(() => {
//     dropletRefs.current.forEach((drop) => {
//       const tl = gsap.timeline({ repeat: -1, yoyo: true });
//       tl.to(drop, { y: -50 - Math.random() * 50, opacity: 0.6, duration: 2 + Math.random() * 2, ease: "sine.inOut" });
//     });
//   }, []);

//   const handleNext = () =>
//     setActiveIndex((p) => (p + 1) % products.length);
//   const handlePrev = () =>
//     setActiveIndex((p) => (p - 1 + products.length) % products.length);

//   return (
//     <div ref={containerRef} className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#0f1120] text-white">
//       {/* Milk Flow Background */}
//       <img src={milkFlow} alt="milk" className="absolute w-full h-full object-cover opacity-20 animate-flow" />

//       {/* Floating droplets */}
//       {Array.from({ length: 12 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-3 h-3 bg-white rounded-full opacity-50"
//           style={{
//             bottom: `${Math.random() * 50}px`,
//             left: `${Math.random() * 95}%`,
//           }}
//           ref={(el) => (dropletRefs.current[i] = el)}
//         ></div>
//       ))}

//       {/* Carousel */}
//       <div className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/30 p-3 rounded-full hover:bg-white/50 transition"
//         >
//           <ArrowLeft className="text-cyan-300" />
//         </button>

//         <div className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
//           {products.map((product, i) => (
//             <div
//               key={i}
//               ref={(el) => (cardRefs.current[i] = el)}
//               className="absolute w-40 h-40 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
//               onClick={() => setActiveIndex(i)}
//             >
//               <img
//                 src={product.img || milkFlow} // Added fallback image
//                 alt={product.name}
//                 className="w-[70%] h-[70%] object-cover rounded-full"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleNext}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/30 p-3 rounded-full hover:bg-white/50 transition"
//         >
//           <ArrowRight className="text-cyan-300" />
//         </button>
//       </div>

//       {/* Product Info */}
//       <div className="absolute bottom-8 text-center">
//         <h2 className="text-3xl font-extrabold tracking-wider text-cyan-400 animate-pulse">{products[activeIndex].name}</h2>
//         <p className="text-lg text-white/70 mt-2">{products[activeIndex].volume} • {products[activeIndex].price}</p>
//         <button className="mt-4 px-6 py-2 bg-cyan-400 hover:bg-pink-500 text-black font-bold rounded-full animate-bounce">
//           Order Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MaximalistMilkCarousel;




// ******************************************ABOVE IS THE CLEAN DESIGN**************************************
