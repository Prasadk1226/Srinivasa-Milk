import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import About from '../pages/About/About';
import Network from '../pages/Network/Network';
import Careers from '../pages/Careers/Careers';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';
import ProductDetail from '../pages/Product/ProductDetail';
import Cart from '../pages/Cart/Cart';

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="font-body relative min-h-screen bg-transparent">
            <Routes>
              {/* Default route → Home page */}
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                }
              />

              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Shop Route */}
              <Route
                path="/shop"
                element={
                  <>
                    <Header />
                    <Shop />
                    <Footer />
                  </>
                }
              />

              {/* Additional site pages */}
              <Route path="/about" element={<><Header /><About /><Footer /></>} />
              <Route path="/products" element={<><Header /><Shop /><Footer /></>} />
              <Route path="/network" element={<><Header /><Network /><Footer /></>} />
              <Route path="/careers" element={<><Header /><Careers /><Footer /></>} />
              <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />

              {/* Product Detail Route: supports slugs or fallback id-* format */}
              <Route
                path="/product/:productSlug"
                element={
                  <>
                    <Header />
                    <ProductDetail />
                    <Footer />
                  </>
                }
              />

              {/* Cart Route */}
              <Route
                path="/cart"
                element={
                  <>
                    <Header />
                    <Cart />
                    <Footer />
                  </>
                }
              />

              {/* Checkout Route */}
              <Route
                path="/checkout"
                element={
                  <>
                    <Header />
                    <div className="min-h-screen bg-transparent">
                      <main className="container mx-auto px-4 py-8">
                        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
                          Checkout
                        </h1>
                        <p className="text-center text-text font-body">
                          Placeholder for minimal one-page checkout flow.
                        </p>
                      </main>
                      <Footer />
                    </div>
                  </>
                }
              />

              {/* Fallback 404 Route */}
              <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from '../context/AuthContext';
// import { CartProvider } from '../context/CartContext';
// import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
// import Login from '../pages/Auth/Login';
// import Signup from '../pages/Auth/Signup';
// import Home from '../pages/Home/Home';
// import Shop from '../pages/Shop/Shop';
// import ProductDetail from '../pages/Product/ProductDetail';
// import Cart from '../pages/Cart/Cart';

// const AppRouter = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <div className="font-body relative min-h-screen bg-transparent">
//             <Routes>
//               {/* Default route → Home page */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Header />
//                     <Home />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />

//               <Route
//                 path="/home"
//                 element={
//                   <>
//                     <Header />
//                     <Home />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/shop"
//                 element={
//                   <>
//                     <Header />
//                     <Shop />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/product/:id"
//                 element={
//                   <>
//                     <Header />
//                     <ProductDetail />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/cart"
//                 element={
//                   <>
//                     <Header />
//                     <Cart />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/checkout"
//                 element={
//                   <>
//                     <Header />
//                     <div className="min-h-screen bg-transparent">
//                       <main className="container mx-auto px-4 py-8">
//                         <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
//                           Checkout
//                         </h1>
//                         <p className="text-center text-text font-body">
//                           Placeholder for minimal one-page checkout flow.
//                         </p>
//                       </main>
//                       <Footer />
//                     </div>
//                   </>
//                 }
//               />

//               <Route
//                 path="*"
//                 element={
//                   <>
//                     <Header />
//                     <div className="min-h-screen flex items-center justify-center bg-transparent">
//                       <h1 className="text-2xl text-text">Page Not Found</h1>
//                     </div>
//                     <Footer />
//                   </>
//                 }
//               />
//             </Routes>
//           </div>
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default AppRouter;
