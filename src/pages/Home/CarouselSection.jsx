// import React, { useCallback, useMemo } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Re-including Thumbs for the detailed product view experience
// import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'; 
// import { useState } from 'react';
// import { placeholderFor } from '../../utils/placeholder';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { useNavigate } from 'react-router-dom';

// // ----------------------------------------------------------------------
// // 1. Premium Slide Content Component (Organized and Detailed)
// // ----------------------------------------------------------------------
// const PremiumSlideContent = ({ product, goToProduct }) => {
//     return (
//         <div
//             role="button"
//             tabIndex={0}
//             onClick={() => goToProduct(product)}
//             onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToProduct(product)}
//             // Main container: Clean white, premium animation, flexible layout
//             className="cursor-pointer bg-white p-6 md:p-10 h-[450px] rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.01] flex flex-col md:flex-row items-center border border-gray-100"
//         >
//             {/* 1.1. Image Container (Left/Center) */}
//             <div 
//                 // Image Area: Defined size, perfectly centered, light background for contrast
//                 className="w-full md:w-2/5 h-1/2 md:h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden p-4 transition duration-500"
//             >
//                 <img
//                     // Using product.image first, then fallback to product.img
//                     src={product.image || product.img || placeholderFor(product.name, 900, 500)}
//                     alt={product.name}
//                     loading="lazy"
//                     // Class: Object-contain for clean, uncropped product visibility
//                     className="max-w-full max-h-full object-contain transition duration-500 ease-in-out hover:scale-[1.05]"
//                 />
//             </div>

//             {/* 1.2. Text Content (Right) - Highly organized and prioritized */}
//             <div className="w-full md:w-3/5 md:pl-10 pt-6 md:pt-0 flex flex-col justify-center h-full">
//                 <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-1">
//                     {product.category || 'Dairy Essential'}
//                 </span>
                
//                 {/* Product Name (Dominant Element) */}
//                 <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
//                     {product.name}
//                 </h3>
                
//                 {/* Volume/Size (Secondary Detail) */}
//                 {product.volume && (
//                     <div className="text-lg text-gray-500 mb-4 font-medium">
//                         {product.volume}
//                     </div>
//                 )}
                
//                 {/* Description (Well-formatted paragraph) */}
//                 {product.description && (
//                     <p className="text-gray-700 mt-2 mb-4 line-clamp-2 leading-relaxed text-base">
//                         {product.description}
//                     </p>
//                 )}
                
//                 {/* Price (Attention-Grabbing) */}
//                 <p className="text-4xl font-bold text-green-700 my-3">
//                     {product.price}
//                 </p>

//                 {/* Action Button (Smooth, Clean) */}
//                 <div className="mt-4">
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             goToProduct(product);
//                         }}
//                         onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.stopPropagation(), goToProduct(product))}
//                         // Button Style: Clean, elevated, smooth hover feedback
//                         className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md transition duration-300 hover:bg-indigo-700 hover:shadow-lg"
//                         aria-label={`View ${product.name} product`}
//                     >
//                         View Product
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // ----------------------------------------------------------------------
// // 2. Main Carousel Component (Displaying Products with Thumbs)
// // ----------------------------------------------------------------------
// const CarouselSection = ({ products = [] }) => {
//     const navigate = useNavigate();
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);

//     // Filter to ensure only products with prices are shown, removing generic display items if needed
//     const viewableProducts = useMemo(() => {
//         return products.filter(p => p.price && p.price !== 'N/A' && p.price !== undefined);
//     }, [products]);

//     const goToProduct = useCallback(
//         (p) => {
//             if (!p) return;
//             const slug = p.slug || p.id || (p.name && p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
//             navigate(`/product/${slug}`);
//         },
//         [navigate]
//     );
    
//     // Check if there are any products to display (handles the disappearance issue)
//     if (viewableProducts.length === 0) {
//         return <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-500">No featured products available.</div>;
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
//             {/* Primary Swiper */}
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay, Thumbs]}
//                 thumbs={{ swiper: thumbsSwiper }}
//                 navigation
//                 pagination={{ clickable: true }}
//                 // Animation Richness: Premium, slow autoplay
//                 autoplay={{ delay: 5000, disableOnInteraction: false }} 
//                 loop={true}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 centeredSlides={true}
//                 className="pt-4 pb-12" // Padding for pagination dots
//             >
//                 {viewableProducts.map((p) => (
//                     <SwiperSlide key={p.id || p.name}>
//                         <PremiumSlideContent product={p} goToProduct={goToProduct} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
            
