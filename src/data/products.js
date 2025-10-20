
// // A larger, categorized products list used as the single source of truth for the app.
// // Images left empty so the app will use the placeholder util or local assets.

// import GheePouch from "../assets/images/products/GheePouch.jpg";

// const products = [
//   // Fresh milks
//   { id: 1, slug: 'fresh-milk-1l', name: 'Fresh Milk 1L', category: 'fresh', description: 'Daily fresh milk, full of nutrients. 1L pack.', volume: '1L', price: '₹50', image: GheePouch, thumbs: [], tags: ['fresh'] },
//   { id: 2, slug: 'fresh-milk-500ml', name: 'Fresh Milk 500ml', category: 'fresh', description: 'Smaller fresh pack for single households.', volume: '500ml', price: '₹28', image: '', thumbs: [], tags: ['fresh'] },
//   { id: 3, slug: 'farm-fresh', name: 'Farm Fresh Milk', category: 'fresh', description: 'Direct from the farm - minimally processed for taste.', volume: '1L', price: '₹55', image: '', thumbs: [], tags: ['farm'] },

//   // Organic
//   { id: 10, slug: 'organic-milk-500ml', name: 'Organic Milk 500ml', category: 'organic', description: 'Certified organic, hormone-free milk.', volume: '500ml', price: '₹60', image: '', thumbs: [], tags: ['organic'] },
//   { id: 11, slug: 'organic-milk-1l', name: 'Organic Milk 1L', category: 'organic', description: 'Organic full cream milk 1L.', volume: '1L', price: '₹100', image: '', thumbs: [], tags: ['organic'] },

//   // Toned / Low fat / Skimmed
//   { id: 20, slug: 'toned-milk-1l', name: 'Toned Milk 1L', category: 'toned', description: 'Toned milk - lower fat for everyday use.', volume: '1L', price: '₹45', image: '', thumbs: [], tags: ['low-fat'] },
//   { id: 21, slug: 'skimmed-milk-1l', name: 'Skimmed Milk 1L', category: 'skimmed', description: 'Skimmed milk for low-fat diets.', volume: '1L', price: '₹48', image: '', thumbs: [], tags: ['diet'] },

//   // Full cream
//   { id: 30, slug: 'full-cream-500ml', name: 'Full Cream Milk 500ml', category: 'full-cream', description: 'Rich full-cream milk for cooking and tea.', volume: '500ml', price: '₹40', image: '', thumbs: [], tags: ['creamy'] },

//   // Flavored milks
//   { id: 40, slug: 'chocolate-milk-250ml', name: 'Chocolate Milk 250ml', category: 'flavored', description: 'Chocolate flavoured milk - kids favourite.', volume: '250ml', price: '₹25', image: '', thumbs: [], tags: ['chocolate'] },
//   { id: 41, slug: 'strawberry-milk-250ml', name: 'Strawberry Milk 250ml', category: 'flavored', description: 'Strawberry flavoured milk.', volume: '250ml', price: '₹25', image: '', thumbs: [], tags: ['strawberry'] },
//   { id: 42, slug: 'badam-milk-250ml', name: 'Badam Milk 250ml', category: 'flavored', description: 'Almond (Badam) flavoured milk, lightly sweetened.', volume: '250ml', price: '₹30', image: '', thumbs: [], tags: ['badam'] },

//   // Specialty
//   { id: 50, slug: 'lactose-free-1l', name: 'Lactose Free Milk 1L', category: 'specialty', description: 'Lactose-free milk suitable for sensitive stomachs.', volume: '1L', price: '₹120', image: '', thumbs: [], tags: ['lactose-free'] },
//   { id: 51, slug: 'probiotic-milk-500ml', name: 'Probiotic Milk 500ml', category: 'specialty', description: 'Probiotic enriched milk for gut health.', volume: '500ml', price: '₹80', image: '', thumbs: [], tags: ['probiotic'] },

//   // Multipacks / value
//   { id: 60, slug: 'combo-6-fresh-500ml', name: 'Fresh 6-pack 500ml', category: 'combo', description: '6x500ml fresh milk combo for families.', volume: '6x500ml', price: '₹320', image: '', thumbs: [], tags: ['combo'] },

//   // More variants to create a big list (repeat with variations)
//   { id: 70, slug: 'buffalo-milk-1l', name: 'Buffalo Milk 1L', category: 'fresh', description: 'Rich buffalo milk, ideal for desserts and tea.', volume: '1L', price: '₹65', image: '', thumbs: [], tags: ['buffalo'] },
//   { id: 71, slug: 'desi-milk-1l', name: 'Desi Cow Milk 1L', category: 'fresh', description: 'Desi variety cow milk, traditional flavor.', volume: '1L', price: '₹68', image: '', thumbs: [], tags: ['desi'] },
//   { id: 72, slug: 'a2-milk-1l', name: 'A2 Milk 1L', category: 'specialty', description: 'A2 protein milk sourced from A2 cows.', volume: '1L', price: '₹150', image: '', thumbs: [], tags: ['a2'] },
//   { id: 73, slug: 'ghee-500g', name: 'Pure Ghee 500g', category: 'dairy-other', description: 'Clarified butter made from premium milk.', volume: '500g', price: '₹350', image: '', thumbs: [], tags: ['ghee'] },

//   // Add some lower-priced value options
//   { id: 80, slug: 'economy-milk-1l', name: 'Economy Milk 1L', category: 'value', description: 'Budget-friendly toned milk.', volume: '1L', price: '₹39', image: '', thumbs: [], tags: ['value'] },
//   { id: 81, slug: 'kids-milk-200ml', name: 'Kids Milk 200ml', category: 'flavored', description: 'Small serving flavored milk for kids.', volume: '200ml', price: '₹18', image: '', thumbs: [], tags: ['kids'] },

//   // Ensure we have at least 30+ items
//   { id: 90, slug: 'organic-desert-milk', name: 'Organic Desert Milk 500ml', category: 'organic', description: 'Small-batch organic milk.', volume: '500ml', price: '₹72', image: '', thumbs: [], tags: ['organic'] },
//   { id: 91, slug: 'mint-milk-250ml', name: 'Mint Milk 250ml', category: 'flavored', description: 'Refreshing mint flavoured milk.', volume: '250ml', price: '₹28', image: '', thumbs: [], tags: ['mint'] },
//   { id: 92, slug: 'vanilla-milk-250ml', name: 'Vanilla Milk 250ml', category: 'flavored', description: 'Vanilla flavoured milk.', volume: '250ml', price: '₹28', image: '', thumbs: [], tags: ['vanilla'] },
//   { id: 93, slug: 'kesar-milk-250ml', name: 'Kesar Milk 250ml', category: 'flavored', description: 'Saffron (Kesar) flavored milk for festivities.', volume: '250ml', price: '₹40', image: '', thumbs: [], tags: ['kesar'] },
//   { id: 94, slug: 'almond-milk-1l', name: 'Almond Milk 1L', category: 'plant-based', description: 'Almond milk for plant-based diets.', volume: '1L', price: '₹180', image: '', thumbs: [], tags: ['almond'] },
//   { id: 95, slug: 'soya-milk-1l', name: 'Soya Milk 1L', category: 'plant-based', description: 'Soya milk as a dairy alternative.', volume: '1L', price: '₹140', image: '', thumbs: [], tags: ['soya'] },
// ];

// export default products;



import badamMilk from "../assets/images/products/badamMilk.jpg";
import badamMilk1 from "../assets/images/products/badamMilk1.jpg";
import badamMilk2 from "../assets/images/products/badamMilk2.jpg";
import badamMilk3 from "../assets/images/products/badamMilk3.jpg";
import badamMilk4 from "../assets/images/products/badamMilk4.jpg"; // Used as main image for id: 37
import butter from "../assets/images/products/butter.jpeg";
import butter1 from "../assets/images/products/butter1.jpeg";
import butter2 from "../assets/images/products/butter2.jpeg";
import butter3 from "../assets/images/products/butter3.jpeg";
import butter4 from "../assets/images/products/butter4.jpeg";
import butter5 from "../assets/images/products/butter5.jpeg"; // Used as main image for id: 23
import chocolateMilk from "../assets/images/products/chocolateMilk.jpg";
import chocolateMilk1 from "../assets/images/products/chocolateMilk1.jpg";
import ghee from "../assets/images/products/ghee.jpg";
import ghee1 from "../assets/images/products/ghee1.jpg";
import ghee2 from "../assets/images/products/ghee2.jpg";
import ghee3 from "../assets/images/products/ghee3.jpg";
import GheePouch from "../assets/images/products/GheePouch.jpg";
import GheePouch1 from "../assets/images/products/GheePouch1.jpg";
import GheePouch2 from "../assets/images/products/GheePouch2.jpg";
import halfLitreGhee from "../assets/images/products/halfLitreGhee.jpg";
import halfLitreGhee1 from "../assets/images/products/halfLitreGhee1.jpg";
import halfLitreGhee2 from "../assets/images/products/halfLitreGhee2.jpg";
import halfLitreGhee3 from "../assets/images/products/halfLitreGhee3.jpg";
import halfLitreGhee4 from "../assets/images/products/halfLitreGhee4.jpg";
import HundredMlGhee from "../assets/images/products/HundredMlGhee.jpg";
import HundredMlGhee1 from "../assets/images/products/HundredMlGhee1.jpg";
import mainPageDrinks from "../assets/images/products/mainPageDrinks.jpg";
import mainPageDrinks1 from "../assets/images/products/mainPageDrinks1.jpg";
// import mainPageDrinks2 from "../assets/images/products/mainPageDrinks2.jpg"; // Keeping this commented out as per your original code
import mainPageProducts from "../assets/images/products/mainPageproducts.jpg";
import mainPageProducts1 from "../assets/images/products/mainPageproducts1.jpg";
import mainPageProducts2 from "../assets/images/products/mainPageproducts2.jpg";
import mainPageProducts3 from "../assets/images/products/mainPageproducts3.jpg";
import oneLitreGhee from "../assets/images/products/oneLitreGhee.jpg";
import oneLitreGhee1 from "../assets/images/products/onelitreGhee1.jpg";
import oneLitreGhee2 from "../assets/images/products/onelitreGhee2.jpg";
import oneLitreGhee3 from "../assets/images/products/onelitreGhee3.jpg";
import OrangeDrink from "../assets/images/products/OrangeDrink.jpg";
import OrangeDrink1 from "../assets/images/products/OrangeDrink1.jpg";
import paneer from "../assets/images/products/paneer.jpeg";
import paneer1 from "../assets/images/products/paneer1.jpeg";
import paneer2 from "../assets/images/products/paneer2.jpeg";
import paneer3 from "../assets/images/products/paneer3.jpeg";
import paneer4 from "../assets/images/products/paneer4.jpeg"; // Used as main image for id: 36
import pistaMilk from "../assets/images/products/pistaMilk.jpg";
import pistaMilk1 from "../assets/images/products/pistaMilk1.jpg";
import strawberryMilk from "../assets/images/products/strawberryMilk.jpg";
import strawberryMilk1 from "../assets/images/products/strawberryMilk1.jpg";
import vanillaMilk from "../assets/images/products/vanillaMilk.jpg";
import vanillaMilk1 from "../assets/images/products/vanillaMilk1.jpg";


