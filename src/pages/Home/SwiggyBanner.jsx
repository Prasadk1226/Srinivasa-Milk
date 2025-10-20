// SwiggyResponsiveBanner.jsx
import React, { useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { placeholderFor } from "../../utils/placeholder";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlideContent = ({ product, goToProduct }) => {
  return (
    <div
      onClick={() => goToProduct(product)}
      className="relative flex flex-col md:flex-row items-center justify-between 
        w-full h-auto md:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl
        bg-gradient-to-r from-[#FFF5E6] via-[#FFEBD2] to-[#FFF8EE] 
        transition-all duration-700 cursor-pointer group"
    >
      {/* Left side - Text area */}
      <div className="w-full md:w-3/5 px-6 sm:px-10 md:px-14 py-10 flex flex-col justify-center space-y-4 sm:space-y-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
          {product.name}
        </h3>
        {product.desc && (
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md leading-relaxed opacity-90">
            {product.desc}
          </p>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToProduct(product);
          }}
          className="mt-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 
          text-white font-semibold text-sm sm:text-base rounded-lg shadow-md transition-all duration-300 w-fit"
        >
          View Offer →
        </button>
      </div>

      {/* Right side - Image (contained within gradient) */}
      <div className="w-full md:w-2/5 h-[220px] sm:h-[260px] md:h-full flex items-center justify-center relative">
        <div className="w-[90%] sm:w-[85%] md:w-[100%] h-full relative">
          <img
            src={product.image || product.img || placeholderFor(product.name, 400, 400)}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-r-3xl 
            transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent rounded-t-3xl md:rounded-none md:rounded-r-3xl" />
        </div>
      </div>
    </div>
  );
};

const SwiggyResponsiveBanner = ({ products = [] }) => {
  const navigate = useNavigate();

  const goToProduct = useCallback(
    (p) => {
      if (!p) return;
      const slug =
        p.slug || p.id || (p.name && p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
      navigate(`/deal/${slug}`);
    },
    [navigate]
  );

  const bannerProducts = useMemo(() => {
    return products.filter(
      (p) => p.tags && (p.tags.includes("display") || p.tags.includes("banner"))
    );
  }, [products]);

  if (bannerProducts.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="pb-10"
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

export default SwiggyResponsiveBanner;
