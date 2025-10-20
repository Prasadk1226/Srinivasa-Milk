import React from 'react';
import { placeholderFor } from '../../utils/placeholder';
import { useCartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart, totalItems, totalPrice } = useCartContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Placeholder: navigate to checkout or show toast
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow p-8">
            <p className="text-gray-700 mb-4">Your cart is empty.</p>
            <Link to="/shop" className="px-6 py-3 bg-accent text-white rounded">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
              <ul className="space-y-4">
                {cart.map(item => (
                  <li key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img src={item.image || placeholderFor(item.name, 120, 100)} alt={item.name} className="w-24 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, (item.qty || 1) - 1)} className="px-2 py-1 border rounded">−</button>
                        <div className="px-3">{item.qty}</div>
                        <button onClick={() => updateQty(item.id, (item.qty || 1) + 1)} className="px-2 py-1 border rounded">+</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.price}</div>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-600 mt-2">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center">
                <button onClick={() => clearCart()} className="px-4 py-2 border rounded">Clear Cart</button>
                <div className="text-sm text-gray-600">{totalItems} items</div>
              </div>
            </div>

            <aside className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2"><span>Items ({totalItems})</span><span>₹{totalPrice}</span></div>
              <div className="flex justify-between mb-4"><span>Delivery</span><span>Free</span></div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg mb-4"> <span>Total</span> <span>₹{totalPrice}</span></div>
                <button onClick={handleCheckout} className="w-full px-4 py-3 bg-primary text-white rounded">Proceed to Checkout</button>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
