import { useState, useEffect } from 'react';

// Cart hook with persistence and quantity management
const STORAGE_KEY = 'srinivasa_cart_v1';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, qty: (p.qty || 1) + (item.qty || 1) } : p);
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((s, p) => s + (p.qty || 0), 0);
  const totalPrice = cart.reduce((s, p) => {
    const num = Number(String(p.price).replace(/[₹, ]/g, '').trim()) || 0;
    return s + num * (p.qty || 0);
  }, 0);

  return { cart, addToCart, updateQty, removeFromCart, clearCart, totalItems, totalPrice };
};

export default useCart;
