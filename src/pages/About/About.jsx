import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-10">
            <h1 className="text-3xl font-extrabold text-gray-900">About Srinivasa Milk</h1>
            <p className="mt-4 text-gray-700">Srirangam Milk Products (P) Ltd., incorporated in 2018, has grown into a leading dairy player in Southern India. We operate chilling centers and processing plants to procure and process high-quality milk for consumers.</p>
            <p className="mt-4 text-gray-700">Our values: quality, hygiene, community empowerment, and sustainability.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/shop" className="px-4 py-2 bg-indigo-600 text-white rounded">Shop Products</Link>
              <Link to="/contact" className="px-4 py-2 border rounded">Contact</Link>
            </div>
          </div>
          <div className="p-10 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Why choose us</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>100% Organic:</strong> Products crafted with care, purity and sustainability.</li>
              <li><strong>Best Quality:</strong> Strict hygiene practices and modern processing.</li>
              <li><strong>Healthy & Nutritious:</strong> Rich in essential nutrients.</li>
              <li><strong>Hygienic Environment:</strong> End-to-end cleanliness and safety.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
