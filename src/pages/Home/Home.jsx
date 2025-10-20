import React, { useLayoutEffect, useRef, useEffect, useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarouselSection from "./CarouselSection"; 
import SwiggyBanner from "./SwiggyBanner"; // <--- IMPORT THE NEW BANNER COMPONENT
import ProductStrip from "./ProductStrip";
import MilkCarousel from "./MilkCarousel"; // Kept the original MilkCarousel import
import LiquidEther from "../../components/UI/LiquidEther";
import { getAllProducts } from '../../api/products';
import { placeholderFor } from '../../utils/placeholder';


gsap.registerPlugin(ScrollTrigger);

// Custom Category Data for the Swiggy Icon Row
// Expanded category set pulled from src/data/products.js
const SWIGGY_CATEGORIES = [
    { title: 'Fresh Milk', slug: 'fresh', icon: '🥛', color: 'bg-white' },
    { title: 'Flavoured', slug: 'flavored', icon: '🍫', color: 'bg-yellow-100' },
    { title: 'Ghee & Butter', slug: 'ghee-butter', icon: '🧈', color: 'bg-orange-100' },
    { title: 'Paneer', slug: 'paneer', icon: '🧀', color: 'bg-green-100' },
    { title: 'Juices', slug: 'juices', icon: '🍊', color: 'bg-red-100' },
    { title: 'Curd & Lassi', slug: 'curd', icon: '🥣', color: 'bg-blue-100' },
    { title: 'Organic', slug: 'organic', icon: '🌿', color: 'bg-emerald-100' },
    { title: 'Specialty', slug: 'specialty', icon: '⭐', color: 'bg-indigo-100' },
    { title: 'Plant-Based', slug: 'plant-based', icon: '🥥', color: 'bg-rose-100' },
    { title: 'Value Packs', slug: 'value', icon: '�', color: 'bg-gray-100' },
    { title: 'Combo', slug: 'combo', icon: '🧺', color: 'bg-amber-100' },
    { title: 'Dairy Other', slug: 'dairy-other', icon: '🧴', color: 'bg-pink-100' },
];

// --- Swiggy-Style Category Icon Row Component ---
const CategoryIconRow = () => (
    <div className="no-scrollbar overflow-y-hidden flex justify-between md:justify-start gap-4 overflow-x-auto pb-4 pt-2">
        {SWIGGY_CATEGORIES.map((cat, index) => (
            <Link 
                key={index} 
                to={`/shop?category=${cat.slug}`} 
                className="flex flex-col items-center flex-shrink-0 w-20 transition duration-300 hover:scale-[1.03] opacity-0 fade-in" 
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
                <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-3xl">{cat.icon}</span>
                </div>
                <span className="mt-2 text-xs font-medium text-gray-700 text-center whitespace-nowrap">{cat.title}</span>
            </Link>
        ))}
    </div>
);
// --------------------------------------------------


const ACCENT_CTA = "bg-accent hover:bg-accent/90 text-white";
const TEXT = "text-text";

const Home = () => {
    const heroRef = useRef(null);
    const categoryRef = useRef(null); // <-- FIX: Dedicated ref for category section
    const aboutRef = useRef(null);
    const featuresRef = useRef(null);
    const ctaRef = useRef(null);
    const faqRef = useRef(null);
    const [allProducts, setAllProducts] = useState([]); 

    // Split products into focused groups
    const flavoredDrinks = useMemo(() => allProducts.filter(p => p.category === 'flavored' || p.tags?.includes('juice')), [allProducts]);
    const gheeAndPaneer = useMemo(() => allProducts.filter(p => p.tags?.includes('ghee') || p.tags?.includes('paneer')), [allProducts]);

    useEffect(() => {
        let mounted = true;
        getAllProducts().then((all) => {
            if (!mounted) return;
            // Map products with image fallbacks
            const processed = (all || []).map((p) => ({
                ...p,
                img: p.image || p.img || placeholderFor(p.name, 800, 600),
            }));
            setAllProducts(processed);
        });
        return () => (mounted = false);
    }, []);

    useLayoutEffect(() => {
        // 1. Hero Animation (with safety check)
        if (heroRef.current) {
            const heroTimeline = gsap.timeline();
            heroTimeline.fromTo(
                heroRef.current.querySelectorAll(".fade-up"),
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
            );
        }

        // 2. Category Icons Animation (FIXED: Using categoryRef with safety check)
        if (categoryRef.current) {
            gsap.fromTo(
                categoryRef.current.querySelectorAll('.fade-in'),
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", delay: 0.5 } 
            );
        }

        // 3. ScrollTriggered Animations for all other sections
        [aboutRef, featuresRef, ctaRef, faqRef].forEach((ref) => {
            if (!ref.current) return;
            gsap.fromTo(
                ref.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }
            );
        });
    }, []); 

    return (
        <div className={`relative overflow-x-hidden ${TEXT} min-h-screen`}>
            {/* LiquidEther Background */}
            <div className="absolute inset-0 -z-10">
                <LiquidEther
                    cursorSize={80}
                    mouseForce={30}
                    autoDemo={true}
                />
            </div>

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative flex flex-col justify-center items-center text-center px-6 py-32 lg:py-40 bg-gradient-to-b from-white/50 via-blue-50/40 to-white/50 backdrop-blur-sm rounded-b-3xl shadow-xl"
            >
                <h1 className="fade-up text-4xl lg:text-6xl font-extrabold font-heading text-primary mb-6 drop-shadow-md">
                    Fresh Milk, Delivered Daily 🥛
                </h1>
                <p className="fade-up text-lg text-gray-800 max-w-2xl mb-8 drop-shadow-sm">
                    Enjoy the pure taste of farm-fresh milk from Srinivasa Dairy — hygienically processed, locally sourced, and delivered right to your doorstep.
                </p>
                <Link to="/shop" className="w-auto">
                    <button className={`fade-up px-10 py-3 rounded-full shadow-lg transition ${ACCENT_CTA} drop-shadow-md`}>
                        Start Ordering
                    </button>
                </Link>
            </section>
            
            {/* ------------------------------------------------------------- */}
            {/* SWIGGY-STYLE ORGANIZATION STARTS HERE */}
            {/* ------------------------------------------------------------- */}

            {/* 1. Category Navigation (The Swiggy Icon Row) */}
            <section ref={categoryRef} className="category-section relative py-8 md:py-12 bg-transparent shadow-inner">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Shop</h2>
                    <div className="no-scrollbar overflow-y-hidden">
                        <CategoryIconRow />
                    </div>
                </div>
            </section>

{/* 2. Featured Banners (USES DEDICATED SWIGGY BANNER COMPONENT) */}
        <section className="relative py-4 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <SwiggyBanner products={allProducts} />
            </div>
        </section>

        {/* 3. Product Strip 1 (Flavored Drinks Carousel) */}
        <section className="relative pt-8 pb-12 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Flavored Drinks 🥤</h2>
                {flavoredDrinks.length > 0 ? (
                    <ProductStrip products={flavoredDrinks} /> // <--- USE PRODUCT STRIP HERE
                ) : (
                    <div className="text-center text-gray-500 py-6">Loading drinks...</div>
                )}
            </div>
        </section>
        
        {/* 4. Product Strip 2 (Dairy Essentials Carousel) */}
        <section className="relative pt-4 pb-12 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ghee, Paneer & Essentials 🧈</h2>
                {gheeAndPaneer.length > 0 ? (
                    <ProductStrip products={gheeAndPaneer} /> // <--- USE PRODUCT STRIP HERE
                ) : (
                    <div className="text-center text-gray-500 py-6">Loading essentials...</div>
                )}
            </div>
        </section>
            
            {/* ------------------------------------------------------------- */}
            {/* ORIGINAL STATIC SECTIONS (RESTORED) */}
            {/* ------------------------------------------------------------- */}

            {/* Milk Carousel Section (Original structure, restored) */}
            <section className="relative py-20 text-center bg-transparent">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold mb-8 text-primary">Our Bestsellers (Original)</h2>
                    {/* Note: I'm passing a sliced version of allProducts to keep the original logic */}
                    <CarouselSection products={allProducts.slice(0, 8)} /> 
                    {/* Existing MilkCarousel below the Swiper-based carousel */}
                    <div className="mt-6">
                        <MilkCarousel products={allProducts.slice(0, 8)} />
                    </div>
                </div>
            </section>

            {/* About / Values Section (Original, restored) */}
            <section ref={aboutRef} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Srirangam Milk Products (P) Ltd.</h2>
                        <p className="text-gray-700 mb-4">Founded in 2018, Srinivasa Milk has rapidly grown to become a leading dairy player in Southern India. We operate chilled collection centers and processing plants, delivering quality dairy to households across states.</p>
                        <p className="text-gray-700">We are committed to sustainable farming, hygienic processing, and community livelihoods.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h4 className="font-semibold mb-2">100% Organic</h4>
                            <p className="text-sm text-gray-600">Our dairy range is crafted with care, purity, and sustainability in mind.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h4 className="font-semibold mb-2">Best Quality</h4>
                            <p className="text-sm text-gray-600">Strict hygiene practices ensure purity and nutrition in every product.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h4 className="font-semibold mb-2">Healthy & Nutritious</h4>
                            <p className="text-sm text-gray-600">Rich in calcium, protein, vitamins and minerals to support wellbeing.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <h4 className="font-semibold mb-2">Hygiene Environment</h4>
                            <p className="text-sm text-gray-600">We maintain a hygienic environment throughout production for safe products.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Products / Categories (ORIGINAL SECTION, RESTORED) */}
            <section ref={featuresRef} className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6">Explore Our Products</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { title: 'Pure Milk' },
                            { title: 'Fresh Butter' },
                            { title: 'Curd & Buttermilk' },
                            { title: 'Ghee' },
                            { title: 'Paneer' },
                            { title: 'Flavoured Milk' }
                        ].map((c, i) => (
                            <Link key={i} to="/products" className="block">
                                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center">
                                    <div className="h-28 flex items-center justify-center bg-accent/30 rounded mb-3">{/* placeholder icon */}
                                        <span className="text-primary font-semibold">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h4 className="font-semibold text-primary">{c.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription CTA Section (Original, restored) */}
            <section ref={ctaRef} className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-primary/90 text-white p-12 rounded-2xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-2">Subscribe & Save More</h2>
                        <p className="mb-6">Choose your favorite milk type, set your schedule, and enjoy fresh deliveries every morning.</p>
                        <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold">Subscribe Now</button>
                    </div>
                </div>
            </section>

            {/* FAQ Section (Original, restored) */}
            <section ref={faqRef} className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                        {[
                            { q: 'Are your dairy products fresh and natural?', a: 'Yes. All our products are sourced directly from trusted farms and delivered fresh. We ensure no artificial preservatives or harmful chemicals are used.' },
                            { q: 'Is your milk pasteurized?', a: 'Yes. We follow standard pasteurization protocols to ensure safety while preserving nutrients.' },
                            { q: 'How should I store the products?', a: 'Keep refrigerated at 4°C and consume by the best-before date.' },
                        ].map((f, i) => (
                            <details key={i} className="p-4 border rounded-lg">
                                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                                <p className="mt-2 text-gray-600">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;



// import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CarouselSection from "./CarouselSection";
// import MilkCarousel from "./MilkCarousel";
// import LiquidEther from "../../components/UI/LiquidEther";
// import { getAllProducts } from '../../api/products';
// import { placeholderFor } from '../../utils/placeholder';

// gsap.registerPlugin(ScrollTrigger);

// // we'll load products from the central mock API and show a featured subset

// const ACCENT_CTA = "bg-accent hover:bg-accent/90 text-white";
// const TEXT = "text-text";

// const Home = () => {
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const featuresRef = useRef(null);
//   const ctaRef = useRef(null);
//   const faqRef = useRef(null);
//   const [featured, setFeatured] = useState([]);

//   useEffect(() => {
//     let mounted = true;
//     getAllProducts().then((all) => {
//       if (!mounted) return;
//       // choose the first 8 products as featured (or fewer if not available)
//       const chosen = (all || []).slice(0, 8).map((p) => ({
//         ...p,
//         img: p.image || p.img || placeholderFor(p.name, 800, 600),
//       }));
//       setFeatured(chosen);
//     });
//     return () => (mounted = false);
//   }, []);

//   useLayoutEffect(() => {
//     const heroTimeline = gsap.timeline();
//     heroTimeline.fromTo(
//       heroRef.current.querySelectorAll(".fade-up"),
//       { y: 80, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
//     );

//     [aboutRef, featuresRef, ctaRef, faqRef].forEach((ref) => {
//       if (!ref.current) return;
//       gsap.fromTo(
//         ref.current,
//         { y: 80, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }
//       );
//     });
//   }, []);

//   return (
//     <div className={`relative overflow-x-hidden ${TEXT} min-h-screen`}>
//       {/* LiquidEther Background */}
//       <div className="absolute inset-0 -z-10">
//         <LiquidEther
//           cursorSize={80}
//           mouseForce={30}
//           // colors={['#5227FF', '#FF9FFC', '#B19EEF']}
//           autoDemo={true}
//         />
//       </div>

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative flex flex-col justify-center items-center text-center px-6 py-32 lg:py-40 bg-gradient-to-b from-white/50 via-blue-50/40 to-white/50 backdrop-blur-sm rounded-b-3xl shadow-xl"
//       >
//         <h1 className="fade-up text-4xl lg:text-6xl font-extrabold font-heading text-primary mb-6 drop-shadow-md">
//           Fresh Milk, Delivered Daily 🥛
//         </h1>
//         <p className="fade-up text-lg text-gray-800 max-w-2xl mb-8 drop-shadow-sm">
//           Enjoy the pure taste of farm-fresh milk from Srinivasa Dairy — hygienically processed, locally sourced, and delivered right to your doorstep.
//         </p>
//         <button className={`fade-up px-10 py-3 rounded-full shadow-lg transition ${ACCENT_CTA} drop-shadow-md`}>
//           Start Ordering
//         </button>
//       </section>

//       {/* Milk Carousel Section */}
//       <section className="relative py-20 text-center bg-transparent">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-heading font-bold mb-8 text-primary">Our Bestsellers</h2>
//           <CarouselSection products={featured} />
//           {/* Existing MilkCarousel below the Swiper-based carousel */}
//           <div className="mt-6">
//             <MilkCarousel products={featured} />
//           </div>
//         </div>
//       </section>

//       {/* About / Values Section (pulled from reference) */}
//       <section ref={aboutRef} className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Srirangam Milk Products (P) Ltd.</h2>
//             <p className="text-gray-700 mb-4">Founded in 2018, Srinivasa Milk has rapidly grown to become a leading dairy player in Southern India. We operate chilled collection centers and processing plants, delivering quality dairy to households across states.</p>
//             <p className="text-gray-700">We are committed to sustainable farming, hygienic processing, and community livelihoods.</p>
//           </div>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//               <h4 className="font-semibold mb-2">100% Organic</h4>
//               <p className="text-sm text-gray-600">Our dairy range is crafted with care, purity, and sustainability in mind.</p>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//               <h4 className="font-semibold mb-2">Best Quality</h4>
//               <p className="text-sm text-gray-600">Strict hygiene practices ensure purity and nutrition in every product.</p>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//               <h4 className="font-semibold mb-2">Healthy & Nutritious</h4>
//               <p className="text-sm text-gray-600">Rich in calcium, protein, vitamins and minerals to support wellbeing.</p>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//               <h4 className="font-semibold mb-2">Hygiene Environment</h4>
//               <p className="text-sm text-gray-600">We maintain a hygienic environment throughout production for safe products.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Explore Products / Categories (reference site lists product categories) */}
//       <section ref={featuresRef} className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-2xl font-semibold mb-6">Explore Our Products</h3>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {[
//               { title: 'Pure Milk' },
//               { title: 'Fresh Butter' },
//               { title: 'Curd & Buttermilk' },
//               { title: 'Ghee' },
//               { title: 'Paneer' },
//               { title: 'Flavoured Milk' }
//             ].map((c, i) => (
//               <Link key={i} to="/products" className="block">
//                 <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center">
//                   <div className="h-28 flex items-center justify-center bg-accent/30 rounded mb-3">{/* placeholder icon */}
//                     <span className="text-primary font-semibold">{String(i + 1).padStart(2, '0')}</span>
//                   </div>
//                   <h4 className="font-semibold text-primary">{c.title}</h4>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscription CTA Section */}
//       <section ref={ctaRef} className="py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="bg-primary/90 text-white p-12 rounded-2xl shadow-lg text-center">
//             <h2 className="text-3xl font-bold mb-2">Subscribe & Save More</h2>
//             <p className="mb-6">Choose your favorite milk type, set your schedule, and enjoy fresh deliveries every morning.</p>
//             <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold">Subscribe Now</button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section (simple accordion) */}
//       <section ref={faqRef} className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-6">
//           <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
//           <div className="space-y-3">
//             {[
//               { q: 'Are your dairy products fresh and natural?', a: 'Yes. All our products are sourced directly from trusted farms and delivered fresh. We ensure no artificial preservatives or harmful chemicals are used.' },
//               { q: 'Is your milk pasteurized?', a: 'Yes. We follow standard pasteurization protocols to ensure safety while preserving nutrients.' },
//               { q: 'How should I store the products?', a: 'Keep refrigerated at 4°C and consume by the best-before date.' },
//             ].map((f, i) => (
//               <details key={i} className="p-4 border rounded-lg">
//                 <summary className="font-semibold cursor-pointer">{f.q}</summary>
//                 <p className="mt-2 text-gray-600">{f.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
