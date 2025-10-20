import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getAllProducts, getProductsByCategory } from '../../api/products';
import { placeholderFor } from '../../utils/placeholder';

// Reuse the same category icon data as Home for a consistent UI
// Expanded categories — keep consistent with Home and products.js
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

// CategoryIconRow: visually matches the Home Swiggy row. Clicking an icon selects category and updates URL
const CategoryIconRow = ({ activeCategory, onSelect }) => (
    <div className="no-scrollbar overflow-y-hidden">
    <div className="no-scrollbar overflow-y-hidden flex items-center gap-4 overflow-x-auto pb-4 pt-2">
        {/* include an "All" icon first */}
        <button
            onClick={() => onSelect('all')}
            className={`flex flex-col items-center flex-shrink-0 w-20 transition duration-300 hover:scale-[1.03] ${activeCategory === 'all' ? 'opacity-100' : 'opacity-90'}`}
        >
            <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md`}>
                <span className="text-lg font-semibold">All</span>
            </div>
            <span className="mt-2 text-xs font-medium text-gray-700 text-center whitespace-nowrap">All</span>
        </button>
        {SWIGGY_CATEGORIES.map((cat, index) => (
            <button
                key={cat.slug}
                onClick={() => onSelect(cat.slug)}
                className={`flex flex-col items-center flex-shrink-0 w-20 transition duration-300 hover:scale-[1.03] ${activeCategory === cat.slug ? 'scale-105' : ''}`}
                style={{ animationDelay: `${0.05 * index}s` }}
            >
                <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-3xl">{cat.icon}</span>
                </div>
                <span className="mt-2 text-xs font-medium text-gray-700 text-center whitespace-nowrap">{cat.title}</span>
            </button>
        ))}
        </div>
    </div>
);

// UPDATED CATEGORY LIST: Merged the old generic categories with the new specific slugs from Home.jsx
const categories = [
    'all', 
    'fresh', 
    'organic', 
    'flavored', 
    'specialty', 
    'value', 
    // ADDED CATEGORY SLUGS USED BY HOME PAGE ICONS:
    'ghee-butter', 
    'paneer', 
    'curd',
    'juices', // Assuming 'juices' is also a valid filter for the 'Flavored Drinks'
];

// Helper function to capitalize and space out slugs for button text
const formatCategoryName = (cat) => {
    if (cat === 'all') return 'All';
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};


const Shop = () => {
    const { addToCart } = useCartContext();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // Initialize activeCategory to null, let the URL params set the actual initial value
    const [activeCategory, setActiveCategory] = useState(null); 

    // --- FIX 1: Read category from URL to initialize activeCategory ---
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlCategory = params.get('category');
        
        // Use the URL category if it's in our *extended* list, otherwise default to 'all'
        const initialCategory = (urlCategory && categories.includes(urlCategory)) 
            ? urlCategory 
            : 'all';
            
        // Use functional update to ensure state is set correctly
        setActiveCategory(initialCategory);
    }, [location.search]); 


    // --- FIX 2: Product Fetching Logic (now runs only when activeCategory is properly set) ---
    useEffect(() => {
        // Only run fetch if activeCategory has been initialized (i.e., not null)
        if (!activeCategory) return;
        
        let mounted = true;
        setLoading(true);
        
        // Use the API function that supports the category slug from the URL
        const loader = activeCategory === 'all' ? getAllProducts() : getProductsByCategory(activeCategory);
        
        loader.then((list) => {
            if (!mounted) return;
            setProducts(list || []);
            setLoading(false);
        });
        return () => { mounted = false; };
        
    }, [activeCategory]); // Depends on activeCategory being set by the hook above

    const handleAdd = (p) => {
        addToCart({ id: p.id, slug: p.slug, name: p.name, price: p.price, qty: 1, image: p.image });
    };

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        const newUrl = cat === 'all' ? '/shop' : `/shop?category=${cat}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    if (activeCategory === null) {
        // Render a brief loading state while the initial activeCategory is determined
        return <div className="min-h-screen bg-background py-12 text-center">Initializing Shop...</div>;
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <main className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-heading font-bold text-primary text-center mb-6">Our Products</h1>
                <p className="text-center text-text mb-8">
                    Explore our range of farm-fresh dairy products, currently viewing: 
                    <strong className="text-accent ml-1">{formatCategoryName(activeCategory)}</strong>
                </p>

                <div className="mb-8">
                    <CategoryIconRow activeCategory={activeCategory} onSelect={(c) => handleCategoryClick(c)} />
                </div>

                {loading ? (
                    <div className="text-center py-16">Loading {formatCategoryName(activeCategory)} products…</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(p => (
                            // ... Product card display remains the same ...
                            <div key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                                <Link to={`/product/${p.slug}`} className="block w-full flex items-center justify-center bg-transparent">
                                    <img 
                                        src={p.image || placeholderFor(p.name, 600, 400)} 
                                        alt={p.name} 
                                        className="w-full h-40 sm:h-44 md:h-48 object-contain"
                                    />
                                </Link>
                                <div className="p-4">
                                    <h3 className="font-semibold text-primary"><Link to={`/product/${p.slug}`}>{p.name}</Link></h3>
                                    <p className="text-sm text-gray-600">{p.volume}</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="text-lg font-bold text-green-600">{p.price}</div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => handleAdd(p)} className="px-3 py-1 sm:px-4 sm:py-2 bg-accent text-white rounded text-sm hover:opacity-90">Add</button>
                                            <Link to={`/product/${p.slug}`} className="px-3 py-1 sm:px-4 sm:py-2 border rounded text-sm">View</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Shop;