// src/components/ProductCard.jsx

function formatPrice(value) {
  const num = Number(value) || 0;
  return num.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  });
}

export default function ProductCard({ product }) {
  if (!product) return null;

  const name =
    product.nameProduct || product.name || "Sản phẩm";
  const price = product.price;
  const originalPrice = product.originalPrice;
  const discount =
    product.discountPercent || product.discount || 0;
  const thumbnail = product.thumbnail;

  return (
    <div
      className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl 
                 transition-all duration-200 overflow-hidden h-full relative border border-gray-100"
    >
      {/* Badge giảm giá */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
          Giảm {discount}%
        </div>
      )}

      {/* ảnh */}
      <div className="h-40 flex items-center justify-center bg-gray-50">
        <img
          src={thumbnail}
          alt={name}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </div>

      {/* nội dung */}
      <div className="flex-1 flex flex-col px-3 pt-2 pb-3">
        {/* (optional) dòng cấu hình ngắn */}
        {product.shortDescription && (
          <p className="text-[10px] font-semibold text-red-600 line-clamp-1">
            {product.shortDescription}
          </p>
        )}

        {/* Tên sản phẩm */}
        <h3 className="text-[11px] md:text-sm font-semibold text-slate-900 leading-snug line-clamp-2 min-h-[34px]">
          {name}
        </h3>

        {/* Giá */}
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-red-600 font-bold text-sm md:text-base">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-[9px] md:text-[10px]">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Dòng ưu đãi thêm */}
        <div className="mt-1 bg-violet-50 text-violet-700 text-[9px] px-2 py-1 rounded-md line-clamp-1">
          S-Special: giảm thêm 500.000đ, hỗ trợ trả góp 0%.
        </div>

        {/* Mô tả ngắn */}
        <p className="mt-1 text-[9px] text-slate-600 line-clamp-2">
          {product.description ||
            "Ưu đãi trả góp 0% lãi suất, bảo hành chính hãng, số lượng có hạn."}
        </p>

        {/* Footer: sao + yêu thích */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-0.5 text-yellow-400 text-[11px]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-gray-300">★</span>
            <span className="text-[9px] text-slate-500 ml-1">(5)</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 text-[9px] text-sky-500 hover:text-sky-600"
          >
            <span>♡</span>
            <span>Yêu thích</span>
          </button>
        </div>
      </div>
    </div>
  );
}