//             {/* Thumbnail Navigation (Clean & Minimal) */}
//             <div className="max-w-full mx-auto px-2 mt-4">
//                 <Swiper
//                     onSwiper={setThumbsSwiper}
//                     modules={[Navigation, Thumbs]}
//                     spaceBetween={10}
//                     slidesPerView={4}
//                     watchSlidesProgress
//                     freeMode={true}
//                     className="py-2"
//                     breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 6 } }}
//                     aria-label="Carousel thumbnails"
//                 >
//                     {viewableProducts.map((p) => (
//                         <SwiperSlide 
//                             key={`thumb-${p.id || p.name}`} 
//                             className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//                         >
//                             <button
//                                 // Thumbnail Style: Clean white background, border hover effect
//                                 className="w-full h-16 lg:h-20 overflow-hidden rounded-lg focus:outline-none bg-white border border-gray-300 hover:border-indigo-500 transition flex items-center justify-center"
//                                 onClick={() => goToProduct(p)}
//                                 aria-label={`Open ${p.name}`}
//                             >
//                                 <img 
//                                     loading="lazy" 
//                                     // Use product.image or product.img for the thumbnail source
//                                     src={p.image || p.img || placeholderFor(p.name, 300, 180)} 
//                                     alt={p.name} 
//                                     className="w-full h-full object-contain p-1" 
//                                 />
//                             </button>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CarouselSection;


// import React, { useCallback, useMemo } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // We only need basic navigation/scrolling for this compact style
// import { Navigation, Autoplay } from 'swiper/modules'; 
// import { useState } from 'react';
// import { placeholderFor } from '../../utils/placeholder';
// import 'swiper/css';
// import 'swiper/css/navigation';
// // Removed 'swiper/css/pagination' as pagination is often omitted for compact horizontal lists
// import { useNavigate } from 'react-router-dom';

// // ----------------------------------------------------------------------
// // 1. Compact Product Card Component (Swiggy Item Style)
// // ----------------------------------------------------------------------
// const CompactProductCard = ({ product, goToProduct }) => {
//     return (
//         <div
//             role="button"
//             tabIndex={0}
//             onClick={() => goToProduct(product)}
//             onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToProduct(product)}
//             // Card style: Fixed width, clean white, minimal shadow, hover for animation richness
//             className="cursor-pointer bg-white w-48 h-full rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 overflow-hidden border border-gray-100 flex flex-col justify-between"
//         >
//             {/* 1.1. Image Area (Top) */}
//             <div className="h-36 w-full flex items-center justify-center bg-gray-50 p-2 overflow-hidden">
//                 <img
//                     src={product.image || product.img || placeholderFor(product.name, 400, 400)}
//                     alt={product.name}
//                     loading="lazy"
//                     className="h-full w-auto object-contain transition duration-500 hover:scale-[1.05]"
//                 />
//             </div>

//             {/* 1.2. Text Content Area (Bottom - Organized) */}
//             <div className="p-3 text-left flex flex-col flex-grow">
//                 {/* Category/Tag */}
//                 <span className="text-xs font-medium text-indigo-500 uppercase truncate mb-0.5">
//                     {product.tags?.[0] || product.category}
//                 </span>

//                 {/* Name */}
//                 <p className="text-base font-semibold text-gray-900 truncate" title={product.name}>
//                     {product.name}
//                 </p>
                
//                 {/* Volume/Size */}
//                 <p className="text-xs text-gray-500 mt-0.5 mb-2">{product.volume}</p>
                
//                 {/* Price and Button Wrapper */}
//                 <div className="mt-auto flex justify-between items-center pt-2">
//                     {/* Price */}
//                     <p className="text-lg font-bold text-green-700">
//                         {product.price}
//                     </p>
                    
//                     {/* Action Button */}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation(); // Prevents slide navigation when clicking the button
//                             // Ideally, this button would trigger an 'Add to Cart' action
//                             console.log(`Add to cart: ${product.name}`);
//                         }}
//                         className="p-1.5 text-sm bg-indigo-50 text-indigo-700 rounded-lg font-bold shadow-sm hover:bg-indigo-100 transition"
//                         aria-label={`Add ${product.name} to cart`}
//                     >
//                         + ADD
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // ----------------------------------------------------------------------
// // 2. Main Carousel Component (The Swiggy Horizontal Strip Container)
// // ----------------------------------------------------------------------
// const CarouselSection = ({ products = [], title = "Featured Products" }) => {
//     const navigate = useNavigate();
    
//     const goToProduct = useCallback(
//         (p) => {
//             if (!p) return;
//             const slug = p.slug || p.id || (p.name && p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
//             navigate(`/product/${slug}`);
//         },
//         [navigate]
//     );

//     // Filter to exclude generic display/banner items (price 'N/A')
//     const viewableProducts = useMemo(() => {
//         return products.filter(p => p.price && p.price !== 'N/A' && p.price !== undefined);
//     }, [products]);

