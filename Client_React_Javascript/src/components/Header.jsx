// src/components/Header.jsx
import { Search, ShoppingCart, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex items-center gap-3 py-2 md:py-3">
          {/* Logo */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="text-2xl font-extrabold leading-none">cellphoneS</span>
          </div>

          {/* Search desktop */}
          <div className="hidden md:block flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Bạn muốn mua gì hôm nay?"
                className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* Hotline + Cart */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden md:flex items-center gap-2">
              <Phone size={18} />
              <div className="leading-tight text-xs">
                <div className="font-semibold text-sm">1800.2097</div>
                <div className="text-red-100">Gọi mua hàng</div>
              </div>
            </div>

            <button className="relative p-2 rounded-lg hover:bg-red-700 transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-yellow-400 text-[10px] text-red-700 font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Search mobile */}
        <div className="md:hidden pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Bạn muốn mua gì hôm nay?"
              className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
