// Create a new file named ProductStrip.jsx for this code.

import React, { useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { placeholderFor } from '../../utils/placeholder';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. Compact Product Card Component (Swiggy Item Style)
// ----------------------------------------------------------------------
const CompactProductCard = ({ product, goToProduct }) => {
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => goToProduct(product)}
            // Card style: Fixed width, clean, minimal shadow, hover for richness
            className="cursor-pointer bg-white w-40 h-full rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 overflow-hidden border border-gray-100 flex flex-col justify-between"
        >
            {/* 1.1. Image Area (Top) */}
            <div className="h-32 w-full flex items-center justify-center bg-gray-50 p-2 overflow-hidden">
                <img
                    src={product.image || product.img || placeholderFor(product.name, 400, 400)}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-auto object-contain transition duration-500 hover:scale-[1.05]"
                />
            </div>

            {/* 1.2. Text Content Area (Bottom - Organized) */}
            <div className="p-3 text-left flex flex-col flex-grow">
                {/* Name */}
                <p className="text-sm font-semibold text-gray-900 truncate" title={product.name}>
                    {product.name}
                </p>
                
                {/* Volume/Size */}
                <p className="text-xs text-gray-500 mt-0.5 mb-2">{product.volume}</p>
                
                {/* Price and Button Wrapper */}
                <div className="mt-auto flex justify-between items-center pt-2">
                    {/* Price */}
                    <p className="text-lg font-bold text-green-700">
                        {product.price}
                    </p>
                    
                    {/* Action Button: Swiggy style with simple '+ ADD' */}
                    <button
                        onClick={(e) => { e.stopPropagation(); /* Add to Cart logic here */ }}
                        className="p-1.5 text-xs bg-indigo-50 text-indigo-700 rounded-lg font-bold shadow-sm hover:bg-indigo-100 transition"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        + ADD
                    </button>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// 2. Main Product Strip Component (Horizontal Scrolling)
// ----------------------------------------------------------------------
const ProductStrip = ({ products = [] }) => {
    const navigate = useNavigate();
    
    const goToProduct = useCallback(
        (p) => {
            if (!p) return;
            const slug = p.slug || p.id || (p.name && p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
            navigate(`/product/${slug}`);
        },
        [navigate]
    );

    // Exclude items that look like generic banners
    const viewableProducts = useMemo(() => {
        return products.filter(p => p.price && p.price !== 'N/A' && p.price !== undefined);
    }, [products]);

    if (viewableProducts.length === 0) {
        return null; 
    }

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: true }} 
            loop={false} 
            spaceBetween={20}
            slidesPerView={'auto'} // CRUCIAL for horizontal scrolling strip
            className="py-4" 
        >
            {viewableProducts.map((p) => (
                <SwiperSlide key={p.id || p.name} className="!w-auto">
                    <CompactProductCard product={p} goToProduct={goToProduct} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductStrip;