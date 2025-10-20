import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaShoppingBag, FaMapMarkerAlt, FaBriefcase, FaPhone, FaUser, FaShoppingCart, FaSignInAlt, FaTimes, FaAngleDown, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import MilkFlowDivider from '../UI/MilkFlowDivider'; 
import { useCartContext } from '../../context/CartContext';

// --- FRAMER MOTION VARIANTS (Only for mobile menu visibility) ---
const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.8, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2 } },
};

// --- Helper Component: Mobile NavLink ---
const MobileNavLink = ({ to, children, icon: Icon, onClick, active }) => (
    <li
        className={`w-full milk-menu-item transition-colors duration-150 ${active ? 'bg-[#E7B800]/30 rounded-lg' : ''}`}
    >
        <Link
            to={to}
            className={`block py-3 px-4 text-xl font-extrabold text-[#3A5A40] flex items-center space-x-4 transition-colors`}
            onClick={onClick}
        >
            <Icon className="w-6 h-6 fill-current" />
            <span>{children}</span>
        </Link>
    </li>
);

// --- Main Header Component ---
const Header = () => {
    const accountRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // SIMULATED AUTH STATE
    const location = useLocation();

    const { cart } = useCartContext();
    const cartCount = cart ? cart.length : 0;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [accountRef]);


    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const handleLogout = () => {
        // TODO: Add actual logout logic here
        setIsLoggedIn(false); // Simulate logout
        setIsDropdownOpen(false);
        window.location.href = '/login'; // Redirect to login after logout
    };

    // Removed motion/ripple from NavLink
    const NavLink = ({ to, children }) => {
        const active = location.pathname === to;
        return (
            <div
                className= {`relative transition-colors duration-300 ${active ? 'text-[#E7B800]' : 'text-[#3A5A40] hover:text-[#E7B800]'}`}
            >
                <Link 
                    to={to} 
                    className="relative text-sm tracking-widest font-bold transition-all duration-300
                        after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] 
                        after:bg-[#E7B800] after:w-0 hover:after:w-full after:transition-all after:rounded-full"
                >
                    {children}
                    {active && <span className="absolute bottom-[-5px] left-0 h-[3px] bg-[#E7B800] w-full rounded-full"></span>}
                </Link>
            </div>
        );
    };

    return (
        <div className="relative z-30"> {/* Added z-index to main container */}
            
            {/* --- Desktop Header --- */}
            <header
                // Removed pt-5 pb-8 from the container below and simplified the header styling
                className=" w-full bg-[#FFF8E7] shadow-md relative z-30" 
            >
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative z-40"> 
                    
                    {/* Logo */}
                    {/* Link now correctly points to the root path "/" */}
                    <Link to="/" className="flex items-center">
                        <img 
                            src={require('../../assets/images/logo.png')} 
                            alt="Srinivasa Milk Logo" 
                            className="h-10 sm:h-12 md:h-14 transition-transform duration-300 hover:scale-[1.01] object-contain" 
                        />
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex space-x-12 text-[#3A5A40]">
                        <NavLink to="/">Home</NavLink> {/* Corrected to "/" */}
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/network">Network</NavLink>
                        <NavLink to="/careers">Careers</NavLink>
                        <NavLink to="/contact">Reach Us</NavLink>
                    </nav>

                    {/* Desktop Actions: Cart/Account/Login */}
                    <div className="hidden lg:flex items-center space-x-6 text-[#3A5A40]">
                        {/* Cart Button */}
                        <Link to="/cart">
                            <button 
                                className="relative p-3 rounded-full border-2 border-transparent hover:border-[#E7B800] transition-all duration-200"
                            >
                                <FaShoppingCart className="w-6 h-6 fill-current" />
                                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-[#E7B800] text-white text-xs flex items-center justify-center font-extrabold shadow-md">
                                    {cartCount} 
                                </span>
                            </button>
                        </Link>
                        
                        {/* Account or Login Button */}
                        {isLoggedIn ? (
                            <div ref={accountRef} className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="px-4 py-2 text-sm bg-transparent rounded-full font-extrabold transition-all duration-300 flex items-center space-x-1 hover:text-[#E7B800]"
                                >
                                    <FaUser className="w-5 h-5 fill-current" />
                                    <span>My Account</span>
                                    <FaAngleDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                                
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <div // Changed from motion.div
                                            // Using motion properties for AnimatePresence transition
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            className="absolute right-0 mt-2 w-48 bg-[#FFF8E7] rounded-lg shadow-xl z-50 origin-top-right border border-[#E7B800]/50"
                                        >
                                            <Link 
                                                to="/dashboard" 
                                                onClick={() => setIsDropdownOpen(false)} 
                                                className="flex items-center space-x-3 px-4 py-3 text-sm font-semibold text-[#3A5A40] hover:bg-[#E7B800]/20 transition-colors duration-150 rounded-t-lg"
                                            >
                                                <FaTachometerAlt className="w-4 h-4" />
                                                <span>Dashboard</span>
                                            </Link>
                                            <button 
                                                onClick={handleLogout} 
                                                className="w-full text-left flex items-center space-x-3 px-4 py-3 text-sm font-semibold text-[#3A5A40] hover:bg-[#E7B800]/20 transition-colors duration-150 rounded-b-lg border-t border-[#E7B800]/20"
                                            >
                                                <FaSignOutAlt className="w-4 h-4" />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button 
                                    className="px-6 py-2.5 text-sm bg-[#E7B800] text-[#3A5A40] rounded-full font-extrabold transition-all duration-300 shadow-md hover:bg-[#E7B800]/80"
                                >
                                    Login / Register
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button - Cart/Menu Button Group */}
                    <div className='flex items-center lg:hidden space-x-4'>
                        {/* Mobile Cart Button */}
                         <Link to="/cart">
                            <button 
                                className="relative p-3 rounded-full border-2 border-transparent hover:border-[#E7B800] transition-all duration-200 text-[#3A5A40]"
                            >
                                <FaShoppingCart className="w-6 h-6 fill-current" />
                                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-[#E7B800] text-white text-xs flex items-center justify-center font-extrabold shadow-md">
                                    {cartCount} 
                                </span>
                            </button>
                        </Link>
                        
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            title={isMenuOpen ? "Close Menu" : "Open Menu"}
                            className="text-[#3A5A40] p-3 rounded-md hover:text-[#E7B800] transition-colors duration-200"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                className="w-8 h-8 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    x1="4" y1="6" x2="20" y2="6" strokeWidth="2.5" strokeLinecap="round"
                                    className={`transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                                />
                                <line
                                    x1="4" y1="12" x2="20" y2="12" strokeWidth="2.5" strokeLinecap="round"
                                    className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <line
                                    x1="4" y1="18" x2="20" y2="18" strokeWidth="2.5" strokeLinecap="round"
                                    className={`transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* --- MilkFlowDivider (Placed outside the content div, aligned bottom) --- */}
                {/* The MilkFlowDivider creates the curved, flowing background effect */}
                <MilkFlowDivider className="absolute bottom-[-80px] left-0 z-20" /> 
            </header>

            {/* --- Mobile Menu --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-60 z-40 transition-opacity duration-300"
                            onClick={toggleMenu}
                        />
                        <nav // Changed from motion.nav
                            id="mobile-menu"
                            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#FFF8E7] z-50 overflow-y-auto p-6 flex flex-col transition-transform duration-350 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        >
                            {/* Close Button */}
                            <button
                                onClick={toggleMenu}
                                className="absolute top-6 right-6 text-[#3A5A40] p-2 hover:text-[#E7B800]"
                            >
                                <FaTimes className="w-6 h-6" />
                            </button>

                            {/* Top: Account + Cart */}
                            <div className="flex items-center justify-between mb-8 mt-14">
                                {/* Conditional Mobile Account/Login */}
                                {isLoggedIn ? (
                                    <div className="flex flex-col space-y-2">
                                        <Link to="/dashboard" onClick={handleMobileLinkClick} className="flex items-center space-x-2 transition-colors duration-150 hover:text-[#E7B800]">
                                            <FaTachometerAlt className="w-6 h-6 text-[#3A5A40]" />
                                            <span className="font-extrabold text-[#3A5A40]">Dashboard</span>
                                        </Link>
                                        <button onClick={handleLogout} className="text-left flex items-center space-x-2 transition-colors duration-150 hover:text-[#E7B800]">
                                            <FaSignOutAlt className="w-6 h-6 text-[#3A5A40]" />
                                            <span className="font-extrabold text-[#3A5A40]">Logout</span>
                                        </button>
                                    </div>
                                ) : (
                                    // Login link when logged out
                                    <MobileNavLink to="/login" icon={FaSignInAlt} onClick={handleMobileLinkClick} active={location.pathname === '/login'}>
                                        Login / Register
                                    </MobileNavLink>
                                )}
                            </div>

                            {/* Page Links */}
                            <ul
                                className="flex flex-col space-y-4"
                            >
                                <MobileNavLink to="/" icon={FaHome} onClick={handleMobileLinkClick} active={location.pathname === '/'}>Home</MobileNavLink> {/* Corrected to "/" */}
                                <MobileNavLink to="/about" icon={FaInfoCircle} onClick={handleMobileLinkClick} active={location.pathname === '/about'}>About Us</MobileNavLink>
                                <MobileNavLink to="/products" icon={FaShoppingBag} onClick={handleMobileLinkClick} active={location.pathname === '/products'}>Products</MobileNavLink>
                                <MobileNavLink to="/network" icon={FaMapMarkerAlt} onClick={handleMobileLinkClick} active={location.pathname === '/network'}>Network</MobileNavLink>
                                <MobileNavLink to="/careers" icon={FaBriefcase} onClick={handleMobileLinkClick} active={location.pathname === '/careers'}>Careers</MobileNavLink>
                                <MobileNavLink to="/contact" icon={FaPhone} onClick={handleMobileLinkClick} active={location.pathname === '/contact'}>Reach Us</MobileNavLink>
                            </ul>

                            {/* Milk Flow at Bottom of Mobile Menu */}
                            <div className="absolute bottom-0 left-0 w-full h-20 opacity-40 overflow-hidden">
                                <MilkFlowDivider className="w-full h-full" />
                            </div>
                        </nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;

// // src/components/Header.js

// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { gsap } from 'gsap';
// import { 
//     FaHome, FaInfoCircle, FaShoppingBag, FaMapMarkerAlt, FaBriefcase, FaPhone, 
//     FaUser, FaShoppingCart, FaSignInAlt, FaTimes 
// } from 'react-icons/fa';
// import MilkFlowDivider from '../UI/MilkFlowDivider';

// // --- FRAMER MOTION VARIANTS ---
// const mobileLinkVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 },
// };

// // --- Milk Ripple ---
// const triggerRipple = (e) => {
//     const ripple = document.createElement('span');
//     ripple.className = 'milk-ripple';
//     const rect = e.currentTarget.getBoundingClientRect();
//     ripple.style.left = `${e.clientX - rect.left}px`;
//     ripple.style.top = `${e.clientY - rect.top}px`;
//     e.currentTarget.appendChild(ripple);
//     setTimeout(() => ripple.remove(), 700);
// };

// // --- Mobile NavLink ---
// const MobileNavLink = ({ to, children, icon: Icon, onClick, active }) => (
//     <motion.li
//         variants={mobileLinkVariants}
//         className={`w-full milk-menu-item ${active ? 'bg-[#E7B800]/20 rounded-md' : ''}`}
//         whileTap={{ scale: 0.98 }}
//         onMouseEnter={triggerRipple}
//         onTouchStart={triggerRipple}
//     >
//         <Link
//             to={to}
//             className="block py-2 px-3 text-base font-semibold text-[#3A5A40] flex items-center space-x-3 transition-colors"
//             onClick={onClick}
//         >
//             <Icon className="w-5 h-5 stroke-current" />
//             <span>{children}</span>
//         </Link>
//     </motion.li>
// );

// // --- Main Header ---
// const Header = () => {
//     const navRef = useRef(null);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const location = useLocation();

//     const cartCount = 3;

//     useEffect(() => {
//         if (navRef.current && !isMenuOpen) {
//             gsap.from(navRef.current.children, {
//                 y: -20,
//                 opacity: 0,
//                 stagger: 0.1,
//                 delay: 0.5,
//                 ease: 'power2.out'
//             });
//         }
//     }, [isMenuOpen]);

//     const handleMobileLinkClick = () => {
//         setIsMenuOpen(false);
//         window.scrollTo(0, 0);
//     };

//     const toggleMenu = () => setIsMenuOpen(prev => !prev);

//     const NavLink = ({ to, children }) => {
//         const active = location.pathname === to;
//         return (
//             <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`relative milk-menu-item ${active ? 'text-[#E7B800]' : ''}`}
//                 onMouseEnter={triggerRipple}
//                 onTouchStart={triggerRipple}
//             >
//                 <Link 
//                     to={to} 
//                     className="relative text-sm tracking-widest font-bold transition-all duration-300
//                           after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] 
//                           after:bg-[#E7B800] after:w-0 hover:after:w-full after:transition-all after:rounded-full"
//                 >
//                     {children}
//                 </Link>
//             </motion.div>
//         );
//     };

//     return (
//         <div className="relative">
//             {/* --- Desktop Header --- */}
//             <motion.header
//                 initial={{ y: -120 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
//                 className="w-full shadow-lg bg-[#FFF8E7] relative z-30" 
//             >
//                 <div className="container mx-auto px-6 pt-5 pb-8 flex justify-between items-center relative z-40"> 
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center group">
//                         <motion.img 
//                             src="https://placehold.co/150x56/FFF8E7/3A5A40?text=Srinivasa+Milk+Logo" 
//                             alt="Srinivasa Milk Logo" 
//                             className="h-14" 
//                             whileHover={{ rotate: 2 }}
//                         />
//                     </Link>

//                     {/* Desktop Links */}
//                     <nav ref={navRef} className="hidden lg:flex space-x-12">
//                         <NavLink to="/">Home</NavLink>
//                         <NavLink to="/about">About Us</NavLink>
//                         <NavLink to="/products">Products</NavLink>
//                         <NavLink to="/network">Network</NavLink>
//                         <NavLink to="/careers">Careers</NavLink>
//                         <NavLink to="/contact">Reach Us</NavLink>
//                         <NavLink to="/account">My Account</NavLink>
//                     </nav>

//                     {/* Desktop Cart/Register */}
//                     <div className="hidden lg:flex items-center space-x-4">
//                         <motion.button 
//                             whileHover={{ scale: 1.1 }} 
//                             whileTap={{ scale: 0.95 }}
//                             className="relative p-3 rounded-full border-2 border-[#3A5A40] hover:border-[#E7B800] transition-all duration-200 milk-menu-item"
//                             onMouseEnter={triggerRipple} onTouchStart={triggerRipple}
//                         >
//                             <FaShoppingCart className="w-6 h-6 text-[#3A5A40]" />
//                             <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-[#E7B800] text-white text-xs flex items-center justify-center font-extrabold shadow-md">
//                                 {cartCount} 
//                             </span>
//                         </motion.button>
//                         <Link to="/login">
//                             <motion.button 
//                                 whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(231, 184, 0, 0.5)' }} 
//                                 whileTap={{ scale: 0.98 }}
//                                 className="px-5 py-2 text-sm bg-[#E7B800] text-[#3A5A40] rounded-full font-extrabold transition-all duration-300 milk-menu-item"
//                                 onMouseEnter={triggerRipple} onTouchStart={triggerRipple}
//                             >
//                                 Register
//                             </motion.button>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={toggleMenu}
//                         title={isMenuOpen ? "Close Menu" : "Open Menu"}
//                         className="lg:hidden text-[#3A5A40] p-2 hover:text-[#E7B800] transition-colors duration-200"
//                         aria-expanded={isMenuOpen}
//                         aria-controls="mobile-menu"
//                     >
//                         <motion.svg
//                             animate={isMenuOpen ? "open" : "closed"}
//                             className="w-8 h-8"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             // stroke="#3A5A40"
//                         >
//                             <motion.line
//                                 x1="4" y1="6" x2="20" y2="6" strokeWidth="2.5" strokeLinecap="round"
//                                 variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
//                             />
//                             <motion.line
//                                 x1="4" y1="12" x2="20" y2="12" strokeWidth="2.5" strokeLinecap="round"
//                                 variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
//                             />
//                             <motion.line
//                                 x1="4" y1="18" x2="20" y2="18" strokeWidth="2.5" strokeLinecap="round"
//                                 variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
//                             />
//                         </motion.svg>
//                     </button>
//                 </div>
                
//                 <MilkFlowDivider className="absolute bottom-0 left-0 z-20" /> 
//             </motion.header>

//             {/* --- Mobile Menu --- */}
//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <>
//                         {/* Overlay */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 0.6 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-black z-40"
//                             onClick={toggleMenu}
//                         />

//                         <motion.nav
//                             id="mobile-menu"
//                             initial={{ x: "100%" }}
//                             animate={{ x: 0 }}
//                             exit={{ x: "100%" }}
//                             transition={{ type: "tween", duration: 0.35 }}
//                             className="fixed top-0 right-0 h-full w-full bg-[#FFF8E7] z-50 overflow-y-auto p-6 flex flex-col"
//                         >
//                             {/* Top Bar: Logo + Close */}
//                             <div className="flex justify-between items-center mb-6">
//                                 <Link to="/" className="flex items-center">
//                                     <img 
//                                         src="https://placehold.co/120x40/FFF8E7/3A5A40?text=Logo" 
//                                         alt="Logo" 
//                                         className="h-10"
//                                     />
//                                 </Link>
//                                 <button
//                                     onClick={toggleMenu}
//                                     className="text-[#3A5A40] p-2 hover:text-[#E7B800]"
//                                 >
//                                     <FaTimes className="w-6 h-6" />
//                                 </button>
//                             </div>

//                             {/* Account + Cart */}
//                             <div className="flex items-center justify-between mb-6">
//                                 <Link to="/account" className="flex items-center space-x-2 milk-menu-item" onMouseEnter={triggerRipple} onTouchStart={triggerRipple}>
//                                     <FaUser className="w-5 h-5 stroke-current" />
//                                     <span className="font-semibold text-[#3A5A40] text-sm">Account</span>
//                                 </Link>
//                                 <Link to="/cart" className="relative milk-menu-item" onMouseEnter={triggerRipple} onTouchStart={triggerRipple}>
//                                     <FaShoppingCart className="w-5 h-5 stroke-current" />
//                                     <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#E7B800] text-white text-xs flex items-center justify-center font-bold shadow-md">
//                                         {cartCount}
//                                     </span>
//                                 </Link>
//                             </div>

//                             {/* Page Links */}
//                             <motion.ul
//                                 className="flex flex-col space-y-2"
//                                 initial="hidden"
//                                 animate="visible"
//                                 variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
//                             >
//                                 <MobileNavLink to="/" icon={FaHome} onClick={handleMobileLinkClick} active={location.pathname === '/'}>Home</MobileNavLink>
//                                 <MobileNavLink to="/about" icon={FaInfoCircle} onClick={handleMobileLinkClick} active={location.pathname === '/about'}>About Us</MobileNavLink>
//                                 <MobileNavLink to="/products" icon={FaShoppingBag} onClick={handleMobileLinkClick} active={location.pathname === '/products'}>Products</MobileNavLink>
//                                 <MobileNavLink to="/network" icon={FaMapMarkerAlt} onClick={handleMobileLinkClick} active={location.pathname === '/network'}>Network</MobileNavLink>
//                                 <MobileNavLink to="/careers" icon={FaBriefcase} onClick={handleMobileLinkClick} active={location.pathname === '/careers'}>Careers</MobileNavLink>
//                                 <MobileNavLink to="/contact" icon={FaPhone} onClick={handleMobileLinkClick} active={location.pathname === '/contact'}>Reach Us</MobileNavLink>
//                                 <MobileNavLink to="/login" icon={FaSignInAlt} onClick={handleMobileLinkClick} active={location.pathname === '/login'}>Register</MobileNavLink>
//                             </motion.ul>

//                             {/* Milk Flow at Bottom */}
//                             <div className="absolute bottom-0 left-0 w-full h-20 opacity-40 overflow-hidden">
//                                 <MilkFlowDivider className="w-full h-full" />
//                             </div>
//                         </motion.nav>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Header;
