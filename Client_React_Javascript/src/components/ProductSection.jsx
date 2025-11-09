// src/components/ProductSection.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const CATEGORY_MAP = {
  phone: 'cate001',
  tablet: 'cate002',
  laptop: 'cate003',
};

export default function ProductSection({
  title,
  category, // 'phone' | 'tablet' | 'laptop'
  bg = 'bg-white',
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // GỌI CHUNG /all
        const res = await axios.get('http://localhost:3004/all');
        const all = res.data || [];

        const catId = CATEGORY_MAP[category];

        // Nếu có category thì lọc theo categoryId, không thì lấy nguyên
        const filtered = catId
          ? all.filter((p) => p.categoryId === catId)
          : all;

        // Lấy khoảng 4–8 sản phẩm cho đẹp
        setProducts(filtered.slice(0, 8));
      } catch (err) {
        console.error('ProductSection error:', err);
        setError('Không thể tải sản phẩm. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <section className={`${bg} rounded-xl shadow-md p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h2>
      </div>

      {loading && (
        <div className="py-10 text-center text-gray-500">
          Đang tải sản phẩm...
        </div>
      )}

      {error && !loading && (
        <div className="py-10 text-center text-red-500 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="py-10 text-center text-gray-500 text-sm">
          Không có sản phẩm nào.
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-stretch">
          {products.map((p) => (
            <ProductCard key={p.idProduct || p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
