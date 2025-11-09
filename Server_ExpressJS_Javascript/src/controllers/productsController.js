// src/controllers/productsController.js
import connectDatabase from "../databases/conectDatabase.js";

// Hàm helper để lấy connection
// Lưu ý: Trong dự án thực tế nên dùng connection pool
const getDbConnection = async () => {
  try {
    const connection = await connectDatabase();
    return connection;
  } catch (error) {
    console.error("Không thể lấy connection từ DB:", error);
    return null;
  }
};

// === Controller cho /all (dùng cho FlashSale) ===
const showAllProducts = async (req, res) => {
  let connection;
  try {
    connection = await getDbConnection();
    if (!connection) return res.status(500).json({ message: "Lỗi máy chủ DB" });

    // Sắp xếp theo ID giảm dần để lấy sản phẩm mới nhất
    const [rows] = await connection.execute("SELECT * FROM products ORDER BY id DESC");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm", error: error.message });
  } finally {
    if (connection) connection.end();
  }
};

// === Controller cho /:slug ===
const show = async (req, res) => {
  let connection;
  try {
    const { slug } = req.params;
    connection = await getDbConnection();
    if (!connection) return res.status(500).json({ message: "Lỗi máy chủ DB" });

    const [rows] = await connection.execute(
      "SELECT * FROM products WHERE slug = ?",
      [slug]
    );

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm", error: error.message });
  } finally {
    if (connection) connection.end();
  }
};

// === Controller cho POST / (chưa code) ===
const create = (req, res) => {
  res.status(201).json({ message: "Tạo sản phẩm thành công (chưa code)" });
};

// *** CONTROLLER QUAN TRỌNG BẠN ĐANG THIẾU ***
// Controller để lấy sản phẩm theo categoryId
const showByCategory = async (req, res) => {
  let connection;
  try {
    const { categoryId } = req.params; // Lấy 'categoryId' từ URL
    connection = await getDbConnection();
    if (!connection) return res.status(500).json({ message: "Lỗi máy chủ DB" });

    const [rows] = await connection.execute(
      "SELECT * FROM products WHERE categoryId = ?",
      [categoryId]
    );

    res.status(200).json(rows); // Trả về mảng (có thể rỗng)
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm theo category", error: error.message });
  } finally {
    if (connection) connection.end();
  }
};

// Xuất các hàm
const Products_Controller = {
  showAllProducts,
  show,
  create,
  showByCategory, // <-- Xuất hàm mới
};

export default Products_Controller;