//     // If no products are left, return null or a message
//     if (viewableProducts.length === 0) {
//         return null; 
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
//             {/* Section Title - Essential for organized Swiggy UI */}
//             <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{title}</h2>

//             <Swiper
//                 // Modules: Only Navigation and Autoplay for scroll strip look
//                 modules={[Navigation, Autoplay]}
//                 navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
//                 autoplay={{ delay: 4000, disableOnInteraction: true }} 
//                 loop={false} // Often better without looping for a "list" feel
//                 spaceBetween={20}
//                 slidesPerView={'auto'} // Crucial for responsive, compact horizontal scrolling
//                 className="py-4 relative" // Added relative for custom nav buttons
//             >
//                 {viewableProducts.map((p) => (
//                     // Slides should be auto-sized
//                     <SwiperSlide key={p.id || p.name} className="!w-auto">
//                         <CompactProductCard product={p} goToProduct={goToProduct} />
//                     </SwiperSlide>
//                 ))}

//                 {/* Custom Navigation Buttons (Optional, but gives a cleaner look) */}
//                 <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg cursor-pointer transition hover:bg-gray-100 hidden md:block" />
//                 <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg cursor-pointer transition hover:bg-gray-100 hidden md:block" />
//             </Swiper>
            
//             {/* Thumbnail Navigation removed for organized, clean UI */}
//         </div>
//     );
// };

// export default CarouselSection;




import React, { useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Only import modules necessary for a clean, non-product banner
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import { placeholderFor } from '../../utils/placeholder';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. Banner Content Component (Clean & High-Impact)
// ----------------------------------------------------------------------
const BannerSlideContent = ({ product, goToProduct }) => {
    // Set a clear, consistent height for visual impact
    const heightClass = "h-[180px] sm:h-[250px] md:h-[300px]"; 
    
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => goToProduct(product)}
            // Main container: Wide, prominent, shadow, and rich hover animation
            className={`cursor-pointer w-full ${heightClass} relative rounded-2xl overflow-hidden shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.005]`}
        >
            {/* 1.1. Full-width Image Background */}
            <img
                // Use the 'image' key or fallback. Image covers the entire space.
                src={product.image || product.img || placeholderFor(product.name, 1200, 400)}
                alt={product.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-[1.02]"
            />

            {/* 1.2. Call-to-Action Overlay (Optional: only if the banner image needs text) */}
            {product.price && product.price !== 'N/A' && (
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                        {product.name}
                    </h3>
                    <div className="mt-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToProduct(product);
                            }}
                            // Button: Clean, simple, and contrasts well with the banner
                            className="inline-block px-4 py-2 bg-red-600 text-white text-base font-semibold rounded-lg shadow-md transition hover:bg-red-700"
                            aria-label={`View offer for ${product.name}`}
                        >
                            View Offer →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


// ----------------------------------------------------------------------
// 2. Main Carousel Component (Filters for Banner Items)
// ----------------------------------------------------------------------
const CarouselSection = ({ products = [] }) => {
    const navigate = useNavigate();

    // 1. Hook for Navigation (unconditional)
    const goToProduct = useCallback(
        (p) => {
            if (!p) return;
            const slug = p.slug || p.id || (p.name && p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
            // Banners link to a deal/landing page
            navigate(`/deal/${slug}`); 
        },
        [navigate]
    );

    // 2. Hook for Filtering (unconditional)
    const bannerProducts = useMemo(() => {
        // Filter to include items tagged as 'display' or 'banner'
        return products.filter(p => p.tags && (p.tags.includes('display') || p.tags.includes('banner')));
    }, [products]);
    
    // 3. Early Return (after hooks)
    if (bannerProducts.length === 0) {
        // Optional: Can render a simple skeleton loader or message instead of null
        return null; 
    }

    return (
        // Container with padding to keep banners aligned with the rest of the content
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-4">
            <Swiper
                // Modules: Navigation and Pagination for user control, Autoplay for richness
                modules={[Navigation, Pagination, Autoplay]} 
                navigation
                pagination={{ clickable: true }}
                // Rich Animation: Slowed autoplay for premium feel
                autoplay={{ delay: 4000, disableOnInteraction: false }} 
                loop={true}
                spaceBetween={15}
                slidesPerView={1} // Only one banner visible at a time
                centeredSlides={true}
                className="pb-8" // Extra padding for the pagination dots to sit outside the banner area
            >
                {bannerProducts.map((p) => (
                    <SwiperSlide key={p.id || p.name}>
                        <BannerSlideContent product={p} goToProduct={goToProduct} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselSection;