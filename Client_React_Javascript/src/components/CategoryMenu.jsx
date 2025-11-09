// src/components/CategoryMenu.jsx
import {
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  PlugZap,
} from 'lucide-react';

const categories = [
  { icon: Smartphone, label: 'Điện thoại' },
  { icon: Laptop, label: 'Laptop' },
  { icon: Tablet, label: 'Tablet' },
  { icon: Watch, label: 'Đồng hồ' },
  { icon: Headphones, label: 'Âm thanh' },
  { icon: PlugZap, label: 'Phụ kiện' },
];

export default function CategoryMenu() {
  return (
    <aside className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
      <ul className="divide-y divide-gray-100">
        {categories.map((c, i) => (
          <li
            key={i}
            className="flex items-center justify-between px-4 py-3 text-sm hover:bg-red-50 hover:text-red-600 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <c.icon size={18} />
              <span>{c.label}</span>
            </div>
            <span className="text-gray-300">{'>'}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
