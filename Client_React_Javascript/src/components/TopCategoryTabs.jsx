// src/components/TopCategoryTabs.jsx
import { useState } from 'react';

const TABS = [
  { id: 'cate001', label: 'ĐIỆN THOẠI' },
  { id: 'cate002', label: 'MÁY TÍNH BẢNG' },
  { id: 'cate003', label: 'LAPTOP' },
  { id: 'accessory', label: 'PHỤ KIỆN' }, // tạm, sau có data thì map
];

export default function TopCategoryTabs() {
  const [active, setActive] = useState('cate001');

  return (
    <div className="bg-white rounded-2xl shadow mb-6">
      <div className="flex border-b">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              flex-1 py-3 text-center text-sm font-semibold
              transition-all duration-200
              ${active === tab.id
                ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                : 'text-gray-700 hover:text-red-500'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gợi ý filter / brand chips ở dưới nếu muốn sau này */}
      <div className="px-4 py-3 flex flex-wrap gap-2 text-xs text-gray-600">
        <span className="px-3 py-1 rounded-full bg-gray-100">Apple</span>
        <span className="px-3 py-1 rounded-full bg-gray-100">Samsung</span>
        <span className="px-3 py-1 rounded-full bg-gray-100">Xiaomi</span>
        <span className="px-3 py-1 rounded-full bg-gray-100">OPPO</span>
        <span className="px-3 py-1 rounded-full bg-gray-100">v.v...</span>
      </div>
    </div>
  );
}