const products = [
    // --- FLAVORED MILKS (IDs 1-6) ---
    { id: 1, slug: 'badam-milk-200ml', name: 'Badam Milk (Almond) 200ml', category: 'flavored', description: 'Classic almond-flavored milk, ready to drink.', volume: '200ml', price: '₹30', image: badamMilk, 
        thumbs: [badamMilk1, badamMilk2, badamMilk3], tags: ['badam'] },
    { id: 2, slug: 'badam-milk-500ml', name: 'Premium Badam Milk 500ml', category: 'flavored', description: 'Larger pack of our popular Badam Milk.', volume: '500ml', price: '₹60', image: badamMilk1, 
        thumbs: [badamMilk, badamMilk2, badamMilk4], tags: ['badam'] },
    { id: 3, slug: 'chocolate-milk-1', name: 'Rich Chocolate Milk 250ml', category: 'flavored', description: 'Creamy, rich chocolate milk, a treat for all ages.', volume: '250ml', price: '₹25', image: chocolateMilk, 
        thumbs: [chocolateMilk1], tags: ['chocolate'] },
    { id: 4, slug: 'strawberry-milk-1', name: 'Strawberry Milk 200ml', category: 'flavored', description: 'Sweet and fruity strawberry flavored milk.', volume: '200ml', price: '₹25', image: strawberryMilk, 
        thumbs: [strawberryMilk1], tags: ['strawberry'] },
    { id: 5, slug: 'pista-milk-1', name: 'Pista Milk 200ml', category: 'flavored', description: 'Delicious pistachio-flavored milk.', volume: '200ml', price: '₹35', image: pistaMilk, 
        thumbs: [pistaMilk1], tags: ['pista'] },
    { id: 6, slug: 'vanilla-milk-1', name: 'Vanilla Milk 200ml', category: 'flavored', description: 'Simple and sweet vanilla flavored milk.', volume: '200ml', price: '₹28', image: vanillaMilk, 
        thumbs: [vanillaMilk1], tags: ['vanilla'] },

    // --- GHEE & BUTTER (IDs 7-16) ---
    { id: 7, slug: 'ghee-pouch-500g', name: 'Pure Cow Ghee Pouch 500g', category: 'ghee-butter', description: 'Traditional clarified butter in a convenient pouch.', volume: '500g', price: '₹350', image: GheePouch, 
        thumbs: [GheePouch1, GheePouch2], tags: ['ghee'] },
    { id: 8, slug: 'ghee-pouch-2', name: 'Value Ghee Pouch 500g', category: 'ghee-butter', description: 'Budget-friendly pure ghee, everyday essential.', volume: '500g', price: '₹340', image: GheePouch1, 
        thumbs: [GheePouch, GheePouch2], tags: ['ghee', 'value'] },
    { id: 9, slug: 'ghee-jar-1l', name: 'A2 Desi Ghee Jar 1L', category: 'ghee-butter', description: 'Premium A2 desi cow ghee in a 1L jar.', volume: '1L', price: '₹700', image: oneLitreGhee, 
        thumbs: [oneLitreGhee1, oneLitreGhee2, oneLitreGhee3], tags: ['ghee', 'premium'] },
    { id: 10, slug: 'ghee-jar-1l-2', name: 'Cow Ghee Jar 1L', category: 'ghee-butter', description: 'Standard 1 Litre pack of pure cow ghee.', volume: '1L', price: '₹680', image: oneLitreGhee1, 
        thumbs: [oneLitreGhee, oneLitreGhee2, oneLitreGhee3], tags: ['ghee'] },
    { id: 11, slug: 'ghee-jar-500ml', name: 'Gourmet Ghee 500ml', category: 'ghee-butter', description: 'High-quality gourmet ghee for exquisite taste.', volume: '500ml', price: '₹380', image: halfLitreGhee, 
        thumbs: [halfLitreGhee1, halfLitreGhee2, halfLitreGhee3], tags: ['ghee', 'premium'] },
    { id: 12, slug: 'ghee-mini-100ml', name: 'Mini Ghee Pack 100ml', category: 'ghee-butter', description: 'Small, convenient pack of ghee.', volume: '100ml', price: '₹80', image: HundredMlGhee, 
        thumbs: [HundredMlGhee1], tags: ['ghee', 'mini'] },
    { id: 13, slug: 'salted-butter-100g', name: 'Salted Butter Block 100g', category: 'ghee-butter', description: 'Classic salted butter block for daily use.', volume: '100g', price: '₹45', image: butter, 
        thumbs: [butter1, butter2, butter3], tags: ['butter'] },
    { id: 14, slug: 'unsalted-butter-100g', name: 'Unsalted Baking Butter 100g', category: 'ghee-butter', description: 'Perfect unsalted butter for baking.', volume: '100g', price: '₹48', image: butter1, 
        thumbs: [butter, butter3, butter4], tags: ['butter', 'baking'] },
    { id: 15, slug: 'butter-spread-200g', name: 'Butter Spread Tub 200g', category: 'ghee-butter', description: 'Easy-to-spread butter in a tub.', volume: '200g', price: '₹90', image: butter2, 
        thumbs: [butter, butter3, butter5], tags: ['butter', 'spread'] },
    { id: 16, slug: 'low-fat-butter', name: 'Low-Fat Butter 100g', category: 'ghee-butter', description: 'Healthier, low-fat butter option.', volume: '100g', price: '₹42', image: butter3, 
        thumbs: [butter1, butter2, butter4], tags: ['butter', 'low-fat'] },

    // --- PANEER (IDs 17-20, 36) ---
    { id: 17, slug: 'paneer-200g', name: 'Fresh Paneer Block 200g', category: 'paneer', description: 'Soft and fresh cottage cheese (Paneer).', volume: '200g', price: '₹80', image: paneer, 
        thumbs: [paneer1, paneer2, paneer3], tags: ['paneer'] },
    { id: 18, slug: 'paneer-500g', name: 'Family Paneer Block 500g', category: 'paneer', description: 'Ideal 500g pack for family meals.', volume: '500g', price: '₹180', image: paneer1, 
        thumbs: [paneer, paneer2, paneer4], tags: ['paneer'] },
    { id: 19, slug: 'paneer-diced', name: 'Diced Paneer 200g', category: 'paneer', description: 'Pre-diced paneer for quick cooking.', volume: '200g', price: '₹85', image: paneer2, 
        thumbs: [paneer, paneer3, paneer4], tags: ['paneer', 'ready-to-use'] },
    { id: 20, slug: 'paneer-premium', name: 'Premium Paneer Block 500g', category: 'paneer', description: 'Extra soft, premium quality paneer.', volume: '500g', price: '₹200', image: paneer3, 
        thumbs: [paneer1, paneer2, paneer4], tags: ['paneer', 'premium'] },
    
    // --- JUICES (IDs 21-22) ---
    { id: 21, slug: 'orange-juice-1l', name: 'Fresh Orange Drink 1L', category: 'juices', description: 'Tangy and refreshing orange beverage.', volume: '1L', price: '₹99', image: OrangeDrink, 
        thumbs: [OrangeDrink1], tags: ['juice', 'orange'] },
    { id: 22, slug: 'orange-juice-200ml', name: 'Mini Orange Drink 200ml', category: 'juices', description: 'Small pack of orange drink, perfect for lunchboxes.', volume: '200ml', price: '₹25', image: OrangeDrink1, 
        thumbs: [OrangeDrink], tags: ['juice', 'orange'] },

    // --- REMAINING ORIGINAL PRODUCTS (IDs 23-50) ---
    { id: 23, slug: 'butter-5-200g', name: 'Garlic Herb Butter 200g', category: 'ghee-butter', description: 'Gourmet flavored butter spread.', volume: '200g', price: '₹110', image: butter5, 
        thumbs: [butter4, butter], tags: ['butter', 'gourmet'] },
    { id: 24, slug: 'ghee-jar-6-500ml', name: 'Premium Cow Ghee 500ml', category: 'ghee-butter', description: 'High-clarity, pure cow ghee in a jar.', volume: '500ml', price: '₹375', image: ghee2, 
        thumbs: [ghee, ghee1, ghee3], tags: ['ghee'] },
    { id: 25, slug: 'ghee-jar-7-250ml', name: 'Desi Ghee Jar 250ml', category: 'ghee-butter', description: 'Smaller jar of Desi Ghee for individual use.', volume: '250ml', price: '₹190', image: ghee3, 
        thumbs: [ghee, ghee1, ghee2], tags: ['ghee'] },
    { id: 26, slug: 'ghee-pouch-3', name: 'Economy Ghee Pouch 1kg', category: 'ghee-butter', description: 'Large, cost-effective pouch of cooking ghee.', volume: '1kg', price: '₹680', image: GheePouch2, 
        thumbs: [GheePouch, GheePouch1], tags: ['ghee', 'economy'] },
    { id: 27, slug: 'ghee-jar-500ml-v2', name: 'Ghee Jar V2 500ml', category: 'ghee-butter', description: 'Another packaging for the 500ml ghee jar.', volume: '500ml', price: '₹365', image: halfLitreGhee1, 
        thumbs: [halfLitreGhee, halfLitreGhee2, halfLitreGhee4], tags: ['ghee'] },
    { id: 28, slug: 'ghee-jar-500ml-v3', name: 'Ghee Jar V3 500ml', category: 'ghee-butter', description: 'Traditional-style 500ml ghee jar.', volume: '500ml', price: '₹370', image: halfLitreGhee2, 
        thumbs: [halfLitreGhee, halfLitreGhee3, halfLitreGhee4], tags: ['ghee'] },
    { id: 29, slug: 'ghee-jar-500ml-v4', name: 'Ghee Jar V4 500ml', category: 'ghee-butter', description: 'Simple, clear 500ml ghee jar.', volume: '500ml', price: '₹355', image: halfLitreGhee3, 
        thumbs: [halfLitreGhee, halfLitreGhee1, halfLitreGhee4], tags: ['ghee'] },
    { id: 30, slug: 'ghee-mini-100ml-v2', name: 'Ghee Mini Pack 100ml V2', category: 'ghee-butter', description: 'Alternative packaging for the 100ml mini ghee.', volume: '100ml', price: '₹80', image: HundredMlGhee1, 
        thumbs: [HundredMlGhee], tags: ['ghee', 'mini'] },
    
    { id: 31, slug: 'drinks-display-main', name: 'Assorted Drinks Showcase', category: 'value', description: 'A collection of our drinks for main page banner.', volume: 'Mixed', price: 'N/A', image: mainPageDrinks1, thumbs: [], tags: ['display', 'banner'] },
    { id: 32, slug: 'dairy-display-main', name: 'Dairy Products Showcase', category: 'value', description: 'A collection of our core dairy items.', volume: 'Mixed', price: 'N/A', image: mainPageProducts1, thumbs: [], tags: ['display', 'banner'] },
    { id: 33, slug: 'milk-display-main', name: 'Milk Variety Showcase', category: 'value', description: 'Showcasing different milk types.', volume: 'Mixed', price: 'N/A', image: mainPageProducts2, thumbs: [], tags: ['display', 'banner'] },
    
    { id: 34, slug: 'ghee-jar-1l-v3', name: 'Ghee Jar V3 1L', category: 'ghee-butter', description: 'A third variant of the 1 Litre Ghee jar.', volume: '1L', price: '₹690', image: oneLitreGhee2, 
        thumbs: [oneLitreGhee, oneLitreGhee1, oneLitreGhee3], tags: ['ghee'] },
    { id: 35, slug: 'ghee-jar-1l-v4', name: 'Ghee Jar V4 1L', category: 'ghee-butter', description: 'A fourth variant of the 1 Litre Ghee jar.', volume: '1L', price: '₹695', image: oneLitreGhee3, 
        thumbs: [oneLitreGhee, oneLitreGhee1, oneLitreGhee2], tags: ['ghee'] },
    
    { id: 36, slug: 'paneer-bulk-1kg', name: 'Bulk Paneer Block 1kg', category: 'paneer', description: 'Large block of paneer for catering or parties.', volume: '1kg', price: '₹350', image: paneer4, 
        thumbs: [paneer, paneer1, paneer2], tags: ['paneer', 'bulk'] },
    
    { id: 37, slug: 'badam-milk-party-1l', name: 'Party Pack Badam Milk 1L', category: 'flavored', description: 'One litre of our best-selling Badam Milk.', volume: '1L', price: '₹120', image: badamMilk4, 
        thumbs: [badamMilk, badamMilk1, badamMilk2], tags: ['badam', 'party'] },
    { id: 38, slug: 'chocolate-milk-2', name: 'Low-Fat Chocolate Milk 250ml', category: 'flavored', description: 'A lighter chocolate milk option.', volume: '250ml', price: '₹25', image: chocolateMilk1, 
        thumbs: [chocolateMilk], tags: ['chocolate', 'low-fat'] },
    { id: 39, slug: 'strawberry-milk-2', name: 'Strawberry Milk Value Pack', category: 'flavored', description: 'Value-sized strawberry milk.', volume: '4x200ml', price: '₹90', image: strawberryMilk1, 
        thumbs: [strawberryMilk], tags: ['strawberry', 'combo'] },
    { id: 40, slug: 'pista-milk-2', name: 'Premium Pista Milk 200ml', category: 'flavored', description: 'A richer, premium version of Pista Milk.', volume: '200ml', price: '₹40', image: pistaMilk1, 
        thumbs: [pistaMilk], tags: ['pista'] },
    { id: 41, slug: 'vanilla-milk-2', name: 'Vanilla Milk 500ml', category: 'flavored', description: 'Larger bottle of our classic vanilla milk.', volume: '500ml', price: '₹50', image: vanillaMilk1, 
        thumbs: [vanillaMilk], tags: ['vanilla'] },
    
    { id: 42, slug: 'ghee-mini-500ml-v5', name: 'Ghee Jar V5 500ml', category: 'ghee-butter', description: 'Another packaging for 500ml ghee.', volume: '500ml', price: '₹365', image: halfLitreGhee4, 
        thumbs: [halfLitreGhee, halfLitreGhee1, halfLitreGhee3], tags: ['ghee'] },
    
    { id: 43, slug: 'badam-milk-v2', name: 'Special Badam Milk 200ml', category: 'flavored', description: 'Extra nutty badam milk for a treat.', volume: '200ml', price: '₹35', image: badamMilk2, 
        thumbs: [badamMilk, badamMilk1, badamMilk3], tags: ['badam'] },
    { id: 44, slug: 'badam-milk-v3', name: 'Family Badam Milk 500ml', category: 'flavored', description: 'Value pack badam milk for the family.', volume: '500ml', price: '₹65', image: badamMilk3, 
        thumbs: [badamMilk, badamMilk1, badamMilk4], tags: ['badam'] },
    
    { id: 45, slug: 'butter-v4', name: 'Herb Butter 200g', category: 'ghee-butter', description: 'Butter infused with fresh herbs.', volume: '200g', price: '₹95', image: butter4, 
        thumbs: [butter, butter1, butter3], tags: ['butter', 'gourmet'] },
    
    { id: 46, slug: 'ghee-v1', name: 'Clarified Butter 500ml', category: 'ghee-butter', description: 'A different look for our 500ml jar of ghee.', volume: '500ml', price: '₹360', image: ghee, 
        thumbs: [ghee1, ghee2, ghee3], tags: ['ghee'] },
    { id: 47, slug: 'ghee-v2', name: 'Pure Desi Ghee 500ml', category: 'ghee-butter', description: 'Pure Desi Ghee with a fresh label.', volume: '500ml', price: '₹370', image: ghee1, 
        thumbs: [ghee, ghee2, ghee3], tags: ['ghee'] },
    
    { id: 48, slug: 'combo-display', name: 'Product Display Combo', category: 'value', description: 'Variety of products for page display.', volume: 'Mixed', price: 'N/A', image: mainPageProducts, thumbs: [], tags: ['display', 'banner'] },
    { id: 49, slug: 'drinks-display', name: 'Drinks Display Combo', category: 'value', description: 'Variety of drinks for page display.', volume: 'Mixed', price: 'N/A', image: mainPageDrinks, thumbs: [], tags: ['display', 'banner'] },
    { id: 50, slug: 'product-combo-3', name: 'Daily Essential Combo Pack', category: 'value', description: 'Milk, butter, and paneer starter pack.', volume: 'Mixed', price: '₹450', image: mainPageProducts3, thumbs: [], tags: ['combo', 'dairy'] },

    // =========================================================================
    // --- NEWLY ADDED DAIRY PRODUCTS (IDs 51-80) ---
    // =========================================================================

    // --- MILK PRODUCTS (Using 'fresh' and 'organic' categories) ---
    { id: 51, slug: 'full-cream-milk-1l', name: 'Full Cream Milk 1 Litre', category: 'fresh', description: 'Fresh, pasteurized full cream milk for rich taste.', volume: '1L', price: '₹65', 
        image: mainPageProducts, thumbs: [mainPageProducts1], tags: ['milk', 'fresh'] },
    { id: 52, slug: 'toned-milk-500ml', name: 'Toned Milk Pouch 500ml', category: 'fresh', description: 'Low-fat toned milk, perfect for daily consumption.', volume: '500ml', price: '₹30', 
        image: mainPageProducts1, thumbs: [mainPageProducts2], tags: ['milk', 'low-fat'] },
    { id: 53, slug: 'double-toned-milk-1l', name: 'Double Toned Milk 1L', category: 'fresh', description: 'Very low-fat double toned milk, ideal for fitness.', volume: '1L', price: '₹55', 
        image: mainPageProducts2, thumbs: [mainPageProducts3], tags: ['milk', 'low-fat'] },
    { id: 54, slug: 'organic-milk-1l', name: 'Organic Cow Milk 1L', category: 'organic', description: 'Certified organic milk, pure and preservative-free.', volume: '1L', price: '₹85', 
        image: mainPageProducts3, thumbs: [mainPageProducts], tags: ['milk', 'organic'] },
    { id: 55, slug: 'premium-a2-milk-500ml', name: 'Premium A2 Cow Milk 500ml', category: 'organic', description: 'Sourced from native A2 cows, easily digestible.', volume: '500ml', price: '₹50', 
        image: mainPageProducts, thumbs: [mainPageDrinks], tags: ['milk', 'a2', 'premium'] },
    { id: 56, slug: 'skimmer-milk-500ml', name: 'Skimmed Milk 500ml', category: 'fresh', description: 'Fat-free skimmed milk.', volume: '500ml', price: '₹28', 
        image: mainPageProducts1, thumbs: [mainPageDrinks1], tags: ['milk', 'skimmed'] },
    
    // --- CURD / YOGURT / LASSI (Using 'curd' category slug) ---
    { id: 57, slug: 'fresh-curd-200g', name: 'Fresh Dahi Curd 200g', category: 'curd', description: 'Thick, creamy, naturally set curd.', volume: '200g', price: '₹35', 
        image: paneer, thumbs: [paneer1], tags: ['curd', 'dahi'] },
    { id: 58, slug: 'set-curd-400g', name: 'Homestyle Set Curd 400g', category: 'curd', description: 'Traditional homestyle curd in a convenient tub.', volume: '400g', price: '₹65', 
        image: paneer1, thumbs: [paneer2], tags: ['curd', 'dahi'] },
    { id: 59, slug: 'sweet-lassi-200ml', name: 'Sweet Lassi 200ml', category: 'curd', description: 'Refreshing sweet beverage made from curd.', volume: '200ml', price: '₹30', 
        image: chocolateMilk, thumbs: [strawberryMilk], tags: ['curd', 'lassi'] },
    { id: 60, slug: 'salted-buttermilk-500ml', name: 'Salted Buttermilk 500ml', category: 'curd', description: 'Light, digestive salted chass/buttermilk.', volume: '500ml', price: '₹25', 
        image: OrangeDrink, thumbs: [OrangeDrink1], tags: ['curd', 'buttermilk'] },
    { id: 61, slug: 'probiotic-yogurt-150g', name: 'Probiotic Yogurt 150g', category: 'curd', description: 'Healthy probiotic yogurt with live cultures.', volume: '150g', price: '₹45', 
        image: pistaMilk, thumbs: [vanillaMilk], tags: ['yogurt', 'probiotic'] },
    { id: 62, slug: 'fruit-yogurt-mango', name: 'Mango Fruit Yogurt 150g', category: 'curd', description: 'Creamy yogurt blended with Alphonso mango pulp.', volume: '150g', price: '₹50', 
        image: pistaMilk1, thumbs: [vanillaMilk1], tags: ['yogurt', 'flavored'] },

    // --- CREAM & OTHER FAT PRODUCTS (Using 'fresh' and 'specialty') ---
    { id: 63, slug: 'fresh-cream-200ml', name: 'Fresh Cooking Cream 200ml', category: 'fresh', description: 'Thick, fresh cream for cooking and dessert.', volume: '200ml', price: '₹75', 
        image: butter5, thumbs: [butter4], tags: ['cream', 'fresh'] },
    { id: 64, slug: 'whipping-cream-500ml', name: 'Dessert Whipping Cream 500ml', category: 'specialty', description: 'High-fat cream perfect for whipping desserts.', volume: '500ml', price: '₹180', 
        image: butter4, thumbs: [butter5], tags: ['cream', 'specialty'] },
    { id: 65, slug: 'malai-100g', name: 'Traditional Malai 100g', category: 'fresh', description: 'Thick layer of boiled milk cream (Malai).', volume: '100g', price: '₹40', 
        image: paneer3, thumbs: [paneer4], tags: ['malai', 'fresh'] },
    
    // --- VALUE & COMBO ADDITIONS (Using 'value' category) ---
    { id: 66, slug: 'daily-milk-combo', name: 'Daily Milk Combo (3x1L)', category: 'value', description: 'Three pouches of Toned Milk, ideal for subscription.', volume: '3 x 1L', price: '₹170', 
        image: mainPageProducts, thumbs: [mainPageProducts1], tags: ['milk', 'combo'] },
    { id: 67, slug: 'ghee-butter-mini-pack', name: 'Ghee & Butter Mini Pack', category: 'value', description: 'Sampler pack of mini ghee and butter.', volume: 'Mixed', price: '₹199', 
        image: HundredMlGhee, thumbs: [butter], tags: ['ghee', 'butter', 'combo'] },

    // --- ADDITIONAL FLAVORED MILKS (Reusing 'flavored' category) ---
    { id: 68, slug: 'kesar-milk-200ml', name: 'Kesar (Saffron) Milk 200ml', category: 'flavored', description: 'Exotic saffron-flavored milk, great for festivals.', volume: '200ml', price: '₹45', 
        image: badamMilk, thumbs: [badamMilk1], tags: ['kesar'] },
    { id: 69, slug: 'elaichi-milk-200ml', name: 'Elaichi (Cardamom) Milk 200ml', category: 'flavored', description: 'Aromatic cardamom milk, a traditional favorite.', volume: '200ml', price: '₹35', 
        image: badamMilk1, thumbs: [badamMilk2], tags: ['elaichi'] },
    { id: 70, slug: 'cold-coffee-milk-250ml', name: 'Cold Coffee Milk 250ml', category: 'flavored', description: 'Ready-to-drink coffee-flavored milk.', volume: '250ml', price: '₹40', 
        image: chocolateMilk, thumbs: [chocolateMilk1], tags: ['coffee'] },

    // --- ADDITIONAL GHEE & PANEER (Reusing 'ghee-butter' and 'paneer') ---
    { id: 71, slug: 'ghee-organic-250ml', name: 'Organic Cow Ghee 250ml', category: 'ghee-butter', description: 'Certified organic cow ghee, premium quality.', volume: '250ml', price: '₹220', 
        image: ghee, thumbs: [ghee1], tags: ['ghee', 'organic'] },
    { id: 72, slug: 'butter-salted-200g', name: 'Classic Salted Butter 200g', category: 'ghee-butter', description: 'Double block of our classic salted butter.', volume: '200g', price: '₹85', 
        image: butter, thumbs: [butter1], tags: ['butter'] },
    { id: 73, slug: 'paneer-lowfat-200g', name: 'Low-Fat Paneer 200g', category: 'paneer', description: 'Healthy low-fat cottage cheese option.', volume: '200g', price: '₹75', 
        image: paneer, thumbs: [paneer1], tags: ['paneer', 'low-fat'] },
    
    // --- SPECIALTY ITEMS (Reusing 'specialty' category) ---
    { id: 74, slug: 'cheese-slices-100g', name: 'Cheddar Cheese Slices 100g', category: 'specialty', description: 'Ready-to-use cheddar slices.', volume: '100g', price: '₹99', 
        image: butter3, thumbs: [butter4], tags: ['cheese', 'specialty'] },
    { id: 75, slug: 'mozzarella-200g', name: 'Pizza Mozzarella 200g', category: 'specialty', description: 'Shredded mozzarella for perfect pizzas.', volume: '200g', price: '₹140', 
        image: butter2, thumbs: [butter3], tags: ['cheese', 'specialty'] },

    // --- MORE CURD/MILK (Reusing images and categories) ---
    { id: 76, slug: 'sweet-lassi-500ml', name: 'Family Pack Sweet Lassi 500ml', category: 'curd', description: 'Large pack of our sweet and creamy lassi.', volume: '500ml', price: '₹55', 
        image: OrangeDrink1, thumbs: [OrangeDrink], tags: ['curd', 'lassi'] },
    { id: 77, slug: 'fresh-curd-1kg', name: 'Bulk Curd (Dahi) 1kg', category: 'curd', description: 'Value pack of fresh, plain curd.', volume: '1kg', price: '₹120', 
        image: paneer1, thumbs: [paneer], tags: ['curd', 'bulk'] },
    { id: 78, slug: 'camel-milk-500ml', name: 'Specialty Camel Milk 500ml', category: 'specialty', description: 'Unique, highly nutritious camel milk.', volume: '500ml', price: '₹150', 
        image: mainPageProducts1, thumbs: [mainPageProducts], tags: ['milk', 'camel'] },
    { id: 79, slug: 'low-sugar-yogurt-150g', name: 'Low Sugar Yogurt 150g', category: 'curd', description: 'Plain yogurt with reduced sugar.', volume: '150g', price: '₹40', 
        image: pistaMilk, thumbs: [pistaMilk1], tags: ['yogurt', 'healthy'] },
    { id: 80, slug: 'fresh-cream-500ml', name: 'Bulk Fresh Cream 500ml', category: 'fresh', description: 'Large pack of fresh cream for multiple uses.', volume: '500ml', price: '₹140', 
        image: butter5, thumbs: [butter4], tags: ['cream', 'fresh'] },
];

export default products;