// src/components/FlashSale.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Flame, Loader2 } from 'lucide-react'

export default function FlashSale() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await axios.get('http://localhost:3004/all')
        const all = Array.isArray(res.data) ? res.data : res.data.products || []
        // chọn 6 sản phẩm giảm giá cao nhất
        const flash = [...all]
          .filter(p => p.discountPercent > 0)
          .sort((a, b) => b.discountPercent - a.discountPercent)
          .slice(0, 6)

        setProducts(flash)
        setError(null)
      } catch (err) {
        console.error(err)
        setError('Không thể tải sản phẩm. Vui lòng thử lại sau.\nKiểm tra server tại localhost:3004')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between bg-red-600 text-white rounded-t-2xl px-4 py-3">
        <div className="flex items-center gap-2">
          <Flame className="text-yellow-300" />
          <h2 className="text-lg md:text-xl font-bold">FLASH SALE</h2>
        </div>
        <div className="text-xs md:text-sm">
          Kết thúc trong: <span className="font-semibold">23:59:59</span>
        </div>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm px-4 py-4">
        {loading && (
          <div className="flex items-center justify-center gap-2 text-red-600 py-8">
            <Loader2 className="animate-spin" />
            <span>Đang tải sản phẩm...</span>
          </div>
        )}

        {error && !loading && (
          <div className="text-center text-red-500 whitespace-pre-line py-8">
            {error}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Không có sản phẩm Flash Sale.
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map(p => (
              <ProductCard key={p.idProduct || p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
