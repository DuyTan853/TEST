// src/pages/Home.jsx

import Header from '../components/Header';
import CategoryMenu from '../components/CategoryMenu';
import Banner from '../components/Banner';
import FlashSale from '../components/FlashSale';
import ProductSection from '../components/ProductSection';
import TopCategoryTabs from '../components/TopCategoryTabs';
import Footer from '../components/Footer'; 
function Home() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto pt-24 px-3 lg:px-0 flex gap-4">
        {/* Menu trái giống CellphoneS */}
        <CategoryMenu />

        {/* Phần nội dung chính bên phải */}
        <div className="flex-1">
          <Banner />

          {/* Thanh tab danh mục ngang */}
          <TopCategoryTabs />

          {/* Flash Sale: lấy từ API /all, tự lọc top vài sp */}
          <FlashSale />

          {/* Các section nổi bật (dựa theo categoryId từ DB) */}
          <ProductSection
            title="Điện thoại nổi bật"
            categoryId="cate001"
          />
          <ProductSection
            title="Tablet nổi bật"
            categoryId="cate002"
          />
          <ProductSection
            title="Laptop nổi bật"
            categoryId="cate003"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
