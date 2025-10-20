import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Reach Us</h1>
            <p className="mt-4 text-gray-700">We'd love to hear from you. For sales and distribution queries contact us or use the form.</p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p><strong>Address:</strong> Srirangam Milk Products (P) Ltd., No.5, 2nd Street, Sri Ayyappa Nagar, Kolathur, Chennai – 600099.</p>
              <p><strong>Email:</strong> srinivasamilk022018@gmail.com</p>
              <p><strong>Phone:</strong> +91 78258 12255</p>
            </div>
          </div>
          <div className="p-8 bg-gray-50">
            <form className="grid grid-cols-1 gap-4">
              <input name="name" placeholder="Name" className="border p-3 rounded" />
              <input name="email" placeholder="Email" className="border p-3 rounded" />
              <input name="phone" placeholder="Phone" className="border p-3 rounded" />
              <textarea name="message" placeholder="Message" className="border p-3 rounded" rows={5} />
              <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
