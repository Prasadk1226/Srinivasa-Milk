import products from '../data/products';

const simulateDelay = (ms = 200) => new Promise((res) => setTimeout(res, ms));

export async function getAllProducts() {
  await simulateDelay(120);
  return products;
}

export async function getProductBySlug(slug) {
  await simulateDelay(120);
  if (!slug) return null;
  const found = products.find((p) => p.slug === slug || String(p.id) === String(slug) || `id-${p.id}` === slug);
  return found || null;
}

export async function getProductsByCategory(category) {
  await simulateDelay(120);
  if (!category) return products;
  return products.filter((p) => p.category === category || (p.tags || []).includes(category));
}

export async function searchProducts(query) {
  await simulateDelay(80);
  if (!query) return products;
  const q = query.toString().toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q) || (p.tags || []).some(t => t.includes(q)));
}
