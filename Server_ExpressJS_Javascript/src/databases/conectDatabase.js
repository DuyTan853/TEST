import mysql from "mysql2/promise";
import dotenv from "dotenv";

// 👇 Dòng này rất quan trọng
dotenv.config({ override: true });

const connectDatabase = async () => {
  try {
    console.log("🔍 DB_USER =", process.env.DB_USER);
    console.log("🔍 DB_HOST =", process.env.DB_HOST);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("✅ Connected to MySQL successfully!");
    return connection;
  } catch (error) {
    console.error("❌ Error connecting to MySQL:", error.message);
    throw error;
  }
};

export default connectDatabase;
