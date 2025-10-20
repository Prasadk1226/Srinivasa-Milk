import React from 'react';


export default function Network() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Network</h1>
          <p className="mt-4 text-gray-700">We operate distribution centers, chilling units and retail partners across Andhra Pradesh, Tamil Nadu and Karnataka to ensure fresh deliveries and local availability.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Distribution Centers</h4>
              <p className="text-sm text-gray-600">Multiple chilled collection and processing hubs ensure the cold chain is maintained.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Retail & Partners</h4>
              <p className="text-sm text-gray-600">Well established partner network for last-mile deliveries and retail presence.</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-3">Find us on map</h4>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">Map placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
