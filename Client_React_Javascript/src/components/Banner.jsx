// src/components/Banner.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Banner Siêu Sale 1',
    subtitle: 'Ưu đãi khủng cho điện thoại, laptop, tablet',
    bg: 'bg-gradient-to-r from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Banner Siêu Sale 2',
    subtitle: 'Giảm sâu sản phẩm công nghệ hot nhất',
    bg: 'bg-gradient-to-r from-red-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Banner Siêu Sale 3',
    subtitle: 'Trả góp 0% - Giao nhanh 2h',
    bg: 'bg-gradient-to-r from-purple-500 to-indigo-500',
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative h-52 md:h-64 lg:h-72 rounded-xl overflow-hidden shadow-md">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0 flex flex-col items-center justify-center
            text-white text-center px-6 transition-opacity duration-500
            ${slide.bg}
            ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            {slide.title}
          </h2>
          <p className="text-sm md:text-lg opacity-90">
            {slide.subtitle}
          </p>
        </div>
      ))}

      {/* Nút trái/phải */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/35 text-white rounded-full p-2 transition"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/35 text-white rounded-full p-2 transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
