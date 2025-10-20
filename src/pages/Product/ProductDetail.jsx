import React, { useEffect, useState } from 'react';
import { placeholderFor } from '../../utils/placeholder';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getProductBySlug, getAllProducts } from '../../api/products';

const ProductDetail = () => {
    const { productSlug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);
    const [related, setRelated] = useState([]);
    const [mainImage, setMainImage] = useState(null); // 1. New state for the main displayed image
    const { addToCart } = useCartContext();

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        getProductBySlug(productSlug).then((p) => {
            if (!mounted) return;
            setProduct(p);
            // 2. Set the initial main image when the product data loads
            setMainImage(p?.image || null);
            setLoading(false);
            window.scrollTo(0, 0);
        });
        return () => { mounted = false; };
    }, [productSlug]);

    // Update mainImage if product is loaded but mainImage hasn't been set yet (for a fresh load)
    useEffect(() => {
        if (product && !mainImage) {
            setMainImage(product.image);
        }
    }, [product, mainImage]);


    // load related products from the same source
    useEffect(() => {
        if (!product) return;
        let mounted = true;
        // Optimization: Filter related products by category instead of just slicing all products
        // Assuming your getProductsByCategory is available and preferred, but keeping original logic for simplicity.
        getAllProducts().then((all) => {
            if (!mounted) return;
            // Filter by current product's category if available, otherwise just exclude current product
            const rel = (all || [])
                .filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 4);
            
            // Fallback: If less than 4 related products in the same category, fill with others
            if (rel.length < 4) {
                 const generalRel = (all || [])
                    .filter(p => p.id !== product.id && p.category !== product.category);
                rel.push(...generalRel.slice(0, 4 - rel.length));
            }

            setRelated(rel);
        });
        return () => { mounted = false; };
    }, [product]);

    // 3. Handler to change the main image
    const handleThumbnailClick = (imageURL) => {
        setMainImage(imageURL);
    };

    if (loading) {
        return (
            <div className="p-8 text-center min-h-[500px] flex flex-col justify-center items-center bg-gray-50">
                <h2 className="text-2xl font-semibold text-gray-700">Loading product…</h2>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="p-8 text-center min-h-[500px] flex flex-col justify-center items-center bg-gray-50">
                <h1 className="text-4xl font-bold text-red-600">Product Not Found</h1>
                <p className="mt-4 text-gray-600">
                    The product "{productSlug}" does not exist.
                </p>
                <div className="mt-6 flex gap-3">
                    <Link to="/" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
                        Go Back Home
                    </Link>
                    <button onClick={() => navigate(-1)} className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        // Add current product to shared cart context
        addToCart({ id: product.id, slug: product.slug, name: product.name, price: product.price, qty, image: product.image });
    };

    // Prepare a list of all images (main + thumbs)
    const allImages = [
        product.image,
        ...(product.thumbs || [])
    ].filter(img => img); // Filter out any null/undefined entries

    return (
        <div className="p-4 sm:p-8 min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <nav className="text-sm text-gray-500 mb-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/shop" className="hover:underline">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-semibold">{product.name}</span>
                </nav>

                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex md:items-start">
                        <div className="w-full md:w-1/2 lg:w-2/5 p-4 md:p-6">
                            {/* Main Product Image Container - Uses mainImage state */}
                            <div className="rounded-lg overflow-hidden shadow-md bg-transparent flex items-center justify-center p-4">
                                <img
                                    className="w-full h-64 sm:h-80 md:h-96 object-contain"
                                    // Use mainImage, fallback to product.image, then placeholder
                                    src={mainImage || product.image || placeholderFor(product.name, 800, 800)}
                                    alt={product.name}
                                />
                            </div>

                            {/* Thumbnail Images - Now dynamic based on allImages array */}
                            <div className="mt-4 grid grid-cols-4 sm:grid-cols-4 gap-2">
                                {allImages.slice(0, 6).map((imgUrl, i) => ( // Allow up to 6 thumbnails, responsive
                                    <button 
                                        key={i} 
                                        onClick={() => handleThumbnailClick(imgUrl)} // 4. Click handler added
                                        className={`
                                            h-20 overflow-hidden rounded-md bg-transparent flex items-center justify-center border 
                                            hover:border-indigo-500 transition cursor-pointer
                                            ${imgUrl === mainImage ? 'border-4 border-indigo-500' : 'border-gray-300'} 
                                        `}
                                    >
                                        <img 
                                            src={imgUrl || placeholderFor(product.name, 200, 200)} 
                                            alt={`${product.name} thumbnail ${i + 1}`} 
                                            className="object-contain w-full max-h-full" 
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:flex-1 p-4 md:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Milk Product</h2>
                                <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">{product.name}</h1>
                                <div className="mt-3 flex items-center gap-4">
                                    <p className="text-2xl font-bold text-green-600">{product.price}</p>
                                    <p className="text-sm text-gray-600">({product.volume})</p>
                                    <div className="ml-auto flex items-center gap-2">
                                        {product.tags && product.tags.map((t, idx) => (
                                            <span key={idx} className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-xs text-gray-500">Delivery</h3>
                                        <p className="text-sm text-gray-700">Delivered within 24 hours in local areas</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs text-gray-500">Return</h3>
                                        <p className="text-sm text-gray-700">7 day return policy for damaged items</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                    <div className="flex items-center border rounded-full px-3 py-2">
                                        <button
                                            onClick={() => setQty(q => Math.max(1, q - 1))}
                                            className="px-3 text-lg font-bold text-gray-700"
                                            aria-label="Decrease quantity"
                                        >−</button>
                                        <div className="px-4 text-lg font-medium">{qty}</div>
                                        <button
                                            onClick={() => setQty(q => q + 1)}
                                            className="px-3 text-lg font-bold text-gray-700"
                                            aria-label="Increase quantity"
                                        >+</button>
                                    </div>

                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full sm:flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200 shadow"
                                    >
                                        Add to Cart
                                    </button>

                                    <button
                                        onClick={() => navigate('/shop')}
                                        className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
                                    >
                                        Back to Shop
                                    </button>
                                </div>

                                <div className="mt-4 text-sm text-gray-500">
                                    <span className="font-medium text-gray-700">Secure Checkout.</span> Pay on delivery or card.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related products */}
                <section className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Related products</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {related.map(r => (
                            <Link key={r.id} to={`/product/${r.slug}`} className="bg-white rounded-lg shadow p-3 hover:shadow-md transition flex flex-col">
                                <img src={r.image || placeholderFor(r.name, 400, 400)} alt={r.name} className="rounded-md object-contain h-36 w-full"/>
                                <div className="mt-3">
                                    <h4 className="text-sm font-semibold">{r.name}</h4>
                                    <p className="text-sm text-gray-600">{r.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;