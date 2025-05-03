const API_BASE = 'http://localhost:8000/api';

export const fetchAllProducts = async (category = 'all') => {
  const url = `${API_BASE}/products${category && category !== 'all' ? `?category=${category}` : ''}`;
  const res = await fetch(url);
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${API_BASE}/products/${id}`);
  return await res.json();
};
